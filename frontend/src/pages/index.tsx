import HeroSection from "../components/hero-section"
import Navbar from '../components/navbar'

const Index = () => {
  return (
    <>
      <div className="w-full bg-background font-hind min-h-screen ">
        <Navbar />
        <div className="max-w-7xl mx-auto pt-16">
          <HeroSection />
        </div>
      </div>
    </>
  );
};

export default Index;
