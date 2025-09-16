import { useState } from "react";

export default function FeaturesSection() {
  const [activeTab, setActiveTab] = useState('plagiarism-demo');

  return (
    <section id="features" className="py-20 relative" data-testid="features-section">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-16 gradient-text" data-testid="features-title">Key Features</h2>
        
        {/* Feature Tabs */}
        <div className="flex flex-wrap justify-center mb-12 space-x-4" data-testid="feature-tabs">
          <button 
            className={`feature-tab ${activeTab === 'plagiarism-demo' ? 'active' : ''}`}
            onClick={() => setActiveTab('plagiarism-demo')}
            data-testid="tab-plagiarism"
          >
            Plagiarism Detection
          </button>
          <button 
            className={`feature-tab ${activeTab === 'proctoring-demo' ? 'active' : ''}`}
            onClick={() => setActiveTab('proctoring-demo')}
            data-testid="tab-proctoring"
          >
            AI Proctoring
          </button>
          <button 
            className={`feature-tab ${activeTab === 'blockchain-demo' ? 'active' : ''}`}
            onClick={() => setActiveTab('blockchain-demo')}
            data-testid="tab-blockchain"
          >
            Blockchain Ledger
          </button>
        </div>

        {/* Feature Content */}
        <div className="feature-content" data-testid="feature-content">
          {/* Plagiarism Demo */}
          <div className={`feature-panel ${activeTab === 'plagiarism-demo' ? 'active' : ''}`} data-testid="panel-plagiarism">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-6" data-testid="plagiarism-demo-title">File Upload & Analysis</h3>
                <p className="text-muted-foreground mb-8" data-testid="plagiarism-demo-description">
                  Upload documents and receive detailed plagiarism reports with similarity percentages and source identification.
                </p>
                
                {/* File Upload UI */}
                <div className="glassmorphism p-6 rounded-lg border-2 border-dashed border-primary/50 hover:border-primary transition-colors" data-testid="file-upload-area">
                  <div className="text-center">
                    <i className="fas fa-cloud-upload-alt text-4xl text-primary mb-4" data-testid="upload-icon"></i>
                    <p className="text-lg font-semibold mb-2" data-testid="upload-text">Drop files here or click to browse</p>
                    <p className="text-sm text-muted-foreground" data-testid="upload-info">Supports PDF, DOC, TXT files up to 10MB</p>
                    <button className="mt-4 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:scale-105 transition-all" data-testid="button-select-file">
                      Select File
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="glassmorphism p-6 rounded-lg" data-testid="plagiarism-report">
                <h4 className="text-xl font-semibold mb-4" data-testid="report-title">Plagiarism Report</h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span data-testid="report-label">Overall Similarity</span>
                    <span className="text-red-400 font-bold" data-testid="similarity-percentage">23%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-3" data-testid="progress-bar">
                    <div className="bg-red-400 h-3 rounded-full" style={{ width: '23%' }}></div>
                  </div>
                  <div className="text-sm space-y-2" data-testid="source-breakdown">
                    <div className="flex justify-between">
                      <span>Source 1: Academic Paper</span>
                      <span className="text-orange-400">12%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Source 2: Web Content</span>
                      <span className="text-yellow-400">8%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Source 3: Student Work</span>
                      <span className="text-green-400">3%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Proctoring Demo */}
          <div className={`feature-panel ${activeTab === 'proctoring-demo' ? 'active' : ''}`} data-testid="panel-proctoring">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-6" data-testid="proctoring-demo-title">Live Webcam Monitoring</h3>
                <p className="text-muted-foreground mb-8" data-testid="proctoring-demo-description">
                  Real-time face detection with intelligent alerts for multiple persons or suspicious behavior.
                </p>
                
                {/* Proctoring Features */}
                <div className="space-y-4" data-testid="proctoring-features">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span>Face Detection: Active</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span>Eye Tracking: Monitoring</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
                    <span>Multiple Persons: Warning</span>
                  </div>
                </div>
              </div>
              
              <div className="glassmorphism p-6 rounded-lg" data-testid="webcam-monitor">
                <div className="aspect-video bg-muted rounded-lg mb-4 flex items-center justify-center relative overflow-hidden" data-testid="webcam-feed">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20"></div>
                  <div className="relative z-10">
                    <i className="fas fa-user-circle text-6xl text-primary opacity-50" data-testid="user-icon"></i>
                    <div className="absolute -inset-4 border-2 border-primary rounded-lg animate-pulse"></div>
                  </div>
                  
                  <div className="absolute top-4 left-4 glassmorphism px-3 py-1 rounded-full text-sm" data-testid="detection-status">
                    <i className="fas fa-eye text-green-400 mr-1"></i>
                    Face Detected
                  </div>
                  
                  <div className="absolute top-4 right-4 bg-yellow-400/20 border border-yellow-400 px-3 py-1 rounded-full text-sm text-yellow-400" data-testid="warning-status">
                    <i className="fas fa-exclamation-triangle mr-1"></i>
                    Multiple Faces
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-sm" data-testid="monitoring-stats">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400" data-testid="attention-score">98%</div>
                    <div className="text-muted-foreground">Attention Score</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-yellow-400" data-testid="violations-count">2</div>
                    <div className="text-muted-foreground">Violations</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Blockchain Demo */}
          <div className={`feature-panel ${activeTab === 'blockchain-demo' ? 'active' : ''}`} data-testid="panel-blockchain">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-6" data-testid="blockchain-demo-title">Blockchain Ledger</h3>
                <p className="text-muted-foreground mb-8" data-testid="blockchain-demo-description">
                  Immutable record keeping with cryptographic hashes ensuring complete transparency and tamper-proof verification.
                </p>
                
                <div className="glassmorphism p-4 rounded-lg" data-testid="blockchain-info">
                  <div className="flex items-center space-x-3 mb-2">
                    <i className="fas fa-cube text-primary"></i>
                    <span className="font-semibold">Block #12847</span>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Hash: 0x4f2a...8b9c
                  </div>
                </div>
              </div>
              
              <div className="glassmorphism p-6 rounded-lg" data-testid="blockchain-transactions">
                <h4 className="text-xl font-semibold mb-4" data-testid="transactions-title">Recent Transactions</h4>
                <div className="space-y-3 text-sm" data-testid="transaction-list">
                  <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                    <div>
                      <div className="font-semibold">Assignment Submitted</div>
                      <div className="text-muted-foreground">Student: John Doe</div>
                    </div>
                    <div className="text-right">
                      <div className="text-green-400">✓ Verified</div>
                      <div className="text-xs">2 mins ago</div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                    <div>
                      <div className="font-semibold">Exam Completed</div>
                      <div className="text-muted-foreground">Student: Jane Smith</div>
                    </div>
                    <div className="text-right">
                      <div className="text-green-400">✓ Verified</div>
                      <div className="text-xs">5 mins ago</div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                    <div>
                      <div className="font-semibold">Plagiarism Report</div>
                      <div className="text-muted-foreground">Document: Essay.pdf</div>
                    </div>
                    <div className="text-right">
                      <div className="text-green-400">✓ Verified</div>
                      <div className="text-xs">10 mins ago</div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 p-3 border border-primary/30 rounded-lg" data-testid="block-hash">
                  <div className="text-xs text-muted-foreground mb-1">Latest Block Hash:</div>
                  <div className="font-mono text-xs break-all">0x4f2a8b9c1d3e5f7a9b2c4d6e8f0a1b3c5d7e9f2a4b6c8d0e2f4a6b8c0d2e4f6a8b</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
