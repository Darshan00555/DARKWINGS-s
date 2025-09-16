export default function SolutionSection() {
  return (
    <section id="solution" className="py-20 relative" data-testid="solution-section">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-16 gradient-text" data-testid="solution-title">EduGuard Solution</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="glassmorphism p-8 rounded-xl hover-tilt transition-all duration-500 group" data-testid="solution-card-plagiarism">
            <div className="text-primary text-5xl mb-6 group-hover:scale-110 transition-transform" data-testid="icon-plagiarism-checker">
              <i className="fas fa-search-plus"></i>
            </div>
            <h3 className="text-2xl font-bold mb-4" data-testid="solution-title-plagiarism">Plagiarism Checker</h3>
            <p className="text-muted-foreground mb-6" data-testid="solution-description-plagiarism">
              Advanced AI-powered detection for both text and code plagiarism with detailed similarity reports.
            </p>
            <ul className="space-y-2 text-sm" data-testid="solution-features-plagiarism">
              <li className="flex items-center">
                <i className="fas fa-check text-accent mr-2"></i>
                Text Analysis
              </li>
              <li className="flex items-center">
                <i className="fas fa-check text-accent mr-2"></i>
                Code Detection
              </li>
              <li className="flex items-center">
                <i className="fas fa-check text-accent mr-2"></i>
                Multi-language Support
              </li>
            </ul>
          </div>

          <div className="glassmorphism p-8 rounded-xl hover-tilt transition-all duration-500 group" data-testid="solution-card-proctoring">
            <div className="text-secondary text-5xl mb-6 group-hover:scale-110 transition-transform" data-testid="icon-ai-proctoring">
              <i className="fas fa-video"></i>
            </div>
            <h3 className="text-2xl font-bold mb-4" data-testid="solution-title-proctoring">Smart AI Proctoring</h3>
            <p className="text-muted-foreground mb-6" data-testid="solution-description-proctoring">
              Real-time face detection and monitoring with intelligent alerts for multiple persons or suspicious activity.
            </p>
            <ul className="space-y-2 text-sm" data-testid="solution-features-proctoring">
              <li className="flex items-center">
                <i className="fas fa-check text-accent mr-2"></i>
                Face Recognition
              </li>
              <li className="flex items-center">
                <i className="fas fa-check text-accent mr-2"></i>
                Multiple Person Detection
              </li>
              <li className="flex items-center">
                <i className="fas fa-check text-accent mr-2"></i>
                Behavior Analysis
              </li>
            </ul>
          </div>

          <div className="glassmorphism p-8 rounded-xl hover-tilt transition-all duration-500 group" data-testid="solution-card-blockchain">
            <div className="text-accent text-5xl mb-6 group-hover:scale-110 transition-transform" data-testid="icon-blockchain">
              <i className="fas fa-cube"></i>
            </div>
            <h3 className="text-2xl font-bold mb-4" data-testid="solution-title-blockchain">Blockchain Records</h3>
            <p className="text-muted-foreground mb-6" data-testid="solution-description-blockchain">
              Tamper-proof record keeping with blockchain technology ensuring data integrity and verification.
            </p>
            <ul className="space-y-2 text-sm" data-testid="solution-features-blockchain">
              <li className="flex items-center">
                <i className="fas fa-check text-accent mr-2"></i>
                Immutable Records
              </li>
              <li className="flex items-center">
                <i className="fas fa-check text-accent mr-2"></i>
                Hash Verification
              </li>
              <li className="flex items-center">
                <i className="fas fa-check text-accent mr-2"></i>
                Audit Trail
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
