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
    <div className="min-h-screen bg-white" style={{ fontFamily: '"Source Sans Pro", "Helvetica Neue", Arial, sans-serif' }}>
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
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
          .animate-float { animation: float 3s ease-in-out infinite; }
          .animate-slide-up { animation: slide-up 0.8s ease-out forwards; }
          .animate-fade-in { animation: fade-in 1s ease-out forwards; }
          .animate-data-flow { animation: data-flow 3s ease-in-out infinite; }
          .animate-pulse-glow { animation: pulse-glow 2s ease-in-out infinite; }
          
          /* Style guide components */
          .borrowers-card {
            background: #FFFFFF;
            border: 1px solid #030303;
            box-shadow: 0 1px 6px rgba(0, 0, 0, 0.1);
            border-radius: 0px;
            transition: all 0.3s ease;
          }
          .borrowers-card:hover {
            transform: translateY(-4px);
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
          }
          .borrowers-button {
            background: #2C7EF4;
            color: #FFFFFF;
            border: none;
            border-radius: 0px;
            transition: all 0.3s ease;
            text-decoration: none;
            display: inline-flex;
            align-items: center;
            gap: 8px;
          }
          .borrowers-button:hover {
            background: #1B5FCE;
            transform: translateY(-2px);
          }
          .borrowers-link {
            color: #2C7EF4;
            text-decoration: none;
            transition: all 0.3s ease;
          }
          .borrowers-link:hover {
            text-decoration: underline;
          }
        `
      }} />
      <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-[#052C60] via-[#1a4b8a] to-[#2C7EF4] text-white relative overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
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
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 mb-8 animate-fade-in borrowers-card">
                <Sparkles className="w-5 h-5 text-[#2C7EF4]" />
                <span className="text-blue-100" style={{ fontFamily: '"Source Sans Pro", "Helvetica Neue", Arial, sans-serif' }}>Trusted by 1,000+ Growing Businesses</span>
              </div>
              <h1 className="text-6xl md:text-7xl font-medium mb-8 leading-tight animate-slide-up" style={{ fontFamily: 'Lora, Georgia, serif' }}>
                You built a <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2C7EF4] to-cyan-200">sophisticated business.</span>
              </h1>
              <h2 className="text-3xl md:text-4xl font-medium mb-8 text-blue-100 animate-slide-up" style={{ fontFamily: 'Lora, Georgia, serif', animationDelay: '0.2s' }}>
                You deserve a lender who gets it.
              </h2>
              <p className="text-xl md:text-2xl text-blue-200 leading-relaxed mb-12 max-w-4xl mx-auto animate-slide-up" style={{ fontFamily: '"Source Sans Pro", "Helvetica Neue", Arial, sans-serif', animationDelay: '0.4s' }}>
                Bridging Fintech with Institutional Private Credit to help business scale.
              </p>
              <p className="text-lg text-blue-300 mb-12 max-w-3xl mx-auto animate-slide-up" style={{ fontFamily: '"Source Sans Pro", "Helvetica Neue", Arial, sans-serif', animationDelay: '0.6s' }}>
                Deep Ocean gives you credit for assets overlooked by other lenders. Create a custom financing plan to help you reach your goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slide-up" style={{ animationDelay: '0.8s' }}>
                <button className="borrowers-button px-10 py-5 text-lg font-semibold shadow-2xl hover:shadow-3xl" style={{ fontFamily: '"Source Sans Pro", "Helvetica Neue", Arial, sans-serif' }}>
                  Get Your Custom Quote
                  <ArrowRight className="w-6 h-6" />
                </button>
                <button className="px-10 py-5 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-medium text-lg border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105" style={{ fontFamily: '"Source Sans Pro", "Helvetica Neue", Arial, sans-serif', borderRadius: '0px' }}>
                  See How It Works
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Key Metrics Section */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center group">
                <div className="text-5xl md:text-6xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#052C60] to-[#2C7EF4] mb-4 group-hover:scale-110 transition-transform duration-300" style={{ fontFamily: 'Lora, Georgia, serif' }}>
                  $14.7B+
                </div>
                <p className="text-gray-600 font-medium" style={{ fontFamily: '"Source Sans Pro", "Helvetica Neue", Arial, sans-serif' }}>funded since 2023</p>
              </div>
              <div className="text-center group">
                <div className="text-5xl md:text-6xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#052C60] to-[#2C7EF4] mb-4 group-hover:scale-110 transition-transform duration-300" style={{ fontFamily: 'Lora, Georgia, serif' }}>
                  $940M
                </div>
                <p className="text-gray-600 font-medium" style={{ fontFamily: '"Source Sans Pro", "Helvetica Neue", Arial, sans-serif' }}>currently in active funding</p>
              </div>
              <div className="text-center group">
                <div className="text-5xl md:text-6xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#052C60] to-[#2C7EF4] mb-4 group-hover:scale-110 transition-transform duration-300" style={{ fontFamily: 'Lora, Georgia, serif' }}>
                  $7.1B
                </div>
                <p className="text-gray-600 font-medium" style={{ fontFamily: '"Source Sans Pro", "Helvetica Neue", Arial, sans-serif' }}>ready in forward commitments</p>
              </div>
            </div>
          </div>
        </section>

        {/* Flywheel Data Transformation Intro */}
        <section ref={dataFlowRef} className="py-20 bg-gradient-to-br from-gray-900 via-[#052C60] to-[#1a4b8a] text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(44,126,244,0.1)_0%,transparent_70%)]"></div>
          <div className="container-custom relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-medium mb-6" style={{ fontFamily: 'Lora, Georgia, serif' }}>
                Watch Your Data Transform Into Capital
              </h2>
              <p className="text-xl text-blue-200 max-w-3xl mx-auto" style={{ fontFamily: '"Source Sans Pro", "Helvetica Neue", Arial, sans-serif' }}>
                See how our AI-powered platform turns your business data into actionable insights and credit decisions
              </p>
            </div>
          </div>
        </section>



        {/* How We Help Section */}
        <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-medium text-gray-900 mb-6" style={{ fontFamily: 'Lora, Georgia, serif' }}>
                How Deep Ocean Works For You
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed" style={{ fontFamily: '"Source Sans Pro", "Helvetica Neue", Arial, sans-serif' }}>
                We combine a data-rich understanding of your business with over 50 years of credit experience to build flexible financing solutions tailored to your needs.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#2C7EF4] flex items-center justify-center flex-shrink-0">
                      <Database className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium text-gray-900 mb-2" style={{ fontFamily: 'Lora, Georgia, serif' }}>Live Data Integration</h3>
                      <p className="text-gray-600" style={{ fontFamily: '"Source Sans Pro", "Helvetica Neue", Arial, sans-serif' }}>We plug into your existing systems—sales, inventory, banking—to capture a live, 360-degree view of your operations.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#2C7EF4] flex items-center justify-center flex-shrink-0">
                      <LineChart className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium text-gray-900 mb-2" style={{ fontFamily: 'Lora, Georgia, serif' }}>Predictive Analytics</h3>
                      <p className="text-gray-600" style={{ fontFamily: '"Source Sans Pro", "Helvetica Neue", Arial, sans-serif' }}>Our internal automation models translate those data points into forward-looking cash-flow and collateral forecasts.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#2C7EF4] flex items-center justify-center flex-shrink-0">
                      <Rocket className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium text-gray-900 mb-2" style={{ fontFamily: 'Lora, Georgia, serif' }}>Flexible Credit Lines</h3>
                      <p className="text-gray-600" style={{ fontFamily: '"Source Sans Pro", "Helvetica Neue", Arial, sans-serif' }}>Armed with those insights, we issue a flexible credit line up to 2.5× larger and often cheaper than traditional loans.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="borrowers-card p-8">
                <h3 className="text-2xl font-medium text-gray-900 mb-6" style={{ fontFamily: 'Lora, Georgia, serif' }}>We Realize Your Potential</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-[#2C7EF4] mb-2" style={{ fontFamily: '"Source Sans Pro", "Helvetica Neue", Arial, sans-serif' }}>More Capital</h4>
                    <p className="text-gray-600" style={{ fontFamily: '"Source Sans Pro", "Helvetica Neue", Arial, sans-serif' }}>Up to 1.5x to 2.5x higher credit limits than traditional ABLs by receiving credit for both your balance sheet assets and future revenue.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#2C7EF4] mb-2" style={{ fontFamily: '"Source Sans Pro", "Helvetica Neue", Arial, sans-serif' }}>Improved Cash Flow</h4>
                    <p className="text-gray-600" style={{ fontFamily: '"Source Sans Pro", "Helvetica Neue", Arial, sans-serif' }}>Potential for 50%+ cash flow savings versus revenue-based fintechs by accessing fixed monthly payments over a multi-year term.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#2C7EF4] mb-2" style={{ fontFamily: '"Source Sans Pro", "Helvetica Neue", Arial, sans-serif' }}>More Flexibility</h4>
                    <p className="text-gray-600" style={{ fontFamily: '"Source Sans Pro", "Helvetica Neue", Arial, sans-serif' }}>Large lenders have rigid underwriting and covenants. We provide flexible funding to meet your diverse business needs.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#2C7EF4] mb-2" style={{ fontFamily: '"Source Sans Pro", "Helvetica Neue", Arial, sans-serif' }}>Flexible Solutions</h4>
                    <p className="text-gray-600" style={{ fontFamily: '"Source Sans Pro", "Helvetica Neue", Arial, sans-serif' }}>We can grow with you - our facilities scale up to $30m, and our terms improve as your business matures. We want to be your long term working capital solution.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-medium text-gray-900 mb-6" style={{ fontFamily: 'Lora, Georgia, serif' }}>
                Compare for yourself
              </h2>
              <p className="text-xl text-gray-600" style={{ fontFamily: '"Source Sans Pro", "Helvetica Neue", Arial, sans-serif' }}>See how Deep Ocean Partners stacks up against traditional and fintech lenders</p>
            </div>
            
                          <div className="max-w-4xl mx-auto">
                <div className="borrowers-card overflow-hidden">
                  <div className="grid grid-cols-4 bg-gray-50">
                    <div className="p-6 font-medium text-gray-900" style={{ fontFamily: '"Source Sans Pro", "Helvetica Neue", Arial, sans-serif' }}></div>
                    <div className="p-6 text-center">
                      <div className="flex flex-col items-center">
                        <div className="w-12 h-12 bg-[#2C7EF4] flex items-center justify-center mb-2">
                          <Target className="w-6 h-6 text-white" />
                        </div>
                        <span className="font-semibold text-[#2C7EF4]" style={{ fontFamily: '"Source Sans Pro", "Helvetica Neue", Arial, sans-serif' }}>Our Solution</span>
                      </div>
                    </div>
                    <div className="p-6 text-center font-medium text-gray-700" style={{ fontFamily: '"Source Sans Pro", "Helvetica Neue", Arial, sans-serif' }}>Traditional Lenders</div>
                    <div className="p-6 text-center font-medium text-gray-700" style={{ fontFamily: '"Source Sans Pro", "Helvetica Neue", Arial, sans-serif' }}>Fintech Lenders</div>
                  </div>
                
                {[
                  { feature: "High advance rates", ours: true, traditional: false, fintech: true },
                  { feature: "Multi-year loans", ours: true, traditional: true, fintech: false },
                  { feature: "Flexible terms", ours: true, traditional: false, fintech: false },
                  { feature: "Speed to decision", ours: true, traditional: false, fintech: true },
                  { feature: "Long-term partners", ours: true, traditional: true, fintech: false }
                ].map((row, index) => (
                  <div key={index} className={`grid grid-cols-4 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                    <div className="p-6 font-medium text-gray-900">{row.feature}</div>
                    <div className="p-6 text-center">
                      {row.ours ? (
                        <CheckCircle className="w-6 h-6 text-green-500 mx-auto" />
                      ) : (
                        <X className="w-6 h-6 text-red-500 mx-auto" />
                      )}
                    </div>
                    <div className="p-6 text-center">
                      {row.traditional ? (
                        <CheckCircle className="w-6 h-6 text-green-500 mx-auto" />
                      ) : (
                        <X className="w-6 h-6 text-red-500 mx-auto" />
                      )}
                    </div>
                    <div className="p-6 text-center">
                      {row.fintech ? (
                        <CheckCircle className="w-6 h-6 text-green-500 mx-auto" />
                      ) : (
                        <X className="w-6 h-6 text-red-500 mx-auto" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Our Solutions */}
        <section className="py-20 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white">
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
                <div key={index} className="bg-white/10 backdrop-blur-sm p-8 hover:bg-white/15 transition-all duration-300" style={{ borderRadius: '0px', border: '1px solid #030303', boxShadow: '0 1px 6px rgba(0, 0, 0, 0.1)' }}>
                  <div className="w-16 h-16 bg-[#2C7EF4] flex items-center justify-center mb-6">
                    <solution.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-medium mb-4" style={{ fontFamily: 'Lora, Georgia, serif' }}>{solution.title}</h3>
                  <p className="text-blue-100 leading-relaxed" style={{ fontFamily: '"Source Sans Pro", "Helvetica Neue", Arial, sans-serif' }}>{solution.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sector Focus */}
        <section className="py-20 bg-white">
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
                  traction: "314 borrowers funded • $7.1 B deployed • $4.0 B in new capacity available",
                  icon: CreditCard,
                  color: "from-blue-500 to-indigo-600"
                },
                {
                  sector: "Omnichannel Consumer Brands", 
                  help: "Inventory, working-capital and growth lines that flex with seasonality",
                  traction: "515 partners • $2.9 B funded • $1.9 B ready to close",
                  icon: Building,
                  color: "from-indigo-500 to-purple-600"
                },
                {
                  sector: "B2B Hard-Asset Operators",
                  help: "Equipment, fleet and project financing matched to asset lifecycles", 
                  traction: "201 companies • $3.9 B funded • $988 M in the pipeline",
                  icon: Cpu,
                  color: "from-purple-500 to-pink-600"
                },
                {
                  sector: "SaaS Platforms",
                  help: "ARR-based facilities that don't dilute founders",
                  traction: "57 SaaS firms • $739 M funded • $165 M queued up",
                  icon: Laptop,
                  color: "from-pink-500 to-red-600"
                }
              ].map((item, index) => (
                <div key={index} className="borrowers-card p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-16 h-16 bg-[#2C7EF4] flex items-center justify-center">
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-medium text-gray-900 mb-2" style={{ fontFamily: 'Lora, Georgia, serif' }}>{item.sector}</h3>
                      <p className="text-gray-600 mb-4" style={{ fontFamily: '"Source Sans Pro", "Helvetica Neue", Arial, sans-serif' }}>{item.help}</p>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-4" style={{ borderRadius: '0px' }}>
                    <h4 className="font-semibold text-gray-900 mb-2" style={{ fontFamily: '"Source Sans Pro", "Helvetica Neue", Arial, sans-serif' }}>Recent Traction</h4>
                    <p className="text-gray-600 text-sm" style={{ fontFamily: '"Source Sans Pro", "Helvetica Neue", Arial, sans-serif' }}>{item.traction}</p>
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
        <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-medium mb-6" style={{ fontFamily: 'Lora, Georgia, serif' }}>
                Why borrowers choose Deep Ocean
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-[#2C7EF4] flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-medium mb-4" style={{ fontFamily: 'Lora, Georgia, serif' }}>Speed & Certainty</h3>
                <p className="text-blue-100 leading-relaxed" style={{ fontFamily: '"Source Sans Pro", "Helvetica Neue", Arial, sans-serif' }}>Term sheets in days, not months.</p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-[#2C7EF4] flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-medium mb-4" style={{ fontFamily: 'Lora, Georgia, serif' }}>Flexible Structures</h3>
                <p className="text-blue-100 leading-relaxed" style={{ fontFamily: '"Source Sans Pro", "Helvetica Neue", Arial, sans-serif' }}>Tailor covenants, tenors and amortization to your cash-flow reality.</p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-[#2C7EF4] flex items-center justify-center mx-auto mb-6">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-medium mb-4" style={{ fontFamily: 'Lora, Georgia, serif' }}>Long-Term Partnership</h3>
                <p className="text-blue-100 leading-relaxed" style={{ fontFamily: '"Source Sans Pro", "Helvetica Neue", Arial, sans-serif' }}>We stay in through cycles, providing add-on capital as you scale.</p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-[#2C7EF4] flex items-center justify-center mx-auto mb-6">
                  <Target className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-medium mb-4" style={{ fontFamily: 'Lora, Georgia, serif' }}>Sector Expertise</h3>
                <p className="text-blue-100 leading-relaxed" style={{ fontFamily: '"Source Sans Pro", "Helvetica Neue", Arial, sans-serif' }}>Dedicated teams that understand the nuances of your industry.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-white">
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
        <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
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
                <div key={index} className="borrowers-card p-8">
                  <div className="text-4xl text-[#2C7EF4] mb-4" style={{ fontFamily: 'Lora, Georgia, serif' }}>"</div>
                  <p className="text-gray-700 leading-relaxed mb-6 italic" style={{ fontFamily: '"Source Sans Pro", "Helvetica Neue", Arial, sans-serif' }}>{testimonial.quote}</p>
                  <div>
                    <div className="font-medium text-gray-900" style={{ fontFamily: 'Lora, Georgia, serif' }}>{testimonial.name}</div>
                    <div className="text-gray-600 text-sm" style={{ fontFamily: '"Source Sans Pro", "Helvetica Neue", Arial, sans-serif' }}>{testimonial.title}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white">
          <div className="container-custom">
            <div className="text-center">
              <h2 className="text-4xl md:text-5xl font-medium mb-6" style={{ fontFamily: 'Lora, Georgia, serif' }}>
                Ready to see how much further you can go with the right capital partner?
              </h2>
              <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto" style={{ fontFamily: '"Source Sans Pro", "Helvetica Neue", Arial, sans-serif' }}>
                Let's talk about unlocking your business potential with flexible, data-driven financing solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button className="borrowers-button px-12 py-5 text-lg font-semibold shadow-2xl" style={{ fontFamily: '"Source Sans Pro", "Helvetica Neue", Arial, sans-serif' }}>
                  Get Your Quote Today
                  <ArrowRight className="w-6 h-6" />
                </button>
                <button className="px-12 py-5 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-medium text-lg border border-white/20 hover:border-white/40 transition-all duration-300" style={{ fontFamily: '"Source Sans Pro", "Helvetica Neue", Arial, sans-serif', borderRadius: '0px' }}>
                  Schedule a Call
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ForBorrowers; 