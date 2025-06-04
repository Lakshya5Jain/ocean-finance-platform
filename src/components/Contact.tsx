
import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl font-montserrat max-w-3xl mx-auto opacity-90">
              Receive a term sheet for $2M to $30M+ within one week. Contact us to learn how we can fund your growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="bg-secondary rounded-full p-3">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-montserrat font-semibold text-lg">Phone</h3>
                  <a href="tel:2129708910" className="font-montserrat text-white/90 hover:text-white transition-colors">
                    (212) 970-8910
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-secondary rounded-full p-3">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-montserrat font-semibold text-lg">Email</h3>
                  <a href="mailto:contact@deepoceanpartners.com" className="font-montserrat text-white/90 hover:text-white transition-colors">
                    contact@deepoceanpartners.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-secondary rounded-full p-3">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-montserrat font-semibold text-lg">Office</h3>
                  <p className="font-montserrat text-white/90">
                    101 Park Avenue, 11th Floor<br />
                    New York, NY
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-montserrat font-bold mb-6">Get Your Term Sheet</h3>
              <form className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Company Name" 
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 font-montserrat focus:outline-none focus:border-secondary"
                />
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 font-montserrat focus:outline-none focus:border-secondary"
                />
                <input 
                  type="tel" 
                  placeholder="Phone Number" 
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 font-montserrat focus:outline-none focus:border-secondary"
                />
                <input 
                  type="text" 
                  placeholder="Funding Amount Needed" 
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 font-montserrat focus:outline-none focus:border-secondary"
                />
                <Button className="w-full bg-secondary hover:bg-secondary/90 text-white font-montserrat font-semibold py-3">
                  Request Term Sheet
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
