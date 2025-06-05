
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
  const scrollToNextSection = () => {
    const heroSection = document.querySelector('section');
    if (heroSection && heroSection.nextElementSibling) {
      heroSection.nextElementSibling.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video 
          className="w-full h-full object-cover opacity-20"
          autoPlay 
          muted 
          playsInline 
          loop
          src="https://deepoceanpartners.com/wp-content/uploads/2024/01/MAIN_HEADER-HD-1080.mp4#t=1"
        />
        <div className="absolute inset-0 bg-white/60"></div>
      </div>

      {/* Gradient Wave Decoration */}
      <div className="absolute top-1/3 right-0 w-32 h-full">
        <div className="gradient-wave w-full"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center">
        <div className="max-w-6xl mx-auto">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-bright-azure/10 border border-bright-azure/20 mb-8">
            <div className="w-2 h-2 bg-bright-azure rounded-full mr-3"></div>
            <span className="text-sm font-medium text-bright-azure tracking-wider">NEXT-GEN CREDIT SOLUTIONS</span>
          </div>

          <h1 className="text-display-lg md:text-display-xl text-near-black mb-8 leading-tight">
            You built a <span className="text-bright-azure">sophisticated</span> business.<br />
            You deserve a lender who <span className="text-bright-azure">gets it</span>.
          </h1>
          
          <p className="text-body text-near-black/80 mb-12 max-w-4xl mx-auto">
            We deliver next-generation capital solutions powered by proprietary data science and unmatched Wall Street expertise.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Link to="/contact">
              <Button 
                size="lg" 
                className="bg-bright-azure hover:bg-bright-azure/90 text-white font-medium px-8 py-4 text-lg rounded-lg border-0 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Get Your Term Sheet
              </Button>
            </Link>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-near-black/20 text-near-black hover:bg-near-black/5 font-medium px-8 py-4 text-lg rounded-lg transition-all duration-300"
              onClick={scrollToNextSection}
            >
              Learn More
            </Button>
          </div>

          {/* Statistics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card-custom text-center hover:shadow-lg transition-shadow duration-300">
              <div className="text-display-md text-bright-azure mb-3">2.5×</div>
              <p className="font-medium text-near-black">Higher Credit Limits</p>
              <div className="mt-4 h-0.5 w-12 bg-gradient-to-r from-gradient-start to-gradient-end rounded-full mx-auto"></div>
            </div>
            
            <div className="card-custom text-center hover:shadow-lg transition-shadow duration-300">
              <div className="text-display-md text-bright-azure mb-3">50%+</div>
              <p className="font-medium text-near-black">Cash Flow Savings</p>
              <div className="mt-4 h-0.5 w-12 bg-gradient-to-r from-gradient-start to-gradient-end rounded-full mx-auto"></div>
            </div>
            
            <div className="card-custom text-center hover:shadow-lg transition-shadow duration-300">
              <div className="text-display-md text-bright-azure mb-3">$30M+</div>
              <p className="font-medium text-near-black">Flexible Facility Sizes</p>
              <div className="mt-4 h-0.5 w-12 bg-gradient-to-r from-gradient-start to-gradient-end rounded-full mx-auto"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
