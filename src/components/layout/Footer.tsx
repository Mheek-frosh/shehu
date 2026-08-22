import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <img src="/logo-transparent.png" alt="Shehu ABG Logo" className="h-12 w-auto" />
              <h3 className="text-2xl font-display font-bold tracking-tight text-[var(--color-pdp-green)]">SHEHU ABG<br/>IMPACT</h3>
            </div>
            <p className="text-gray-300 text-sm mb-6">
              Empowering communities and fostering grassroots development through visionary leadership and impactful civic engagement.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Facebook</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Twitter</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Instagram</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Youtube</a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">The Man</Link></li>
              <li><Link to="/vision" className="hover:text-white transition-colors">Vision & Mission</Link></li>
              <li><Link to="/manifesto" className="hover:text-white transition-colors">Manifesto</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Initiatives</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link to="/projects" className="hover:text-white transition-colors">Projects</Link></li>
              <li><Link to="/gallery" className="hover:text-white transition-colors">Impact Gallery</Link></li>
              <li><Link to="/entrepreneurship" className="hover:text-white transition-colors">Entrepreneurship Scheme</Link></li>
              <li><Link to="/events" className="hover:text-white transition-colors">Events</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-4">Civic Action</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link to="/pvc-education" className="hover:text-white transition-colors">PVC Education</Link></li>
              <li><Link to="/voter-education" className="hover:text-white transition-colors">Voter Education</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Shehu ABG Impact Group. All rights reserved.</p>
          <div className="mt-4 md:mt-0 space-x-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
