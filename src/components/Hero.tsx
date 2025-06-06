import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Shield, Zap } from 'lucide-react';
import { useEffect } from 'react';

const Hero = () => {
  const scrollToNextSection = () => {
    const heroSection = document.querySelector('section');
    if (heroSection && heroSection.nextElementSibling) {
      heroSection.nextElementSibling.scrollIntoView({ behavior: 'smooth' });
    }
  };

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

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
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
          @keyframes pulse-slow {
            0%, 100% { opacity: 0.5; }
            50% { opacity: 0.7; }
          }
          @keyframes shimmer {
            0% { background-position: -200% 0; }
            100% { background-position: 200% 0; }
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
          .animate-pulse-slow {
            animation: pulse-slow 4s ease-in-out infinite;
          }
          .animate-on-scroll {
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.8s ease-out;
          }
          .hover-lift {
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          }
          .hover-lift:hover {
            transform: translateY(-8px);
            box-shadow: 0 20px 40px rgba(0,0,0,0.15);
          }
          .shimmer-effect {
            background: linear-gradient(90deg, transparent, rgba(44, 126, 244, 0.1), transparent);
            background-size: 200% 100%;
            animation: shimmer 2s infinite;
          }
        `
      }} />
      
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-br from-blue-50 via-white to-blue-100"></div>
        {/* Enhanced gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/50 to-white/30 backdrop-blur-sm animate-pulse-slow"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-white/90"></div>
      </div>

      {/* Floating Geometric Elements */}
      <div className="absolute inset-0 z-5 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 border border-[#2C7EF4]/20 animate-float-slow transform rotate-45"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border-2 border-[#052C60]/30 animate-float-medium"></div>
        <div className="absolute bottom-40 left-20 w-16 h-16 bg-[#2C7EF4]/10 animate-float-fast"></div>
        <div className="absolute bottom-20 right-10 w-20 h-20 border border-white/30 animate-float-slow transform rotate-12"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center">
        <div className="max-w-7xl mx-auto">

          {/* Main headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl mb-8 leading-tight font-lora text-center animate-on-scroll">
            <span className="font-light text-[#052C60]">You built a</span>
            <br />
            <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#2C7EF4] to-[#052C60] shimmer-effect">sophisticated business.</span>
            <br />
            <span className="font-light text-[#052C60]">You deserve a</span>
            <br />
            <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#2C7EF4] to-[#052C60] shimmer-effect">lender who gets it.</span>
          </h1>
          
          {/* Subtitle */}
          <div className="relative mb-20 animate-on-scroll">
            <p className="text-2xl md:text-3xl text-[#052C60]/80 font-source-sans font-light leading-relaxed max-w-4xl mx-auto text-center">
              Bridging <span className="text-[#2C7EF4] font-medium shimmer-effect inline-block px-2">Fintech</span> with 
              <span className="text-[#052C60] font-medium"> Institutional Private Credit</span> to help business scale.
            </p>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12 animate-on-scroll">
            <Link to="/contact" className="group">
              <button className="relative px-10 py-4 bg-[#2C7EF4] hover:bg-[#052C60] text-white font-source-sans font-semibold text-lg transition-all duration-500 flex items-center gap-3 shadow-[0_1px_6px_rgba(0,0,0,0.1)] border border-[#030303] hover-lift">
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </Link>
            
            <button 
              onClick={scrollToNextSection}
              className="group px-10 py-4 bg-white/95 backdrop-blur-sm text-[#052C60] font-source-sans font-medium text-lg border border-[#030303] hover:border-[#2C7EF4] transition-all duration-500 flex items-center gap-3 shadow-[0_1px_6px_rgba(0,0,0,0.1)] hover-lift"
            >
              Learn More
              <div className="w-6 h-0.5 bg-[#052C60] group-hover:w-8 transition-all duration-300"></div>
            </button>
          </div>

        </div>
      </div>

    </section>
  );
};

export default Hero;
