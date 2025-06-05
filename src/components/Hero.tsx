import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Shield, Zap } from 'lucide-react';

const Hero = () => {
  const scrollToNextSection = () => {
    const heroSection = document.querySelector('section');
    if (heroSection && heroSection.nextElementSibling) {
      heroSection.nextElementSibling.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Background Video with clean white gradient overlay */}
      <div className="absolute inset-0 z-0">
        <video 
          className="w-full h-full object-cover scale-105"
          autoPlay 
          muted 
          playsInline 
          loop
          src="https://deepoceanpartners.com/wp-content/uploads/2024/01/MAIN_HEADER-HD-1080.mp4#t=1"
        />
        {/* Clean white frosted gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/50 to-white/30 backdrop-blur-sm"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-white/90"></div>
      </div>



      {/* Content */}
      <div className="relative z-10 container-custom text-center">
        <div className="max-w-7xl mx-auto">


          {/* Main headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl mb-8 leading-tight font-montserrat text-center">
            <span className="font-light text-deep-navy">You built a</span>
            <br />
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-bright-azure to-deep-navy">sophisticated business.</span>
            <br />
            <span className="font-light text-deep-navy">You deserve a</span>
            <br />
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-bright-azure to-deep-navy">lender who gets it.</span>
          </h1>
          
          {/* Subtitle */}
          <div className="relative mb-20">
            <p className="text-2xl md:text-3xl text-deep-navy/80 font-montserrat font-light leading-relaxed max-w-4xl mx-auto text-center">
              Bridging <span className="text-bright-azure font-medium">Fintech</span> with 
              <span className="text-deep-navy font-medium"> Institutional Private Credit</span> to help business scale.
            </p>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Link to="/contact" className="group">
              <button className="relative px-10 py-4 bg-gradient-to-r from-bright-azure to-blue-600 hover:from-blue-600 hover:to-bright-azure rounded-xl text-white font-montserrat font-semibold text-lg transition-all duration-500 flex items-center gap-3 shadow-xl">
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </Link>
            
            <button 
              onClick={scrollToNextSection}
              className="group px-10 py-4 bg-white rounded-xl text-deep-navy font-montserrat font-medium text-lg border border-gray-200 hover:border-bright-azure transition-all duration-500 flex items-center gap-3 shadow-lg"
            >
              Learn More
              <div className="w-6 h-0.5 bg-deep-navy rounded-full group-hover:w-8 transition-all duration-300"></div>
            </button>
          </div>


        </div>
      </div>


    </section>
  );
};

export default Hero;
