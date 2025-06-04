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
              At Deep Ocean Partners, we understand that every business has unique financing needs. Whether you're looking to 
              expand operations, manage cash flow, or seize new opportunities, we're here to provide the capital and partnership 
              you need to turn your vision into reality. Our approach combines cutting-edge technology with decades of financial 
              expertise to deliver solutions that grow with your business.
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
              From Application to Growth: We're With You Every Step
            </h3>
            <p className="text-lg text-gray-600 font-montserrat text-center max-w-4xl mx-auto leading-relaxed">
              Our streamlined process means you get the financing you need, when you need it. We integrate with your existing 
              systems to understand your business in real-time, enabling us to provide larger credit limits, better terms, and 
              more flexible repayment options. Because when your business grows, we all succeed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
