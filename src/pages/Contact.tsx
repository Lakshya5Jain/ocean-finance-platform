import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin, Clock, FileText, Calendar, Linkedin } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Contact = () => {
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
    <div className="min-h-screen bg-white font-montserrat">
      <Header />
      
      <section className="py-20 bg-primary text-white mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-montserrat font-bold mb-6">
                Ready to Get Started?
              </h1>
              <p className="text-xl font-montserrat max-w-3xl mx-auto opacity-90">
                Receive a term sheet for $2M to $30M+ within one week. Contact us to learn how we can fund your growth.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              {/* Contact Information */}
              <div className="space-y-8">
                <div className="flex items-center space-x-4">
                  <div className="bg-secondary rounded-full p-3">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-montserrat font-semibold text-lg">Phone</h3>
                    <a href="tel:2129708910" className="font-montserrat text-white/90 hover:text-white transition-colors">
                      (212) 970-8910
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-secondary rounded-full p-3">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-montserrat font-semibold text-lg">Email</h3>
                    <a href="mailto:contact@deepoceanpartners.com" className="font-montserrat text-white/90 hover:text-white transition-colors">
                      contact@deepoceanpartners.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-secondary rounded-full p-3">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-montserrat font-semibold text-lg">Office</h3>
                    <p className="font-montserrat text-white/90">
                      101 Park Avenue, 11th Floor<br />
                      New York, NY
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-secondary rounded-full p-3">
                    <Calendar className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-montserrat font-semibold text-lg">Schedule a Meeting</h3>
                    <a 
                      href="https://calendly.com/deepoceanpartners" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="font-montserrat text-white/90 hover:text-white transition-colors"
                    >
                      Book a consultation
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-2xl font-montserrat font-bold mb-6">Get Your Term Sheet</h3>
                <form className="space-y-4">
                  <input 
                    type="text" 
                    placeholder="Company Name" 
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 font-montserrat focus:outline-none focus:border-secondary"
                  />
                  <input 
                    type="email" 
                    placeholder="Email Address" 
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 font-montserrat focus:outline-none focus:border-secondary"
                  />
                  <input 
                    type="tel" 
                    placeholder="Phone Number" 
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 font-montserrat focus:outline-none focus:border-secondary"
                  />
                  <input 
                    type="text" 
                    placeholder="Funding Amount Needed" 
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 font-montserrat focus:outline-none focus:border-secondary"
                  />
                  <textarea 
                    placeholder="Tell us about your business and funding needs" 
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 font-montserrat focus:outline-none focus:border-secondary resize-none"
                  />
                  <Button className="w-full bg-secondary hover:bg-secondary/90 text-white font-montserrat font-semibold py-3">
                    Request Term Sheet
                  </Button>
                </form>
              </div>
            </div>

            {/* Timeline Section */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-montserrat font-bold mb-8 text-center">How It Works</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="bg-secondary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <FileText className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="font-montserrat font-semibold mb-2">1. Application</h4>
                  <p className="font-montserrat text-white/80 text-sm">Submit your information and business details</p>
                  <p className="font-montserrat text-secondary text-xs mt-1">Same day</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-secondary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Clock className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="font-montserrat font-semibold mb-2">2. Review</h4>
                  <p className="font-montserrat text-white/80 text-sm">Our team analyzes your business and data</p>
                  <p className="font-montserrat text-secondary text-xs mt-1">1-3 days</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-secondary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Calendar className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="font-montserrat font-semibold mb-2">3. Term Sheet</h4>
                  <p className="font-montserrat text-white/80 text-sm">Receive customized financing proposal</p>
                  <p className="font-montserrat text-secondary text-xs mt-1">Within 1 week</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-secondary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Phone className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="font-montserrat font-semibold mb-2">4. Funding</h4>
                  <p className="font-montserrat text-white/80 text-sm">Finalize terms and receive capital</p>
                  <p className="font-montserrat text-secondary text-xs mt-1">1-2 weeks</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-deep-navy mb-12 text-center">Meet Your Advisors</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6 shadow text-center flex flex-col items-center">
                  {/* Profile Image */}
                  <div className="w-24 h-24 mb-4">
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
                  
                  <div className="flex items-center gap-2 mb-2">
                    <div className="font-montserrat font-bold text-lg">{member.name}</div>
                    <a 
                      href={member.linkedin}
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-blue-600 hover:text-blue-700 transition-colors duration-300"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  </div>
                  
                  <div className="text-gray-700 font-montserrat mb-4 text-sm leading-relaxed">
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
