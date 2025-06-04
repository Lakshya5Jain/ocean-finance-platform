
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import About from '@/components/About';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white font-montserrat">
      <Header />
      <div className="mt-20">
        <About />
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
