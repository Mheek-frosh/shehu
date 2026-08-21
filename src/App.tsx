import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import History from './pages/History';
import VisionMission from './pages/VisionMission';
import Manifesto from './pages/Manifesto';
import Projects from './pages/Projects';
import ImpactGallery from './pages/ImpactGallery';
import PlannedProjects from './pages/PlannedProjects';
import Events from './pages/Events';
import BlogDetail from './pages/BlogDetail';
import PVCEducation from './pages/PVCEducation';
import VoterEducation from './pages/VoterEducation';
import Entrepreneurship from './pages/Entrepreneurship';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-[var(--background)]">
        <Navbar />
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/history" element={<History />} />
            <Route path="/vision" element={<VisionMission />} />
            <Route path="/manifesto" element={<Manifesto />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/gallery" element={<ImpactGallery />} />
            <Route path="/planned-projects" element={<PlannedProjects />} />
            <Route path="/events" element={<Events />} />
            <Route path="/blog/:slug" element={<BlogDetail />} />
            <Route path="/pvc-education" element={<PVCEducation />} />
            <Route path="/voter-education" element={<VoterEducation />} />
            <Route path="/entrepreneurship" element={<Entrepreneurship />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
