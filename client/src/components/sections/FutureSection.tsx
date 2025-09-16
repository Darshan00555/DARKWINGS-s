export default function FutureSection() {
  const phases = [
    {
      number: 1,
      phase: "Phase 1: AI Enhancement",
      description: "Advanced semantic plagiarism detection using deep learning models for better context understanding.",
      features: [
        "Neural language models",
        "Context-aware detection",
        "Multi-language support"
      ],
      color: "text-primary"
    },
    {
      number: 2,
      phase: "Phase 2: Cloud Infrastructure",
      description: "Scalable cloud-based blockchain ledger with distributed verification nodes.",
      features: [
        "Distributed blockchain",
        "Cloud scalability",
        "Global accessibility"
      ],
      color: "text-secondary"
    },
    {
      number: 3,
      phase: "Phase 3: Mobile Integration",
      description: "Native mobile applications for iOS and Android with offline capabilities.",
      features: [
        "iOS & Android apps",
        "Offline mode",
        "Push notifications"
      ],
      color: "text-accent"
    }
  ];

  return (
    <section id="future" className="py-20 relative bg-muted/20" data-testid="future-section">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-16 gradient-text" data-testid="future-title">Future Roadmap</h2>
        
        <div className="relative" data-testid="timeline">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary to-accent hidden lg:block"></div>
          
          <div className="space-y-16" data-testid="timeline-items">
            {phases.map((phase, index) => (
              <div 
                key={phase.number}
                className={`flex items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''} animate-slide-up`}
                style={{ animationDelay: `${index * 0.2}s` }}
                data-testid={`phase-${phase.number}`}
              >
                <div className="flex-1 lg:pr-8 lg:pl-0">
                  {index % 2 === 0 ? (
                    <div className="glassmorphism p-6 rounded-xl hover-tilt">
                      <h3 className={`text-2xl font-bold mb-4 ${phase.color}`} data-testid={`phase-title-${phase.number}`}>
                        {phase.phase}
                      </h3>
                      <p className="text-muted-foreground mb-4" data-testid={`phase-description-${phase.number}`}>
                        {phase.description}
                      </p>
                      <ul className="space-y-2 text-sm" data-testid={`phase-features-${phase.number}`}>
                        {phase.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center">
                            <i className="fas fa-check text-accent mr-2"></i>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                </div>
                
                <div className={`w-12 h-12 bg-${phase.color.split('-')[1]} rounded-full flex items-center justify-center text-${phase.color.split('-')[1]}-foreground font-bold relative z-10 mx-8`} data-testid={`phase-number-${phase.number}`}>
                  {phase.number}
                </div>
                
                <div className="flex-1 lg:pl-8 lg:pr-0">
                  {index % 2 === 1 ? (
                    <div className="glassmorphism p-6 rounded-xl hover-tilt">
                      <h3 className={`text-2xl font-bold mb-4 ${phase.color}`} data-testid={`phase-title-${phase.number}`}>
                        {phase.phase}
                      </h3>
                      <p className="text-muted-foreground mb-4" data-testid={`phase-description-${phase.number}`}>
                        {phase.description}
                      </p>
                      <ul className="space-y-2 text-sm" data-testid={`phase-features-${phase.number}`}>
                        {phase.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center">
                            <i className="fas fa-check text-accent mr-2"></i>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
