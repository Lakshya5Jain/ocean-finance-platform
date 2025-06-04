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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900/90 to-slate-900/80">
      {/* Advanced Background Effects */}
      <div className="absolute inset-0 z-0">
        <video 
          className="w-full h-full object-cover opacity-15"
          autoPlay 
          muted 
          playsInline 
          loop
          src="https://deepoceanpartners.com/wp-content/uploads/2024/01/MAIN_HEADER-HD-1080.mp4#t=1"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/85 via-blue-900/75 to-slate-900/85"></div>
        
        {/* Interactive Particle Overlay */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.15) 0%, transparent 25%), radial-gradient(circle at 80% 70%, rgba(59, 130, 246, 0.15) 0%, transparent 25%)`,
            animation: 'pulse 15s ease-in-out infinite'
          }}></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white py-16 md:py-24">
        <div className="max-w-5xl mx-auto">
          {/* Premium Badge */}
          <div className="inline-flex items-center px-5 py-2.5 rounded-full bg-white/8 backdrop-blur-md border border-white/15 mb-6 hover:cursor-pointer hover:bg-white/12 transition-all duration-300">
            <div className="w-2.5 h-2.5 bg-blue-400 rounded-full mr-3 animate-pulse"></div>
            <span className="text-xs font-medium tracking-wider">NEXT-GEN CREDIT SOLUTIONS</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extralight leading-[1.1] mb-6 text-white tracking-tighter">
            You <span className="font-light bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">built</span> a<br />
            <span className="font-light bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">visionary</span> business.<br />
            You <span className="font-light bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">deserve</span> a lender<br />
            who <span className="font-light bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">innovates</span>.
          </h1>
          
          <p className="text-lg md:text-xl font-light mb-10 max-w-3xl mx-auto leading-relaxed text-slate-200 opacity-90">
            We deliver next-generation capital solutions powered by proprietary data science and unmatched Wall Street expertise.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-16">
            <Link to="/contact">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-medium px-8 py-5 text-md rounded-xl border-0 shadow-xl hover:shadow-blue-500/30 transition-all duration-300 transform hover:scale-103"
              >
                Get Your Term Sheet
                <div className="ml-2 w-3.5 h-3.5 bg-white/25 rounded-full"></div>
              </Button>
            </Link>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white/25 text-white hover:bg-white/8 hover:border-white/40 font-medium px-8 py-5 text-md rounded-xl backdrop-blur-sm transition-all duration-300"
              onClick={scrollToNextSection}
            >
              Learn More
            </Button>
          </div>

          {/* Refined Statistics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/15 to-cyan-600/15 rounded-xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
              <div className="relative bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-103">
                <div className="text-4xl md:text-5xl font-extralight mb-3 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">2.5×</div>
                <p className="font-medium text-slate-200 text-md tracking-wide">Higher Credit Limits</p>
                <div className="mt-3 h-0.5 w-12 bg-gradient-to-r from-blue-400 to-cyan-300 rounded-full mx-auto"></div>
              </div>
            </div>
            
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/15 to-blue-600/15 rounded-xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
              <div className="relative bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-103">
                <div className="text-4xl md:text-5xl font-extralight mb-3 bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">50%+</div>
                <p className="font-medium text-slate-200 text-md tracking-wide">Cash Flow Savings</p>
                <div className="mt-3 h-0.5 w-12 bg-gradient-to-r from-cyan-300 to-blue-400 rounded-full mx-auto"></div>
              </div>
            </div>
            
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/15 to-cyan-600/15 rounded-xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
              <div className="relative bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-103">
                <div className="text-4xl md:text-5xl font-extralight mb-3 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">$30M+</div>
                <p className="font-medium text-slate-200 text-md tracking-wide">Flexible Facility Sizes</p>
                <div className="mt-3 h-0.5 w-12 bg-gradient-to-r from-blue-400 to-cyan-300 rounded-full mx-auto"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
