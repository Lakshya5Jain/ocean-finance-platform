import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CircleDollarSign, FileText, Receipt, ShoppingCart, TrendingUp, Building, Laptop, CreditCard, Cpu, Rocket, ArrowUpRight, Sparkles, ChevronRight } from 'lucide-react';
import { useEffect, useRef } from 'react';

const Solutions = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const solutions = [
    {
      title: "Revolving Lines of Credit",
      description: "Continuous funding access for variable inventory and marketing spend.",
      icon: CircleDollarSign,
      metric: "$50M",
      metricLabel: "Available",
      gradient: "from-bright-azure to-gradient-mid"
    },
    {
      title: "Term Loans",
      description: "Fixed payment schedules for planned expenses and operational growth.",
      icon: FileText,
      metric: "24hr",
      metricLabel: "Approval",
      gradient: "from-gradient-mid to-gradient-end"
    },
    {
      title: "Receivables Financing",
      description: "Unlock working capital from near-term revenue opportunities.",
      icon: Receipt,
      metric: "95%",
      metricLabel: "Advance Rate",
      gradient: "from-gradient-end to-bright-azure"
    },
    {
      title: "Purchase Order Financing",
      description: "Cash advances to fulfill larger orders without capital constraints.",
      icon: ShoppingCart,
      metric: "100%",
      metricLabel: "Coverage",
      gradient: "from-bright-azure to-gradient-mid"
    },
    {
      title: "Revenue Based Financing",
      description: "Borrow against future customer value with flexible repayment.",
      icon: TrendingUp,
      metric: "3-5%",
      metricLabel: "of Revenue",
      gradient: "from-gradient-mid to-gradient-end"
    },
    {
      title: "Growth Capital",
      description: "Flexible capital to accelerate your company's expansion and strategic initiatives.",
      icon: ArrowUpRight,
      metric: "10X",
      metricLabel: "Growth",
      gradient: "from-gradient-end to-bright-azure"
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
    <section ref={sectionRef} className="section-spacing bg-gradient-to-b from-white via-soft-gray/10 to-white relative overflow-hidden">
      {/* Advanced background effects */}
      <div className="absolute inset-0 data-grid opacity-5"></div>
      <div className="cyber-lines"></div>
      
      {/* Floating orbs */}
      <div className="floating-orb w-96 h-96 top-0 right-0 opacity-10"></div>
      <div className="floating-orb w-64 h-64 bottom-1/4 left-0 opacity-10" style={{animationDelay: '5s'}}></div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-20 animate-on-scroll opacity-0 translate-y-10">
            <div className="inline-flex items-center px-6 py-3 rounded-full glass-premium bg-gradient-to-r from-bright-azure/5 to-gradient-end/5 mb-12 group hover:scale-105 transition-all duration-500">
              <Sparkles className="w-4 h-4 text-bright-azure mr-3 animate-pulse" />
              <span className="text-xs font-orbitron font-semibold text-transparent bg-clip-text bg-gradient-to-r from-bright-azure to-gradient-end tracking-[3px] uppercase">
                Quantum Finance Solutions
              </span>
              <div className="ml-3 w-8 h-0.5 bg-gradient-to-r from-gradient-mid to-transparent rounded-full"></div>
            </div>
            
            <h2 className="text-6xl md:text-7xl font-space-grotesk font-bold text-near-black mb-8 leading-tight">
              <span className="font-light">Capital</span>
              <br />
              <span className="relative inline-block">
                <span className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-bright-azure via-gradient-mid to-gradient-end blur-2xl opacity-60">
                  ENGINEERED
                </span>
                <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-bright-azure via-gradient-mid to-gradient-end">
                  ENGINEERED
                </span>
              </span>
              <br />
              <span className="font-light">For Scale</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-near-black/60 max-w-4xl mx-auto leading-relaxed">
              AI-optimized financing structures that adapt to your growth velocity. 
              <span className="text-bright-azure font-medium"> Real-time</span> approvals, 
              <span className="text-gradient-end font-medium"> predictive</span> pricing.
            </p>
          </div>

          {/* Solutions Grid with Futuristic Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {solutions.map((solution, index) => {
              const IconComponent = solution.icon;
              return (
                <div
                  key={index}
                  className="animate-on-scroll opacity-0 translate-y-10"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative group">
                    {/* Card glow effect */}
                    <div className={`absolute -inset-0.5 bg-gradient-to-r ${solution.gradient} rounded-3xl opacity-0 group-hover:opacity-75 blur-xl transition-all duration-500`}></div>
                    
                    <Card className="relative card-futuristic bg-white/95 rounded-3xl border-0 h-full transform transition-all duration-500 group-hover:scale-[1.02]">
                      <CardHeader className="pb-4">
                        <div className="flex items-center justify-between mb-4">
                          <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${solution.gradient} p-0.5`}>
                            <div className="w-full h-full rounded-2xl bg-white flex items-center justify-center">
                              <IconComponent className="h-7 w-7 text-near-black" />
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-orbitron font-bold text-transparent bg-clip-text bg-gradient-to-r from-bright-azure to-gradient-end">
                              {solution.metric}
                            </div>
                            <div className="text-xs text-near-black/50 font-medium uppercase tracking-wider">
                              {solution.metricLabel}
                            </div>
                          </div>
                        </div>
                        <CardTitle className="text-xl font-semibold text-near-black">{solution.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <CardDescription className="text-near-black/60 leading-relaxed mb-6">
                          {solution.description}
                        </CardDescription>
                        <button className="group/btn flex items-center text-sm font-semibold text-bright-azure hover:text-gradient-end transition-all duration-300">
                          <span>Configure Solution</span>
                          <ChevronRight className="ml-1 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                        </button>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Client Logos with Futuristic Design */}
          <div className="mb-20 animate-on-scroll opacity-0 translate-y-10">
            <h3 className="text-4xl font-space-grotesk font-semibold text-near-black mb-12 text-center">
              Powering <span className="text-transparent bg-clip-text bg-gradient-to-r from-bright-azure to-gradient-end">Unicorns</span> & <span className="text-transparent bg-clip-text bg-gradient-to-r from-gradient-mid to-gradient-end">Scale-ups</span>
            </h3>
            <div className="relative overflow-hidden rounded-3xl glass-premium p-8 bg-gradient-to-r from-bright-azure/5 via-transparent to-gradient-end/5">
              <div className="flex animate-scroll">
                {[...Array(2)].map((_, setIndex) => (
                  <div key={setIndex} className="flex space-x-8 min-w-full">
                    {["Ring Concierge", "Geologie", "Juvenon", "Naadam", "Cure", "Diggs", "Haven"].map((company, index) => (
                      <div key={`${setIndex}-${index}`} className="flex-shrink-0 group">
                        <div className="px-8 py-4 rounded-2xl bg-white/80 backdrop-blur-sm border border-white/50 hover:border-bright-azure/30 transition-all duration-300 hover:scale-105">
                          <span className="font-space-grotesk font-medium text-near-black/80 group-hover:text-bright-azure transition-colors duration-300">{company}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Industries Section with Futuristic Grid */}
          <div className="relative rounded-3xl overflow-hidden">
            {/* Background with gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-deep-navy via-near-black to-deep-navy"></div>
            <div className="absolute inset-0 data-grid opacity-10"></div>
            <div className="absolute inset-0 holographic opacity-5"></div>
            
            <div className="relative z-10 p-16">
              <h3 className="text-5xl font-space-grotesk font-bold text-white mb-6 text-center">
                <span className="font-light">Industries</span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-bright-azure via-gradient-mid to-gradient-end">Transformed</span>
              </h3>
              <p className="text-xl text-white/70 max-w-3xl mx-auto text-center mb-16 font-light">
                Sector-specific algorithms and underwriting models designed for your industry's unique dynamics.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { 
                    name: "Direct Consumer E-commerce", 
                    icon: ShoppingCart, 
                    description: "AI-powered inventory financing with predictive demand modeling",
                    stat: "2.5x ROI"
                  },
                  { 
                    name: "B2B Hard Assets", 
                    icon: Building, 
                    description: "Smart contracts for equipment financing and automated valuation",
                    stat: "$100M+"
                  },
                  { 
                    name: "SaaS", 
                    icon: Laptop, 
                    description: "MRR-based underwriting with real-time revenue tracking",
                    stat: "48hr funding"
                  },
                  { 
                    name: "Fintech/Specialty Finance", 
                    icon: CreditCard, 
                    description: "Embedded finance infrastructure with API-first architecture",
                    stat: "99.9% uptime"
                  },
                  { 
                    name: "GPU Hardware", 
                    icon: Cpu, 
                    description: "Compute power financing with utilization-based repayment",
                    stat: "0% downtime"
                  },
                  { 
                    name: "Emerging Verticals", 
                    icon: Rocket, 
                    description: "Flexible structures for new markets and business models",
                    stat: "∞ potential"
                  }
                ].map((industry, index) => {
                  const Icon = industry.icon;
                  return (
                    <div
                      key={index}
                      className="animate-on-scroll opacity-0 translate-y-10"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="group card-futuristic rounded-2xl p-6 h-full hover:scale-[1.02] transition-all duration-500">
                        <div className="flex items-center justify-between mb-4">
                          <Icon className="w-10 h-10 text-bright-azure" />
                          <span className="text-xs font-orbitron font-bold text-gradient-end uppercase">{industry.stat}</span>
                        </div>
                        <h4 className="font-semibold text-white text-lg mb-3">{industry.name}</h4>
                        <p className="text-white/60 text-sm leading-relaxed">{industry.description}</p>
                        <div className="mt-4 h-0.5 w-full bg-gradient-to-r from-bright-azure via-gradient-mid to-gradient-end rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
