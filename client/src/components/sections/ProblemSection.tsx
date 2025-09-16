export default function ProblemSection() {
  return (
    <section id="problem" className="py-20 relative" data-testid="problem-section">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-16 gradient-text" data-testid="problem-title">The Challenge</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glassmorphism p-8 rounded-xl hover-tilt transition-all duration-500 hover:shadow-2xl animate-slide-up" data-testid="problem-card-plagiarism">
            <div className="text-red-400 text-4xl mb-4" data-testid="icon-plagiarism">
              <i className="fas fa-copy"></i>
            </div>
            <h3 className="text-xl font-semibold mb-4" data-testid="problem-title-plagiarism">High Plagiarism Rates</h3>
            <p className="text-muted-foreground" data-testid="problem-description-plagiarism">
              Students increasingly rely on copied content for assignments and projects, compromising educational integrity.
            </p>
            <div className="mt-4 text-red-400 font-semibold" data-testid="problem-stat-plagiarism">75% increase in plagiarism</div>
          </div>

          <div className="glassmorphism p-8 rounded-xl hover-tilt transition-all duration-500 hover:shadow-2xl animate-slide-up" style={{ animationDelay: '0.2s' }} data-testid="problem-card-cheating">
            <div className="text-orange-400 text-4xl mb-4" data-testid="icon-cheating">
              <i className="fas fa-eye-slash"></i>
            </div>
            <h3 className="text-xl font-semibold mb-4" data-testid="problem-title-cheating">Online Exam Cheating</h3>
            <p className="text-muted-foreground" data-testid="problem-description-cheating">
              Multiple persons taking exams, unauthorized help, and lack of proper proctoring systems.
            </p>
            <div className="mt-4 text-orange-400 font-semibold" data-testid="problem-stat-cheating">60% of online exams compromised</div>
          </div>

          <div className="glassmorphism p-8 rounded-xl hover-tilt transition-all duration-500 hover:shadow-2xl animate-slide-up" style={{ animationDelay: '0.4s' }} data-testid="problem-card-cost">
            <div className="text-yellow-400 text-4xl mb-4" data-testid="icon-cost">
              <i className="fas fa-dollar-sign"></i>
            </div>
            <h3 className="text-xl font-semibold mb-4" data-testid="problem-title-cost">Lack of Affordable Tools</h3>
            <p className="text-muted-foreground" data-testid="problem-description-cost">
              Limited access to affordable originality checking and integrity monitoring solutions.
            </p>
            <div className="mt-4 text-yellow-400 font-semibold" data-testid="problem-stat-cost">High-cost barriers</div>
          </div>
        </div>
      </div>
    </section>
  );
}
