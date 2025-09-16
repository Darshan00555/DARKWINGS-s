export default function TeamSection() {
  const teamMembers = [
    {
      name: "Alex Rodriguez",
      role: "Frontend Developer",
      roleColor: "text-primary",
      bgGradient: "from-primary/20 to-secondary/20",
      description: "Specializes in React and modern UI/UX design with 5+ years of experience.",
      skills: ["React", "TypeScript", "UI/UX"],
      icon: "fas fa-user-circle"
    },
    {
      name: "Sarah Chen",
      role: "Frontend Developer",
      roleColor: "text-secondary",
      bgGradient: "from-secondary/20 to-accent/20",
      description: "Expert in JavaScript frameworks and responsive design principles.",
      skills: ["JavaScript", "CSS", "Design"],
      icon: "fas fa-user-circle"
    },
    {
      name: "Marcus Johnson",
      role: "Backend Developer",
      roleColor: "text-accent",
      bgGradient: "from-accent/20 to-primary/20",
      description: "Python Flask expert with extensive experience in AI/ML integration.",
      skills: ["Python", "Flask", "AI/ML"],
      icon: "fas fa-user-circle"
    },
    {
      name: "Emily Davis",
      role: "Backend Developer",
      roleColor: "text-primary",
      bgGradient: "from-primary/20 to-accent/20",
      description: "Database architect and blockchain technology specialist.",
      skills: ["Database", "Blockchain", "Security"],
      icon: "fas fa-user-circle"
    },
    {
      name: "David Kumar",
      role: "Backend Developer",
      roleColor: "text-secondary",
      bgGradient: "from-secondary/20 to-primary/20",
      description: "Computer vision and OpenCV specialist for proctoring systems.",
      skills: ["OpenCV", "Computer Vision", "AI"],
      icon: "fas fa-user-circle"
    },
    {
      name: "Rachel Thompson",
      role: "Documentation & Testing",
      roleColor: "text-accent",
      bgGradient: "from-accent/20 to-secondary/20",
      description: "QA engineer ensuring quality and comprehensive documentation.",
      skills: ["Testing", "Documentation", "QA"],
      icon: "fas fa-user-circle"
    }
  ];

  return (
    <section id="team" className="py-20 relative" data-testid="team-section">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-16 gradient-text" data-testid="team-title">Team DARKWING</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-testid="team-grid">
          {teamMembers.map((member, index) => (
            <div 
              key={member.name}
              className="team-card glassmorphism rounded-xl overflow-hidden hover-tilt transition-all duration-500 group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
              data-testid={`team-card-${member.name.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <div className="team-card-inner relative w-full h-96">
                {/* Front Side */}
                <div className="team-card-front absolute inset-0 p-6 flex flex-col items-center justify-center text-center">
                  <div className={`aspect-square bg-gradient-to-br ${member.bgGradient} flex items-center justify-center mb-6 rounded-xl w-20 h-20`}>
                    <i className={`${member.icon} text-4xl ${member.roleColor} group-hover:scale-110 transition-transform`}></i>
                  </div>
                  <h3 className="text-xl font-bold mb-2" data-testid={`member-name-${member.name.toLowerCase().replace(/\s+/g, '-')}`}>{member.name}</h3>
                  <p className={`${member.roleColor} font-semibold mb-3`} data-testid={`member-role-${member.name.toLowerCase().replace(/\s+/g, '-')}`}>{member.role}</p>
                  <p className="text-muted-foreground text-sm mb-4" data-testid={`member-description-${member.name.toLowerCase().replace(/\s+/g, '-')}`}>{member.description}</p>
                  <div className="flex space-x-3" data-testid={`member-social-${member.name.toLowerCase().replace(/\s+/g, '-')}`}>
                    <i className={`fab fa-linkedin ${member.roleColor} hover:scale-110 transition-transform cursor-pointer`}></i>
                    <i className={`fab fa-github ${member.roleColor} hover:scale-110 transition-transform cursor-pointer`}></i>
                    <i className={`fas fa-envelope ${member.roleColor} hover:scale-110 transition-transform cursor-pointer`}></i>
                  </div>
                </div>
                
                {/* Back Side */}
                <div className="team-card-back absolute inset-0 p-6 flex flex-col justify-center text-center">
                  <h3 className={`text-xl font-bold mb-4 ${member.roleColor}`}>{member.name}</h3>
                  <h4 className="font-semibold mb-4">Technical Skills</h4>
                  <div className="space-y-3 text-sm" data-testid={`member-skills-${member.name.toLowerCase().replace(/\s+/g, '-')}`}>
                    {member.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="flex items-center justify-center gap-2">
                        <div className={`w-2 h-2 ${member.roleColor.replace('text-', 'bg-')} rounded-full`}></div>
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6">
                    <div className="flex justify-center gap-4">
                      <div className={`w-8 h-8 ${member.roleColor.replace('text-', 'bg-')}/20 rounded-lg flex items-center justify-center`}>
                        <span className={`${member.roleColor} text-xs font-bold`}>5+</span>
                      </div>
                      <div className={`w-8 h-8 ${member.roleColor.replace('text-', 'bg-')}/20 rounded-lg flex items-center justify-center`}>
                        <i className={`fas fa-star ${member.roleColor} text-xs`}></i>
                      </div>
                      <div className={`w-8 h-8 ${member.roleColor.replace('text-', 'bg-')}/20 rounded-lg flex items-center justify-center`}>
                        <i className={`fas fa-award ${member.roleColor} text-xs`}></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
