import { DollarSign, TrendingUp, Target, Rocket } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-br from-white via-blue-50/20 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500 rounded-full filter blur-3xl transform -translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-cyan-400 rounded-full filter blur-3xl transform translate-x-1/3 translate-y-1/3"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-xs font-medium mb-5 hover:cursor-pointer hover:bg-blue-100/80 transition-all duration-300">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
              INSTITUTIONAL INNOVATION
            </div>
            <h2 className="text-4xl md:text-5xl font-extralight text-slate-900 mb-6 leading-tight">
              Your Growth Story
              <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent font-light">
                Starts Here
              </span>
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed font-light">
              At Deep Ocean Partners, we redefine business financing. Whether you're scaling operations, optimizing cash flow, or pursuing bold opportunities, we provide bespoke capital and strategic partnership to transform your vision into impact. Our fusion of cutting-edge technology and Wall Street acumen delivers solutions that evolve with your ambition.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/8 to-cyan-600/8 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-500"></div>
              <div className="relative bg-white/60 backdrop-blur-lg rounded-2xl p-6 border border-white/40 hover:border-blue-100 transition-all duration-500 hover:transform hover:scale-103 shadow-lg hover:shadow-xl">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-300">
                  <DollarSign className="text-white h-7 w-7" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">More Capital</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Up to 2.5x higher limits than traditional lenders with institutional-grade underwriting
                </p>
                <div className="mt-5 flex items-center text-xs text-blue-600 font-medium hover:cursor-pointer hover:text-blue-700 transition-all duration-300">
                  <span>Learn More</span>
                  <div className="ml-2 w-3.5 h-3.5 bg-blue-50 rounded-full flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/8 to-blue-600/8 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-500"></div>
              <div className="relative bg-white/60 backdrop-blur-lg rounded-2xl p-6 border border-white/40 hover:border-cyan-100 transition-all duration-500 hover:transform hover:scale-103 shadow-lg hover:shadow-xl">
                <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-300">
                  <TrendingUp className="text-white h-7 w-7" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Better Cash Flow</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  50%+ savings with fixed payments over multi-year terms and predictable structures
                </p>
                <div className="mt-5 flex items-center text-xs text-cyan-600 font-medium hover:cursor-pointer hover:text-cyan-700 transition-all duration-300">
                  <span>Learn More</span>
                  <div className="ml-2 w-3.5 h-3.5 bg-cyan-50 rounded-full flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-cyan-600 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/8 to-cyan-600/8 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-500"></div>
              <div className="relative bg-white/60 backdrop-blur-lg rounded-2xl p-6 border border-white/40 hover:border-blue-100 transition-all duration-500 hover:transform hover:scale-103 shadow-lg hover:shadow-xl">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-300">
                  <Target className="text-white h-7 w-7" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Total Flexibility</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Adaptable terms that evolve with your business across multiple financing products
                </p>
                <div className="mt-5 flex items-center text-xs text-blue-600 font-medium hover:cursor-pointer hover:text-blue-700 transition-all duration-300">
                  <span>Learn More</span>
                  <div className="ml-2 w-3.5 h-3.5 bg-blue-50 rounded-full flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/8 to-blue-600/8 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-500"></div>
              <div className="relative bg-white/60 backdrop-blur-lg rounded-2xl p-6 border border-white/40 hover:border-cyan-100 transition-all duration-500 hover:transform hover:scale-103 shadow-lg hover:shadow-xl">
                <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-300">
                  <Rocket className="text-white h-7 w-7" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Scale Ready</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Facilities that grow up to $30M as you expand with institutional backing
                </p>
                <div className="mt-5 flex items-center text-xs text-cyan-600 font-medium hover:cursor-pointer hover:text-cyan-700 transition-all duration-300">
                  <span>Learn More</span>
                  <div className="ml-2 w-3.5 h-3.5 bg-cyan-50 rounded-full flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-cyan-600 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Advanced Metrics Display */}
          <div className="bg-gradient-to-br from-slate-900 via-blue-900/90 to-slate-800/90 rounded-2xl p-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/8 to-cyan-600/8"></div>
            <div className="relative z-10">
              <div className="text-center mb-10">
                <h3 className="text-2xl font-extralight text-white mb-3">Institutional Performance Metrics</h3>
                <p className="text-slate-300 text-md max-w-2xl mx-auto">Our track record reflects the precision of our underwriting and the excellence of our portfolio management.</p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-extralight text-white mb-2">$1B+</div>
                  <div className="text-slate-400 text-xs uppercase tracking-widest font-light">Assets Under Management</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-extralight text-white mb-2">500+</div>
                  <div className="text-slate-400 text-xs uppercase tracking-widest font-light">Companies Funded</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-extralight text-white mb-2">21+</div>
                  <div className="text-slate-400 text-xs uppercase tracking-widest font-light">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-extralight text-white mb-2">95%</div>
                  <div className="text-slate-400 text-xs uppercase tracking-widest font-light">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
