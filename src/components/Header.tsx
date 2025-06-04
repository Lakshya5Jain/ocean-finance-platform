import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-2">
            <Link to="/">
              <img 
                src="/lovable-uploads/60420b69-db1d-4895-aac8-8227d34c68b2.png" 
                alt="Deep Ocean Partners" 
                className="h-20 w-auto"
              />
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-8 mx-auto">
            <Link to="/" className="text-gray-700 hover:text-primary transition-colors font-montserrat font-medium">About</Link>
            <Link to="/solutions" className="text-gray-700 hover:text-primary transition-colors font-montserrat font-medium">Solutions</Link>
            <Link to="/team" className="text-gray-700 hover:text-primary transition-colors font-montserrat font-medium">Team</Link>
            <Link to="/contact" className="text-gray-700 hover:text-primary transition-colors font-montserrat font-medium">Contact</Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            {/* Removed phone number and Get Started button */}
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="text-gray-700 hover:text-primary transition-colors font-montserrat font-medium">About</Link>
              <Link to="/solutions" className="text-gray-700 hover:text-primary transition-colors font-montserrat font-medium">Solutions</Link>
              <Link to="/team" className="text-gray-700 hover:text-primary transition-colors font-montserrat font-medium">Team</Link>
              <Link to="/contact" className="text-gray-700 hover:text-primary transition-colors font-montserrat font-medium">Contact</Link>
              <div className="pt-4 flex flex-col space-y-2">
                {/* Removed phone number and Get Started button */}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
