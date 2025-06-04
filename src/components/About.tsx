
const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-primary mb-6">
              Your Growth Story Starts Here
            </h2>
            <p className="text-xl text-gray-600 font-montserrat max-w-4xl mx-auto leading-relaxed">
              At Deep Ocean Partners, we understand that every business has unique financing needs. Whether you're looking to expand operations, manage cash flow, or seize new opportunities, we're here to provide the capital and partnership you need to turn your vision into reality. Our approach combines cutting-edge technology with decades of financial expertise to deliver solutions that grow with your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center group">
              <div className="bg-gradient-to-br from-secondary to-primary rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <div className="text-white text-2xl font-bold">💰</div>
              </div>
              <h3 className="text-lg font-montserrat font-bold text-primary mb-2">More Capital</h3>
              <p className="text-gray-600 font-montserrat text-sm">
                Up to 2.5x higher limits than traditional lenders
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-gradient-to-br from-secondary to-primary rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <div className="text-white text-2xl font-bold">📈</div>
              </div>
              <h3 className="text-lg font-montserrat font-bold text-primary mb-2">Better Cash Flow</h3>
              <p className="text-gray-600 font-montserrat text-sm">
                50%+ savings with fixed payments over multi-year terms
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-gradient-to-br from-secondary to-primary rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <div className="text-white text-2xl font-bold">🎯</div>
              </div>
              <h3 className="text-lg font-montserrat font-bold text-primary mb-2">Total Flexibility</h3>
              <p className="text-gray-600 font-montserrat text-sm">
                Adaptable terms that evolve with your business
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-gradient-to-br from-secondary to-primary rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <div className="text-white text-2xl font-bold">🚀</div>
              </div>
              <h3 className="text-lg font-montserrat font-bold text-primary mb-2">Scale Ready</h3>
              <p className="text-gray-600 font-montserrat text-sm">
                Facilities that grow up to $30M as you expand
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
