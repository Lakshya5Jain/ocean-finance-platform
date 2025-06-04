
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Solutions from '@/components/Solutions';
import ComparisonTable from '@/components/ComparisonTable';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white font-montserrat">
      <Header />
      <Hero />
      <About />
      <Solutions />
      <ComparisonTable />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
