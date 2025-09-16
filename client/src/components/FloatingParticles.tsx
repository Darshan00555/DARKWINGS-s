import { useEffect } from "react";

export default function FloatingParticles() {
  useEffect(() => {
    const createParticle = () => {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.width = Math.random() * 4 + 1 + 'px';
      particle.style.height = particle.style.width;
      particle.style.animationDelay = Math.random() * 8 + 's';
      
      document.getElementById('particles-container')?.appendChild(particle);
      
      setTimeout(() => {
        particle.remove();
      }, 8000);
    };

    const interval = setInterval(createParticle, 500);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      id="particles-container" 
      className="fixed inset-0 pointer-events-none overflow-hidden z-0"
      data-testid="floating-particles"
    />
  );
}
