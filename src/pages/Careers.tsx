import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Mail, Users, Target, TrendingUp, Award, Heart, Globe } from 'lucide-react';
import { useEffect } from 'react';

const Careers = () => {
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

  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "We pursue excellence in everything we do, from investment decisions to client relationships."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We believe in the power of teamwork and diverse perspectives to drive innovation."
    },
    {
      icon: TrendingUp,
      title: "Growth Mindset",
      description: "We embrace continuous learning and adaptation in an ever-evolving financial landscape."
    },
    {
      icon: Award,
      title: "Integrity",
      description: "We operate with the highest ethical standards and transparency in all our dealings."
    },
    {
      icon: Heart,
      title: "Client Focus",
      description: "Our clients' success is our success. We prioritize their needs above all else."
    },
    {
      icon: Globe,
      title: "Innovation",
      description: "We leverage cutting-edge technology and data science to revolutionize private credit."
    }
  ];
 
  const benefits = [
    "Flexible working arrangements and remote options",
    "Professional development and continuing education support",
    "Collaborative and entrepreneurial work environment",
    "Opportunity to work with industry-leading professionals"
  ];

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: '"Source Sans Pro", "Helvetica Neue", Arial, sans-serif' }}>
      {/* Global Styles */}
      <style dangerouslySetInnerHTML={{
        __html: `
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
          .animate-fade-in-up {
            animation: fade-in-up 0.8s ease-out forwards;
          }
          .animate-on-scroll {
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.8s ease-out;
          }
          .careers-card {
            background: #FFFFFF;
            border: 1px solid #030303;
            box-shadow: 0 1px 6px rgba(0, 0, 0, 0.1);
            border-radius: 0px;
            transition: all 0.3s ease;
          }
          .careers-card:hover {
            transform: translateY(-4px);
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
          }
          .careers-button {
            background: #2C7EF4;
            color: #FFFFFF;
            border: none;
            border-radius: 0px;
            padding: 16px 32px;
            font-weight: 600;
            transition: all 0.3s ease;
            text-decoration: none;
            display: inline-flex;
            align-items: center;
            gap: 8px;
          }
          .careers-button:hover {
            background: #1B5FCE;
            transform: translateY(-2px);
          }
          .section-padding {
            padding: 80px 0;
          }
        `
      }} />
      <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="section-padding bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center animate-on-scroll">
              <h1 className="text-6xl font-medium text-[#052C60] mb-8" style={{ fontFamily: 'Lora, Georgia, serif' }}>
                Join Our Team
              </h1>
              <p className="text-2xl text-[#052C60] leading-relaxed mb-12" style={{ fontFamily: '"Source Sans Pro", "Helvetica Neue", Arial, sans-serif' }}>
                We are a very small firm with exceptional talent and focus on quality rather than quantity.
              </p>
              <div className="w-24 h-1 bg-[#2C7EF4] mx-auto"></div>
            </div>
          </div>
        </section>

        {/* Company Values Section */}
        <section className="section-padding bg-[#F8F9FA]">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16 animate-on-scroll">
                <h2 className="text-4xl font-medium text-[#052C60] mb-6" style={{ fontFamily: 'Lora, Georgia, serif' }}>
                  Our Values
                </h2>
                <p className="text-xl text-[#052C60] max-w-3xl mx-auto" style={{ fontFamily: '"Source Sans Pro", "Helvetica Neue", Arial, sans-serif' }}>
                  We believe that our values define who we are and guide everything we do.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {values.map((value, index) => (
                  <div key={index} className="careers-card p-8 animate-on-scroll" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="w-16 h-16 bg-[#2C7EF4] flex items-center justify-center mb-6">
                      <value.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-medium text-[#052C60] mb-4" style={{ fontFamily: 'Lora, Georgia, serif' }}>
                      {value.title}
                    </h3>
                    <p className="text-[#052C60] leading-relaxed" style={{ fontFamily: '"Source Sans Pro", "Helvetica Neue", Arial, sans-serif' }}>
                      {value.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="section-padding bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16 animate-on-scroll">
                <h2 className="text-4xl font-medium text-[#052C60] mb-6" style={{ fontFamily: 'Lora, Georgia, serif' }}>
                  Why Work With Us?
                </h2>
                <p className="text-xl text-[#052C60]" style={{ fontFamily: '"Source Sans Pro", "Helvetica Neue", Arial, sans-serif' }}>
                  We offer competitive benefits and a collaborative environment where you can thrive.
                </p>
              </div>

              <div className="careers-card p-12 animate-on-scroll">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-3 h-3 bg-[#2C7EF4] mt-2 flex-shrink-0"></div>
                      <p className="text-[#052C60] leading-relaxed" style={{ fontFamily: '"Source Sans Pro", "Helvetica Neue", Arial, sans-serif' }}>
                        {benefit}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Application Section */}
        <section className="section-padding bg-[#052C60]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="animate-on-scroll">
                <div className="w-24 h-24 bg-[#2C7EF4] flex items-center justify-center mx-auto mb-12">
                  <Mail className="w-12 h-12 text-white" />
                </div>
                
                <h2 className="text-4xl font-medium text-white mb-8" style={{ fontFamily: 'Lora, Georgia, serif' }}>
                  Think You Have What It Takes?
                </h2>
                
                <p className="text-xl text-white leading-relaxed mb-12" style={{ fontFamily: '"Source Sans Pro", "Helvetica Neue", Arial, sans-serif' }}>
                  If you believe you have the talent and skills to contribute to our mission of 
                  revolutionizing institutional private credit, we'd love to hear from you.
                </p>
                
                <div className="careers-card p-12 mb-12">
                  <p className="text-2xl text-[#052C60] font-medium mb-8" style={{ fontFamily: 'Lora, Georgia, serif' }}>
                    Ready to Make an Impact?
                  </p>
                  <p className="text-lg text-[#052C60] mb-8" style={{ fontFamily: '"Source Sans Pro", "Helvetica Neue", Arial, sans-serif' }}>
                    Email us your resume and a brief description of what you have to offer. We review all applications personally and will respond to qualified candidates.
                  </p>
                  <a 
                    href="mailto:contact@deepoceanpartners.com"
                    className="careers-button text-xl"
                    style={{ fontFamily: '"Source Sans Pro", "Helvetica Neue", Arial, sans-serif' }}
                  >
                    <Mail className="w-5 h-5" />
                    Send Your Application
                  </a>
                </div>

                <div className="careers-card p-8">
                  <p className="text-lg text-[#052C60] font-medium mb-4" style={{ fontFamily: '"Source Sans Pro", "Helvetica Neue", Arial, sans-serif' }}>
                    Email us directly:
                  </p>
                  <a 
                    href="mailto:contact@deepoceanpartners.com"
                    className="text-2xl font-medium text-[#2C7EF4] hover:underline transition-all duration-300"
                    style={{ fontFamily: '"Source Sans Pro", "Helvetica Neue", Arial, sans-serif' }}
                  >
                    contact@deepoceanpartners.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Careers; 