import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useEffect, useRef } from 'react';

const Overview = () => {
  const sectionRefs = useRef<HTMLElement[]>([]);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            entry.target.classList.remove('opacity-0', 'translate-y-8');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen relative font-source-sans overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/lovable-uploads/video-101ParkAve_Promo.mp4" type="video/mp4" />
      </video>
      
      {/* Animated Dark overlay for better text readability */}
      <div className="fixed top-0 left-0 w-full h-full bg-gradient-to-br from-black/60 via-black/50 to-black/40 z-10 animate-pulse-slow"></div>
      
      {/* Floating Geometric Elements */}
      <div className="fixed inset-0 z-10 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 border border-[#2C7EF4]/20 animate-float-slow transform rotate-45"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border-2 border-[#052C60]/30 animate-float-medium"></div>
        <div className="absolute bottom-40 left-20 w-16 h-16 bg-[#2C7EF4]/10 animate-float-fast"></div>
        <div className="absolute bottom-20 right-10 w-20 h-20 border border-white/20 animate-float-slow transform rotate-12"></div>
      </div>
      
      {/* Global Styles */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes float-slow {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(180deg); }
          }
          @keyframes float-medium {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-15px) rotate(90deg); }
          }
          @keyframes float-fast {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-10px) rotate(45deg); }
          }
          @keyframes fade-in-up {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          @keyframes pulse-slow {
            0%, 100% { opacity: 0.5; }
            50% { opacity: 0.6; }
          }
          @keyframes shimmer {
            0% { background-position: -200% 0; }
            100% { background-position: 200% 0; }
          }
          .animate-float-slow {
            animation: float-slow 8s ease-in-out infinite;
          }
          .animate-float-medium {
            animation: float-medium 6s ease-in-out infinite;
          }
          .animate-float-fast {
            animation: float-fast 4s ease-in-out infinite;
          }
          .animate-fade-in-up {
            animation: fade-in-up 0.8s ease-out forwards;
          }
          .animate-pulse-slow {
            animation: pulse-slow 4s ease-in-out infinite;
          }
          .animate-on-scroll {
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.8s ease-out;
          }
          .hover-lift {
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          }
          .hover-lift:hover {
            transform: translateY(-8px);
            box-shadow: 0 20px 40px rgba(0,0,0,0.15);
          }
          .shimmer-effect {
            background: none;
            animation: shimmer 2s infinite;
            text-shadow: 0 0 8px rgba(44, 126, 244, 0.5);
          }
        `
      }} />
      
      {/* Content overlay */}
      <div className="relative z-20">
        <Header />
      
        <main className="pt-24">
          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-br from-[#052C60]/20 to-black/30 backdrop-blur-sm relative">
            <div className="container-custom">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12 animate-on-scroll">
                  <h1 className="text-5xl md:text-6xl font-lora font-medium text-white mb-6 drop-shadow-lg">
                    Company Overview
                  </h1>
                  <div className="text-sm font-source-sans text-[#2C7EF4] mb-8 drop-shadow-lg font-medium shimmer-effect inline-block px-4 py-2 rounded">
                    Founded 2023 • New York
                  </div>
                </div>
                
                <div className="bg-white/95 backdrop-blur-sm p-8 md:p-12 shadow-[0_1px_6px_rgba(0,0,0,0.1)] border border-[#030303] hover-lift animate-on-scroll">
                  <p className="text-lg font-source-sans text-gray-700 leading-relaxed mb-6">
                    <span className="font-semibold text-[#052C60]">Deep Ocean Partners</span> is a New York–based private-credit platform founded in 2023 that blends hedge-fund-style data science with bespoke structuring to turn overlooked assets and predictive cash-flows into working capital for high-growth brands.
                  </p>
                  
                  <p className="text-lg font-source-sans text-gray-700 leading-relaxed mb-6">
                    Our menu of revolving lines of credit, term loans and other creative facilities typically delivers <span className="font-semibold text-[#2C7EF4]">1.5-2.5× more availability</span> than traditional ABLs and stretches amortization <span className="font-semibold text-[#2C7EF4]">2.5-5× longer</span> than revenue-based loans, cutting monthly payments by <span className="font-semibold text-[#2C7EF4]">50% or more</span>.
                  </p>
                  
                  <p className="text-lg font-source-sans text-gray-700 leading-relaxed">
                    Term sheets from <span className="font-semibold text-[#052C60]">$2 million to $30 million</span> can be issued in about a week. Facilities scale as borrowers mature and are customized around each client's operating data rather than one-size-fits-all covenants, while our leadership team positions itself as a "personal growth team" that adds advisory muscle alongside capital.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Mission Section */}
          <section className="py-20 bg-[#052C60]/30 backdrop-blur-sm relative overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 left-1/4 w-40 h-40 border border-[#2C7EF4] animate-float-medium transform rotate-45"></div>
              <div className="absolute bottom-10 right-1/4 w-32 h-32 bg-[#2C7EF4]/20 animate-float-slow"></div>
            </div>
            
            <div className="container-custom relative z-10">
              <div className="grid md:grid-cols-2 gap-16 items-stretch">
                <div className="flex flex-col justify-center animate-on-scroll">
                  <h2 className="text-4xl font-lora font-medium text-white mb-6 drop-shadow-lg">
                    Our Mission
                  </h2>
                  <p className="text-lg font-source-sans text-white/90 leading-relaxed mb-6 drop-shadow-lg">
                    Our mission is to <span className="font-semibold text-[#2C7EF4] shimmer-effect inline-block px-1">create long-term value for our investor partners</span> through the stewardship of their capital. With a rigorous investment process, we invest across alternative asset classes in private and public credit, liquidations, and venture debt while helping our borrowers scale their business with bespoke finances.
                  </p>
                  <p className="text-lg font-source-sans text-white/90 leading-relaxed drop-shadow-lg">
                    Deep Ocean Partners aims to <span className="font-semibold text-[#2C7EF4] shimmer-effect inline-block px-1">redefine private credit</span> by offering faster, more flexible and more predictive financing than traditional lenders, helping innovative companies grow without sacrificing cash-flow or control.
                  </p>
                </div>
                <div className="bg-white/90 backdrop-blur-sm p-8 shadow-[0_1px_6px_rgba(0,0,0,0.1)] border border-[#030303] h-full flex flex-col justify-center hover-lift animate-on-scroll">
                  <h3 className="text-xl font-lora font-medium text-[#052C60] mb-6 text-center">
                    Why We're Different
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 group">
                      <div className="w-3 h-3 bg-[#2C7EF4] transition-all duration-300 group-hover:scale-125 group-hover:bg-[#052C60]"></div>
                      <span className="font-source-sans text-gray-700 transition-all duration-300 group-hover:text-[#052C60]">Hedge-fund-style data science</span>
                    </div>
                    <div className="flex items-center gap-3 group">
                      <div className="w-3 h-3 bg-[#2C7EF4] transition-all duration-300 group-hover:scale-125 group-hover:bg-[#052C60]"></div>
                      <span className="font-source-sans text-gray-700 transition-all duration-300 group-hover:text-[#052C60]">Bespoke structuring approach</span>
                    </div>
                    <div className="flex items-center gap-3 group">
                      <div className="w-3 h-3 bg-[#2C7EF4] transition-all duration-300 group-hover:scale-125 group-hover:bg-[#052C60]"></div>
                      <span className="font-source-sans text-gray-700 transition-all duration-300 group-hover:text-[#052C60]">Personal growth team advisory</span>
                    </div>
                    <div className="flex items-center gap-3 group">
                      <div className="w-3 h-3 bg-[#2C7EF4] transition-all duration-300 group-hover:scale-125 group-hover:bg-[#052C60]"></div>
                      <span className="font-source-sans text-gray-700 transition-all duration-300 group-hover:text-[#052C60]">Custom operating data covenants</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Location Section */}
          <section className="py-20 bg-white/10 backdrop-blur-sm relative">
            <div className="container-custom">
              <div className="text-center mb-16 animate-on-scroll">
                <h2 className="text-4xl font-lora font-medium text-white mb-6 drop-shadow-lg">
                  Our Location
                </h2>
                <p className="text-xl font-source-sans text-white/90 max-w-3xl mx-auto drop-shadow-lg">
                  Located at the heart of Manhattan, right next to Grand Central
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 items-stretch">
                <div className="bg-white/95 backdrop-blur-sm p-8 shadow-[0_1px_6px_rgba(0,0,0,0.1)] border border-[#030303] h-full flex flex-col justify-center hover-lift animate-on-scroll">
                  <h3 className="text-2xl font-lora font-medium text-[#052C60] mb-6">
                    101 Park Avenue
                  </h3>
                  <div className="space-y-3 text-gray-700 mb-6">
                    <p className="text-lg font-source-sans">11th Floor</p>
                    <p className="text-lg font-source-sans">New York, NY 10178</p>
                    <p className="text-sm font-source-sans text-[#2C7EF4] font-medium">Near Grand Central Terminal</p>
                  </div>
                  
                  <div className="mt-auto pt-6 border-t border-gray-100">
                    <a 
                      href="https://www.linkedin.com/company/deep-ocean-partners/" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[#2C7EF4] hover:underline font-source-sans font-medium transition-all duration-300"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                      Follow us on LinkedIn
                    </a>
                  </div>
                </div>
                
                <div className="h-full animate-on-scroll">
                  <div className="overflow-hidden shadow-[0_1px_6px_rgba(0,0,0,0.1)] border border-[#030303] h-full hover-lift group">
                    <img 
                      src="https://www.101park.com/wp-content/uploads/2023/08/101-Park-Building-Exterior-1-3476.jpg" 
                      alt="101 Park Avenue Building Exterior" 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#052C60]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Values Section */}
          <section className="py-20 bg-[#052C60]/30 backdrop-blur-sm relative overflow-hidden">
            {/* Animated Background Grid */}
            <div className="absolute inset-0 opacity-5">
              <div className="grid grid-cols-6 gap-4 h-full w-full">
                {Array.from({length: 24}).map((_, i) => (
                  <div key={i} className={`border border-[#2C7EF4] animate-float-${i % 3 === 0 ? 'slow' : i % 2 === 0 ? 'medium' : 'fast'}`} style={{animationDelay: `${i * 0.2}s`}}></div>
                ))}
              </div>
            </div>
            
            <div className="container-custom relative z-10">
              <div className="text-center mb-16 animate-on-scroll">
                <h2 className="text-4xl font-lora font-medium text-white mb-6 drop-shadow-lg">
                  Our Core Values & Business Principles
                </h2>
                <p className="text-xl font-source-sans text-white/90 max-w-3xl mx-auto drop-shadow-lg">
                  The principles that guide everything we do and define who we are
                </p>
              </div>
              
              {/* Priority Statement */}
              <div className="relative bg-white/95 backdrop-blur-sm p-10 mb-12 text-center shadow-[0_2px_8px_rgba(0,0,0,0.12)] border border-[#030303] hover-lift animate-on-scroll group overflow-hidden">
                {/* Subtle gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#2C7EF4]/5 via-transparent to-[#052C60]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Subtle decorative elements */}
                <div className="absolute top-3 left-3 w-2 h-2 bg-[#2C7EF4] opacity-30 transition-all duration-300 group-hover:opacity-60 group-hover:scale-125"></div>
                <div className="absolute top-3 right-3 w-2 h-2 bg-[#052C60] opacity-30 transition-all duration-300 group-hover:opacity-60 group-hover:scale-125"></div>
                <div className="absolute bottom-3 left-3 w-2 h-2 bg-[#052C60] opacity-30 transition-all duration-300 group-hover:opacity-60 group-hover:scale-125"></div>
                <div className="absolute bottom-3 right-3 w-2 h-2 bg-[#2C7EF4] opacity-30 transition-all duration-300 group-hover:opacity-60 group-hover:scale-125"></div>
                
                <div className="relative z-10">
                  <h3 className="text-2xl font-lora font-medium text-[#052C60] mb-4 relative">
                    Our Foundation
                    {/* Subtle underline accent */}
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-12 h-0.5 bg-gradient-to-r from-[#2C7EF4] to-[#052C60] opacity-50 group-hover:opacity-100 group-hover:w-20 transition-all duration-500"></div>
                  </h3>
                  <p className="text-xl font-source-sans text-gray-700 font-medium leading-relaxed">
                    Our <span className="relative inline-block text-[#2C7EF4] shimmer-effect">Investors</span> and <span className="relative inline-block text-[#2C7EF4] shimmer-effect">Clients</span> are our number one priority.
                  </p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white/95 backdrop-blur-sm p-8 shadow-[0_1px_6px_rgba(0,0,0,0.1)] border border-[#030303] hover-lift animate-on-scroll group">
                  <div className="w-12 h-12 bg-[#2C7EF4] flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-[#052C60] group-hover:scale-110">
                    <svg className="w-6 h-6 text-white transition-transform duration-300 group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-lora font-medium text-[#052C60] mb-4 transition-colors duration-300 group-hover:text-[#2C7EF4]">
                    Integrity
                  </h3>
                  <p className="font-source-sans text-gray-600 leading-relaxed">
                    Act with the utmost integrity, insisting on transparency from our Firm as we learn from our experiences and reward honesty and strong character.
                  </p>
                </div>
                
                <div className="bg-white/95 backdrop-blur-sm p-8 shadow-[0_1px_6px_rgba(0,0,0,0.1)] border border-[#030303] hover-lift animate-on-scroll group">
                  <div className="w-12 h-12 bg-[#2C7EF4] flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-[#052C60] group-hover:scale-110">
                    <svg className="w-6 h-6 text-white transition-transform duration-300 group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-lora font-medium text-[#052C60] mb-4 transition-colors duration-300 group-hover:text-[#2C7EF4]">
                    Excellence
                  </h3>
                  <p className="font-source-sans text-gray-600 leading-relaxed">
                    Strive for nothing less than excellence. We are consistently aspiring to achieve outstanding results for our investors, our stakeholders, and our Firm.
                  </p>
                </div>
                
                <div className="bg-white/95 backdrop-blur-sm p-8 shadow-[0_1px_6px_rgba(0,0,0,0.1)] border border-[#030303] hover-lift animate-on-scroll group">
                  <div className="w-12 h-12 bg-[#2C7EF4] flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-[#052C60] group-hover:scale-110">
                    <svg className="w-6 h-6 text-white transition-transform duration-300 group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-lora font-medium text-[#052C60] mb-4 transition-colors duration-300 group-hover:text-[#2C7EF4]">
                    Innovate
                  </h3>
                  <p className="font-source-sans text-gray-600 leading-relaxed">
                    Be in a perpetual state of dissatisfaction. Continuously challenge the status quo and push boundaries to create better solutions.
                  </p>
                </div>
                
                <div className="bg-white/95 backdrop-blur-sm p-8 shadow-[0_1px_6px_rgba(0,0,0,0.1)] border border-[#030303] hover-lift animate-on-scroll group">
                  <div className="w-12 h-12 bg-[#2C7EF4] flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-[#052C60] group-hover:scale-110">
                    <svg className="w-6 h-6 text-white transition-transform duration-300 group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-lora font-medium text-[#052C60] mb-4 transition-colors duration-300 group-hover:text-[#2C7EF4]">
                    Culture
                  </h3>
                  <p className="font-source-sans text-gray-600 leading-relaxed">
                    We prioritize collaboration and value diversity, creating a culture that fosters teamwork and an entrepreneurial mindset in the pursuit of excellence.
                  </p>
                </div>
                
                <div className="bg-white/95 backdrop-blur-sm p-8 shadow-[0_1px_6px_rgba(0,0,0,0.1)] border border-[#030303] hover-lift animate-on-scroll group">
                  <div className="w-12 h-12 bg-[#2C7EF4] flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-[#052C60] group-hover:scale-110">
                    <svg className="w-6 h-6 text-white transition-transform duration-300 group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-lora font-medium text-[#052C60] mb-4 transition-colors duration-300 group-hover:text-[#2C7EF4]">
                    Develop Talent
                  </h3>
                  <p className="font-source-sans text-gray-600 leading-relaxed">
                    Develop talent through mentorship. We invest in our people and believe in the power of knowledge sharing and growth.
                  </p>
                </div>
                
                <div className="bg-white/95 backdrop-blur-sm p-8 shadow-[0_1px_6px_rgba(0,0,0,0.1)] border border-[#030303] hover-lift animate-on-scroll group">
                  <div className="w-12 h-12 bg-[#2C7EF4] flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-[#052C60] group-hover:scale-110">
                    <svg className="w-6 h-6 text-white transition-transform duration-300 group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-lora font-medium text-[#052C60] mb-4 transition-colors duration-300 group-hover:text-[#2C7EF4]">
                    Philanthropy
                  </h3>
                  <p className="font-source-sans text-gray-600 leading-relaxed">
                    Serve those around us with our time and capital. We believe in giving back to our communities and making a positive impact.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </div>
  );
};

export default Overview; 