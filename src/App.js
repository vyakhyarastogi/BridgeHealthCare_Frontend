import Nav from './components/Nav';
import About from './components/About';
import FeatureSection from './components/FeatureSection';
import OurBlogs from './components/OurBlogs';

// import DoctorCard from './components/DoctorCard';
// import ContactSection from './components/ContactSection';
// import Header from './components/Header';
// import HeroSection from './components/HeroSection';
import HeroSection from './components/HeroSection';
import HomeServices from './components/HomeServices';
import OurProducts from './components/OurProducts';
import BenefitsForAll from './components/BenefitsForAll';
import Services from './components/Services';
import Team from './components/Team';
import Achievements from './components/Achievements';
import Collaborations from './components/Collaborations';
function App() {
  return (
    <div className="App">
      <Nav />
      {/* <Header />
      <div className="flex justify-center mt-10">
        <DoctorCard />
      </div>
      <ContactSection /> */}
      <HeroSection />
      <About />
      <FeatureSection />
      <HomeServices />
      <OurProducts />
      <BenefitsForAll />
      <Services />
      <Team />
      <Achievements />
      <Collaborations />
      <OurBlogs />



    </div>

  );
}

export default App;
