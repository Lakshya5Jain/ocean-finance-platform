import { BarChart3, Brain, Rocket, Users, Globe, Shield } from 'lucide-react';
import { useEffect, useRef } from 'react';

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="section-spacing bg-gradient-to-b from-deep-navy via-near-black to-deep-navy relative overflow-hidden">
      {/* Advanced background patterns */}
      <div className="absolute inset-0 data-grid opacity-5"></div>
      <div className="absolute inset-0 ocean-pattern"></div>
      
      {/* Floating orbs for depth */}
      <div className="floating-orb w-64 h-64 top-1/4 -left-32 opacity-30"></div>
      <div className="floating-orb w-80 h-80 bottom-1/4 -right-40 opacity-20" style={{animationDelay: '7s'}}></div>
      
      {/* Holographic overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 holographic"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section header with futuristic badge */}
          <div className="text-center mb-20 animate-on-scroll opacity-0 translate-y-10">
            <div className="inline-flex items-center px-6 py-3 rounded-full glass-premium mb-12 group hover:scale-105 transition-all duration-500">
              <Brain className="w-4 h-4 text-bright-azure mr-3" />
              <span className="text-xs font-orbitron font-semibold text-transparent bg-clip-text bg-gradient-to-r from-bright-azure to-gradient-end tracking-[3px] uppercase">
                Intelligent Capital Solutions
              </span>
              <div className="ml-3 w-8 h-0.5 bg-gradient-to-r from-gradient-mid to-transparent rounded-full"></div>
            </div>

            <h2 className="text-6xl md:text-7xl font-space-grotesk font-bold text-white mb-8 leading-tight">
              <span className="text-white/70 font-light">Financing</span>
              <br />
              <span className="relative inline-block">
                <span className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-bright-azure via-gradient-mid to-gradient-end blur-2xl opacity-60">
                  REIMAGINED
                </span>
                <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-bright-azure via-gradient-mid to-gradient-end">
                  REIMAGINED
                </span>
              </span>
            </h2>
            
            <div className="max-w-4xl mx-auto">
              <p className="text-xl md:text-2xl text-white/70 leading-relaxed font-light">
                We're not just another lender. We're your growth catalyst, combining 
                <span className="text-bright-azure font-medium"> quantum-speed analytics</span> with 
                <span className="text-gradient-end font-medium"> institutional wisdom</span> to unlock your exponential potential.
              </p>
            </div>
          </div>

          {/* Core Capabilities Grid with Futuristic Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {[
              {
                icon: BarChart3,
                title: "AI-Powered Analytics",
                metric: "500ms",
                metricLabel: "Decision Time",
                description: "Real-time risk assessment powered by proprietary machine learning algorithms",
                color: "from-bright-azure to-gradient-mid"
              },
              {
                icon: Shield,
                title: "Institutional Backing",
                metric: "$2B+",
                metricLabel: "Assets Managed",
                description: "Backed by tier-1 institutions with proven track records across market cycles",
                color: "from-gradient-mid to-gradient-end"
              },
              {
                icon: Rocket,
                title: "Growth Acceleration",
                metric: "3.5x",
                metricLabel: "Average ROI",
                description: "Portfolio companies achieve exponential growth with our strategic capital",
                color: "from-gradient-end to-bright-azure"
              }
            ].map((item, index) => (
              <div
                key={index}
                className="animate-on-scroll opacity-0 translate-y-10"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="card-futuristic rounded-3xl p-8 h-full group">
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} p-0.5`}>
                      <div className="w-full h-full rounded-2xl bg-deep-navy/90 flex items-center justify-center">
                        <item.icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-orbitron font-bold text-transparent bg-clip-text bg-gradient-to-r from-bright-azure to-gradient-end">
                        {item.metric}
                      </div>
                      <div className="text-xs text-white/50 font-medium uppercase tracking-wider">
                        {item.metricLabel}
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-semibold text-white mb-4">
                    {item.title}
                  </h3>
                  <p className="text-white/60 leading-relaxed">
                    {item.description}
                  </p>
                  
                  <div className={`mt-6 h-1 w-full bg-gradient-to-r ${item.color} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700`}></div>
                </div>
              </div>
            ))}
          </div>

          {/* Process Timeline with Futuristic Design */}
          <div className="mb-20">
            <h3 className="text-3xl font-semibold text-white text-center mb-12">
              Your Journey to <span className="text-transparent bg-clip-text bg-gradient-to-r from-bright-azure to-gradient-end">Exponential Growth</span>
            </h3>
            
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-bright-azure via-gradient-mid to-gradient-end opacity-30"></div>
              
              {/* Timeline items */}
              {[
                { step: "01", title: "Connect", time: "2 minutes", desc: "Submit your application with basic business information" },
                { step: "02", title: "Analyze", time: "24 hours", desc: "Our AI engines process thousands of data points instantly" },
                { step: "03", title: "Customize", time: "48 hours", desc: "Receive tailored financing solutions designed for your growth" },
                { step: "04", title: "Launch", time: "72 hours", desc: "Access capital and start scaling exponentially" }
              ].map((item, index) => (
                <div
                  key={index}
                  className={`relative flex items-center mb-16 last:mb-0 animate-on-scroll opacity-0 ${
                    index % 2 === 0 ? 'justify-start' : 'justify-end'
                  }`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-16 text-right' : 'pl-16 text-left'}`}>
                    <div className="glass-premium rounded-2xl p-6 hover:scale-105 transition-all duration-500 group">
                      <div className="flex items-center gap-4 mb-3">
                        <div className="font-orbitron text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-bright-azure to-gradient-end">
                          {item.step}
                        </div>
                        <div className="flex-1">
                          <h4 className="text-xl font-semibold text-white">{item.title}</h4>
                          <p className="text-xs text-bright-azure font-medium uppercase tracking-wider">{item.time}</p>
                        </div>
                      </div>
                      <p className="text-white/60">{item.desc}</p>
                    </div>
                  </div>
                  
                  {/* Center dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-bright-azure to-gradient-end rounded-full neon-glow"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Globe, metric: "50+", label: "Countries Served" },
              { icon: Users, metric: "1000+", label: "Businesses Funded" },
              { icon: Shield, metric: "99.9%", label: "Security Rating" },
              { icon: Rocket, metric: "4.9/5", label: "Client Satisfaction" }
            ].map((item, index) => (
              <div
                key={index}
                className="text-center animate-on-scroll opacity-0 translate-y-10"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-bright-azure/20 to-gradient-end/20 mb-4">
                  <item.icon className="w-6 h-6 text-bright-azure" />
                </div>
                <div className="text-3xl font-orbitron font-bold text-white mb-2">{item.metric}</div>
                <div className="text-sm text-white/50 font-medium">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
