import { Link } from "react-router-dom";
import { Download, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center glow-effect-sm group-hover:glow-effect transition-all duration-300">
              <Download className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">
              Vid<span className="text-gradient">Grab</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-muted-foreground hover:text-primary transition-colors font-medium">
              Home
            </Link>
            <a href="#features" className="text-muted-foreground hover:text-primary transition-colors font-medium">
              Features
            </a>
            <a href="#faq" className="text-muted-foreground hover:text-primary transition-colors font-medium">
              FAQ
            </a>
            <Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors font-medium">
              Terms
            </Link>
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
                to="/" 
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
                to="/terms" 
                className="text-muted-foreground hover:text-primary transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Terms
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
