import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video 
          className="w-full h-full object-cover"
          autoPlay 
          muted 
          playsInline 
          loop
          src="https://deepoceanpartners.com/wp-content/uploads/2024/01/MAIN_HEADER-HD-1080.mp4#t=1"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-montserrat font-light leading-tight mb-8">
            Your business <span className="font-bold">deserves financing</span><br />
            that <span className="font-bold">grows with you.</span>
          </h1>
          
          <p className="text-xl md:text-2xl font-montserrat font-light mb-12 max-w-3xl mx-auto leading-relaxed">
            From startups to scaling enterprises, we provide flexible financing solutions that adapt to your unique needs. 
            Let us help you unlock your business potential with smart capital that fuels growth.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-secondary hover:bg-secondary/90 text-white font-montserrat font-semibold px-8 py-4 text-lg"
            >
              Get Your Term Sheet
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-secondary hover:bg-white hover:text-secondary font-montserrat font-semibold px-8 py-4 text-lg"
            >
              Learn More
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-2xl font-montserrat font-bold mb-2">Up to 2.5×</h3>
              <p className="font-montserrat">Higher credit limits than traditional ABLs</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-2xl font-montserrat font-bold mb-2">50%+</h3>
              <p className="font-montserrat">Potential cash flow savings</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-2xl font-montserrat font-bold mb-2">$2M - $30M+</h3>
              <p className="font-montserrat">Flexible facility sizes</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
