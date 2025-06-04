
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Solutions = () => {
  const solutions = [
    {
      title: "Revolving Lines of Credit",
      description: "Continuous source of funding that you can access as needed. Best for variable spend on inventory / marketing.",
      icon: "🔄"
    },
    {
      title: "Term Loans",
      description: "Committed facility that you pay back over a set time with fixed payment terms. Best for planned expenses / opex.",
      icon: "📊"
    },
    {
      title: "Receivables / Invoice Financing",
      description: "Allows a business to unlock working capital from near term revenue opportunities (i.e. wholesale).",
      icon: "📋"
    },
    {
      title: "Purchase Order Financing",
      description: "Cash advance that can be used to pay your suppliers in order to fulfill larger orders without capital constraints.",
      icon: "🛒"
    },
    {
      title: "Revenue Based / Cohort Financing",
      description: "Alternative form of financing where a business can borrow a lump sum against the future value of their customers.",
      icon: "📈"
    },
    {
      title: "Growth Capital",
      description: "Flexible facility that enables growth underwritten to assets and/or cash flow. Can be used for a variety of purposes.",
      icon: "🚀"
    }
  ];

  const industries = [
    "Direct Consumer E-commerce",
    "B2B Hard Assets",
    "SaaS",
    "Fintech/Specialty Finance",
    "GPU Hardware",
    "Other Emerging Verticals"
  ];

  return (
    <section id="solutions" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-primary mb-6">
              Our Solutions to Your Diverse Business Needs
            </h2>
            <p className="text-xl text-gray-600 font-montserrat max-w-3xl mx-auto">
              We meet diverse business needs with flexible financing solutions tailored to your industry and growth stage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {solutions.map((solution, index) => (
              <Card key={index} className="border-2 hover:border-secondary transition-colors duration-300 hover:shadow-lg">
                <CardHeader>
                  <div className="text-3xl mb-2">{solution.icon}</div>
                  <CardTitle className="font-montserrat text-primary">{solution.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="font-montserrat text-gray-600">
                    {solution.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-montserrat font-bold text-primary mb-6 text-center">
              Industries We Serve
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {industries.map((industry, index) => (
                <div key={index} className="bg-white rounded-lg p-4 text-center shadow-sm">
                  <span className="font-montserrat font-medium text-gray-700">{industry}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
