import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Overview = () => {
  return (
    <div className="min-h-screen bg-white font-montserrat">
      <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-white to-gray-50">
          <div className="container-custom">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h1 className="text-5xl md:text-6xl font-montserrat font-bold text-deep-navy mb-6">
                  Company Overview
                </h1>
                <div className="text-sm font-montserrat text-bright-azure mb-8">
                  Founded 2023 • New York
                </div>
              </div>
              
              <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-gray-100">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  <span className="font-semibold text-deep-navy">Deep Ocean Partners</span> is a New York–based private-credit platform founded in 2023 that blends hedge-fund-style data science with bespoke structuring to turn overlooked assets and predictive cash-flows into working capital for high-growth brands.
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Our menu of revolving lines of credit, term loans and other creative facilities typically delivers <span className="font-semibold text-bright-azure">1.5-2.5× more availability</span> than traditional ABLs and stretches amortization <span className="font-semibold text-bright-azure">2.5-5× longer</span> than revenue-based loans, cutting monthly payments by <span className="font-semibold text-bright-azure">50% or more</span>.
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  Term sheets from <span className="font-semibold text-deep-navy">$2 million to $30 million</span> can be issued in about a week. Facilities scale as borrowers mature and are customized around each client's operating data rather than one-size-fits-all covenants, while our leadership team positions itself as a "personal growth team" that adds advisory muscle alongside capital.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-montserrat font-bold text-deep-navy mb-6">
                  Our Mission
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Our mission is to <span className="font-semibold text-bright-azure">create long-term value for our investor partners</span> through the stewardship of their capital. With a rigorous investment process, we invest across alternative asset classes in private and public credit, liquidations, and venture debt while helping our borrowers scale their business with bespoke finances.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Deep Ocean Partners aims to <span className="font-semibold text-deep-navy">redefine private credit</span> by offering faster, more flexible and more predictive financing than traditional lenders, helping innovative companies grow without sacrificing cash-flow or control.
                </p>
              </div>
              <div className="bg-gradient-to-br from-bright-azure/10 to-deep-navy/10 rounded-2xl p-8">
                <h3 className="text-xl font-montserrat font-bold text-deep-navy mb-6 text-center">
                  Why We're Different
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-bright-azure rounded-full"></div>
                    <span className="text-gray-700">Hedge-fund-style data science</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-bright-azure rounded-full"></div>
                    <span className="text-gray-700">Bespoke structuring approach</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-bright-azure rounded-full"></div>
                    <span className="text-gray-700">Personal growth team advisory</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-bright-azure rounded-full"></div>
                    <span className="text-gray-700">Custom operating data covenants</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section className="py-20 bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-montserrat font-bold text-deep-navy mb-6">
                Our Location
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Located at the heart of Manhattan, right next to Grand Central
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                  <h3 className="text-2xl font-montserrat font-bold text-deep-navy mb-4">
                    101 Park Avenue
                  </h3>
                  <div className="space-y-3 text-gray-600">
                    <p className="text-lg">11th Floor</p>
                    <p className="text-lg">New York, NY 10178</p>
                    <p className="text-sm text-bright-azure font-medium">Near Grand Central Terminal</p>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <a 
                      href="https://www.linkedin.com/company/deep-ocean-partners/" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-bright-azure hover:text-blue-600 font-medium transition-colors duration-300"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                      Follow us on LinkedIn
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 gap-4">
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src="https://www.101park.com/wp-content/uploads/2023/08/101-Park-Building-Exterior-1-3476.jpg" 
                    alt="101 Park Avenue Building Exterior" 
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src="https://www.101park.com/wp-content/uploads/2023/02/DSC0779_RT.jpg" 
                    alt="101 Park Avenue Interior" 
                    className="w-full h-64 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-montserrat font-bold text-deep-navy mb-6">
                Our Core Values & Business Principles
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The principles that guide everything we do and define who we are
              </p>
            </div>
            
            {/* Priority Statement */}
            <div className="bg-gradient-to-br from-bright-azure/5 to-deep-navy/5 rounded-2xl p-8 mb-12 text-center">
              <h3 className="text-2xl font-montserrat font-bold text-deep-navy mb-4">
                Our Foundation
              </h3>
              <p className="text-xl text-gray-700 font-medium">
                Our Investors and Clients are our number one priority.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-bright-azure rounded-full flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-montserrat font-bold text-deep-navy mb-4">
                  Integrity
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Act with the utmost integrity, insisting on transparency from our Firm as we learn from our experiences and reward honesty and strong character.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-bright-azure rounded-full flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-montserrat font-bold text-deep-navy mb-4">
                  Excellence
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Strive for nothing less than excellence. We are consistently aspiring to achieve outstanding results for our investors, our stakeholders, and our Firm.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-bright-azure rounded-full flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-montserrat font-bold text-deep-navy mb-4">
                  Innovate
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Be in a perpetual state of dissatisfaction. Continuously challenge the status quo and push boundaries to create better solutions.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-bright-azure rounded-full flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-montserrat font-bold text-deep-navy mb-4">
                  Culture
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We prioritize collaboration and value diversity, creating a culture that fosters teamwork and an entrepreneurial mindset in the pursuit of excellence.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-bright-azure rounded-full flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-2xl font-montserrat font-bold text-deep-navy mb-4">
                  Develop Talent
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Develop talent through mentorship. We invest in our people and believe in the power of knowledge sharing and growth.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-bright-azure rounded-full flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-montserrat font-bold text-deep-navy mb-4">
                  Philanthropy
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Serve those around us with our time and capital. We believe in giving back to our communities and making a positive impact.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Overview; 