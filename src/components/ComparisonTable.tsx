import { Check, X, Zap, Shield, Clock, TrendingUp, Users } from 'lucide-react';
import { useEffect, useRef } from 'react';

const ComparisonTable = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const features = [
    {
      feature: "High advance rates",
      icon: TrendingUp,
      metric: "95%",
      ourSolution: true,
      traditional: false,
      fintech: true,
      description: "Maximum capital availability"
    },
    {
      feature: "Multi-year loans",
      icon: Clock,
      metric: "5+ years",
      ourSolution: true,
      traditional: true,
      fintech: false,
      description: "Long-term growth financing"
    },
    {
      feature: "Flexible terms",
      icon: Shield,
      metric: "Custom",
      ourSolution: true,
      traditional: false,
      fintech: false,
      description: "Adaptive to your business model"
    },
    {
      feature: "Speed to decision",
      icon: Zap,
      metric: "24hrs",
      ourSolution: true,
      traditional: false,
      fintech: true,
      description: "AI-powered instant underwriting"
    },
    {
      feature: "Long-term partners",
      icon: Users,
      metric: "∞",
      ourSolution: true,
      traditional: true,
      fintech: false,
      description: "Growing with you forever"
    }
  ];

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
    <section ref={sectionRef} className="py-32 bg-gradient-to-b from-white via-soft-gray/5 to-white relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 data-grid opacity-5"></div>
      <div className="cyber-lines"></div>
      
      {/* Floating orbs */}
      <div className="floating-orb w-80 h-80 top-0 left-0 opacity-10"></div>
      <div className="floating-orb w-64 h-64 bottom-0 right-0 opacity-10" style={{animationDelay: '3s'}}></div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16 animate-on-scroll opacity-0 translate-y-10">
            <div className="inline-flex items-center px-6 py-3 rounded-full glass-premium bg-gradient-to-r from-bright-azure/5 to-gradient-end/5 mb-12 group hover:scale-105 transition-all duration-500">
              <Shield className="w-4 h-4 text-bright-azure mr-3" />
              <span className="text-xs font-orbitron font-semibold text-transparent bg-clip-text bg-gradient-to-r from-bright-azure to-gradient-end tracking-[3px] uppercase">
                Competitive Analysis
              </span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-space-grotesk font-bold text-near-black mb-8 leading-tight">
              Why We're
              <span className="relative inline-block ml-4">
                <span className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-bright-azure via-gradient-mid to-gradient-end blur-2xl opacity-60">
                  DIFFERENT
                </span>
                <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-bright-azure via-gradient-mid to-gradient-end">
                  DIFFERENT
                </span>
              </span>
            </h2>
            
            <p className="text-xl text-near-black/60 max-w-3xl mx-auto">
              Experience the future of business financing with our quantum-leap advantages
            </p>
          </div>
          
          {/* Futuristic comparison table */}
          <div className="relative rounded-3xl overflow-hidden animate-on-scroll opacity-0 translate-y-10">
            {/* Table glow effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-bright-azure via-gradient-mid to-gradient-end opacity-20 blur-xl"></div>
            
            <div className="relative bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-white/50">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gradient-to-r from-deep-navy to-near-black">
                      <th className="px-8 py-6 text-left">
                        <span className="font-space-grotesk font-semibold text-white/80 text-sm uppercase tracking-wider">Feature</span>
                      </th>
                      <th className="px-8 py-6 text-center relative">
                        <div className="absolute inset-0 bg-gradient-to-b from-bright-azure/20 to-transparent"></div>
                        <div className="relative flex flex-col items-center">
                          <img 
                            src="/lovable-uploads/60420b69-db1d-4895-aac8-8227d34c68b2.png" 
                            alt="Deep Ocean Partners" 
                            className="h-10 w-auto filter brightness-0 invert mb-2"
                          />
                          <span className="text-xs font-orbitron font-bold text-bright-azure uppercase tracking-wider">Ocean Finance</span>
                        </div>
                      </th>
                      <th className="px-8 py-6 text-center">
                        <span className="font-space-grotesk font-semibold text-white/60 text-sm uppercase tracking-wider">Traditional</span>
                      </th>
                      <th className="px-8 py-6 text-center">
                        <span className="font-space-grotesk font-semibold text-white/60 text-sm uppercase tracking-wider">Fintech</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {features.map((row, index) => {
                      const IconComponent = row.icon;
                      return (
                        <tr 
                          key={index} 
                          className="border-t border-gray-100 hover:bg-gradient-to-r hover:from-bright-azure/5 hover:to-gradient-end/5 transition-all duration-300 group animate-on-scroll opacity-0"
                          style={{ animationDelay: `${index * 0.1}s` }}
                        >
                          <td className="px-8 py-6">
                            <div className="flex items-center gap-4">
                              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-bright-azure/10 to-gradient-end/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <IconComponent className="h-6 w-6 text-bright-azure" />
                              </div>
                              <div>
                                <div className="font-semibold text-near-black flex items-center gap-2">
                                  {row.feature}
                                  <span className="text-xs font-orbitron font-bold text-bright-azure bg-bright-azure/10 px-2 py-1 rounded-full">
                                    {row.metric}
                                  </span>
                                </div>
                                <div className="text-sm text-near-black/50 mt-1">{row.description}</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-8 py-6 text-center bg-gradient-to-b from-bright-azure/5 to-transparent relative">
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <div className="absolute inset-0 bg-gradient-to-r from-bright-azure/10 via-gradient-mid/10 to-gradient-end/10"></div>
                            </div>
                            {row.ourSolution ? (
                              <div className="relative inline-flex items-center justify-center">
                                <div className="absolute inset-0 w-10 h-10 bg-gradient-to-r from-bright-azure to-gradient-end rounded-full blur-lg opacity-50"></div>
                                <Check className="relative h-8 w-8 text-gradient-end font-bold stroke-[3]" />
                              </div>
                            ) : (
                              <X className="h-7 w-7 text-gray-300 mx-auto" />
                            )}
                          </td>
                          <td className="px-8 py-6 text-center">
                            {row.traditional ? (
                              <Check className="h-6 w-6 text-green-500/70 mx-auto" />
                            ) : (
                              <X className="h-6 w-6 text-red-400/70 mx-auto" />
                            )}
                          </td>
                          <td className="px-8 py-6 text-center">
                            {row.fintech ? (
                              <Check className="h-6 w-6 text-green-500/70 mx-auto" />
                            ) : (
                              <X className="h-6 w-6 text-red-400/70 mx-auto" />
                            )}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              
              {/* Bottom gradient bar */}
              <div className="h-1 bg-gradient-to-r from-bright-azure via-gradient-mid to-gradient-end"></div>
            </div>
          </div>
          
          {/* CTA section */}
          <div className="text-center mt-16 animate-on-scroll opacity-0 translate-y-10">
            <p className="text-lg text-near-black/60 mb-8">
              Experience the <span className="font-semibold text-bright-azure">Ocean difference</span> — where technology meets expertise
            </p>
            <a href="/contact" className="inline-flex items-center px-8 py-4 btn-futuristic rounded-2xl text-white font-semibold tracking-wide gap-3 group">
              <span>Get Your Custom Analysis</span>
              <Zap className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
