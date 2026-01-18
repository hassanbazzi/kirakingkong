import About from './components/About';
import Contact from './components/Contact';
import Journey from './components/Journey';
import Venues from './components/Venues';
import Music from './components/Music';
import HighlightedSets from './components/HighlightedSets';
import Hero from './components/Hero';
import Layout from './components/Layout';

function App() {
  return (
    <Layout>
      <Hero />
      <About />
      <Journey />
      <Music />
      <HighlightedSets />
      <Venues />
      <Contact />
    </Layout>
  );
}

export default App;
