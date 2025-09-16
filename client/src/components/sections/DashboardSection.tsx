export default function DashboardSection() {
  const sidebarItems = [
    { icon: "fas fa-chart-bar", label: "Overview", active: true },
    { icon: "fas fa-file-alt", label: "Assignments" },
    { icon: "fas fa-video", label: "Exams" },
    { icon: "fas fa-cube", label: "Blockchain" },
    { icon: "fas fa-cog", label: "Settings" }
  ];

  const statsCards = [
    {
      icon: "fas fa-file-alt",
      value: "247",
      label: "Total Submissions",
      change: "+12%",
      color: "text-primary",
      bgColor: "bg-primary/20"
    },
    {
      icon: "fas fa-exclamation-triangle",
      value: "23",
      label: "Flagged Content",
      change: "-5%",
      color: "text-red-400",
      bgColor: "bg-red-400/20"
    },
    {
      icon: "fas fa-video",
      value: "156",
      label: "Monitored Exams",
      change: "+8%",
      color: "text-secondary",
      bgColor: "bg-secondary/20"
    },
    {
      icon: "fas fa-cube",
      value: "1,847",
      label: "Blockchain Records",
      change: "New",
      color: "text-accent",
      bgColor: "bg-accent/20"
    }
  ];

  const recentActivities = [
    {
      icon: "fas fa-file-alt",
      title: "Assignment submitted",
      subtitle: "by John Doe • 2 min ago",
      color: "text-primary",
      bgColor: "bg-primary/20"
    },
    {
      icon: "fas fa-exclamation-triangle",
      title: "Plagiarism detected",
      subtitle: "in Essay.pdf • 5 min ago",
      color: "text-red-400",
      bgColor: "bg-red-400/20"
    },
    {
      icon: "fas fa-video",
      title: "Exam completed",
      subtitle: "by Jane Smith • 10 min ago",
      color: "text-secondary",
      bgColor: "bg-secondary/20"
    }
  ];

  return (
    <section id="dashboard" className="py-20 relative" data-testid="dashboard-section">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-16 gradient-text" data-testid="dashboard-title">Dashboard Preview</h2>
        
        <div className="glassmorphism rounded-xl overflow-hidden" data-testid="dashboard-container">
          <div className="flex flex-col lg:flex-row">
            {/* Sidebar */}
            <div className="w-full lg:w-64 bg-card border-r border-border p-6" data-testid="dashboard-sidebar">
              <div className="flex items-center space-x-3 mb-8">
                <i className="fas fa-shield-alt text-2xl text-primary"></i>
                <span className="text-xl font-bold">EduGuard</span>
              </div>
              
              <nav className="space-y-2" data-testid="sidebar-nav">
                {sidebarItems.map((item, index) => (
                  <button
                    key={item.label}
                    className={`flex items-center space-x-3 px-3 py-2 rounded-lg w-full text-left transition-colors ${
                      item.active ? 'bg-primary/20 text-primary' : 'hover:bg-muted'
                    }`}
                    data-testid={`sidebar-item-${item.label.toLowerCase()}`}
                  >
                    <i className={item.icon}></i>
                    <span>{item.label}</span>
                  </button>
                ))}
              </nav>
            </div>
            
            {/* Main Content */}
            <div className="flex-1 p-6" data-testid="dashboard-content">
              <div className="mb-8">
                <h1 className="text-3xl font-bold mb-2" data-testid="dashboard-welcome">Welcome back, Professor!</h1>
                <p className="text-muted-foreground" data-testid="dashboard-subtitle">Here's your academic integrity overview</p>
              </div>
              
              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8" data-testid="stats-cards">
                {statsCards.map((card, index) => (
                  <div 
                    key={card.label}
                    className="glassmorphism p-6 rounded-lg hover-tilt animate-slide-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                    data-testid={`stat-card-${card.label.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className={`${card.color} text-2xl ${card.bgColor} p-2 rounded-lg`}>
                        <i className={card.icon}></i>
                      </div>
                      <span className={`${card.change.startsWith('+') ? 'text-green-400' : card.change.startsWith('-') ? 'text-red-400' : 'text-green-400'} text-sm font-semibold`}>
                        {card.change}
                      </span>
                    </div>
                    <div className="text-2xl font-bold mb-1" data-testid={`stat-value-${card.label.toLowerCase().replace(/\s+/g, '-')}`}>{card.value}</div>
                    <div className="text-muted-foreground text-sm" data-testid={`stat-label-${card.label.toLowerCase().replace(/\s+/g, '-')}`}>{card.label}</div>
                  </div>
                ))}
              </div>
              
              {/* Charts and Recent Activity */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8" data-testid="dashboard-widgets">
                {/* Plagiarism Trends Chart */}
                <div className="glassmorphism p-6 rounded-lg" data-testid="chart-container">
                  <h3 className="text-xl font-semibold mb-4" data-testid="chart-title">Plagiarism Trends</h3>
                  <div className="h-48 flex items-end space-x-2" data-testid="bar-chart">
                    {[80, 60, 90, 50, 70, 40, 80].map((height, index) => (
                      <div 
                        key={index}
                        className="bg-primary/80 w-8 rounded-t animate-slide-up"
                        style={{ height: `${height}%`, animationDelay: `${index * 0.1}s` }}
                        data-testid={`chart-bar-${index}`}
                      ></div>
                    ))}
                  </div>
                  <div className="text-sm text-muted-foreground mt-2" data-testid="chart-caption">Last 7 days</div>
                </div>
                
                {/* Recent Activity */}
                <div className="glassmorphism p-6 rounded-lg" data-testid="activity-container">
                  <h3 className="text-xl font-semibold mb-4" data-testid="activity-title">Recent Activity</h3>
                  <div className="space-y-3" data-testid="activity-list">
                    {recentActivities.map((activity, index) => (
                      <div 
                        key={index}
                        className="flex items-center space-x-3 animate-slide-up"
                        style={{ animationDelay: `${index * 0.1}s` }}
                        data-testid={`activity-item-${index}`}
                      >
                        <div className={`w-8 h-8 ${activity.bgColor} rounded-full flex items-center justify-center`}>
                          <i className={`${activity.icon} ${activity.color} text-xs`}></i>
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-semibold" data-testid={`activity-title-${index}`}>{activity.title}</div>
                          <div className="text-xs text-muted-foreground" data-testid={`activity-subtitle-${index}`}>{activity.subtitle}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
