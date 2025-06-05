
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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-deep-navy/95 backdrop-blur-xl border-b border-white/10 shadow-2xl' 
        : 'bg-transparent'
    }`}>
      <div className="container-custom">
        <div className="flex items-center justify-between h-24">
          <div className="flex items-center space-x-2">
            <Link to="/" className="group">
              <img 
                src="/lovable-uploads/60420b69-db1d-4895-aac8-8227d34c68b2.png" 
                alt="Deep Ocean Partners" 
                className="h-20 w-auto transition-all duration-500 group-hover:scale-110"
                style={{ filter: 'none' }}
              />
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-12 mx-auto">
            <Link 
              to="/" 
              className={`font-medium transition-all duration-300 hover:text-bright-azure relative group text-lg ${
                isScrolled ? 'text-light-text' : 'text-white'
              }`}
            >
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-bright-azure to-gradient-end transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link 
              to="/solutions" 
              className={`font-medium transition-all duration-300 hover:text-bright-azure relative group text-lg ${
                isScrolled ? 'text-light-text' : 'text-white'
              }`}
            >
              Solutions
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-bright-azure to-gradient-end transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link 
              to="/team" 
              className={`font-medium transition-all duration-300 hover:text-bright-azure relative group text-lg ${
                isScrolled ? 'text-light-text' : 'text-white'
              }`}
            >
              Team
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-bright-azure to-gradient-end transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link 
              to="/contact" 
              className={`font-medium transition-all duration-300 hover:text-bright-azure relative group text-lg ${
                isScrolled ? 'text-light-text' : 'text-white'
              }`}
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-bright-azure to-gradient-end transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </nav>

          <button
            className={`md:hidden transition-colors duration-300 ${
              isScrolled ? 'text-light-text' : 'text-white'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-8 border-t border-white/20 bg-deep-navy/95 backdrop-blur-xl">
            <nav className="flex flex-col space-y-6">
              <Link 
                to="/" 
                className="font-medium transition-colors duration-300 hover:text-bright-azure text-light-text text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/solutions" 
                className="font-medium transition-colors duration-300 hover:text-bright-azure text-light-text text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Solutions
              </Link>
              <Link 
                to="/team" 
                className="font-medium transition-colors duration-300 hover:text-bright-azure text-light-text text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Team
              </Link>
              <Link 
                to="/contact" 
                className="font-medium transition-colors duration-300 hover:text-bright-azure text-light-text text-lg"
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
