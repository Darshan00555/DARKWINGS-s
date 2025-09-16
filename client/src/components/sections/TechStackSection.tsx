export default function TechStackSection() {
  const technologies = [
    { icon: "fab fa-html5", name: "HTML5", color: "text-orange-500", description: "Structure" },
    { icon: "fab fa-css3-alt", name: "CSS3", color: "text-blue-500", description: "Styling" },
    { icon: "fab fa-bootstrap", name: "Bootstrap", color: "text-purple-500", description: "Framework" },
    { icon: "fab fa-react", name: "React", color: "text-cyan-400", description: "Frontend" },
    { icon: "fab fa-python", name: "Python Flask", color: "text-green-400", description: "Backend" },
    { icon: "fas fa-eye", name: "OpenCV", color: "text-red-400", description: "Computer Vision" },
    { icon: "fas fa-brain", name: "spaCy", color: "text-pink-400", description: "NLP" },
    { icon: "fas fa-database", name: "SQLite", color: "text-yellow-400", description: "Database" }
  ];

  return (
    <section id="tech-stack" className="py-20 relative" data-testid="tech-stack-section">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-16 gradient-text" data-testid="tech-stack-title">Technology Stack</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8" data-testid="tech-grid">
          {technologies.map((tech, index) => (
            <div 
              key={tech.name}
              className="glassmorphism p-6 rounded-xl hover-tilt transition-all duration-300 group text-center animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
              data-testid={`tech-card-${tech.name.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <i className={`${tech.icon} text-5xl ${tech.color} mb-4 group-hover:scale-110 transition-transform`}></i>
              <h3 className="font-semibold" data-testid={`tech-name-${tech.name.toLowerCase().replace(/\s+/g, '-')}`}>{tech.name}</h3>
              <p className="text-sm text-muted-foreground" data-testid={`tech-description-${tech.name.toLowerCase().replace(/\s+/g, '-')}`}>{tech.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
