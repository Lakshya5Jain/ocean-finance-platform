
const About = () => {
  return (
    <section className="section-spacing bg-deep-navy relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 ocean-pattern"></div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-8">
            <div className="w-2 h-2 bg-bright-azure rounded-full mr-3"></div>
            <span className="text-sm font-medium text-light-text tracking-wider">YOUR GROWTH STORY STARTS HERE</span>
          </div>

          <h2 className="text-display-lg text-light-text mb-8 leading-tight">
            Capital That <span className="text-bright-azure">Grows</span> With Your Vision
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-body text-light-text/90 mb-12 leading-relaxed">
              At Deep Ocean Partners, we understand that every business has unique financing needs. Whether you're looking to expand operations, manage cash flow, or seize new opportunities, we're here to provide the capital and partnership you need to turn your vision into reality. Our approach combines cutting-edge technology with decades of financial expertise to deliver solutions that grow with your business.
            </p>
          </div>

          {/* Key Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white/5 border border-white/10 rounded-lg p-8 hover:bg-white/10 transition-all duration-300">
              <div className="w-12 h-12 bg-bright-azure/20 rounded-lg flex items-center justify-center mb-6 mx-auto">
                <div className="w-6 h-6 bg-bright-azure rounded-full"></div>
              </div>
              <h3 className="text-xl font-semibold text-light-text mb-4">Data-Driven Decisions</h3>
              <p className="text-light-text/80">Proprietary algorithms and real-time analytics power our underwriting process.</p>
            </div>
            
            <div className="bg-white/5 border border-white/10 rounded-lg p-8 hover:bg-white/10 transition-all duration-300">
              <div className="w-12 h-12 bg-bright-azure/20 rounded-lg flex items-center justify-center mb-6 mx-auto">
                <div className="w-6 h-6 bg-bright-azure rounded-full"></div>
              </div>
              <h3 className="text-xl font-semibold text-light-text mb-4">Institutional Expertise</h3>
              <p className="text-light-text/80">50+ years of collective Wall Street experience across all market cycles.</p>
            </div>
            
            <div className="bg-white/5 border border-white/10 rounded-lg p-8 hover:bg-white/10 transition-all duration-300">
              <div className="w-12 h-12 bg-bright-azure/20 rounded-lg flex items-center justify-center mb-6 mx-auto">
                <div className="w-6 h-6 bg-bright-azure rounded-full"></div>
              </div>
              <h3 className="text-xl font-semibold text-light-text mb-4">Flexible Solutions</h3>
              <p className="text-light-text/80">Custom debt products tailored to your business model and growth trajectory.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
