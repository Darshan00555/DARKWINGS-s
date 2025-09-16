export default function DemoSection() {
  const demoSteps = [
    {
      number: 1,
      title: "Plagiarism Detection",
      description: "Upload your document and get instant plagiarism analysis with detailed similarity reports.",
      features: [
        "Multi-format support (PDF, DOC, TXT)",
        "Real-time analysis",
        "Source identification"
      ],
      color: "primary",
      content: (
        <div className="border-2 border-dashed border-primary/50 rounded-lg p-8 text-center">
          <i className="fas fa-file-upload text-4xl text-primary mb-4"></i>
          <p className="font-semibold mb-2">Drop your file here</p>
          <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg">Browse Files</button>
        </div>
      )
    },
    {
      number: 2,
      title: "AI Proctoring",
      description: "Start your exam with intelligent monitoring that detects multiple faces and suspicious behavior.",
      features: [
        "Face recognition technology",
        "Real-time monitoring",
        "Automated alerts"
      ],
      color: "secondary",
      content: (
        <div>
          <div className="aspect-video bg-muted rounded-lg flex items-center justify-center relative mb-4">
            <i className="fas fa-video text-4xl text-secondary"></i>
            <div className="absolute top-2 left-2 bg-green-400 w-3 h-3 rounded-full animate-pulse"></div>
            <div className="absolute top-2 right-2 text-xs bg-green-400/20 px-2 py-1 rounded">RECORDING</div>
          </div>
          <button className="w-full px-4 py-2 bg-secondary text-secondary-foreground rounded-lg">Start Exam</button>
        </div>
      )
    },
    {
      number: 3,
      title: "Blockchain Verification",
      description: "All results are automatically stored in our blockchain ledger for tamper-proof verification.",
      features: [
        "Immutable records",
        "Cryptographic security",
        "Instant verification"
      ],
      color: "accent",
      content: (
        <div className="space-y-3">
          <div className="bg-muted/50 p-3 rounded-lg">
            <div className="flex justify-between items-center">
              <span className="font-semibold">Block #12848</span>
              <span className="text-accent">✓ Verified</span>
            </div>
            <div className="text-xs text-muted-foreground mt-1">Hash: 0x9a2b...4c3d</div>
          </div>
          <div className="bg-muted/30 p-3 rounded-lg border border-accent/30">
            <div className="flex justify-between items-center">
              <span className="font-semibold">Block #12849</span>
              <div className="text-accent animate-pulse">● Processing</div>
            </div>
            <div className="text-xs text-muted-foreground mt-1">Generating hash...</div>
          </div>
        </div>
      )
    }
  ];

  return (
    <section id="demo" className="py-20 relative" data-testid="demo-section">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-16 gradient-text" data-testid="demo-title">Demo Walkthrough</h2>
        
        <div className="space-y-16" data-testid="demo-steps">
          {demoSteps.map((step, index) => (
            <div 
              key={step.number}
              className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 animate-slide-up`}
              style={{ animationDelay: `${index * 0.2}s` }}
              data-testid={`demo-step-${step.number}`}
            >
              <div className="flex-1">
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 bg-${step.color} rounded-full flex items-center justify-center text-${step.color}-foreground font-bold text-xl mr-4`} data-testid={`step-number-${step.number}`}>
                    {step.number}
                  </div>
                  <h3 className="text-3xl font-bold" data-testid={`step-title-${step.number}`}>{step.title}</h3>
                </div>
                <p className="text-muted-foreground text-lg mb-6" data-testid={`step-description-${step.number}`}>{step.description}</p>
                <div className="space-y-3" data-testid={`step-features-${step.number}`}>
                  {step.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <i className="fas fa-check text-accent"></i>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex-1 glassmorphism p-8 rounded-xl" data-testid={`step-content-${step.number}`}>
                {step.content}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
