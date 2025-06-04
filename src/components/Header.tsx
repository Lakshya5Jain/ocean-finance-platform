import { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/60420b69-db1d-4895-aac8-8227d34c68b2.png" 
              alt="Deep Ocean Partners" 
              className="h-20 w-auto"
            />
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-700 hover:text-primary transition-colors font-montserrat font-medium">About</a>
            <a href="#solutions" className="text-gray-700 hover:text-primary transition-colors font-montserrat font-medium">Solutions</a>
            <a href="#team" className="text-gray-700 hover:text-primary transition-colors font-montserrat font-medium">Team</a>
            <a href="#contact" className="text-gray-700 hover:text-primary transition-colors font-montserrat font-medium">Contact</a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:2129708910" className="flex items-center space-x-1 text-gray-600 hover:text-primary transition-colors">
              <Phone className="h-4 w-4" />
              <span className="font-montserrat text-sm">(212) 970-8910</span>
            </a>
            <Button className="bg-secondary hover:bg-secondary/90 text-white font-montserrat font-semibold">
              Get Started
            </Button>
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
              <a href="#about" className="text-gray-700 hover:text-primary transition-colors font-montserrat font-medium">About</a>
              <a href="#solutions" className="text-gray-700 hover:text-primary transition-colors font-montserrat font-medium">Solutions</a>
              <a href="#team" className="text-gray-700 hover:text-primary transition-colors font-montserrat font-medium">Team</a>
              <a href="#contact" className="text-gray-700 hover:text-primary transition-colors font-montserrat font-medium">Contact</a>
              <div className="pt-4 flex flex-col space-y-2">
                <a href="tel:2129708910" className="flex items-center space-x-1 text-gray-600">
                  <Phone className="h-4 w-4" />
                  <span className="font-montserrat text-sm">(212) 970-8910</span>
                </a>
                <Button className="bg-secondary hover:bg-secondary/90 text-white font-montserrat font-semibold w-full">
                  Get Started
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
