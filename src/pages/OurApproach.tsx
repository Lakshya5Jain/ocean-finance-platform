import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Target, Users, TrendingUp, Shield } from 'lucide-react';

const OurApproach = () => {
  return (
    <div className="min-h-screen bg-white font-montserrat">
      <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-white to-gray-50">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-montserrat font-bold text-deep-navy mb-6">
                Our Approach
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                A sophisticated methodology combining fintech innovation with institutional 
                private credit expertise to deliver customized solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Methodology Section */}
        <section className="py-20">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-montserrat font-bold text-deep-navy mb-6">
                Our Four-Pillar Methodology
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We've developed a comprehensive approach that ensures optimal outcomes for every client
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-bright-azure to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-montserrat font-bold text-deep-navy mb-4">
                  1. Discovery
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Deep dive analysis of your business model, growth trajectory, and capital requirements.
                </p>
              </div>
              
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-bright-azure to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-montserrat font-bold text-deep-navy mb-4">
                  2. Customization
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Tailored credit solutions designed specifically for your unique business needs and goals.
                </p>
              </div>
              
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-bright-azure to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-montserrat font-bold text-deep-navy mb-4">
                  3. Execution
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Rapid deployment of capital with institutional-grade documentation and processes.
                </p>
              </div>
              
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-bright-azure to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-montserrat font-bold text-deep-navy mb-4">
                  4. Partnership
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Ongoing support and strategic guidance to ensure continued success and growth.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Section */}
        <section className="py-20 bg-gray-50">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-montserrat font-bold text-deep-navy mb-6">
                  Technology-Driven Excellence
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Our proprietary platform combines advanced data analytics, machine learning, 
                  and real-time risk assessment to deliver faster, more accurate credit decisions.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-bright-azure rounded-full"></div>
                    <span className="text-gray-700">Real-time financial analysis and monitoring</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-bright-azure rounded-full"></div>
                    <span className="text-gray-700">Automated compliance and documentation</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-bright-azure rounded-full"></div>
                    <span className="text-gray-700">Predictive risk modeling and portfolio optimization</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-bright-azure rounded-full"></div>
                    <span className="text-gray-700">Seamless integration with existing systems</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-center">
                  <div className="text-5xl font-montserrat font-bold text-transparent bg-clip-text bg-gradient-to-r from-bright-azure to-deep-navy mb-4">
                    10X
                  </div>
                  <p className="text-gray-600 font-medium mb-6">Faster than traditional lending</p>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">Traditional Banks</span>
                      <span className="text-sm font-medium">30-90 days</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-gray-400 h-2 rounded-full w-full"></div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">Deep Ocean Partners</span>
                      <span className="text-sm font-medium text-bright-azure">3-7 days</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-gradient-to-r from-bright-azure to-blue-600 h-2 rounded-full w-1/4"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Risk Management Section */}
        <section className="py-20">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-montserrat font-bold text-deep-navy mb-6">
                Institutional-Grade Risk Management
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our risk framework combines the sophistication of institutional private credit 
                with the agility of modern fintech
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-8 border border-gray-100">
                <h3 className="text-xl font-montserrat font-bold text-deep-navy mb-4">
                  Due Diligence
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Comprehensive analysis of financial statements, market position, and growth potential.
                </p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li>• Financial statement analysis</li>
                  <li>• Market and competitive assessment</li>
                  <li>• Management team evaluation</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-8 border border-gray-100">
                <h3 className="text-xl font-montserrat font-bold text-deep-navy mb-4">
                  Risk Monitoring
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Continuous monitoring of portfolio performance and early warning indicators.
                </p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li>• Real-time performance tracking</li>
                  <li>• Covenant monitoring</li>
                  <li>• Stress testing scenarios</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-8 border border-gray-100">
                <h3 className="text-xl font-montserrat font-bold text-deep-navy mb-4">
                  Portfolio Optimization
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Strategic portfolio construction to optimize risk-adjusted returns.
                </p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li>• Diversification strategies</li>
                  <li>• Sector allocation optimization</li>
                  <li>• Performance attribution analysis</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default OurApproach; 