import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CircleDollarSign, FileText, Receipt, ShoppingCart, TrendingUp, Building, Laptop, CreditCard, Cpu, Rocket, ArrowUpRight } from 'lucide-react';

const Solutions = () => {
  const solutions = [
    {
      title: "Revolving Lines of Credit",
      description: "Continuous funding access for variable inventory and marketing spend.",
      icon: CircleDollarSign,
      color: "text-[#052C60]"
    },
    {
      title: "Term Loans",
      description: "Fixed payment schedules for planned expenses and operational growth.",
      icon: FileText,
      color: "text-[#052C60]"
    },
    {
      title: "Receivables Financing",
      description: "Unlock working capital from near-term revenue opportunities.",
      icon: Receipt,
      color: "text-[#052C60]"
    },
    {
      title: "Purchase Order Financing",
      description: "Cash advances to fulfill larger orders without capital constraints.",
      icon: ShoppingCart,
      color: "text-[#052C60]"
    },
    {
      title: "Revenue Based Financing",
      description: "Borrow against future customer value with flexible repayment.",
      icon: TrendingUp,
      color: "text-[#052C60]"
    },
    {
      title: "Growth Capital",
      description: "Flexible capital to accelerate your company's expansion and strategic initiatives.",
      icon: ArrowUpRight,
      color: "text-[#052C60]"
    }
  ];

  return (
    <section id="solutions" className="py-24 bg-gradient-to-br from-white via-slate-50/30 to-blue-50/20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-1/3 left-1/3 w-56 h-56 bg-blue-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-56 h-56 bg-cyan-400 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-xs font-medium mb-5 hover:cursor-pointer hover:bg-blue-100/80 transition-all duration-300">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
              FINANCING INNOVATION
            </div>
            <h2 className="text-4xl md:text-5xl font-extralight text-slate-900 mb-6 leading-tight">
              Financing Solutions for
              <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent font-light">
                Every Stage
              </span>
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
              Bespoke debt products crafted for your unique business trajectory. Whether you need working capital, growth funding, or adaptive repayment structures, Deep Ocean Partners delivers a comprehensive suite of solutions. Our team merges decades of expertise with data-driven precision to secure the right capital at the pivotal moment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {solutions.map((solution, index) => {
              const IconComponent = solution.icon;
              return (
                <div key={index} className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-cyan-600/5 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-500"></div>
                  <Card className="relative border-0 bg-white/60 backdrop-blur-lg rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 hover:transform hover:scale-103 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-lg"></div>
                    <CardHeader className="relative z-10 pb-3">
                      <div className="mb-5">
                        <div className="w-14 h-14 bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                          <IconComponent className="h-7 w-7 text-white" />
                        </div>
                      </div>
                      <CardTitle className="text-lg font-semibold text-slate-900 mb-2">{solution.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="relative z-10 pt-0">
                      <CardDescription className="text-slate-600 text-sm leading-relaxed mb-5">
                        {solution.description}
                      </CardDescription>
                      <div className="flex items-center text-xs font-medium text-blue-600 hover:text-blue-700 transition-all duration-300">
                        <span>Learn More</span>
                        <div className="ml-2 w-3.5 h-3.5 bg-blue-50 rounded-full flex items-center justify-center">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>

          {/* Client Logos Carousel */}
          <div className="mb-16">
            <h3 className="text-2xl font-extralight text-slate-900 mb-10 text-center">
              Trusted by <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent font-light">Industry Leaders</span>
            </h3>
            <div className="relative overflow-hidden bg-white/40 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <div className="flex animate-scroll">
                {[...Array(2)].map((_, setIndex) => (
                  <div key={setIndex} className="flex space-x-12 min-w-full">
                    {["Ring Concierge", "Geologie", "Juvenon", "Naadam", "Cure", "Diggs", "Haven"].map((company, index) => (
                      <div key={`${setIndex}-${index}`} className="flex-shrink-0 bg-gradient-to-r from-slate-50 to-slate-100 px-6 py-3 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-slate-200/40">
                        <span className="font-medium text-slate-700 text-md">{company}</span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Enhanced Industries Section */}
          <div className="bg-gradient-to-br from-slate-900 via-blue-900/90 to-slate-800/90 rounded-2xl p-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/8 to-cyan-600/8"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-extralight text-white mb-3 text-center">
                Industries We <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent font-light">Serve</span>
              </h3>
              <p className="text-slate-300 text-md max-w-3xl mx-auto text-center mb-10">
                Specialized financing solutions tailored to the unique needs of each industry vertical we serve.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { 
                    name: "Direct Consumer E-commerce", 
                    icon: ShoppingCart, 
                    description: "Online retailers and DTC brands with inventory financing needs and seasonal cash flow requirements." 
                  },
                  { 
                    name: "B2B Hard Assets", 
                    icon: Building, 
                    description: "Manufacturing and distribution companies with equipment financing and working capital needs." 
                  },
                  { 
                    name: "SaaS", 
                    icon: Laptop, 
                    description: "Software companies seeking growth capital and predictable revenue-based financing solutions." 
                  },
                  { 
                    name: "Fintech/Specialty Finance", 
                    icon: CreditCard, 
                    description: "Financial technology companies and alternative lenders requiring scalable funding structures." 
                  },
                  { 
                    name: "GPU Hardware", 
                    icon: Cpu, 
                    description: "AI and cryptocurrency mining operations needing equipment financing and infrastructure funding." 
                  },
                  { 
                    name: "Emerging Verticals", 
                    icon: Rocket, 
                    description: "Innovative companies in new markets requiring flexible capital for rapid growth and market expansion." 
                  }
                ].map((industry, index) => (
                  <div key={index} className="group relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-cyan-600/10 rounded-xl blur-lg group-hover:blur-xl transition-all duration-500"></div>
                    <div className="relative bg-white/5 backdrop-blur-lg rounded-xl p-5 border border-white/10 hover:border-white/20 transition-all duration-500 hover:transform hover:scale-103">
                      <industry.icon className="w-9 h-9 mb-3 text-blue-400 group-hover:scale-105 transition-transform duration-300" />
                      <h4 className="text-md font-semibold text-white mb-2">{industry.name}</h4>
                      <p className="text-slate-300 text-sm leading-relaxed">{industry.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
