export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16" data-testid="hero-section">
      <div className="max-w-6xl mx-auto px-4 text-center z-10">
        <div className="animate-float">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 gradient-text neon-glow" data-testid="hero-title">
            EduGuard
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto" data-testid="hero-tagline">
            AI-Powered Integrity for Smarter Learning
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20" data-testid="hero-buttons">
          <button className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold text-lg hover:scale-105 transition-all duration-300 animate-pulse-glow" data-testid="button-get-started">
            <i className="fas fa-rocket mr-2"></i>
            Get Started
          </button>
          <button className="px-8 py-4 glassmorphism text-foreground rounded-lg font-semibold text-lg hover:scale-105 hover-tilt transition-all duration-300" data-testid="button-learn-more">
            <i className="fas fa-play mr-2"></i>
            Learn More
          </button>
        </div>

        {/* Stats Counter */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" data-testid="hero-stats">
          <div className="glassmorphism p-6 rounded-lg hover-tilt">
            <div className="text-3xl font-bold text-primary mb-2" data-testid="stat-accuracy">99%</div>
            <div className="text-muted-foreground">Accuracy Rate</div>
          </div>
          <div className="glassmorphism p-6 rounded-lg hover-tilt">
            <div className="text-3xl font-bold text-secondary mb-2" data-testid="stat-institutions">50+</div>
            <div className="text-muted-foreground">Institutions</div>
          </div>
          <div className="glassmorphism p-6 rounded-lg hover-tilt">
            <div className="text-3xl font-bold text-accent mb-2" data-testid="stat-tests">10K+</div>
            <div className="text-muted-foreground">Tests Monitored</div>
          </div>
        </div>
      </div>
    </section>
  );
}
