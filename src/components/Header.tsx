import { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    {
      label: 'About',
      dropdown: [
        { path: '/about/overview', label: 'Overview' },
        { path: '/about/approach', label: 'Our Approach' },
        { path: '/about/team', label: 'Our Team' },
        { path: '/about/careers', label: 'Careers' }
      ]
    },
    {
      label: 'Solutions',
      dropdown: [
        { path: '/solutions/borrowers', label: 'For Borrowers' },
        { path: '/solutions/investors', label: 'For Investors' }
      ]
    },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
      isScrolled 
        ? 'bg-white shadow-lg' 
        : 'bg-gradient-to-b from-white/80 via-white/60 to-white/40 backdrop-blur-md'
    }`}>
      <div className="container-custom">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="group relative">
              <img 
                src="/lovable-uploads/60420b69-db1d-4895-aac8-8227d34c68b2.png" 
                alt="Deep Ocean Partners" 
                className="relative h-16 w-auto transition-all duration-500 group-hover:scale-110"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 mx-auto">
            {navItems.map((item, index) => {
              if (item.dropdown) {
                const isActiveDropdown = item.dropdown.some(subItem => location.pathname === subItem.path);
                return (
                  <div 
                    key={item.label}
                    className="relative group"
                    onMouseEnter={() => setActiveDropdown(item.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button className={`relative font-lora font-medium transition-all duration-300 text-lg flex items-center gap-1 ${
                      isActiveDropdown 
                        ? 'text-[#2C7EF4]' 
                        : 'text-[#052C60] hover:text-[#2C7EF4]'
                    }`}>
                      <span>{item.label}</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    <span className={`absolute bottom-0 left-0 h-0.5 bg-[#2C7EF4] transition-all duration-300 ${
                      isActiveDropdown ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}></span>
                    
                    {/* Dropdown Menu */}
                    <div className={`absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 transition-all duration-300 ${
                      activeDropdown === item.label ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                    }`}>
                      {item.dropdown.map((subItem) => {
                        const isActive = location.pathname === subItem.path;
                        return (
                          <Link
                            key={subItem.path}
                            to={subItem.path}
                            className={`block px-4 py-3 font-source-sans font-medium text-sm transition-colors duration-300 first:rounded-t-lg last:rounded-b-lg ${
                              isActive 
                                ? 'text-[#2C7EF4] bg-blue-50' 
                                : 'text-[#052C60] hover:text-[#2C7EF4] hover:bg-gray-50'
                            }`}
                          >
                            {subItem.label}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                );
              } else {
                const isActive = location.pathname === item.path;
                return (
                  <Link 
                    key={item.path}
                    to={item.path} 
                    className={`relative font-lora font-medium transition-all duration-300 group text-lg ${
                      isActive 
                        ? 'text-[#2C7EF4]' 
                        : 'text-[#052C60] hover:text-[#2C7EF4]'
                    }`}
                  >
                    <span className="relative z-10">{item.label}</span>
                    <span className={`absolute bottom-0 left-0 h-0.5 bg-[#2C7EF4] transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}></span>
                  </Link>
                );
              }
            })}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden relative p-2 rounded-lg transition-all duration-300 text-[#052C60]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-6 border-t border-gray-200 bg-white">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => {
                if (item.dropdown) {
                  const isActiveDropdown = item.dropdown.some(subItem => location.pathname === subItem.path);
                  return (
                    <div key={item.label} className="space-y-2">
                      <div className={`font-lora font-medium text-lg px-4 py-2 ${
                        isActiveDropdown ? 'text-[#2C7EF4]' : 'text-[#052C60]'
                      }`}>
                        {item.label}
                      </div>
                      <div className="pl-4 space-y-2">
                        {item.dropdown.map((subItem) => {
                          const isActive = location.pathname === subItem.path;
                          return (
                            <Link 
                              key={subItem.path}
                              to={subItem.path} 
                              className={`block font-source-sans font-medium text-base px-4 py-2 transition-all duration-300 ${
                                isActive 
                                  ? 'text-[#2C7EF4] bg-blue-50' 
                                  : 'text-gray-600 hover:text-[#2C7EF4]'
                              }`}
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {subItem.label}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  );
                } else {
                  const isActive = location.pathname === item.path;
                  return (
                    <Link 
                      key={item.path}
                      to={item.path} 
                      className={`font-lora font-medium transition-all duration-300 text-lg flex items-center justify-between group px-4 py-2 ${
                        isActive 
                          ? 'text-[#2C7EF4]' 
                          : 'text-[#052C60] hover:text-[#2C7EF4]'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <span>{item.label}</span>
                      <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  );
                }
              })}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
