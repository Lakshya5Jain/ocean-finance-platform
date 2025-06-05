
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
      color: "text-blue-600",
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
      color: "text-green-600",
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
      color: "text-purple-600",
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
      color: "text-orange-600",
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
      color: "text-red-600",
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
      color: "text-indigo-600",
      details: [
        "Customized structure for your needs",
        "Multi-purpose funding",
        "Competitive rates",
        "Partnership approach"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white font-montserrat">
      <Header />
      
      <section className="py-20 bg-white mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-montserrat font-bold text-primary mb-6">
                How We Solve Your Business Needs
              </h1>
              <p className="text-xl text-gray-600 font-montserrat max-w-4xl mx-auto">
                At Deep Ocean Partners, we provide a comprehensive suite of financing solutions designed to meet the diverse needs of growing businesses. Our data-driven approach ensures you get the right capital structure for your unique situation.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              {solutions.map((solution, index) => {
                const IconComponent = solution.icon;
                return (
                  <Card key={index} className="border-2 hover:border-secondary transition-all duration-300 hover:shadow-xl group h-full">
                    <CardHeader>
                      <div className="mb-4">
                        <IconComponent className={`h-12 w-12 ${solution.color} group-hover:scale-110 transition-transform duration-300`} />
                      </div>
                      <CardTitle className="font-montserrat text-primary text-xl">{solution.title}</CardTitle>
                      <CardDescription className="font-montserrat text-gray-600 text-base">
                        {solution.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <h4 className="font-montserrat font-semibold text-primary mb-3">Key Benefits:</h4>
                      <ul className="space-y-2">
                        {solution.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                            <span className="font-montserrat text-gray-700 text-sm">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Process Section */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 mb-16">
              <h3 className="text-2xl font-montserrat font-bold text-primary mb-8 text-center">
                Our Data-Driven Approach
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-2xl">1</span>
                  </div>
                  <h4 className="font-montserrat font-semibold text-primary mb-2">Data Integration</h4>
                  <p className="font-montserrat text-gray-600 text-sm">
                    We connect to your existing systems to capture real-time business metrics
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="bg-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-2xl">2</span>
                  </div>
                  <h4 className="font-montserrat font-semibold text-primary mb-2">AI Analysis</h4>
                  <p className="font-montserrat text-gray-600 text-sm">
                    Our models analyze cash flow patterns and predict future performance
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="bg-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-2xl">3</span>
                  </div>
                  <h4 className="font-montserrat font-semibold text-primary mb-2">Custom Structure</h4>
                  <p className="font-montserrat text-gray-600 text-sm">
                    We design a financing solution that perfectly fits your business model
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SolutionsPage;
