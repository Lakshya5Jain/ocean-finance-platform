
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-2">
              <img 
                src="/lovable-uploads/60420b69-db1d-4895-aac8-8227d34c68b2.png" 
                alt="Deep Ocean Partners" 
                className="h-8 w-auto mb-4 filter brightness-0 invert"
              />
              <p className="font-montserrat text-gray-300 max-w-md">
                Tech-enabled private credit fund providing flexible financing solutions. 
                Bridging fintech precision with institutional private credit.
              </p>
            </div>
            
            <div>
              <h4 className="font-montserrat font-semibold text-lg mb-4">Solutions</h4>
              <ul className="space-y-2 font-montserrat text-gray-300">
                <li>Term Loans</li>
                <li>Lines of Credit</li>
                <li>Invoice Financing</li>
                <li>Growth Capital</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-montserrat font-semibold text-lg mb-4">Company</h4>
              <ul className="space-y-2 font-montserrat text-gray-300">
                <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#team" className="hover:text-white transition-colors">Team</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8 text-center">
            <p className="font-montserrat text-gray-400">
              © 2024 Deep Ocean Partners. All rights reserved. | deepoceanpartners.com
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
