import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Linkedin } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: "Alex Urdea",
      title: "Managing Partner",
      subtitle: "",
      image: "/lovable-uploads/AlexUrdea.png",
      linkedin: "https://www.linkedin.com/in/aurdea/",
      experience: [
        "Upper90: CoFounder / CIO ($1B+ AUM)",
        "Solus: Head of Strategy and Risk",
        "Advisor & Mentor to dozens of FinTech & Ecommerce companies",
        "Experience: Extensive 21+ year credit background with complex structuring capabilities across product portfolio."
      ]
    },
    {
      name: "Jon Kalikow",
      title: "Partner",
      subtitle: "",
      image: "/lovable-uploads/JonKalikow.png",
      linkedin: "https://www.linkedin.com/in/jonathan-kalikow-2430257/",
      experience: [
        "Gamma Real Estate: CoFounder",
        "Solus: Head of Trading",
        "Morgan Stanley: Proprietary Convertible Trader",
        "Experience: Specialist in catalyst-driven markets with high barriers to entry including hard money lending."
      ]
    },
    {
      name: "Alexey Loganchuk",
      title: "Head of Data",
      subtitle: "",
      image: "/lovable-uploads/AlexeyLoganchuk.png",
      linkedin: "https://www.linkedin.com/in/alexey-loganchuk-41312646/",
      experience: [
        "Sidera Labs: CoFounder; Ecom VC",
        "Blackstone: Data Science Strategy",
        "JP Morgan: Head of Converts Platform",
        "Experience: 15+ years across data science and automation in finance"
      ]
    },
    {
      name: "Daniel Jacobini",
      title: "Head of Product",
      subtitle: "",
      image: "/lovable-uploads/DanielJacobini.png",
      linkedin: "https://www.linkedin.com/in/daniel-jacobini-6a3362a1/",
      experience: [
        "Sidera Labs: CoFounder; Ecom VC",
        "BlackRock: Data Lead, US Growth",
        "Point72: Co-head, Consumer Intelligence",
        "Experience: 10+ years of experience across finance and automation"
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
              <h1 className="text-4xl md:text-5xl font-montserrat font-bold text-deep-navy mb-6">
                Seasoned Investment Team
              </h1>
              <p className="text-xl text-gray-600 font-montserrat max-w-4xl mx-auto">
                Mature team of subject matter experts with 50+ years of collective experience across asset management, hedge fund and private equity, combining the best of institutional investing, quant and data science.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-shadow duration-300">
                  <div className="w-32 h-32 mx-auto mb-6">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-contain"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const parent = target.parentElement!;
                        parent.innerHTML = `
                          <div class="w-full h-full bg-gradient-to-br from-bright-azure to-deep-navy rounded-full flex items-center justify-center">
                            <span class="font-montserrat font-bold text-white text-2xl">
                              ${member.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                            </span>
                          </div>
                        `;
                      }}
                    />
                  </div>
                  
                  <div className="text-center mb-6">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <h3 className="font-montserrat font-bold text-deep-navy text-xl">
                        {member.name}
                      </h3>
                      <a 
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-700 transition-colors duration-300"
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                    </div>
                    <p className="font-montserrat text-bright-azure font-semibold mb-4">
                      {member.title}
                    </p>
                    {member.subtitle && (
                      <p className="font-montserrat text-gray-600 italic mb-4">
                        {member.subtitle}
                      </p>
                    )}
                  </div>

                  <div className="space-y-3">
                    {member.experience.map((exp, expIndex) => (
                      <div key={expIndex} className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-bright-azure rounded-full mt-2 flex-shrink-0"></div>
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
