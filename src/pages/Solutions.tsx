
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CircleDollarSign, FileText, Receipt, ShoppingCart, TrendingUp, BarChart3 } from 'lucide-react';

const SolutionsPage = () => {
  const solutions = [
    {
      title: "Revolving Lines of Credit",
      description: "Continuous source of funding that you can access as needed. Best for variable spend on inventory / marketing.",
      icon: CircleDollarSign,
      details: [
        "Flexible draw and repayment schedule",
        "Interest only on funds used",
        "Perfect for seasonal businesses",
        "Scale with your inventory needs"
      ]
    },
    {
      title: "Term Loans",
      description: "Committed facility that you pay back over a set time with fixed payment terms. Best for planned expenses / opex.",
      icon: FileText,
      details: [
        "Predictable monthly payments",
        "Multi-year terms available",
        "Lower cost of capital",
        "Ideal for equipment purchases"
      ]
    },
    {
      title: "Receivables / Invoice Financing",
      description: "Allows a business to unlock working capital from near term revenue opportunities (i.e. wholesale).",
      icon: Receipt,
      details: [
        "Immediate cash flow improvement",
        "Advance rates up to 90%",
        "No long-term commitment",
        "Perfect for B2B businesses"
      ]
    },
    {
      title: "Purchase Order Financing",
      description: "Cash advance that can be used to pay your suppliers in order to fulfill larger orders without capital constraints.",
      icon: ShoppingCart,
      details: [
        "Fund large orders without equity dilution",
        "Quick approval process",
        "Competitive advance rates",
        "Scale with order size"
      ]
    },
    {
      title: "Revenue Based / Cohort Financing",
      description: "Alternative form of financing where a business can borrow a lump sum against the future value of their customers.",
      icon: TrendingUp,
      details: [
        "No personal guarantees required",
        "Payments scale with revenue",
        "Perfect for subscription models",
        "Preserve equity ownership"
      ]
    },
    {
      title: "Growth Capital",
      description: "Flexible facility that enables growth underwritten to assets and/or cash flow. Can be used for a variety of purposes.",
      icon: BarChart3,
      details: [
        "Customized structure for your needs",
        "Multi-purpose funding",
        "Competitive rates",
        "Partnership approach"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <section className="pt-32 pb-20 bg-white">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-bright-azure/10 border border-bright-azure/20 mb-8">
                <div className="w-2 h-2 bg-bright-azure rounded-full mr-3"></div>
                <span className="text-sm font-medium text-bright-azure tracking-wider uppercase">Financing Solutions</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-montserrat font-bold text-deep-navy mb-6 leading-tight">
                How We Solve Your Business Needs
              </h1>
              <p className="text-xl text-near-black/70 max-w-4xl mx-auto leading-relaxed">
                At Deep Ocean Partners, we provide a comprehensive suite of financing solutions designed to meet the diverse needs of growing businesses. Our data-driven approach ensures you get the right capital structure for your unique situation.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
              {solutions.map((solution, index) => {
                const IconComponent = solution.icon;
                return (
                  <Card key={index} className="border border-soft-gray hover:border-bright-azure/30 transition-all duration-300 hover:shadow-xl group h-full bg-white">
                    <CardHeader className="pb-4">
                      <div className="mb-6">
                        <div className="w-14 h-14 bg-deep-navy rounded-xl flex items-center justify-center mb-4 group-hover:bg-bright-azure transition-colors duration-300">
                          <IconComponent className="h-7 w-7 text-white" />
                        </div>
                        <CardTitle className="text-xl font-montserrat font-semibold text-deep-navy mb-3">
                          {solution.title}
                        </CardTitle>
                        <CardDescription className="text-base text-near-black/70 leading-relaxed">
                          {solution.description}
                        </CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <h4 className="font-montserrat font-semibold text-deep-navy mb-4 text-sm uppercase tracking-wider">Key Benefits:</h4>
                      <ul className="space-y-3">
                        {solution.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-start space-x-3">
                            <div className="w-1.5 h-1.5 bg-bright-azure rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-near-black/80 text-sm leading-relaxed">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Process Section */}
            <div className="bg-deep-navy rounded-2xl p-12 mb-20 relative overflow-hidden">
              <div className="absolute inset-0 ocean-pattern opacity-30"></div>
              <div className="relative z-10">
                <h3 className="text-3xl font-montserrat font-bold text-white mb-4 text-center">
                  Our Data-Driven Approach
                </h3>
                <p className="text-lg text-white/80 text-center mb-12 max-w-3xl mx-auto">
                  We leverage cutting-edge technology and deep financial expertise to deliver customized solutions
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center group">
                    <div className="bg-bright-azure rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white font-bold text-2xl">1</span>
                    </div>
                    <h4 className="font-montserrat font-semibold text-white mb-3 text-lg">Data Integration</h4>
                    <p className="text-white/80 leading-relaxed">
                      We connect to your existing systems to capture real-time business metrics and cash flow patterns
                    </p>
                  </div>
                  
                  <div className="text-center group">
                    <div className="bg-bright-azure rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white font-bold text-2xl">2</span>
                    </div>
                    <h4 className="font-montserrat font-semibold text-white mb-3 text-lg">AI Analysis</h4>
                    <p className="text-white/80 leading-relaxed">
                      Our proprietary models analyze performance data and predict future growth trajectories
                    </p>
                  </div>
                  
                  <div className="text-center group">
                    <div className="bg-bright-azure rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white font-bold text-2xl">3</span>
                    </div>
                    <h4 className="font-montserrat font-semibold text-white mb-3 text-lg">Custom Structure</h4>
                    <p className="text-white/80 leading-relaxed">
                      We design a financing solution that perfectly aligns with your business model and goals
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center bg-gradient-to-br from-bright-azure/5 to-deep-navy/5 rounded-2xl p-12">
              <h3 className="text-3xl font-montserrat font-bold text-deep-navy mb-4">
                Ready to Accelerate Your Growth?
              </h3>
              <p className="text-lg text-near-black/70 mb-8 max-w-2xl mx-auto">
                Our team is ready to craft a financing solution tailored to your unique business needs
              </p>
              <a 
                href="/contact" 
                className="inline-flex items-center px-8 py-4 bg-bright-azure hover:bg-bright-azure/90 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Get Your Custom Term Sheet
                <div className="ml-3 w-2 h-2 bg-white rounded-full"></div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SolutionsPage;
