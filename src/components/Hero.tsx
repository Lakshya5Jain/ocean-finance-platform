
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video with enhanced overlay */}
      <div className="absolute inset-0 z-0">
        <video 
          className="w-full h-full object-cover scale-105"
          autoPlay 
          muted 
          playsInline 
          loop
          src="https://deepoceanpartners.com/wp-content/uploads/2024/01/MAIN_HEADER-HD-1080.mp4#t=1"
        />
        {/* Sophisticated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-deep-navy/40 via-deep-navy/20 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/60 via-transparent to-deep-navy/30"></div>
        
        {/* Animated data points overlay */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-bright-azure rounded-full animate-pulse"></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-gradient-end rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-gradient-mid rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-2/3 right-1/4 w-1 h-1 bg-bright-azure rounded-full animate-pulse" style={{animationDelay: '3s'}}></div>
        </div>
      </div>

      {/* Floating gradient elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-bright-azure/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-32 left-16 w-96 h-96 bg-gradient-to-tr from-gradient-end/10 to-transparent rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center">
        <div className="max-w-6xl mx-auto">
          {/* Enhanced badge */}
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-12 shadow-2xl">
            <div className="w-3 h-3 bg-bright-azure rounded-full mr-4 animate-pulse"></div>
            <span className="text-sm font-medium text-white tracking-[2px] uppercase">Next-Gen Credit Solutions</span>
            <div className="ml-4 w-8 h-0.5 bg-gradient-to-r from-bright-azure to-gradient-end rounded-full"></div>
          </div>

          {/* Main headline with better sizing */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl text-white mb-12 leading-[0.9] font-light tracking-tight">
            You built a <span className="font-bold bg-gradient-to-r from-bright-azure via-gradient-mid to-gradient-end bg-clip-text text-transparent">sophisticated</span> business.
            <br />
            You deserve a lender who <span className="font-bold bg-gradient-to-r from-bright-azure via-gradient-mid to-gradient-end bg-clip-text text-transparent">gets it</span>.
          </h1>
          
          {/* Subtitle with glass effect */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-16 max-w-5xl mx-auto">
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed font-light">
              We deliver next-generation capital solutions powered by proprietary data science and unmatched Wall Street expertise.
            </p>
          </div>

          {/* Enhanced CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
            <Link to="/contact">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-bright-azure to-gradient-mid hover:from-bright-azure/90 hover:to-gradient-mid/90 text-white font-medium px-12 py-6 text-xl rounded-xl border-0 shadow-2xl hover:shadow-bright-azure/25 transition-all duration-500 transform hover:scale-105"
              >
                Get Your Term Sheet
                <div className="ml-3 w-2 h-2 bg-white rounded-full"></div>
              </Button>
            </Link>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white/30 bg-white/5 backdrop-blur-sm text-white hover:bg-white/10 font-medium px-12 py-6 text-xl rounded-xl transition-all duration-500 transform hover:scale-105"
              onClick={scrollToNextSection}
            >
              Learn More
              <div className="ml-3 w-6 h-0.5 bg-gradient-to-r from-white to-transparent rounded-full"></div>
            </Button>
          </div>

          {/* Enhanced statistics with sophisticated styling */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 transform hover:scale-105">
              <div className="text-5xl md:text-6xl font-light text-white mb-4 group-hover:text-bright-azure transition-colors duration-300">2.5×</div>
              <p className="font-medium text-white/80 text-lg">Higher Credit Limits</p>
              <div className="mt-6 h-1 w-full bg-gradient-to-r from-bright-azure via-gradient-mid to-gradient-end rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            
            <div className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 transform hover:scale-105">
              <div className="text-5xl md:text-6xl font-light text-white mb-4 group-hover:text-bright-azure transition-colors duration-300">50%+</div>
              <p className="font-medium text-white/80 text-lg">Cash Flow Savings</p>
              <div className="mt-6 h-1 w-full bg-gradient-to-r from-bright-azure via-gradient-mid to-gradient-end rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            
            <div className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 transform hover:scale-105">
              <div className="text-5xl md:text-6xl font-light text-white mb-4 group-hover:text-bright-azure transition-colors duration-300">$30M+</div>
              <p className="font-medium text-white/80 text-lg">Flexible Facility Sizes</p>
              <div className="mt-6 h-1 w-full bg-gradient-to-r from-bright-azure via-gradient-mid to-gradient-end rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
