import React, { useEffect, useRef, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  Clock, 
  DollarSign, 
  TrendingUp, 
  Shield, 
  CheckCircle, 
  ArrowRight, 
  Target, 
  Zap, 
  Users, 
  BarChart3, 
  X, 
  Building, 
  Laptop, 
  CreditCard, 
  Cpu, 
  Rocket, 
  Database, 
  LineChart, 
  Sparkles, 
  CircleDollarSign, 
  FileText, 
  Receipt, 
  ShoppingCart,
  TrendingDown,
  BarChart,
  PieChart,
  Activity,
  Upload,
  Brain,
  ChevronRight,
  RotateCw,
  TrendingUp as Growth,
  Lightbulb
} from 'lucide-react';

const ForBorrowers = () => {
  const [scrollY, setScrollY] = useState(0);
  const dataFlowRef = useRef(null);
  const [isDataFlowVisible, setIsDataFlowVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsDataFlowVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (dataFlowRef.current) {
      observer.observe(dataFlowRef.current);
    }

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
        className="fixed top-0 left-0 w-full object-cover z-0"
        style={{ 
          height: '110vh', 
          objectPosition: 'center center', 
          transform: 'translateY(-5%)' 
        }}
      >
        <source src="/Submarine_s_Deep_Ocean_Search.mp4" type="video/mp4" />
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
      
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
          }
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
          @keyframes slide-up {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes fade-in {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes data-flow {
            0% { transform: translateX(-100px) scale(0); opacity: 0; }
            50% { opacity: 1; }
            100% { transform: translateX(100px) scale(1); opacity: 0; }
          }
          @keyframes pulse-glow {
            0%, 100% { box-shadow: 0 0 20px rgba(44, 126, 244, 0.3); }
            50% { box-shadow: 0 0 40px rgba(44, 126, 244, 0.6); }
          }
          @keyframes pulse-slow {
            0%, 100% { opacity: 0.5; }
            50% { opacity: 0.6; }
          }
          @keyframes shimmer {
            0% { background-position: -200% 0; }
            100% { background-position: 200% 0; }
          }
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @keyframes glow {
            0%, 100% { box-shadow: 0 0 20px rgba(44, 126, 244, 0.2); }
            50% { box-shadow: 0 0 30px rgba(44, 126, 244, 0.4); }
          }
          @keyframes bounce-subtle {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-5px); }
          }
          .animate-float { animation: float 3s ease-in-out infinite; }
          .animate-float-slow {
            animation: float-slow 8s ease-in-out infinite;
          }
          .animate-float-medium {
            animation: float-medium 6s ease-in-out infinite;
          }
          .animate-float-fast {
            animation: float-fast 4s ease-in-out infinite;
          }
          .animate-slide-up { animation: slide-up 0.8s ease-out forwards; }
          .animate-fade-in { animation: fade-in 1s ease-out forwards; }
          .animate-data-flow { animation: data-flow 3s ease-in-out infinite; }
          .animate-pulse-glow { animation: pulse-glow 2s ease-in-out infinite; }
          .animate-pulse-slow {
            animation: pulse-slow 4s ease-in-out infinite;
          }
          .shimmer-effect {
            background: none;
            animation: shimmer 2s infinite;
            text-shadow: 0 0 8px rgba(44, 126, 244, 0.5);
          }
          .animate-scroll {
            animation: scroll 8s linear infinite;
          }
          
          /* Deep Ocean Style Guide */
          .ocean-card {
            background: #FFFFFF;
            border: 1px solid #030303;
            box-shadow: 0 1px 6px rgba(0, 0, 0, 0.1);
            border-radius: 0px;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          }
          .ocean-card:hover {
            transform: translateY(-6px) scale(1.02);
            box-shadow: 0 12px 30px rgba(0, 0, 0, 0.2);
            border-color: #2C7EF4;
          }
          .ocean-button {
            background: #2C7EF4;
            color: #FFFFFF;
            border: none;
            border-radius: 0px;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            text-decoration: none;
            display: inline-flex;
            align-items: center;
            gap: 8px;
          }
          .ocean-button:hover {
            background: #1F5FCE;
            transform: translateY(-3px) scale(1.05);
            box-shadow: 0 10px 25px rgba(44, 126, 244, 0.3);
          }
          .ocean-link {
            color: #2C7EF4;
            text-decoration: none;
            transition: all 0.3s ease;
          }
          .ocean-link:hover {
            text-decoration: underline;
          }
        `
      }} />
      
      {/* Content overlay */}
      <div className="relative z-20">
        <Header />
        
        <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-[#052C60]/20 to-black/30 backdrop-blur-sm text-white relative overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden opacity-30">
            <div className="absolute top-20 left-10 w-32 h-32 bg-[#2C7EF4]/20 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute top-40 right-20 w-24 h-24 bg-white/10 rounded-full blur-lg animate-bounce" style={{ animationDelay: '1s' }}></div>
            <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-[#2C7EF4]/30 rounded-full blur-md animate-pulse" style={{ animationDelay: '2s' }}></div>
            {/* Floating Data Points */}
            <div className="absolute top-32 right-1/3 animate-float">
              <Database className="w-8 h-8 text-[#2C7EF4]/60" />
            </div>
            <div className="absolute bottom-32 left-1/3 animate-float" style={{ animationDelay: '1.5s' }}>
              <BarChart className="w-6 h-6 text-white/40" />
            </div>
            <div className="absolute top-1/2 right-20 animate-float" style={{ animationDelay: '3s' }}>
              <TrendingUp className="w-7 h-7 text-[#2C7EF4]/50" />
            </div>
          </div>
          
          <div className="container-custom relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              <h1 className="text-6xl md:text-7xl font-medium mb-8 leading-tight animate-slide-up drop-shadow-lg" style={{ fontFamily: 'Lora, Georgia, serif' }}>
                Deep Ocean gives you credit for assets overlooked by other lenders.
              </h1>
              <p className="text-2xl md:text-3xl text-blue-200 leading-relaxed mb-12 max-w-4xl mx-auto animate-slide-up drop-shadow-lg" style={{ fontFamily: '"Source Sans Pro", "Helvetica Neue", Arial, sans-serif', animationDelay: '0.2s' }}>
                Create a custom financing plan to help you reach your goals.
              </p>
            </div>
          </div>
        </section>

        {/* Logo Carousel Section */}
        <section className="py-16 bg-white/95 backdrop-blur-sm relative">
          <div className="container-custom">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-medium text-gray-900 mb-4" style={{ fontFamily: 'Lora, Georgia, serif' }}>
                Top Brands Taking Advantage of Deep Ocean Partners
              </h2>
            </div>
            <div className="overflow-hidden">
              <div className="flex animate-scroll">
                {/* First set of logos */}
                <div className="flex items-center justify-center min-w-0 flex-shrink-0 px-4">
                  <img src="/Logos/RC_vf.png" alt="Ring Concierge" className="h-6 md:h-8 object-contain grayscale hover:grayscale-0 hover:scale-110 transition-all duration-300" />
                </div>
                <div className="flex items-center justify-center min-w-0 flex-shrink-0 px-4">
                  <img src="/Logos/Geologie_vf.png" alt="Geologie" className="h-6 md:h-8 object-contain grayscale hover:grayscale-0 hover:scale-110 transition-all duration-300" />
                </div>
                <div className="flex items-center justify-center min-w-0 flex-shrink-0 px-4">
                  <img src="/Logos/Haven_vf.png" alt="Haven" className="h-6 md:h-8 object-contain grayscale hover:grayscale-0 hover:scale-110 transition-all duration-300" />
                </div>
                <div className="flex items-center justify-center min-w-0 flex-shrink-0 px-4">
                  <img src="/Logos/Juvenon_vf.png" alt="Juvenon" className="h-6 md:h-8 object-contain grayscale hover:grayscale-0 hover:scale-110 transition-all duration-300" />
                </div>
                <div className="flex items-center justify-center min-w-0 flex-shrink-0 px-4">
                  <img src="/Logos/Naadam_vf.png" alt="Naadam" className="h-6 md:h-8 object-contain grayscale hover:grayscale-0 hover:scale-110 transition-all duration-300" />
                </div>
                <div className="flex items-center justify-center min-w-0 flex-shrink-0 px-4">
                  <img src="/Logos/Cure_vf.png" alt="Cure" className="h-6 md:h-8 object-contain grayscale hover:grayscale-0 hover:scale-110 transition-all duration-300" />
                </div>
                <div className="flex items-center justify-center min-w-0 flex-shrink-0 px-4">
                  <img src="/Logos/Diggs_vf.png" alt="Diggs" className="h-6 md:h-8 object-contain grayscale hover:grayscale-0 hover:scale-110 transition-all duration-300" />
                </div>
                {/* Duplicate set for seamless loop */}
                <div className="flex items-center justify-center min-w-0 flex-shrink-0 px-4">
                  <img src="/Logos/RC_vf.png" alt="Ring Concierge" className="h-6 md:h-8 object-contain grayscale hover:grayscale-0 hover:scale-110 transition-all duration-300" />
                </div>
                <div className="flex items-center justify-center min-w-0 flex-shrink-0 px-4">
                  <img src="/Logos/Geologie_vf.png" alt="Geologie" className="h-6 md:h-8 object-contain grayscale hover:grayscale-0 hover:scale-110 transition-all duration-300" />
                </div>
                <div className="flex items-center justify-center min-w-0 flex-shrink-0 px-4">
                  <img src="/Logos/Haven_vf.png" alt="Haven" className="h-6 md:h-8 object-contain grayscale hover:grayscale-0 hover:scale-110 transition-all duration-300" />
                </div>
                <div className="flex items-center justify-center min-w-0 flex-shrink-0 px-4">
                  <img src="/Logos/Juvenon_vf.png" alt="Juvenon" className="h-6 md:h-8 object-contain grayscale hover:grayscale-0 hover:scale-110 transition-all duration-300" />
                </div>
                <div className="flex items-center justify-center min-w-0 flex-shrink-0 px-4">
                  <img src="/Logos/Naadam_vf.png" alt="Naadam" className="h-6 md:h-8 object-contain grayscale hover:grayscale-0 hover:scale-110 transition-all duration-300" />
                </div>
                <div className="flex items-center justify-center min-w-0 flex-shrink-0 px-4">
                  <img src="/Logos/Cure_vf.png" alt="Cure" className="h-6 md:h-8 object-contain grayscale hover:grayscale-0 hover:scale-110 transition-all duration-300" />
                </div>
                <div className="flex items-center justify-center min-w-0 flex-shrink-0 px-4">
                  <img src="/Logos/Diggs_vf.png" alt="Diggs" className="h-6 md:h-8 object-contain grayscale hover:grayscale-0 hover:scale-110 transition-all duration-300" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Data Transformation Process */}
        <section ref={dataFlowRef} className="py-20 bg-gradient-to-br from-gray-900/80 via-[#052C60]/80 to-[#1a4b8a]/80 backdrop-blur-sm text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(44,126,244,0.1)_0%,transparent_70%)]"></div>
          <div className="container-custom relative z-10">
            {/* Header Section */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-medium mb-6" style={{ fontFamily: 'Lora, Georgia, serif' }}>
                Watch Your Data Transform Into Capital
              </h2>
              <p className="text-xl text-blue-200 max-w-3xl mx-auto" style={{ fontFamily: '"Source Sans Pro", "Helvetica Neue", Arial, sans-serif' }}>
                See how our AI-powered platform turns your business data into actionable insights and credit decisions
              </p>
            </div>

            {/* Modern Horizontal Workflow */}
            <div className="flex flex-col lg:flex-row items-center justify-center gap-8 max-w-7xl mx-auto">
              
              {/* Step 1 - Your Business Data */}
              <div className="flex-1 max-w-sm">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-medium text-white mb-2" style={{ fontFamily: 'Lora, Georgia, serif' }}>
                    Your Business Data
                  </h3>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-500 group">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex flex-col items-center gap-2 p-3 bg-white/5 rounded-xl group-hover:bg-white/10 transition-all duration-300">
                      <CreditCard className="w-6 h-6 text-[#2C7EF4]" />
                      <span className="text-white text-sm font-medium">Stripe</span>
                    </div>
                    <div className="flex flex-col items-center gap-2 p-3 bg-white/5 rounded-xl group-hover:bg-white/10 transition-all duration-300">
                      <Building className="w-6 h-6 text-[#2C7EF4]" />
                      <span className="text-white text-sm font-medium">QuickBooks</span>
                    </div>
                    <div className="flex flex-col items-center gap-2 p-3 bg-white/5 rounded-xl group-hover:bg-white/10 transition-all duration-300">
                      <Laptop className="w-6 h-6 text-[#2C7EF4]" />
                      <span className="text-white text-sm font-medium">Shopify</span>
                    </div>
                    <div className="flex flex-col items-center gap-2 p-3 bg-white/5 rounded-xl group-hover:bg-white/10 transition-all duration-300">
                      <Database className="w-6 h-6 text-[#2C7EF4]" />
                      <span className="text-white text-sm font-medium">Banking</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Flow Arrow 1 */}
              <div className="flex items-center justify-center">
                <div className="hidden lg:block">
                  <ChevronRight className="w-10 h-10 text-[#2C7EF4] animate-pulse" />
                </div>
                <div className="lg:hidden rotate-90">
                  <ChevronRight className="w-8 h-8 text-[#2C7EF4] animate-pulse" />
                </div>
              </div>

              {/* Step 2 - Deep Ocean Partners */}
              <div className="flex-1 max-w-sm">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-medium text-white mb-2" style={{ fontFamily: 'Lora, Georgia, serif' }}>
                    Deep Ocean Partners
                  </h3>
                </div>
                <div className="bg-gradient-to-br from-[#2C7EF4]/20 to-indigo-500/20 backdrop-blur-sm p-8 rounded-2xl border border-[#2C7EF4]/30 animate-pulse-glow">
                  <div className="flex justify-center mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#2C7EF4] to-indigo-400 rounded-2xl flex items-center justify-center animate-float">
                      <Brain className="w-10 h-10 text-white" />
                    </div>
                  </div>
                  <div className="space-y-3 mb-6">
                    <div className="h-2 bg-white/30 rounded-full animate-pulse"></div>
                    <div className="h-2 bg-white/20 rounded-full w-4/5 mx-auto animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                    <div className="h-2 bg-white/25 rounded-full w-3/5 mx-auto animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                  <p className="text-blue-200 text-sm font-medium text-center">Processing 1000+ data points</p>
                </div>
              </div>

              {/* Flow Arrow 2 */}
              <div className="flex items-center justify-center">
                <div className="hidden lg:block">
                  <ChevronRight className="w-10 h-10 text-[#2C7EF4] animate-pulse" style={{ animationDelay: '0.5s' }} />
                </div>
                <div className="lg:hidden rotate-90">
                  <ChevronRight className="w-8 h-8 text-[#2C7EF4] animate-pulse" style={{ animationDelay: '0.5s' }} />
                </div>
              </div>

              {/* Step 3 - Instant Results */}
              <div className="flex-1 max-w-sm">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-medium text-white mb-2" style={{ fontFamily: 'Lora, Georgia, serif' }}>
                    Instant Results
                  </h3>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-500 group">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-green-500/10 rounded-xl border border-green-400/20 group-hover:bg-green-500/15 transition-all duration-300">
                      <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <TrendingUp className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-white font-medium text-sm">Credit Score: 850</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-green-500/10 rounded-xl border border-green-400/20 group-hover:bg-green-500/15 transition-all duration-300">
                      <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <BarChart3 className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-white font-medium text-sm">Limit: $2.5M</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-green-500/10 rounded-xl border border-green-400/20 group-hover:bg-green-500/15 transition-all duration-300">
                      <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <PieChart className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-white font-medium text-sm">Rate: 8.5%</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-green-500/10 rounded-xl border border-green-400/20 group-hover:bg-green-500/15 transition-all duration-300">
                      <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Activity className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-white font-medium text-sm">Terms: 24 mo.</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>



        {/* How Deep Ocean Works Section */}
        <section className="py-20 bg-gradient-to-br from-slate-50/95 to-blue-50/95 backdrop-blur-sm relative">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-medium text-[#000000] mb-6" style={{ fontFamily: 'Lora, Georgia, serif', fontWeight: 500 }}>
                How Deep Ocean Works For You
              </h2>
              <p className="text-xl text-[#000000] max-w-4xl mx-auto leading-relaxed" style={{ fontFamily: '"Source Sans Pro", "Helvetica Neue", Arial, sans-serif', fontWeight: 400 }}>
                We combine a data-rich understanding of your business with over 50 years of credit experience to build flexible financing solutions tailored to your needs.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="ocean-card p-8 text-center group">
                <div className="w-16 h-16 bg-[#2C7EF4] flex items-center justify-center mx-auto mb-6 transition-all duration-300 group-hover:bg-[#1F5FCE] group-hover:scale-110" style={{ borderRadius: '0px' }}>
                  <Database className="w-8 h-8 text-white transition-transform duration-300 group-hover:rotate-12" />
                </div>
                <h3 className="text-xl font-medium text-[#000000] mb-4 transition-colors duration-300 group-hover:text-[#2C7EF4]" style={{ fontFamily: 'Lora, Georgia, serif', fontWeight: 500 }}>Live Data Integration</h3>
                <p className="text-[#000000] leading-relaxed" style={{ fontFamily: '"Source Sans Pro", "Helvetica Neue", Arial, sans-serif', fontWeight: 400 }}>We plug into your existing systems—sales, inventory, banking—to capture a live, 360-degree view of your operations.</p>
              </div>
              
              <div className="ocean-card p-8 text-center group">
                <div className="w-16 h-16 bg-[#2C7EF4] flex items-center justify-center mx-auto mb-6 transition-all duration-300 group-hover:bg-[#1F5FCE] group-hover:scale-110" style={{ borderRadius: '0px' }}>
                  <LineChart className="w-8 h-8 text-white transition-transform duration-300 group-hover:rotate-12" />
                </div>
                <h3 className="text-xl font-medium text-[#000000] mb-4 transition-colors duration-300 group-hover:text-[#2C7EF4]" style={{ fontFamily: 'Lora, Georgia, serif', fontWeight: 500 }}>Predictive Analytics</h3>
                <p className="text-[#000000] leading-relaxed" style={{ fontFamily: '"Source Sans Pro", "Helvetica Neue", Arial, sans-serif', fontWeight: 400 }}>Our internal automation models translate those data points into forward-looking cash-flow and collateral forecasts.</p>
              </div>
              
              <div className="ocean-card p-8 text-center group">
                <div className="w-16 h-16 bg-[#2C7EF4] flex items-center justify-center mx-auto mb-6 transition-all duration-300 group-hover:bg-[#1F5FCE] group-hover:scale-110" style={{ borderRadius: '0px' }}>
                  <Rocket className="w-8 h-8 text-white transition-transform duration-300 group-hover:rotate-12" />
                </div>
                <h3 className="text-xl font-medium text-[#000000] mb-4 transition-colors duration-300 group-hover:text-[#2C7EF4]" style={{ fontFamily: 'Lora, Georgia, serif', fontWeight: 500 }}>Flexible Credit Lines</h3>
                <p className="text-[#000000] leading-relaxed" style={{ fontFamily: '"Source Sans Pro", "Helvetica Neue", Arial, sans-serif', fontWeight: 400 }}>Armed with those insights, we issue a flexible credit line up to 2.5× larger and often cheaper than traditional loans.</p>
              </div>
            </div>
          </div>
        </section>

        {/* We Realize Your Potential Section */}
        <section className="py-20 bg-white/95 backdrop-blur-sm relative">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-medium text-[#000000] mb-6" style={{ fontFamily: 'Lora, Georgia, serif', fontWeight: 500 }}>
                We Realize Your Potential
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="ocean-card p-8 text-center group">
                <div className="w-16 h-16 bg-[#2C7EF4] flex items-center justify-center mx-auto mb-6 transition-all duration-300 group-hover:bg-[#1F5FCE] group-hover:scale-110" style={{ borderRadius: '0px' }}>
                  <TrendingUp className="w-8 h-8 text-white transition-transform duration-300 group-hover:rotate-12" />
                </div>
                <h3 className="text-xl font-medium text-[#2C7EF4] mb-4 transition-colors duration-300 group-hover:text-[#1F5FCE]" style={{ fontFamily: 'Lora, Georgia, serif', fontWeight: 500 }}>More Capital</h3>
                <p className="text-[#000000] leading-relaxed" style={{ fontFamily: '"Source Sans Pro", "Helvetica Neue", Arial, sans-serif', fontWeight: 400 }}>Up to 1.5x to 2.5x higher credit limits than traditional ABLs by receiving credit for both your balance sheet assets and future revenue.</p>
              </div>
              
              <div className="ocean-card p-8 text-center group">
                <div className="w-16 h-16 bg-[#2C7EF4] flex items-center justify-center mx-auto mb-6 transition-all duration-300 group-hover:bg-[#1F5FCE] group-hover:scale-110" style={{ borderRadius: '0px' }}>
                  <RotateCw className="w-8 h-8 text-white transition-transform duration-300 group-hover:animate-spin" />
                </div>
                <h3 className="text-xl font-medium text-[#2C7EF4] mb-4 transition-colors duration-300 group-hover:text-[#1F5FCE]" style={{ fontFamily: 'Lora, Georgia, serif', fontWeight: 500 }}>Improved Cash Flow</h3>
                <p className="text-[#000000] leading-relaxed" style={{ fontFamily: '"Source Sans Pro", "Helvetica Neue", Arial, sans-serif', fontWeight: 400 }}>Potential for 50%+ cash flow savings versus revenue-based fintechs by accessing fixed monthly payments over a multi-year term.</p>
              </div>
              
              <div className="ocean-card p-8 text-center group">
                <div className="w-16 h-16 bg-[#2C7EF4] flex items-center justify-center mx-auto mb-6 transition-all duration-300 group-hover:bg-[#1F5FCE] group-hover:scale-110" style={{ borderRadius: '0px' }}>
                  <Lightbulb className="w-8 h-8 text-white transition-transform duration-300 group-hover:rotate-12" />
                </div>
                <h3 className="text-xl font-medium text-[#2C7EF4] mb-4 transition-colors duration-300 group-hover:text-[#1F5FCE]" style={{ fontFamily: 'Lora, Georgia, serif', fontWeight: 500 }}>More Flexibility</h3>
                <p className="text-[#000000] leading-relaxed" style={{ fontFamily: '"Source Sans Pro", "Helvetica Neue", Arial, sans-serif', fontWeight: 400 }}>Large lenders have rigid underwriting and covenants. We provide flexible funding to meet your diverse business needs.</p>
              </div>
              
              <div className="ocean-card p-8 text-center group">
                <div className="w-16 h-16 bg-[#2C7EF4] flex items-center justify-center mx-auto mb-6 transition-all duration-300 group-hover:bg-[#1F5FCE] group-hover:scale-110" style={{ borderRadius: '0px' }}>
                  <Growth className="w-8 h-8 text-white transition-transform duration-300 group-hover:rotate-12" />
                </div>
                <h3 className="text-xl font-medium text-[#2C7EF4] mb-4 transition-colors duration-300 group-hover:text-[#1F5FCE]" style={{ fontFamily: 'Lora, Georgia, serif', fontWeight: 500 }}>Flexible Solutions</h3>
                <p className="text-[#000000] leading-relaxed" style={{ fontFamily: '"Source Sans Pro", "Helvetica Neue", Arial, sans-serif', fontWeight: 400 }}>We can grow with you - our facilities scale up to $30m, and our terms improve as your business matures. We want to be your long term working capital solution.</p>
              </div>
            </div>
          </div>
        </section>

                {/* Comparison Table */}
        <section className="py-20 bg-gradient-to-br from-gray-100/95 to-slate-200/95 backdrop-blur-sm relative">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-medium text-[#000000] mb-6" style={{ fontFamily: 'Lora, Georgia, serif', fontWeight: 500 }}>
                Compare for yourself
              </h2>
              <p className="text-xl text-[#000000]" style={{ fontFamily: '"Source Sans Pro", "Helvetica Neue", Arial, sans-serif', fontWeight: 400 }}>See how Deep Ocean Partners stacks up against traditional and fintech lenders</p>
            </div>
            
            <div className="max-w-5xl mx-auto">
                <div className="bg-white border border-[#030303] overflow-hidden" style={{ borderRadius: '0px', boxShadow: '0 1px 6px rgba(0, 0, 0, 0.1)' }}>
                  {/* Table Header */}
                  <div className="grid grid-cols-4 bg-gradient-to-r from-[#052C60] to-[#2C7EF4] text-white">
                    <div className="p-4 font-medium" style={{ fontFamily: '"Source Sans Pro", "Helvetica Neue", Arial, sans-serif', fontWeight: 500 }}></div>
                    <div className="p-4 text-center">
                      <div className="flex flex-col items-center">
                        <div className="flex items-center justify-center mb-2">
                          <img src="/lovable-uploads/DarkLogo.png" alt="Deep Ocean Partners" className="w-8 h-8 object-contain" />
                        </div>
                      </div>
                    </div>
                    <div className="p-4 text-center font-medium" style={{ fontFamily: '"Source Sans Pro", "Helvetica Neue", Arial, sans-serif', fontWeight: 500 }}>Traditional Lenders</div>
                    <div className="p-4 text-center font-medium" style={{ fontFamily: '"Source Sans Pro", "Helvetica Neue", Arial, sans-serif', fontWeight: 500 }}>Fintech Lenders</div>
                  </div>
                
                {[
                  { feature: "High advance rates", ours: true, traditional: false, fintech: true },
                  { feature: "Multi-year loans", ours: true, traditional: true, fintech: false },
                  { feature: "Flexible terms", ours: true, traditional: false, fintech: false },
                  { feature: "Speed to decision", ours: true, traditional: false, fintech: true },
                  { feature: "Long-term partners", ours: true, traditional: true, fintech: false }
                ].map((row, index) => (
                  <div key={index} className={`grid grid-cols-4 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} border-t border-gray-200 hover:bg-blue-50 transition-all duration-300 group`}>
                    <div className="p-8 font-medium text-[#000000] flex items-center" style={{ fontFamily: '"Source Sans Pro", "Helvetica Neue", Arial, sans-serif', fontWeight: 500 }}>
                      <div className="w-2 h-2 bg-[#2C7EF4] mr-3 group-hover:scale-150 transition-transform duration-300" style={{ borderRadius: '0px' }}></div>
                      {row.feature}
                    </div>
                    <div className="p-8 text-center flex items-center justify-center">
                      {row.ours ? (
                        <div className="relative">
                          <CheckCircle className="w-8 h-8 text-green-500 mx-auto animate-bounce font-bold filter drop-shadow-lg" style={{ 
                            animationDelay: `${index * 0.1}s`,
                            filter: 'drop-shadow(0 0 8px rgba(34, 197, 94, 0.6))'
                          }} />
                          <div className="absolute inset-0 w-8 h-8 bg-green-400 rounded-full opacity-20 animate-ping" style={{ animationDelay: `${index * 0.1}s` }}></div>
                        </div>
                      ) : (
                        <X className="w-7 h-7 text-red-500 mx-auto opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                      )}
                    </div>
                    <div className="p-8 text-center flex items-center justify-center">
                      {row.traditional ? (
                        <CheckCircle className="w-7 h-7 text-green-500 mx-auto group-hover:scale-110 transition-transform duration-300" />
                      ) : (
                        <X className="w-7 h-7 text-red-500 mx-auto opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                      )}
                    </div>
                    <div className="p-8 text-center flex items-center justify-center">
                      {row.fintech ? (
                        <CheckCircle className="w-7 h-7 text-green-500 mx-auto group-hover:scale-110 transition-transform duration-300" />
                      ) : (
                        <X className="w-7 h-7 text-red-500 mx-auto opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                      )}
                    </div>
                  </div>
                ))}
                
                {/* Bottom accent */}
                <div className="h-1 bg-gradient-to-r from-[#052C60] to-[#2C7EF4]"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Solutions */}
        <section className="py-20 bg-gradient-to-br from-blue-900/80 via-indigo-900/80 to-purple-900/80 backdrop-blur-sm text-white relative">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-medium mb-6" style={{ fontFamily: 'Lora, Georgia, serif' }}>
                Our Solutions to Your Diverse Business Needs
              </h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto" style={{ fontFamily: '"Source Sans Pro", "Helvetica Neue", Arial, sans-serif' }}>
                We offer these options and more
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Revolving Lines of Credit",
                  description: "Continuous source of funding that you can access as needed. Best for variable spend on inventory / marketing.",
                  icon: CircleDollarSign
                },
                {
                  title: "Term Loans", 
                  description: "Committed facility that you pay back over a set time with fixed payment terms. Best for planned expenses / opex.",
                  icon: FileText
                },
                {
                  title: "Receivables / Invoice Financing",
                  description: "Allows a business to unlock working capital from near term revenue opportunities (i.e. wholesale).",
                  icon: Receipt
                },
                {
                  title: "Purchase Order Financing",
                  description: "Cash advance that can be used to pay your suppliers in order to fulfill larger orders without capital constraints.",
                  icon: ShoppingCart
                },
                {
                  title: "Revenue Based / Cohort Financing",
                  description: "Alternative form of financing where a business can borrow a lump sum against the future value of their customers.",
                  icon: TrendingUp
                },
                {
                  title: "Growth Capital",
                  description: "Flexible facility that enables growth underwritten to assets and/or cash flow. Can be used for a variety of purposes.",
                  icon: BarChart3
                }
              ].map((solution, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm p-8 hover:bg-white/20 transition-all duration-500 group hover:scale-105 hover:shadow-2xl" style={{ borderRadius: '0px', border: '1px solid #030303', boxShadow: '0 1px 6px rgba(0, 0, 0, 0.1)' }}>
                  <div className="w-16 h-16 bg-[#2C7EF4] flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-[#1F5FCE] group-hover:scale-110">
                    <solution.icon className="w-8 h-8 text-white transition-transform duration-300 group-hover:rotate-12" />
                  </div>
                  <h3 className="text-xl font-medium mb-4 transition-colors duration-300 group-hover:text-[#2C7EF4]" style={{ fontFamily: 'Lora, Georgia, serif' }}>{solution.title}</h3>
                  <p className="text-blue-100 leading-relaxed" style={{ fontFamily: '"Source Sans Pro", "Helvetica Neue", Arial, sans-serif' }}>{solution.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sector Focus */}
        <section className="py-20 bg-white/95 backdrop-blur-sm relative">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-medium text-gray-900 mb-6" style={{ fontFamily: 'Lora, Georgia, serif' }}>
                Where we're already empowering founders & operators
              </h2>
              <p className="text-xl text-gray-600" style={{ fontFamily: '"Source Sans Pro", "Helvetica Neue", Arial, sans-serif' }}>Fueling Your Growth—on Your Terms</p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {[
                {
                  sector: "Fintech Originators",
                  help: "Advance rates and warehouse lines that scale with origination volume",
                  icon: CreditCard
                },
                {
                  sector: "Omnichannel Consumer Brands", 
                  help: "Inventory, working-capital and growth lines that flex with seasonality",
                  icon: Building
                },
                {
                  sector: "B2B Hard-Asset Operators",
                  help: "Equipment, fleet and project financing matched to asset lifecycles",
                  icon: Cpu
                },
                {
                  sector: "SaaS Platforms",
                  help: "ARR-based facilities that don't dilute founders",
                  icon: Laptop
                }
              ].map((item, index) => (
                <div key={index} className="bg-white border border-[#030303] p-8 group hover:scale-105 transition-all duration-500 hover:shadow-xl" style={{ borderRadius: '0px', boxShadow: '0 1px 6px rgba(0, 0, 0, 0.1)' }}>
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-16 h-16 bg-[#2C7EF4] flex items-center justify-center transition-all duration-300 group-hover:bg-[#1F5FCE] group-hover:scale-110" style={{ borderRadius: '0px' }}>
                      <item.icon className="w-8 h-8 text-white transition-transform duration-300 group-hover:rotate-12" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-medium text-[#000000] mb-2 transition-colors duration-300 group-hover:text-[#2C7EF4]" style={{ fontFamily: 'Lora, Georgia, serif', fontWeight: 500 }}>{item.sector}</h3>
                      <p className="text-[#000000] mb-4" style={{ fontFamily: '"Source Sans Pro", "Helvetica Neue", Arial, sans-serif', fontWeight: 400 }}>{item.help}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-lg text-gray-600 mb-4">We mostly look at:</p>
              <div className="flex flex-wrap justify-center gap-4">
                {["DTC", "B2B", "E-commerce", "Hard Assets", "SaaS", "Fintech", "GPU", "Hardware", "Emerging Verticals"].map((vertical) => (
                  <span key={vertical} className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full font-medium">
                    {vertical}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Deep Ocean */}
        <section className="py-20 bg-gradient-to-br from-slate-900/80 via-blue-900/80 to-indigo-900/80 backdrop-blur-sm text-white relative">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-medium mb-6" style={{ fontFamily: 'Lora, Georgia, serif' }}>
                Why borrowers choose Deep Ocean
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center group">
                <div className="w-20 h-20 bg-[#2C7EF4] flex items-center justify-center mx-auto mb-6 transition-all duration-300 group-hover:bg-[#1F5FCE] group-hover:scale-110 group-hover:shadow-xl">
                  <Zap className="w-10 h-10 text-white transition-transform duration-300 group-hover:rotate-12" />
                </div>
                <h3 className="text-xl font-medium mb-4 transition-colors duration-300 group-hover:text-[#2C7EF4]" style={{ fontFamily: 'Lora, Georgia, serif' }}>Speed & Certainty</h3>
                <p className="text-blue-100 leading-relaxed" style={{ fontFamily: '"Source Sans Pro", "Helvetica Neue", Arial, sans-serif' }}>Term sheets in days, not months.</p>
              </div>
              
              <div className="text-center group">
                <div className="w-20 h-20 bg-[#2C7EF4] flex items-center justify-center mx-auto mb-6 transition-all duration-300 group-hover:bg-[#1F5FCE] group-hover:scale-110 group-hover:shadow-xl">
                  <Shield className="w-10 h-10 text-white transition-transform duration-300 group-hover:rotate-12" />
                </div>
                <h3 className="text-xl font-medium mb-4 transition-colors duration-300 group-hover:text-[#2C7EF4]" style={{ fontFamily: 'Lora, Georgia, serif' }}>Flexible Structures</h3>
                <p className="text-blue-100 leading-relaxed" style={{ fontFamily: '"Source Sans Pro", "Helvetica Neue", Arial, sans-serif' }}>Tailor covenants, tenors and amortization to your cash-flow reality.</p>
              </div>
              
              <div className="text-center group">
                <div className="w-20 h-20 bg-[#2C7EF4] flex items-center justify-center mx-auto mb-6 transition-all duration-300 group-hover:bg-[#1F5FCE] group-hover:scale-110 group-hover:shadow-xl">
                  <Users className="w-10 h-10 text-white transition-transform duration-300 group-hover:rotate-12" />
                </div>
                <h3 className="text-xl font-medium mb-4 transition-colors duration-300 group-hover:text-[#2C7EF4]" style={{ fontFamily: 'Lora, Georgia, serif' }}>Long-Term Partnership</h3>
                <p className="text-blue-100 leading-relaxed" style={{ fontFamily: '"Source Sans Pro", "Helvetica Neue", Arial, sans-serif' }}>We stay in through cycles, providing add-on capital as you scale.</p>
              </div>
              
              <div className="text-center group">
                <div className="w-20 h-20 bg-[#2C7EF4] flex items-center justify-center mx-auto mb-6 transition-all duration-300 group-hover:bg-[#1F5FCE] group-hover:scale-110 group-hover:shadow-xl">
                  <Target className="w-10 h-10 text-white transition-transform duration-300 group-hover:rotate-12" />
                </div>
                <h3 className="text-xl font-medium mb-4 transition-colors duration-300 group-hover:text-[#2C7EF4]" style={{ fontFamily: 'Lora, Georgia, serif' }}>Sector Expertise</h3>
                <p className="text-blue-100 leading-relaxed" style={{ fontFamily: '"Source Sans Pro", "Helvetica Neue", Arial, sans-serif' }}>Dedicated teams that understand the nuances of your industry.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-white/95 backdrop-blur-sm relative">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-medium text-gray-900 mb-6" style={{ fontFamily: 'Lora, Georgia, serif' }}>
                How Deep Ocean Puts Your Data to Work—for Faster, Fairer Capital
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto" style={{ fontFamily: '"Source Sans Pro", "Helvetica Neue", Arial, sans-serif' }}>
                We built our underwriting process around your needs: speed, transparency, and terms that actually fit your business.
              </p>
            </div>
            
            <div className="space-y-8">
              {[
                {
                  step: "01",
                  title: "Seamless Data Connect",
                  type: "AUTOMATED",
                  description: "Link your key systems—Shopify, QuickBooks, Stripe, TikTok Ads, Amazon, etc.—through secure APIs or a simple file upload. Pre-qualification in < 48 hours.",
                  benefits: ["No endless PDF requests", "Zero integration cost", "Early-stage signal on how much you can borrow"]
                },
                {
                  step: "02", 
                  title: "Smart Risk Profile",
                  type: "HYBRID",
                  description: "Our platform standardizes your metrics (LTV, CAC trend, months of burn, inventory turns, and more) and flags the strengths we can lend against.",
                  benefits: ["Underwriters see the full story, not just a P&L snapshot", "Your upside—like sticky customers or fast payback—gets credited in the deal terms"]
                },
                {
                  step: "03",
                  title: "Rapid Credit Decision", 
                  type: "MANUAL + DATA",
                  description: "Investment committee runs scenario models (stress cases, coverage ratios, recovery curves) and issues a tailored term sheet—often within a week of data upload.",
                  benefits: ["Clear pricing tied to real numbers", "Multiple structures to choose from (revolver, term, growth line, hybrid)"]
                },
                {
                  step: "04",
                  title: "Always-On Monitoring",
                  type: "HYBRID", 
                  description: "Live dashboards keep your facility in sync with performance. Better numbers automatically unlock more capital; soft spots trigger proactive support, not surprises.",
                  benefits: ["Scalable limit increases as you grow", "Early warning system so covenants don't sneak up on you", "Less paperwork at renewal time", "We share all our insights with you, giving you new, actionable information to better understand and scale your business"]
                },
                {
                  step: "05",
                  title: "The Cycle",
                  type: "AUTOMATED",
                  description: "Continuous value creation through data-driven intelligence.",
                  benefits: ["Long-term partnerships", "Flexible financing solutions", "Sector expertise"]
                }
              ].map((step, index) => (
                <div key={index} className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
                  <div className="grid lg:grid-cols-3 gap-8 items-start">
                    <div className="lg:col-span-1">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center text-white font-bold text-2xl">
                          {step.step}
                        </div>
                        <div>
                          <div className="text-xs font-bold text-blue-600 mb-1">{step.type}</div>
                          <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                        </div>
                      </div>
                    </div>
                    <div className="lg:col-span-2">
                      <p className="text-gray-600 mb-6 leading-relaxed">{step.description}</p>
                      <div className="space-y-2">
                        <h4 className="font-semibold text-gray-900 mb-3">What It Means for You:</h4>
                        {step.benefits.map((benefit, benefitIndex) => (
                          <div key={benefitIndex} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-600">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Bottom line:</h3>
                <p className="text-xl leading-relaxed max-w-4xl mx-auto">
                  Deep Ocean turns raw operating data into fast, flexible funding—and then keeps the capital working for you as conditions change. Let's connect and see what your numbers unlock.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-gradient-to-br from-gray-50/95 to-blue-50/95 backdrop-blur-sm relative">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-medium text-gray-900 mb-6" style={{ fontFamily: 'Lora, Georgia, serif' }}>
                What Our Partners Say
              </h2>
              <p className="text-xl text-gray-600" style={{ fontFamily: '"Source Sans Pro", "Helvetica Neue", Arial, sans-serif' }}>Everything is bespoke and customized to you. Your success is our success as well, because when you grow we grow.</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  quote: "Deep Ocean truly has a long-term outlook; not everyone does that - it's really impressive their focus on being value-additive above all.",
                  name: "Nick Allen",
                  title: "Founder, Geologie"
                },
                {
                  quote: "Deep Ocean is unique because they are smart enough to know how to translate your future potential into a lendable asset.",
                  name: "Nathan Hamilton", 
                  title: "President, Juvenon"
                },
                {
                  quote: "Deep Ocean's product is fundamentally changing a CFOs toolbox by providing better availability & cash flow.",
                  name: "Virgil Leung",
                  title: "Founder, GreenSpark"
                },
                {
                  quote: "Deep Ocean truly understands the inner workings of consumer brands by using data to accurately model a company's future cash flow potential.",
                  name: "Jordan Benjamin",
                  title: "Advisor, Earth Breeze"
                },
                {
                  quote: "Deep Ocean issued the largest term sheet at terms that would enable us to grow and continue to access more capital.",
                  name: "Nicole Wegman",
                  title: "Founder, Ring Concierge"
                }
              ].map((testimonial, index) => (
                <div key={index} className="borrowers-card p-8 group hover:scale-105 hover:shadow-xl transition-all duration-500">
                  <div className="text-4xl text-[#2C7EF4] mb-4 transition-colors duration-300 group-hover:text-[#1F5FCE]" style={{ fontFamily: 'Lora, Georgia, serif' }}>"</div>
                  <p className="text-gray-700 leading-relaxed mb-6 italic transition-colors duration-300 group-hover:text-gray-900" style={{ fontFamily: '"Source Sans Pro", "Helvetica Neue", Arial, sans-serif' }}>{testimonial.quote}</p>
                  <div>
                    <div className="font-medium text-gray-900 transition-colors duration-300 group-hover:text-[#2C7EF4]" style={{ fontFamily: 'Lora, Georgia, serif' }}>{testimonial.name}</div>
                    <div className="text-gray-600 text-sm" style={{ fontFamily: '"Source Sans Pro", "Helvetica Neue", Arial, sans-serif' }}>{testimonial.title}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-blue-900/80 via-indigo-900/80 to-purple-900/80 backdrop-blur-sm text-white relative">
          <div className="container-custom">
            <div className="text-center">
              <h2 className="text-4xl md:text-5xl font-medium mb-6" style={{ fontFamily: 'Lora, Georgia, serif' }}>
                Ready to see how much further you can go with the right capital partner?
              </h2>
              <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto" style={{ fontFamily: '"Source Sans Pro", "Helvetica Neue", Arial, sans-serif' }}>
                Let's talk about unlocking your business potential with flexible, data-driven financing solutions.
              </p>
              <div className="flex justify-center">
                <a href="/contact" className="ocean-button px-12 py-5 text-lg font-medium shadow-2xl hover:shadow-3xl" style={{ fontFamily: '"Source Sans Pro", "Helvetica Neue", Arial, sans-serif', fontWeight: 500 }}>
                  Get Started
                  <ArrowRight className="w-6 h-6" />
                </a>
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

export default ForBorrowers; 