
import './App.css';
import About from './Components/about/About';
import Adverts from './Components/adverts/Adverts';
import Clients from './Components/clients/Clients';
import Footer from './Components/footer/Footer';
import Getstarted from './Components/getstarted/Getstarted';
import Navbar from './Components/Navbar/Navbar';
import Section from './Components/Section/Section';
import Sponsors from './Components/sponsors/Sponsors';
import Work from './Components/works/Work';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Section />
      <Sponsors />
      <Adverts />
      <Work />
      <About />
      <Clients />
      <Getstarted />
      <Footer />
    </div>
  );
}

export default App;
