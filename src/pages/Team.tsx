import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useEffect } from 'react';

const Team = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            entry.target.classList.remove('opacity-0', 'translate-y-8');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
  
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
    <div className="min-h-screen bg-white" style={{ fontFamily: '"Source Sans Pro", "Helvetica Neue", Arial, sans-serif' }}>
      {/* Global Styles */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes float-slow {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(180deg); }
          }
          @keyframes float-medium {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-15px) rotate(90deg); }
          }
          @keyframes float-fast {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-10px) rotate(45deg); }
          }
          @keyframes fade-in-up {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-float-slow {
            animation: float-slow 8s ease-in-out infinite;
          }
          .animate-float-medium {
            animation: float-medium 6s ease-in-out infinite;
          }
          .animate-float-fast {
            animation: float-fast 4s ease-in-out infinite;
          }
          .animate-fade-in-up {
            animation: fade-in-up 0.8s ease-out forwards;
          }
          .animate-on-scroll {
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.8s ease-out;
          }
          .card-flip-container {
            perspective: 1000px;
            height: 400px;
          }
          .card-flip {
            position: relative;
            width: 100%;
            height: 100%;
            text-align: center;
            transition: transform 0.6s;
            transform-style: preserve-3d;
          }
          .card-flip-container:hover .card-flip {
            transform: rotateY(180deg);
          }
          .card-face {
            position: absolute;
            width: 100%;
            height: 100%;
            backface-visibility: hidden;
            border-radius: 0px;
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(4px);
            box-shadow: 0 1px 6px rgba(0,0,0,0.1);
            border: 1px solid #030303;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 2rem;
          }
          .card-back {
            transform: rotateY(180deg);
            justify-content: flex-start;
            text-align: left;
          }

        `
      }} />
      <Header />
      
      <section className="py-20 bg-white mt-20 relative overflow-hidden">
        {/* Floating Geometric Elements */}
        <div className="absolute inset-0 z-5 pointer-events-none overflow-hidden">
          <div className="absolute top-20 left-10 w-32 h-32 border border-[#2C7EF4]/20 animate-float-slow transform rotate-45"></div>
          <div className="absolute top-40 right-20 w-24 h-24 border-2 border-[#052C60]/30 animate-float-medium"></div>
          <div className="absolute bottom-40 left-20 w-16 h-16 bg-[#2C7EF4]/10 animate-float-fast"></div>
          <div className="absolute bottom-20 right-10 w-20 h-20 border border-gray-300 animate-float-slow transform rotate-12"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-on-scroll">
              <h1 className="text-4xl md:text-5xl font-medium text-[#052C60] mb-6" style={{ fontFamily: 'Lora, Georgia, serif' }}>
                Seasoned Investment Team
              </h1>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto" style={{ fontFamily: '"Source Sans Pro", "Helvetica Neue", Arial, sans-serif' }}>
                Mature team of subject matter experts with 50+ years of collective experience across asset management, hedge fund and private equity, combining the best of institutional investing, quant and data science.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {teamMembers.map((member, index) => (
                <div key={index} className="card-flip-container animate-on-scroll" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="card-flip">
                    {/* Front of card */}
                    <div className="card-face">
                      <div className="w-32 h-32 mb-6">
                        <img 
                          src={member.image} 
                          alt={member.name}
                          className="w-full h-full object-contain"
                          style={{ borderRadius: '0px' }}
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                            const parent = target.parentElement!;
                            parent.innerHTML = `
                              <div class="w-full h-full bg-gradient-to-br from-[#2C7EF4] to-[#052C60] flex items-center justify-center" style="border-radius: 0px;">
                                <span class="font-bold text-white text-2xl" style="font-family: 'Source Sans Pro', 'Helvetica Neue', Arial, sans-serif;">
                                  ${member.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                                </span>
                              </div>
                            `;
                          }}
                        />
                      </div>
                      
                      <div className="text-center">
                        <h3 className="font-medium text-[#052C60] text-2xl mb-2" style={{ fontFamily: 'Lora, Georgia, serif' }}>
                          {member.name}
                        </h3>
                        <p className="text-[#2C7EF4] font-semibold text-lg" style={{ fontFamily: '"Source Sans Pro", "Helvetica Neue", Arial, sans-serif' }}>
                          {member.title}
                        </p>
                        {member.subtitle && (
                          <p className="text-gray-600 italic mt-2" style={{ fontFamily: '"Source Sans Pro", "Helvetica Neue", Arial, sans-serif' }}>
                            {member.subtitle}
                          </p>
                        )}
                      </div>
                      
                      <div className="mt-6 text-sm text-gray-500 italic" style={{ fontFamily: '"Source Sans Pro", "Helvetica Neue", Arial, sans-serif' }}>
                        Hover to see full bio
                      </div>
                    </div>

                    {/* Back of card */}
                    <div className="card-face card-back">
                      <div className="w-full h-full flex flex-col">
                        <div className="mb-6">
                          <h3 className="font-medium text-[#052C60] text-xl mb-1" style={{ fontFamily: 'Lora, Georgia, serif' }}>
                            {member.name}
                          </h3>
                          <p className="text-[#2C7EF4] font-semibold" style={{ fontFamily: '"Source Sans Pro", "Helvetica Neue", Arial, sans-serif' }}>
                            {member.title}
                          </p>
                        </div>

                        <div className="space-y-3 flex-1 overflow-y-auto">
                          {member.experience.map((exp, expIndex) => (
                            <div key={expIndex} className="flex items-start space-x-2">
                              <div className="w-2 h-2 bg-[#2C7EF4] mt-2 flex-shrink-0" style={{ borderRadius: '0px' }}></div>
                              <p className="text-gray-700 text-sm leading-relaxed" style={{ fontFamily: '"Source Sans Pro", "Helvetica Neue", Arial, sans-serif' }}>
                                {exp}
                              </p>
                            </div>
                          ))}
                          
                          {/* LinkedIn as bullet point link */}
                          <div className="flex items-start space-x-2 pt-2">
                            <div className="w-2 h-2 bg-[#2C7EF4] mt-2 flex-shrink-0" style={{ borderRadius: '0px' }}></div>
                            <a 
                              href={member.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-bright-azure hover:underline text-sm leading-relaxed transition-all duration-200"
                              style={{ fontFamily: '"Source Sans Pro", "Helvetica Neue", Arial, sans-serif' }}
                            >
                              LinkedIn Profile
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
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
