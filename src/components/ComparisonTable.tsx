import { Check, X } from 'lucide-react';

const ComparisonTable = () => {
  const features = [
    {
      feature: "High advance rates",
      ourSolution: true,
      traditional: false,
      fintech: true
    },
    {
      feature: "Multi-year loans",
      ourSolution: true,
      traditional: true,
      fintech: false
    },
    {
      feature: "Flexible terms",
      ourSolution: true,
      traditional: false,
      fintech: false
    },
    {
      feature: "Speed to decision",
      ourSolution: true,
      traditional: false,
      fintech: true
    },
    {
      feature: "Long-term partners",
      ourSolution: true,
      traditional: true,
      fintech: false
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-montserrat font-bold text-primary text-center mb-12">
            Compare for yourself
          </h2>
          
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-6 py-4 text-left font-montserrat font-semibold text-gray-700">Feature</th>
                    <th className="px-6 py-4 text-center font-montserrat font-semibold text-secondary bg-secondary/5">
                      <div className="flex items-center justify-center">
                        <img 
                          src="/lovable-uploads/60420b69-db1d-4895-aac8-8227d34c68b2.png" 
                          alt="Deep Ocean Partners" 
                          className="h-8 w-auto"
                        />
                      </div>
                    </th>
                    <th className="px-6 py-4 text-center font-montserrat font-semibold text-gray-700">Traditional Lenders</th>
                    <th className="px-6 py-4 text-center font-montserrat font-semibold text-gray-700">Fintech Lenders</th>
                  </tr>
                </thead>
                <tbody>
                  {features.map((row, index) => (
                    <tr key={index} className="border-t border-gray-200 hover:bg-gray-50/50 transition-colors">
                      <td className="px-6 py-4 font-montserrat font-medium text-gray-700">
                        {row.feature}
                      </td>
                      <td className="px-6 py-4 text-center bg-secondary/5">
                        {row.ourSolution ? (
                          <Check className="h-7 w-7 text-green-600 mx-auto font-bold stroke-[3]" />
                        ) : (
                          <X className="h-7 w-7 text-red-500 mx-auto font-bold stroke-[3]" />
                        )}
                      </td>
                      <td className="px-6 py-4 text-center">
                        {row.traditional ? (
                          <Check className="h-6 w-6 text-green-600 mx-auto" />
                        ) : (
                          <X className="h-6 w-6 text-red-500 mx-auto" />
                        )}
                      </td>
                      <td className="px-6 py-4 text-center">
                        {row.fintech ? (
                          <Check className="h-6 w-6 text-green-600 mx-auto" />
                        ) : (
                          <X className="h-6 w-6 text-red-500 mx-auto" />
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
