import { ArrowUpRight, Mail, MapPin, Phone, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-near-black to-deep-navy text-light-text pt-24 pb-12 relative overflow-hidden">
      {/* Advanced background effects */}
      <div className="absolute inset-0 data-grid opacity-10"></div>
      <div className="absolute inset-0 holographic opacity-5"></div>
      
      {/* Floating orbs */}
      <div className="floating-orb w-64 h-64 bottom-0 right-0 opacity-20"></div>
      <div className="floating-orb w-48 h-48 top-0 left-1/4 opacity-10" style={{animationDelay: '5s'}}></div>
      
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-bright-azure via-gradient-mid to-gradient-end"></div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Brand section */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src="/lovable-uploads/60420b69-db1d-4895-aac8-8227d34c68b2.png" 
                  alt="Deep Ocean Partners" 
                  className="h-12 w-auto filter brightness-0 invert"
                />
                <div>
                  <div className="text-xs font-orbitron font-semibold text-white/50 uppercase tracking-wider">
                    Deep Ocean
                  </div>
                  <div className="text-lg font-space-grotesk font-bold text-transparent bg-clip-text bg-gradient-to-r from-bright-azure to-gradient-end">
                    Partners
                  </div>
                </div>
              </div>
              <p className="text-white/60 max-w-md leading-relaxed mb-6">
                Next-generation private credit powered by quantum analytics and institutional expertise. 
                <span className="text-bright-azure font-medium"> Financing the future</span> of business.
              </p>
              
              {/* Social links */}
              <div className="flex gap-4">
                <a href="#" className="group">
                  <div className="w-10 h-10 rounded-lg glass-premium flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-gradient-to-r group-hover:from-bright-azure/20 group-hover:to-gradient-mid/20">
                    <Linkedin className="w-5 h-5 text-white/60 group-hover:text-bright-azure transition-colors" />
                  </div>
                </a>
                <a href="#" className="group">
                  <div className="w-10 h-10 rounded-lg glass-premium flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-gradient-to-r group-hover:from-bright-azure/20 group-hover:to-gradient-mid/20">
                    <Twitter className="w-5 h-5 text-white/60 group-hover:text-bright-azure transition-colors" />
                  </div>
                </a>
                <a href="#" className="group">
                  <div className="w-10 h-10 rounded-lg glass-premium flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-gradient-to-r group-hover:from-bright-azure/20 group-hover:to-gradient-mid/20">
                    <Mail className="w-5 h-5 text-white/60 group-hover:text-bright-azure transition-colors" />
                  </div>
                </a>
              </div>
            </div>
            
            {/* Solutions */}
            <div>
              <h4 className="font-semibold text-lg mb-6 text-white flex items-center gap-2">
                <div className="w-8 h-0.5 bg-gradient-to-r from-bright-azure to-transparent rounded-full"></div>
                Solutions
              </h4>
              <ul className="space-y-3">
                {['Term Loans', 'Lines of Credit', 'Revenue Financing', 'Growth Capital'].map((item, index) => (
                  <li key={index}>
                    <a href="#" className="group flex items-center gap-2 text-white/60 hover:text-bright-azure transition-all duration-300">
                      <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                      <span>{item}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Contact */}
            <div>
              <h4 className="font-semibold text-lg mb-6 text-white flex items-center gap-2">
                <div className="w-8 h-0.5 bg-gradient-to-r from-gradient-mid to-transparent rounded-full"></div>
                Connect
              </h4>
              <ul className="space-y-4">
                <li>
                  <a href="mailto:info@deepoceanpartners.com" className="group flex items-start gap-3 text-white/60 hover:text-gradient-mid transition-all duration-300">
                    <Mail className="w-4 h-4 mt-1 text-gradient-mid" />
                    <div>
                      <div className="text-sm">Email</div>
                      <div className="text-xs text-white/40">info@deepoceanpartners.com</div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#" className="group flex items-start gap-3 text-white/60 hover:text-gradient-mid transition-all duration-300">
                    <MapPin className="w-4 h-4 mt-1 text-gradient-mid" />
                    <div>
                      <div className="text-sm">Location</div>
                      <div className="text-xs text-white/40">New York, NY</div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#" className="group flex items-start gap-3 text-white/60 hover:text-gradient-mid transition-all duration-300">
                    <Phone className="w-4 h-4 mt-1 text-gradient-mid" />
                    <div>
                      <div className="text-sm">Phone</div>
                      <div className="text-xs text-white/40">+1 (555) 123-4567</div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Bottom section */}
          <div className="relative">
            {/* Animated gradient divider */}
            <div className="relative h-px mb-8 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-bright-azure to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gradient-mid to-transparent animate-pulse" style={{animationDuration: '3s'}}></div>
            </div>
            
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex items-center gap-2 text-sm text-white/40">
                <span>© 2024 Deep Ocean Partners</span>
                <span className="text-bright-azure">•</span>
                <span>All rights reserved</span>
                <span className="text-gradient-mid">•</span>
                <a href="#" className="hover:text-bright-azure transition-colors">Privacy Policy</a>
                <span className="text-gradient-end">•</span>
                <a href="#" className="hover:text-bright-azure transition-colors">Terms of Service</a>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="text-xs font-orbitron text-white/30 uppercase tracking-wider">
                  Powered by
                </div>
                <div className="text-xs font-orbitron font-bold text-transparent bg-clip-text bg-gradient-to-r from-bright-azure via-gradient-mid to-gradient-end uppercase tracking-wider">
                  Quantum Finance™
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
