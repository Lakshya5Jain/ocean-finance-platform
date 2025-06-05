
const Footer = () => {
  return (
    <footer className="bg-near-black text-light-text section-spacing relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 data-dots opacity-20"></div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2">
              <img 
                src="/lovable-uploads/60420b69-db1d-4895-aac8-8227d34c68b2.png" 
                alt="Deep Ocean Partners" 
                className="h-10 w-auto mb-6 filter brightness-0 invert"
              />
              <p className="text-body text-light-text/80 max-w-md leading-relaxed">
                Tech-enabled private credit fund providing flexible financing solutions. 
                Bridging fintech precision with institutional private credit.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-6 text-light-text">Solutions</h4>
              <ul className="space-y-3 text-light-text/80">
                <li className="hover:text-bright-azure transition-colors cursor-pointer">Term Loans</li>
                <li className="hover:text-bright-azure transition-colors cursor-pointer">Lines of Credit</li>
                <li className="hover:text-bright-azure transition-colors cursor-pointer">Invoice Financing</li>
                <li className="hover:text-bright-azure transition-colors cursor-pointer">Growth Capital</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-6 text-light-text">Company</h4>
              <ul className="space-y-3 text-light-text/80">
                <li><a href="/" className="hover:text-bright-azure transition-colors">About</a></li>
                <li><a href="/team" className="hover:text-bright-azure transition-colors">Team</a></li>
                <li><a href="/contact" className="hover:text-bright-azure transition-colors">Contact</a></li>
                <li><a href="/solutions" className="hover:text-bright-azure transition-colors">Solutions</a></li>
              </ul>
            </div>
          </div>
          
          {/* Gradient divider */}
          <div className="gradient-wave w-full mb-8"></div>
          
          <div className="text-center">
            <p className="text-light-text/60">
              © 2024 Deep Ocean Partners. All rights reserved. | deepoceanpartners.com
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
