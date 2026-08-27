FROM node:20-alpine AS base

# ------------------ deps ------------------
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json* yarn.lock* pnpm-lock.yaml* ./

RUN \
  if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm ci; \
  elif [ -f pnpm-lock.yaml ]; then corepack enable pnpm && pnpm i --frozen-lockfile; \
  else echo "Lockfile not found" && exit 1; \
  fi

# ------------------ builder ------------------
FROM base AS builder
WORKDIR /app

ENV NEXT_RUNTIME=nodejs
ENV NEXT_TELEMETRY_DISABLED=1

# NEXT_PUBLIC_* is inlined into the client bundle at build time, so the API
# base URL has to be chosen here - it cannot be changed on the running
# container. Override with: docker build --build-arg NEXT_PUBLIC_API_URL=...
ARG NEXT_PUBLIC_API_URL=https://api.greyhole.live
ENV NEXT_PUBLIC_API_URL=$NEXT_PUBLIC_API_URL

COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm run build

# ------------------ runner ------------------
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3002

RUN addgroup -S nodejs -g 1001 \
 && adduser -S nextjs -u 1001

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3002

CMD ["node", "server.js"]
