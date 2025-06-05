import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Mail } from 'lucide-react';

const Careers = () => {
  return (
    <div className="min-h-screen bg-white font-montserrat">
      <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-white to-gray-50">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-montserrat font-bold text-deep-navy mb-6">
                Join Our Team
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                We are a very small firm with talent and focus on quality rather than quantity.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-12 shadow-sm border border-gray-100">
                <div className="w-20 h-20 bg-bright-azure rounded-full flex items-center justify-center mx-auto mb-8">
                  <Mail className="w-10 h-10 text-white" />
                </div>
                
                <h2 className="text-3xl font-montserrat font-bold text-deep-navy mb-6">
                  Think You Have What It Takes?
                </h2>
                
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  If you believe you have the talent and skills to contribute to our mission of 
                  revolutionizing institutional private credit, we'd love to hear from you.
                </p>
                
                <div className="bg-white rounded-lg p-8 border border-gray-200">
                  <p className="text-lg text-deep-navy font-medium mb-4">
                    Email us your resume and a brief description of what you have to offer:
                  </p>
                  <a 
                    href="mailto:contact@deepoceanpartners.com"
                    className="text-2xl font-montserrat font-bold text-bright-azure hover:text-blue-600 transition-colors duration-300"
                  >
                    contact@deepoceanpartners.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Careers; 