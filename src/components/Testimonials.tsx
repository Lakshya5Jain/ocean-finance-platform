
import { Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Deep Ocean's product is fundamentally changing a CFO's toolbox by providing better availability & cash flow.",
      author: "Virgil Leung",
      title: "Founder",
      company: "GreenSpark"
    },
    {
      quote: "Deep Ocean issued the largest term sheet at terms that would enable us to grow and continue to access more capital.",
      author: "Nicole Wegman",
      title: "Founder",
      company: "Ring Concierge"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-montserrat font-bold text-primary text-center mb-16">
            Testimonials
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 relative">
                <Quote className="h-8 w-8 text-secondary mb-4" />
                <blockquote className="text-lg font-montserrat text-gray-700 mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center">
                  <div>
                    <div className="font-montserrat font-semibold text-primary">
                      {testimonial.author}
                    </div>
                    <div className="font-montserrat text-gray-600">
                      {testimonial.title}, {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
