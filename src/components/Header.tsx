
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-deep-navy/95 backdrop-blur-sm border-b border-white/10' 
        : 'bg-transparent'
    }`}>
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-2">
            <Link to="/">
              <img 
                src="/lovable-uploads/60420b69-db1d-4895-aac8-8227d34c68b2.png" 
                alt="Deep Ocean Partners" 
                className={`h-12 w-auto transition-all duration-300 ${
                  isScrolled ? 'filter brightness-0 invert' : ''
                }`}
              />
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-8 mx-auto">
            <Link 
              to="/" 
              className={`font-medium transition-all duration-300 hover:text-bright-azure relative group ${
                isScrolled ? 'text-light-text' : 'text-near-black'
              }`}
            >
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-bright-azure transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link 
              to="/solutions" 
              className={`font-medium transition-all duration-300 hover:text-bright-azure relative group ${
                isScrolled ? 'text-light-text' : 'text-near-black'
              }`}
            >
              Solutions
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-bright-azure transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link 
              to="/team" 
              className={`font-medium transition-all duration-300 hover:text-bright-azure relative group ${
                isScrolled ? 'text-light-text' : 'text-near-black'
              }`}
            >
              Team
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-bright-azure transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link 
              to="/contact" 
              className={`font-medium transition-all duration-300 hover:text-bright-azure relative group ${
                isScrolled ? 'text-light-text' : 'text-near-black'
              }`}
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-bright-azure transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </nav>

          <button
            className={`md:hidden transition-colors duration-300 ${
              isScrolled ? 'text-light-text' : 'text-near-black'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-6 border-t border-soft-gray/20">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className={`font-medium transition-colors duration-300 hover:text-bright-azure ${
                  isScrolled ? 'text-light-text' : 'text-near-black'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/solutions" 
                className={`font-medium transition-colors duration-300 hover:text-bright-azure ${
                  isScrolled ? 'text-light-text' : 'text-near-black'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Solutions
              </Link>
              <Link 
                to="/team" 
                className={`font-medium transition-colors duration-300 hover:text-bright-azure ${
                  isScrolled ? 'text-light-text' : 'text-near-black'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Team
              </Link>
              <Link 
                to="/contact" 
                className={`font-medium transition-colors duration-300 hover:text-bright-azure ${
                  isScrolled ? 'text-light-text' : 'text-near-black'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
