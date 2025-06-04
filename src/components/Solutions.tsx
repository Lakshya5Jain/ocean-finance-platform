
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CircleDollarSign, FileText, Receipt, ShoppingCart, TrendingUp, Rocket } from 'lucide-react';

const Solutions = () => {
  const solutions = [
    {
      title: "Revolving Lines of Credit",
      description: "Continuous funding access for variable inventory and marketing spend.",
      icon: CircleDollarSign,
      color: "text-blue-600"
    },
    {
      title: "Term Loans",
      description: "Fixed payment schedules for planned expenses and operational growth.",
      icon: FileText,
      color: "text-green-600"
    },
    {
      title: "Receivables Financing",
      description: "Unlock working capital from near-term revenue opportunities.",
      icon: Receipt,
      color: "text-purple-600"
    },
    {
      title: "Purchase Order Financing",
      description: "Cash advances to fulfill larger orders without capital constraints.",
      icon: ShoppingCart,
      color: "text-orange-600"
    },
    {
      title: "Revenue Based Financing",
      description: "Borrow against future customer value with flexible repayment.",
      icon: TrendingUp,
      color: "text-red-600"
    },
    {
      title: "Growth Capital",
      description: "Flexible facilities for diverse growth initiatives and expansion.",
      icon: Rocket,
      color: "text-indigo-600"
    }
  ];

  return (
    <section id="solutions" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-primary mb-6">
              Financing Solutions for Every Stage
            </h2>
            <p className="text-xl text-gray-600 font-montserrat max-w-3xl mx-auto">
              Custom debt products designed to meet your unique business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {solutions.map((solution, index) => {
              const IconComponent = solution.icon;
              return (
                <Card key={index} className="border-2 hover:border-secondary transition-all duration-300 hover:shadow-xl group">
                  <CardHeader>
                    <div className="mb-4">
                      <IconComponent className={`h-12 w-12 ${solution.color} group-hover:scale-110 transition-transform duration-300`} />
                    </div>
                    <CardTitle className="font-montserrat text-primary text-lg">{solution.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="font-montserrat text-gray-600">
                      {solution.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Client Logos Carousel */}
          <div className="mb-16">
            <h3 className="text-2xl font-montserrat font-bold text-primary mb-8 text-center">
              Trusted by Industry Leaders
            </h3>
            <div className="relative overflow-hidden">
              <div className="flex animate-scroll">
                {[...Array(2)].map((_, setIndex) => (
                  <div key={setIndex} className="flex space-x-12 min-w-full">
                    {['Ring Concierge', 'Geologie', 'Juvenon', 'Naadam', 'Cure', 'Diggs', 'Haven'].map((company, index) => (
                      <div key={`${setIndex}-${index}`} className="flex-shrink-0 bg-gray-100 px-8 py-4 rounded-lg grayscale hover:grayscale-0 transition-all duration-300">
                        <span className="font-montserrat font-semibold text-gray-700">{company}</span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Enhanced Industries Section */}
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8">
            <h3 className="text-2xl font-montserrat font-bold text-primary mb-8 text-center">
              Industries We Serve
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {[
                { name: "Direct Consumer E-commerce", emoji: "🛍️" },
                { name: "B2B Hard Assets", emoji: "🏭" },
                { name: "SaaS", emoji: "💻" },
                { name: "Fintech/Specialty Finance", emoji: "💳" },
                { name: "GPU Hardware", emoji: "🖥️" },
                { name: "Emerging Verticals", emoji: "🚀" }
              ].map((industry, index) => (
                <div key={index} className="bg-white rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow duration-300 group">
                  <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">{industry.emoji}</div>
                  <span className="font-montserrat font-medium text-gray-700 text-sm">{industry.name}</span>
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
