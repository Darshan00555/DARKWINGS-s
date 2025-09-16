export default function ArchitectureSection() {
  const architectureSteps = [
    {
      icon: "fas fa-user",
      title: "User Input",
      description: "File Upload or Exam Start",
      color: "text-primary"
    },
    {
      icon: "fas fa-cog",
      title: "AI Processing",
      description: "Analysis & Detection",
      color: "text-secondary"
    },
    {
      icon: "fas fa-chart-bar",
      title: "Results",
      description: "Report Generation",
      color: "text-accent"
    },
    {
      icon: "fas fa-cube",
      title: "Blockchain",
      description: "Secure Storage",
      color: "text-primary"
    }
  ];

  return (
    <section id="architecture" className="py-20 relative" data-testid="architecture-section">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-16 gradient-text" data-testid="architecture-title">System Architecture</h2>
        
        <div className="flex flex-col lg:flex-row items-center justify-center space-y-8 lg:space-y-0 lg:space-x-8" data-testid="architecture-flow">
          {architectureSteps.map((step, index) => (
            <div key={step.title} className="flex items-center">
              <div className="glassmorphism p-6 rounded-xl text-center hover-tilt animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }} data-testid={`arch-step-${index + 1}`}>
                <div className={`text-4xl ${step.color} mb-4`} data-testid={`arch-icon-${index + 1}`}>
                  <i className={step.icon}></i>
                </div>
                <h3 className="font-semibold mb-2" data-testid={`arch-title-${index + 1}`}>{step.title}</h3>
                <p className="text-sm text-muted-foreground" data-testid={`arch-description-${index + 1}`}>{step.description}</p>
              </div>
              
              {index < architectureSteps.length - 1 && (
                <div className="text-primary text-2xl mx-4 hidden lg:block" data-testid={`arch-arrow-${index + 1}`}>
                  <i className="fas fa-arrow-right"></i>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
