
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Team = () => {
  const teamMembers = [
    {
      name: "Alex Urdea, CFA",
      title: "Managing Partner",
      subtitle: "Institutional Investment Process",
      experience: [
        "Upper90: CoFounder / CIO ($1B+ AUM)",
        "Solus: Head of Strategy and Risk",
        "Advisor & Mentor to dozens of FinTech & Ecommerce companies",
        "Experience: Extensive 21+ year credit background with complex structuring capabilities across product portfolio."
      ]
    },
    {
      name: "Jon Kalikow",
      title: "Managing Partner",
      subtitle: "Complex Structuring, Deep Relationships",
      experience: [
        "Gamma Real Estate: CoFounder",
        "Solus: Head of Trading",
        "Morgan Stanley: Proprietary Convertible Trader",
        "Experience: Specialist in catalyst-driven markets with high barriers to entry including hard money lending."
      ]
    },
    {
      name: "Alexey Loganchuk",
      title: "Chief Data Scientist",
      subtitle: "",
      experience: [
        "Sidera Labs: CoFounder; Ecom VC",
        "Blackstone: Data Science Strategy",
        "JP Morgan: Head of Converts Platform"
      ]
    },
    {
      name: "Daniel Jacobini",
      title: "Head of Product",
      subtitle: "",
      experience: [
        "Sidera Labs: CoFounder; Ecom VC",
        "BlackRock: Data Lead, US Growth",
        "Point72: Co-head, Consumer Intelligence",
        "Education: BS/MS Applied Math"
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
                Seasoned Investment Team
              </h1>
              <p className="text-xl text-gray-600 font-montserrat max-w-4xl mx-auto">
                Mature team of subject matter experts with 50+ years of collective experience across asset management, hedge fund and private equity, combining the best of institutional investing, quant and data science.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-shadow duration-300">
                  <div className="w-24 h-24 bg-gradient-to-br from-secondary to-primary rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span className="font-montserrat font-bold text-white text-xl">
                      {member.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                    </span>
                  </div>
                  
                  <div className="text-center mb-6">
                    <h3 className="font-montserrat font-bold text-primary text-xl mb-2">
                      {member.name}
                    </h3>
                    <p className="font-montserrat text-secondary font-semibold mb-2">
                      {member.title}
                    </p>
                    {member.subtitle && (
                      <p className="font-montserrat text-gray-600 italic">
                        {member.subtitle}
                      </p>
                    )}
                  </div>

                  <div className="space-y-3">
                    {member.experience.map((exp, expIndex) => (
                      <div key={expIndex} className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                        <p className="font-montserrat text-gray-700 text-sm leading-relaxed">
                          {exp}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Team;
