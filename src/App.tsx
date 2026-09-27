import './styles/tokens.css';
import './styles/global.css';
import './App.css';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Trust } from './components/Trust';
import { Services } from './components/Services';
import { Pricing } from './components/Pricing';
import { Team } from './components/Team';
import { Reviews } from './components/Reviews';
import { Faq } from './components/Faq';
import { Location } from './components/Location';
import { Footer } from './components/Footer';
import { MobileCtaBar } from './components/MobileCtaBar';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Trust />
      <Services />
      <Pricing />
      <Team />
      <Reviews />
      <Faq />
      <Location />
      <Footer />
      <MobileCtaBar />
    </>
  );
}

export default App;
