import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { PieChart, TrendingUp, Shield, Target, CheckCircle, ArrowRight } from 'lucide-react';

const ForInvestors = () => {
  return (
    <div className="min-h-screen bg-white font-montserrat">
      <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-white to-gray-50">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-montserrat font-bold text-deep-navy mb-6">
                For Investors
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Access institutional-quality private credit opportunities with superior risk-adjusted returns 
                and diversification benefits.
              </p>
            </div>
          </div>
        </section>

        {/* Value Proposition */}
        <section className="py-20">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-montserrat font-bold text-deep-navy mb-6">
                Why Private Credit?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Private credit offers compelling risk-adjusted returns with lower volatility 
                and portfolio diversification benefits
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-bright-azure rounded-full flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-montserrat font-bold text-deep-navy mb-4">
                  Superior Returns
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Target returns of 8-12% with lower volatility than public markets.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-bright-azure rounded-full flex items-center justify-center mx-auto mb-6">
                  <PieChart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-montserrat font-bold text-deep-navy mb-4">
                  Diversification
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Low correlation to public markets provides true portfolio diversification.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-bright-azure rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-montserrat font-bold text-deep-navy mb-4">
                  Principal Protection
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Senior secured structures with strong downside protection.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-bright-azure rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-montserrat font-bold text-deep-navy mb-4">
                  Current Income
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Regular distributions with floating rate protection against inflation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Investment Solutions */}
        <section className="py-20 bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-montserrat font-bold text-deep-navy mb-6">
                Investment Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Tailored private credit strategies for sophisticated investors
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                <h3 className="text-2xl font-montserrat font-bold text-deep-navy mb-4">
                  Direct Lending Fund
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Diversified portfolio of senior secured loans to mid-market companies.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-bright-azure" />
                    <span className="text-gray-700">Target returns: 9-11%</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-bright-azure" />
                    <span className="text-gray-700">Quarterly distributions</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-bright-azure" />
                    <span className="text-gray-700">5-year investment period</span>
                  </li>
                </ul>
                <div className="bg-bright-azure/10 rounded-lg p-4 mb-6">
                  <p className="text-sm text-gray-600">
                    <strong className="text-deep-navy">Minimum Investment:</strong> $1M
                  </p>
                </div>
                <button className="w-full bg-bright-azure hover:bg-blue-600 text-white py-3 rounded-lg font-medium transition-colors duration-300">
                  Learn More
                </button>
              </div>
              
              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                <h3 className="text-2xl font-montserrat font-bold text-deep-navy mb-4">
                  Opportunistic Credit
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Higher-return strategies including distressed and special situations.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-bright-azure" />
                    <span className="text-gray-700">Target returns: 12-15%</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-bright-azure" />
                    <span className="text-gray-700">Flexible structures</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-bright-azure" />
                    <span className="text-gray-700">3-4 year hold periods</span>
                  </li>
                </ul>
                <div className="bg-bright-azure/10 rounded-lg p-4 mb-6">
                  <p className="text-sm text-gray-600">
                    <strong className="text-deep-navy">Minimum Investment:</strong> $5M
                  </p>
                </div>
                <button className="w-full bg-bright-azure hover:bg-blue-600 text-white py-3 rounded-lg font-medium transition-colors duration-300">
                  Learn More
                </button>
              </div>
              
              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                <h3 className="text-2xl font-montserrat font-bold text-deep-navy mb-4">
                  Co-Investment
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Direct participation in select large transactions alongside our funds.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-bright-azure" />
                    <span className="text-gray-700">No management fees</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-bright-azure" />
                    <span className="text-gray-700">Deal-by-deal basis</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-bright-azure" />
                    <span className="text-gray-700">Enhanced transparency</span>
                  </li>
                </ul>
                <div className="bg-bright-azure/10 rounded-lg p-4 mb-6">
                  <p className="text-sm text-gray-600">
                    <strong className="text-deep-navy">Minimum Investment:</strong> $10M
                  </p>
                </div>
                <button className="w-full bg-bright-azure hover:bg-blue-600 text-white py-3 rounded-lg font-medium transition-colors duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Track Record */}
        <section className="py-20">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-montserrat font-bold text-deep-navy mb-6">
                Proven Track Record
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Consistent performance across market cycles
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-5xl font-montserrat font-bold text-transparent bg-clip-text bg-gradient-to-r from-bright-azure to-deep-navy mb-4">
                  10.2%
                </div>
                <h3 className="text-xl font-montserrat font-bold text-deep-navy mb-2">
                  Net IRR
                </h3>
                <p className="text-gray-600">
                  Since inception average across all strategies
                </p>
              </div>
              
              <div className="text-center">
                <div className="text-5xl font-montserrat font-bold text-transparent bg-clip-text bg-gradient-to-r from-bright-azure to-deep-navy mb-4">
                  &lt;1%
                </div>
                <h3 className="text-xl font-montserrat font-bold text-deep-navy mb-2">
                  Loss Rate
                </h3>
                <p className="text-gray-600">
                  Historical default rate across portfolio
                </p>
              </div>
              
              <div className="text-center">
                <div className="text-5xl font-montserrat font-bold text-transparent bg-clip-text bg-gradient-to-r from-bright-azure to-deep-navy mb-4">
                  $2B+
                </div>
                <h3 className="text-xl font-montserrat font-bold text-deep-navy mb-2">
                  AUM
                </h3>
                <p className="text-gray-600">
                  Assets under management across strategies
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Investment Process */}
        <section className="py-20 bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-montserrat font-bold text-deep-navy mb-6">
                Our Investment Process
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Rigorous due diligence and risk management at every step
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-bright-azure text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  1
                </div>
                <h3 className="text-lg font-montserrat font-bold text-deep-navy mb-2">
                  Sourcing
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Proprietary deal flow through our extensive network
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-bright-azure text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  2
                </div>
                <h3 className="text-lg font-montserrat font-bold text-deep-navy mb-2">
                  Underwriting
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Comprehensive analysis using proprietary models
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-bright-azure text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  3
                </div>
                <h3 className="text-lg font-montserrat font-bold text-deep-navy mb-2">
                  Structuring
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Optimal terms to maximize risk-adjusted returns
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-bright-azure text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  4
                </div>
                <h3 className="text-lg font-montserrat font-bold text-deep-navy mb-2">
                  Monitoring
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Active portfolio management and risk monitoring
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Investor Types */}
        <section className="py-20">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-montserrat font-bold text-deep-navy mb-6">
                Who We Serve
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Sophisticated investors seeking alternative investment solutions
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                'Pension Funds',
                'Insurance Companies', 
                'Endowments & Foundations',
                'Family Offices',
                'Wealth Management',
                'Fund of Funds',
                'Sovereign Wealth Funds',
                'High Net Worth Individuals'
              ].map((investor) => (
                <div key={investor} className="bg-gradient-to-br from-white to-gray-50 rounded-lg p-6 border border-gray-100 text-center hover:border-bright-azure transition-colors duration-300">
                  <h3 className="text-lg font-montserrat font-semibold text-deep-navy">
                    {investor}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-bright-azure/5 to-deep-navy/5">
          <div className="container-custom">
            <div className="text-center">
              <h2 className="text-4xl font-montserrat font-bold text-deep-navy mb-6">
                Ready to Invest?
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Learn more about our private credit investment opportunities 
                and how we can help diversify your portfolio.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-bright-azure to-blue-600 hover:from-blue-600 hover:to-bright-azure rounded-lg text-white font-montserrat font-semibold text-lg transition-all duration-300 flex items-center gap-3">
                  Request Information
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="px-8 py-4 bg-white rounded-lg text-deep-navy font-montserrat font-medium text-lg border border-gray-300 hover:border-bright-azure transition-all duration-300">
                  Schedule Meeting
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

export default ForInvestors; 