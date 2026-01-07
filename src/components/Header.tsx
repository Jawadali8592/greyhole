'use client';

import Link from "next/link";
import Image from "next/image";
import { Menu, X, Download } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import ComingSoonModal from "./ComingSoonModal";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedPlatform, setSelectedPlatform] = useState("android");

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link href="/" className="">
            <Image src="/grey-hole-logo.png" alt="Grey Hole" width={120} height={120} className="object-contain" />
           
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-muted-foreground hover:text-primary transition-colors font-medium">
              Home
            </Link>
            <a href="#features" className="text-muted-foreground hover:text-primary transition-colors font-medium">
              Features
            </a>
            <a href="#faq" className="text-muted-foreground hover:text-primary transition-colors font-medium">
              FAQ
            </a>
            <Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors font-medium">
              Terms
            </Link>
            <Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors font-medium">
              Privacy
            </Link>
            <Button
              onClick={() => {
                setSelectedPlatform("android");
                setShowModal(true);
              }}
              className="bg-secondary hover:bg-muted text-foreground border border-border transition-colors"
            >
              <Download className="w-4 h-4 mr-2" />
              Download App
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border/50 animate-slide-up">
            <div className="flex flex-col gap-4">
              <Link 
                href="/" 
                className="text-muted-foreground hover:text-primary transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <a 
                href="#features" 
                className="text-muted-foreground hover:text-primary transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </a>
              <a 
                href="#faq" 
                className="text-muted-foreground hover:text-primary transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </a>
              <Link 
                href="/terms" 
                className="text-muted-foreground hover:text-primary transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Terms
              </Link>
              <Link 
                href="/privacy" 
                className="text-muted-foreground hover:text-primary transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Privacy
              </Link>
              <Button
                onClick={() => {
                  setSelectedPlatform("android");
                  setShowModal(true);
                  setIsMenuOpen(false);
                }}
                className="bg-secondary hover:bg-muted text-foreground border border-border transition-colors w-full"
              >
                <Download className="w-4 h-4 mr-2" />
                Download App
              </Button>
            </div>
          </nav>
        )}
      </div>

      {/* Coming Soon Modal */}
      <ComingSoonModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        platform={selectedPlatform}
      />
    </header>
  );
};

export default Header;
