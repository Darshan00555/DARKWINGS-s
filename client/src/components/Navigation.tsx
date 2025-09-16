import { Link } from "wouter";
import { useState } from "react";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 glassmorphism" data-testid="navigation">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2" data-testid="logo-link">
              <i className="fas fa-shield-alt text-2xl text-primary"></i>
              <span className="text-xl font-bold gradient-text">EduGuard</span>
            </Link>
            
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-muted-foreground hover:text-primary transition-colors" data-testid="nav-home">
                Home
              </button>
              <button onClick={() => scrollToSection('problem')} className="text-muted-foreground hover:text-primary transition-colors" data-testid="nav-problem">
                Problem
              </button>
              <button onClick={() => scrollToSection('solution')} className="text-muted-foreground hover:text-primary transition-colors" data-testid="nav-solution">
                Solution
              </button>
              <button onClick={() => scrollToSection('features')} className="text-muted-foreground hover:text-primary transition-colors" data-testid="nav-features">
                Features
              </button>
              <button onClick={() => scrollToSection('demo')} className="text-muted-foreground hover:text-primary transition-colors" data-testid="nav-demo">
                Demo
              </button>
              <button onClick={() => scrollToSection('team')} className="text-muted-foreground hover:text-primary transition-colors" data-testid="nav-team">
                Team
              </button>
            </div>
            
            <button 
              className="md:hidden text-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-testid="mobile-menu-button"
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden glassmorphism border-t border-border" data-testid="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button onClick={() => scrollToSection('home')} className="block px-3 py-2 text-muted-foreground hover:text-primary transition-colors w-full text-left">
                Home
              </button>
              <button onClick={() => scrollToSection('problem')} className="block px-3 py-2 text-muted-foreground hover:text-primary transition-colors w-full text-left">
                Problem
              </button>
              <button onClick={() => scrollToSection('solution')} className="block px-3 py-2 text-muted-foreground hover:text-primary transition-colors w-full text-left">
                Solution
              </button>
              <button onClick={() => scrollToSection('features')} className="block px-3 py-2 text-muted-foreground hover:text-primary transition-colors w-full text-left">
                Features
              </button>
              <button onClick={() => scrollToSection('demo')} className="block px-3 py-2 text-muted-foreground hover:text-primary transition-colors w-full text-left">
                Demo
              </button>
              <button onClick={() => scrollToSection('team')} className="block px-3 py-2 text-muted-foreground hover:text-primary transition-colors w-full text-left">
                Team
              </button>
            </div>
          </div>
        )}
      </nav>
      
      {/* Floating Navigation Dots */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-40 space-y-4 hidden lg:block" data-testid="floating-nav">
        <button onClick={() => scrollToSection('home')} className="w-3 h-3 rounded-full bg-primary shadow-glow transition-all duration-300" data-testid="nav-dot-home"></button>
        <button onClick={() => scrollToSection('problem')} className="w-3 h-3 rounded-full bg-muted hover:bg-primary transition-all duration-300" data-testid="nav-dot-problem"></button>
        <button onClick={() => scrollToSection('solution')} className="w-3 h-3 rounded-full bg-muted hover:bg-primary transition-all duration-300" data-testid="nav-dot-solution"></button>
        <button onClick={() => scrollToSection('features')} className="w-3 h-3 rounded-full bg-muted hover:bg-primary transition-all duration-300" data-testid="nav-dot-features"></button>
        <button onClick={() => scrollToSection('demo')} className="w-3 h-3 rounded-full bg-muted hover:bg-primary transition-all duration-300" data-testid="nav-dot-demo"></button>
        <button onClick={() => scrollToSection('team')} className="w-3 h-3 rounded-full bg-muted hover:bg-primary transition-all duration-300" data-testid="nav-dot-team"></button>
      </div>
    </>
  );
}
