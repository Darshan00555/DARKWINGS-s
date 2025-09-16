import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import FloatingParticles from "@/components/FloatingParticles";
import HeroSection from "@/components/sections/HeroSection";
import ProblemSection from "@/components/sections/ProblemSection";
import SolutionSection from "@/components/sections/SolutionSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import TechStackSection from "@/components/sections/TechStackSection";
import ArchitectureSection from "@/components/sections/ArchitectureSection";
import DemoSection from "@/components/sections/DemoSection";
import DashboardSection from "@/components/sections/DashboardSection";
import FutureSection from "@/components/sections/FutureSection";
import TeamSection from "@/components/sections/TeamSection";

export default function Home() {
  useEffect(() => {
    document.title = "EduGuard - AI-Powered Integrity for Smarter Learning";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'EduGuard is an AI-powered anti-plagiarism and smart exam integrity system by Team DARKWING for Smart IGNOU Hackathon 2025. Features plagiarism detection, AI proctoring, and blockchain security.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'EduGuard is an AI-powered anti-plagiarism and smart exam integrity system by Team DARKWING for Smart IGNOU Hackathon 2025. Features plagiarism detection, AI proctoring, and blockchain security.';
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <FloatingParticles />
      <Navigation />
      
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <FeaturesSection />
        <TechStackSection />
        <ArchitectureSection />
        <DemoSection />
        <DashboardSection />
        <FutureSection />
        <TeamSection />
      </main>

      <footer className="py-12 border-t border-border" data-testid="footer">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <i className="fas fa-shield-alt text-2xl text-primary"></i>
                <span className="text-xl font-bold gradient-text">EduGuard</span>
              </div>
              <p className="text-muted-foreground">AI-Powered Integrity for Smarter Learning</p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#features" className="hover:text-primary transition-colors">Features</a></li>
                <li><a href="#demo" className="hover:text-primary transition-colors">Demo</a></li>
                <li><a href="#tech-stack" className="hover:text-primary transition-colors">Technology</a></li>
                <li><a href="#architecture" className="hover:text-primary transition-colors">Architecture</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#team" className="hover:text-primary transition-colors">Team</a></li>
                <li><a href="#future" className="hover:text-primary transition-colors">Future Scope</a></li>
                <li><a href="#problem" className="hover:text-primary transition-colors">Problem</a></li>
                <li><a href="#solution" className="hover:text-primary transition-colors">Solution</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Connect</h3>
              <div className="flex space-x-4">
                <i className="fab fa-twitter text-xl text-muted-foreground hover:text-primary transition-colors cursor-pointer"></i>
                <i className="fab fa-linkedin text-xl text-muted-foreground hover:text-primary transition-colors cursor-pointer"></i>
                <i className="fab fa-github text-xl text-muted-foreground hover:text-primary transition-colors cursor-pointer"></i>
                <i className="fas fa-envelope text-xl text-muted-foreground hover:text-primary transition-colors cursor-pointer"></i>
              </div>
            </div>
          </div>
          
          <div className="border-t border-border pt-8 text-center">
            <p className="text-muted-foreground text-sm">
              © 2025 Team DARKWING. Built for Smart IGNOU Hackathon 2025. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
