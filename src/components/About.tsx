
const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-primary mb-6">
              Bridging Fintech Precision with Institutional Private Credit
            </h2>
            <p className="text-xl text-gray-600 font-montserrat max-w-4xl mx-auto leading-relaxed">
              Deep Ocean Partners operates at the intersection of fintech innovation and institutional-grade private credit. 
              We're not simply a fund or a lender—we're building a platform that fuses technology-enabled underwriting 
              with seasoned credit structuring expertise to generate superior, risk-adjusted returns.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="bg-secondary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-secondary rounded-full"></div>
              </div>
              <h3 className="text-lg font-montserrat font-bold text-primary mb-2">More Capital</h3>
              <p className="text-gray-600 font-montserrat text-sm">
                Up to 1.5x to 2.5x higher credit limits than traditional ABLs by receiving credit for both your balance sheet assets and future revenue.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-secondary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-secondary rounded-full"></div>
              </div>
              <h3 className="text-lg font-montserrat font-bold text-primary mb-2">Improved Cash Flow</h3>
              <p className="text-gray-600 font-montserrat text-sm">
                Potential for 50% + cash flow savings versus revenue-based fintechs by accessing fixed monthly payments over a multi-year term.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-secondary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-secondary rounded-full"></div>
              </div>
              <h3 className="text-lg font-montserrat font-bold text-primary mb-2">Greater Flexibility</h3>
              <p className="text-gray-600 font-montserrat text-sm">
                Large lenders have rigid underwriting and covenants. We provide flexible funding to meet your diverse business needs.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-secondary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-secondary rounded-full"></div>
              </div>
              <h3 className="text-lg font-montserrat font-bold text-primary mb-2">Flexible Solutions</h3>
              <p className="text-gray-600 font-montserrat text-sm">
                We can grow with you - our facilities scale up to $30m, and our terms improve as your business matures.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-montserrat font-bold text-primary mb-6 text-center">
              We want to be your long term working capital solution.
            </h3>
            <p className="text-lg text-gray-600 font-montserrat text-center max-w-4xl mx-auto leading-relaxed">
              We are a next generation tech-enabled working capital provider enabling merchants to borrow more capital at fair terms. 
              We plug into your existing systems—sales, inventory, banking—to capture a live, 360-degree view of your operations. 
              Our internal automation models translate those data points into forward-looking cash-flow and collateral forecasts using AI and advanced data methods.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
