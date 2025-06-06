import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin, Clock, FileText, Calendar, Linkedin } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const [scrollY, setScrollY] = useState(0);
  const calendlyRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Load Calendly script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      // Cleanup script on unmount
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  const teamMembers = [
    {
      name: "Alex Urdea",
      image: "/lovable-uploads/AlexUrdea.png",
      description: "A credit expert with 20+ years of experience, Alex has advised hundreds of companies on the best funding options.\n\nAlex is your go-to credit advisor.",
      linkedin: "https://www.linkedin.com/in/aurdea/"
    },
    {
      name: "Alexey Loganchuk",
      image: "/lovable-uploads/AlexeyLoganchuk.png",
      description: "Curious how a multi-billion dollar PE firm would view your business? Trying to better understand your operational data?\n\nAlexey is your go-to data science resource.",
      linkedin: "https://www.linkedin.com/in/alexey-loganchuk-41312646/"
    },
    {
      name: "Jon Kalikow",
      image: "/lovable-uploads/JonKalikow.png",
      description: "A credit expert with 30+ years of experience, Jon has invested across market environments for numerous institutions.\n\nJon is your go-to funding resource.",
      linkedin: "https://www.linkedin.com/in/jonathan-kalikow-2430257/"
    },
    {
      name: "Daniel Jacobini",
      image: "/lovable-uploads/DanielJacobini.png",
      description: "A career of competitive intelligence ranging from billion dollar enterprises to venture/bootstrapped startups.\n\nDaniel is your go-to strategic resource.",
      linkedin: "https://www.linkedin.com/in/daniel-jacobini-6a3362a1/"
    }
  ];

  return (
    <div className="min-h-screen relative font-montserrat overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed top-0 left-0 w-full object-cover z-0"
        style={{ 
          height: '110vh', 
          objectPosition: 'center center', 
          transform: 'translateY(-5%)' 
        }}
      >
        <source src="/Sailboat_Video_Loop_Created.mp4" type="video/mp4" />
      </video>
      
      {/* Dark blue frosted overlay for better text readability */}
      <div className="fixed top-0 left-0 w-full h-full bg-gradient-to-br from-[#052C60]/95 via-[#052C60]/90 to-[#052C60]/85 backdrop-blur-md z-10"></div>
      
      {/* Floating Geometric Elements */}
      <div className="fixed inset-0 z-10 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 border border-[#2C7EF4]/20 animate-float-slow transform rotate-45"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border-2 border-[#052C60]/30 animate-float-medium"></div>
        <div className="absolute bottom-40 left-20 w-16 h-16 bg-[#2C7EF4]/10 animate-float-fast"></div>
        <div className="absolute bottom-20 right-10 w-20 h-20 border border-white/20 animate-float-slow transform rotate-12"></div>
      </div>
      
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
          }
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
          @keyframes pulse-slow {
            0%, 100% { opacity: 0.5; }
            50% { opacity: 0.6; }
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
          .animate-pulse-slow {
            animation: pulse-slow 4s ease-in-out infinite;
          }
          .hover-lift {
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          }
          .hover-lift:hover {
            transform: translateY(-8px);
            box-shadow: 0 20px 40px rgba(0,0,0,0.15);
          }
        `
      }} />
      
      <Header />
      
      <section className="relative z-20 py-20 mt-20 bg-gradient-to-br from-[#052C60]/8 to-black/12 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-lora font-medium mb-6 text-white drop-shadow-lg">
                Ready to Get Started?
              </h1>
              <p className="text-xl font-source-sans max-w-3xl mx-auto text-white/90 drop-shadow-lg">
                Receive a term sheet for $2M to $30M+ within one week. Schedule a consultation to learn how we can fund your growth.
              </p>
            </div>

            {/* Contact Information Row */}
            <div className="bg-white/50 backdrop-blur-sm p-8 md:p-10 mb-16 border border-[#030303] shadow-[0_1px_6px_rgba(0,0,0,0.1)] hover-lift" style={{borderRadius: '0px'}}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex items-center space-x-4 group">
                  <div className="bg-[#2C7EF4] p-4 border border-[#030303] transition-all duration-300 group-hover:bg-[#052C60] group-hover:scale-110" style={{borderRadius: '0px', boxShadow: '0 1px 6px rgba(0, 0, 0, 0.1)'}}>
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-lora font-medium text-lg text-[#052C60] mb-1">Phone</h3>
                    <a href="tel:2129708910" className="font-source-sans font-bold text-[#2C7EF4] hover:underline transition-all text-base">
                      (212) 970-8910
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4 group">
                  <div className="bg-[#2C7EF4] p-4 border border-[#030303] transition-all duration-300 group-hover:bg-[#052C60] group-hover:scale-110" style={{borderRadius: '0px', boxShadow: '0 1px 6px rgba(0, 0, 0, 0.1)'}}>
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-lora font-medium text-lg text-[#052C60] mb-1">Email</h3>
                    <a href="mailto:contact@deepoceanpartners.com" className="font-source-sans font-bold text-[#2C7EF4] hover:underline transition-all text-sm break-all">
                      contact@deepoceanpartners.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4 group">
                  <div className="bg-[#2C7EF4] p-4 border border-[#030303] transition-all duration-300 group-hover:bg-[#052C60] group-hover:scale-110" style={{borderRadius: '0px', boxShadow: '0 1px 6px rgba(0, 0, 0, 0.1)'}}>
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-lora font-medium text-lg text-[#052C60] mb-1">Office</h3>
                    <p className="font-source-sans text-gray-700 text-base leading-snug">
                      101 Park Avenue, 11th Floor<br />
                      New York, NY
                    </p>
                  </div>
                </div>
              </div>
                        </div>
          </div>
        </div>
      </section>

      {/* Calendly Section with Different Background */}
      <section className="relative z-20 py-20 bg-gradient-to-br from-slate-50/20 to-blue-50/20 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Large Calendly Widget */}
            <div className="mb-16">
              <h3 className="text-3xl font-lora font-medium mb-8 text-white text-center drop-shadow-lg">Schedule Your Consultation</h3>
              {/* Calendly inline widget begin */}
              <div 
                ref={calendlyRef}
                className="calendly-inline-widget overflow-hidden bg-white w-full rounded-2xl shadow-2xl hover-lift" 
                data-url="https://calendly.com/deep-ocean-partners/deep-ocean-partners" 
                style={{minWidth:'320px', height:'900px', boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)'}}
              ></div>
              {/* Calendly inline widget end */}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section with Different Background */}
      <section className="relative z-20 py-20 bg-white/3 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Timeline Section */}
            <div className="bg-gradient-to-br from-[#052C60]/20 to-black/30 backdrop-blur-sm p-8 md:p-10 border border-[#030303]/50" style={{borderRadius: '0px', boxShadow: '0_1px_6px_rgba(0,0,0,0.1)'}}>
              <h3 className="text-2xl font-lora font-medium mb-12 text-center text-white drop-shadow-lg">How It Works</h3>
                              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="text-center group">
                  <div className="bg-[#2C7EF4] w-20 h-20 flex items-center justify-center mx-auto mb-6 border border-[#030303] transition-all duration-300 group-hover:bg-[#052C60] group-hover:scale-110 group-hover:shadow-lg" style={{borderRadius: '0px', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)'}}>
                    <FileText className="h-10 w-10 text-white" />
                  </div>
                  <h4 className="font-lora font-medium mb-3 text-white text-lg drop-shadow-lg">1. Application</h4>
                  <p className="font-source-sans text-white/90 text-sm leading-relaxed drop-shadow-lg">Submit your information and business details</p>
                  <p className="font-source-sans text-[#2C7EF4] text-sm font-medium mt-2 drop-shadow-lg">Same day</p>
                </div>
                
                <div className="text-center group">
                  <div className="bg-[#2C7EF4] w-20 h-20 flex items-center justify-center mx-auto mb-6 border border-[#030303] transition-all duration-300 group-hover:bg-[#052C60] group-hover:scale-110 group-hover:shadow-lg" style={{borderRadius: '0px', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)'}}>
                    <Clock className="h-10 w-10 text-white" />
                  </div>
                  <h4 className="font-lora font-medium mb-3 text-white text-lg drop-shadow-lg">2. Review</h4>
                  <p className="font-source-sans text-white/90 text-sm leading-relaxed drop-shadow-lg">Our team analyzes your business and data</p>
                  <p className="font-source-sans text-[#2C7EF4] text-sm font-medium mt-2 drop-shadow-lg">1-3 days</p>
                </div>
                
                <div className="text-center group">
                  <div className="bg-[#2C7EF4] w-20 h-20 flex items-center justify-center mx-auto mb-6 border border-[#030303] transition-all duration-300 group-hover:bg-[#052C60] group-hover:scale-110 group-hover:shadow-lg" style={{borderRadius: '0px', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)'}}>
                    <Calendar className="h-10 w-10 text-white" />
                  </div>
                  <h4 className="font-lora font-medium mb-3 text-white text-lg drop-shadow-lg">3. Term Sheet</h4>
                  <p className="font-source-sans text-white/90 text-sm leading-relaxed drop-shadow-lg">Receive customized financing proposal</p>
                  <p className="font-source-sans text-[#2C7EF4] text-sm font-medium mt-2 drop-shadow-lg">Within 1 week</p>
                </div>
                
                <div className="text-center group">
                  <div className="bg-[#2C7EF4] w-20 h-20 flex items-center justify-center mx-auto mb-6 border border-[#030303] transition-all duration-300 group-hover:bg-[#052C60] group-hover:scale-110 group-hover:shadow-lg" style={{borderRadius: '0px', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)'}}>
                    <Phone className="h-10 w-10 text-white" />
                  </div>
                  <h4 className="font-lora font-medium mb-3 text-white text-lg drop-shadow-lg">4. Funding</h4>
                  <p className="font-source-sans text-white/90 text-sm leading-relaxed drop-shadow-lg">Finalize terms and receive capital</p>
                  <p className="font-source-sans text-[#2C7EF4] text-sm font-medium mt-2 drop-shadow-lg">1-2 weeks</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="relative z-20 py-20 bg-gradient-to-br from-gray-900/40 via-[#052C60]/40 to-[#1a4b8a]/40 backdrop-blur-sm overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(44,126,244,0.1)_0%,transparent_70%)]"></div>
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-1/4 w-40 h-40 border border-[#2C7EF4] animate-float-medium transform rotate-45"></div>
          <div className="absolute bottom-10 right-1/4 w-32 h-32 bg-[#2C7EF4]/20 animate-float-slow"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-lora font-medium text-white mb-16 text-center drop-shadow-lg">Meet Your Advisors</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div 
                  key={index} 
                  className="bg-white/65 backdrop-blur-md p-6 md:p-8 text-center flex flex-col items-center border border-[#030303] cursor-pointer hover-lift group"
                  onClick={() => navigate('/team')}
                  style={{borderRadius: '0px', boxShadow: '0_1px_6px_rgba(0,0,0,0.1)'}}
                >
                  {/* Profile Image */}
                  <div className="w-28 h-28 mb-6 transition-all duration-300 group-hover:scale-110">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-contain"
                      onError={(e) => {
                        // Fallback to initials if image fails to load
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const parent = target.parentElement!;
                        parent.innerHTML = `
                          <div class="w-full h-full bg-gradient-to-br from-bright-azure to-deep-navy rounded-full flex items-center justify-center">
                            <span class="font-montserrat font-bold text-white text-lg">
                              ${member.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                            </span>
                          </div>
                        `;
                      }}
                    />
                  </div>
                  
                                    <div className="flex items-center gap-3 mb-4">
                    <div className="font-lora font-medium text-xl text-[#052C60] group-hover:text-[#2C7EF4] transition-colors duration-300">{member.name}</div>
                    <a 
                      href={member.linkedin}
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-[#2C7EF4] hover:text-[#052C60] transition-colors duration-300 group-hover:scale-125"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </div>
                  
                  <div className="text-gray-700 font-source-sans text-sm leading-relaxed group-hover:text-gray-900 transition-colors duration-300">
                    {member.description.split('\n\n').map((paragraph, pIndex) => (
                      <p key={pIndex} className={pIndex > 0 ? 'mt-3' : ''}>{paragraph}</p>
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

export default Contact;
