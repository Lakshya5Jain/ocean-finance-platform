
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CircleDollarSign, FileText, Receipt, ShoppingCart, TrendingUp, Building, Laptop, CreditCard, Cpu, Rocket, ArrowUpRight } from 'lucide-react';

const Solutions = () => {
  const solutions = [
    {
      title: "Revolving Lines of Credit",
      description: "Continuous funding access for variable inventory and marketing spend.",
      icon: CircleDollarSign,
    },
    {
      title: "Term Loans",
      description: "Fixed payment schedules for planned expenses and operational growth.",
      icon: FileText,
    },
    {
      title: "Receivables Financing",
      description: "Unlock working capital from near-term revenue opportunities.",
      icon: Receipt,
    },
    {
      title: "Purchase Order Financing",
      description: "Cash advances to fulfill larger orders without capital constraints.",
      icon: ShoppingCart,
    },
    {
      title: "Revenue Based Financing",
      description: "Borrow against future customer value with flexible repayment.",
      icon: TrendingUp,
    },
    {
      title: "Growth Capital",
      description: "Flexible capital to accelerate your company's expansion and strategic initiatives.",
      icon: ArrowUpRight,
    }
  ];

  return (
    <section className="section-spacing bg-white relative overflow-hidden">
      {/* Gradient Wave */}
      <div className="absolute top-0 right-0 w-full h-1 gradient-wave"></div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 data-dots"></div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-bright-azure/10 border border-bright-azure/20 mb-8">
              <div className="w-2 h-2 bg-bright-azure rounded-full mr-3"></div>
              <span className="text-sm font-medium text-bright-azure tracking-wider">FINANCING INNOVATION</span>
            </div>
            
            <h2 className="text-display-lg text-near-black mb-8 leading-tight">
              Financing Solutions for
              <span className="block text-bright-azure">Every Stage</span>
            </h2>
            
            <p className="text-body text-near-black/80 max-w-4xl mx-auto">
              Bespoke debt products crafted for your unique business trajectory. Whether you need working capital, growth funding, or adaptive repayment structures, Deep Ocean Partners delivers comprehensive solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {solutions.map((solution, index) => {
              const IconComponent = solution.icon;
              return (
                <Card key={index} className="card-custom hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-soft-gray">
                  <CardHeader className="pb-4">
                    <div className="w-12 h-12 bg-deep-navy rounded-lg flex items-center justify-center mb-4">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-lg font-semibold text-near-black">{solution.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <CardDescription className="text-near-black/70 leading-relaxed mb-4">
                      {solution.description}
                    </CardDescription>
                    <div className="flex items-center text-sm font-medium text-bright-azure hover:text-bright-azure/80 transition-colors">
                      <span>Learn More</span>
                      <ArrowUpRight className="ml-1 h-4 w-4" />
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Client Logos Carousel */}
          <div className="mb-16">
            <h3 className="text-display-md text-near-black mb-10 text-center">
              Trusted by <span className="text-bright-azure">Industry Leaders</span>
            </h3>
            <div className="relative overflow-hidden bg-soft-gray/30 rounded-lg p-8 border border-soft-gray">
              <div className="flex animate-scroll">
                {[...Array(2)].map((_, setIndex) => (
                  <div key={setIndex} className="flex space-x-12 min-w-full">
                    {["Ring Concierge", "Geologie", "Juvenon", "Naadam", "Cure", "Diggs", "Haven"].map((company, index) => (
                      <div key={`${setIndex}-${index}`} className="flex-shrink-0 bg-white px-6 py-3 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-soft-gray">
                        <span className="font-medium text-near-black">{company}</span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Industries Section */}
          <div className="bg-deep-navy rounded-lg p-12 relative overflow-hidden">
            <div className="absolute inset-0 ocean-pattern"></div>
            <div className="relative z-10">
              <h3 className="text-display-md text-light-text mb-4 text-center">
                Industries We <span className="text-bright-azure">Serve</span>
              </h3>
              <p className="text-body text-light-text/90 max-w-3xl mx-auto text-center mb-12">
                Specialized financing solutions tailored to the unique needs of each industry vertical.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                ].map((industry, index) => {
                  const Icon = industry.icon;
                  return (
                    <div key={index} className="bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-all duration-300">
                      <Icon className="w-8 h-8 mb-4 text-bright-azure" />
                      <h4 className="font-semibold text-light-text mb-3">{industry.name}</h4>
                      <p className="text-light-text/80 text-sm leading-relaxed">{industry.description}</p>
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
