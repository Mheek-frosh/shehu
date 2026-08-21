import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Activity, BookOpen, Users, Map, X } from 'lucide-react';
import { PROJECTS, BLOG_POSTS } from '../data/mockData';

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20 bg-gray-50">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-pdp-green)] via-white to-[var(--color-pdp-red)] opacity-10 z-0">
        </div>

        <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col"
          >
            <span className="text-[var(--color-pdp-red)] font-semibold tracking-wider text-sm mb-4">OUR HOPE 2027</span>
            <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight mb-6">
              Visionary Leadership.<br />
              <span className="text-[var(--color-pdp-green)]">Grassroots Impact.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg leading-relaxed">
              Empowering Kaduna State through transparent governance, sustainable development, and inclusive civic engagement.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/vision" className="bg-[var(--color-pdp-green)] text-white px-8 py-3 rounded-full font-medium hover:scale-105 transition-transform shadow-lg shadow-[var(--color-pdp-green)]/30">
                Explore Vision
              </Link>
              <Link to="/projects" className="bg-white text-[var(--color-pdp-green)] px-8 py-3 rounded-full font-medium hover:bg-gray-50 transition-all flex items-center shadow-lg">
                View Projects <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden glass border-white/10 relative shadow-2xl">
              <img
                src="/src/assets/hero-poster.png"
                alt="Rt. Hon. Usman S Bawa ABG"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Links Section - Infinite Marquee */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="flex w-fit animate-marquee hover:[animation-play-state:paused]">
          {/* Duplicate the items for seamless infinite scroll */}
          {[...Array(2)].map((_, arrayIndex) => (
            <div key={arrayIndex} className="flex gap-6 px-3">
              {[
                { title: 'The Manifesto', desc: 'Read the comprehensive plan for our state.', icon: BookOpen, path: '/manifesto' },
                { title: 'Civic Education', desc: 'Learn about PVC registration and voting.', icon: Activity, path: '/pvc-education' },
                { title: 'Impact Projects', desc: 'Explore completed and ongoing initiatives.', icon: Map, path: '/projects' },
                { title: 'Volunteer', desc: 'Join the Impact Team and make a difference.', icon: Users, path: '/contact' }
              ].map((item, i) => (
                <Link
                  key={`${arrayIndex}-${i}`}
                  to={item.path}
                  className="group block w-[300px] p-8 rounded-3xl bg-[var(--color-neutral-gray)] hover:shadow-xl transition-all border border-transparent hover:border-[var(--color-pdp-green)] flex-shrink-0"
                >
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform text-[var(--color-pdp-green)]">
                    <item.icon size={24} />
                  </div>
                  <h3 className="text-xl font-display font-semibold mb-3 group-hover:text-[var(--color-pdp-red)] transition-colors">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed whitespace-normal">{item.desc}</p>
                </Link>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Rich Content - Vision Highlights */}
      <section className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-[var(--color-pdp-red)] font-semibold tracking-wider text-sm mb-4 block">THE AGENDA</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">A brighter future for every citizen.</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              We believe in a government that works for everyone. By focusing on education, healthcare, and sustainable infrastructure, we are laying the foundation for a prosperous and secure future.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                "Transparent & Accountable Governance",
                "Youth Empowerment & Tech Hubs",
                "Agricultural Revitalization",
                "Accessible Healthcare for All"
              ].map((point, i) => (
                <li key={i} className="flex items-center text-gray-700 font-medium">
                  <div className="w-6 h-6 rounded-full bg-[var(--color-pdp-green)]/10 text-[var(--color-pdp-green)] flex items-center justify-center mr-4">
                    ✓
                  </div>
                  {point}
                </li>
              ))}
            </ul>
            <Link to="/vision" className="inline-flex items-center text-[var(--color-pdp-green)] font-semibold hover:text-[var(--color-pdp-red)] transition-colors">
              Read our full vision <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                <h3 className="text-4xl font-display font-bold text-[var(--color-pdp-green)] mb-2">150+</h3>
                <p className="text-gray-600 text-sm">Community Projects Completed</p>
              </div>
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                <h3 className="text-4xl font-display font-bold text-[var(--color-pdp-red)] mb-2">50k</h3>
                <p className="text-gray-600 text-sm">Youth Empowered</p>
              </div>
            </div>
            <div className="space-y-4 mt-8">
              <div className="bg-[var(--color-pdp-green)] text-white p-8 rounded-3xl shadow-md">
                <h3 className="text-4xl font-display font-bold mb-2">24/7</h3>
                <p className="text-green-100 text-sm">Commitment to Service</p>
              </div>
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                <h3 className="text-4xl font-display font-bold text-gray-800 mb-2">12</h3>
                <p className="text-gray-600 text-sm">Years in Public Service</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Projects Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-4">Impact Projects</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Explore the tangible difference we are making in the community.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                onClick={() => setSelectedProject(project)}
                className="cursor-pointer group rounded-3xl overflow-hidden shadow-lg relative aspect-square"
              >
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6">
                  <span className="text-xs font-bold text-white uppercase tracking-wider mb-2">{project.category}</span>
                  <h3 className="text-xl font-display font-semibold text-white">{project.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="text-[var(--color-pdp-green)] font-bold tracking-wider text-sm uppercase mb-2 block">Blog</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900">Latest News and Insights</h2>
            </div>
            <Link to="/events" className="hidden md:flex items-center text-gray-900 font-semibold hover:text-[var(--color-pdp-green)] transition-colors">
              View All Posts <ArrowRight className="ml-2 w-5 h-5 -rotate-45" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Featured Post */}
            <Link to="/events" className="lg:col-span-7 group block relative rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-shadow bg-gray-50 border border-gray-100 pb-6 h-full flex flex-col">
              <div className="relative w-full aspect-[4/3] sm:aspect-[16/9] lg:aspect-[4/3] xl:aspect-[16/9] mb-6 overflow-hidden rounded-[2rem]">
                <img src={BLOG_POSTS[0].image} alt={BLOG_POSTS[0].title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-6 left-6 bg-orange-400 text-gray-900 font-semibold px-4 py-1.5 rounded-full text-sm shadow-md">
                  {BLOG_POSTS[0].category}
                </div>
              </div>
              <div className="px-8 flex-grow flex flex-col">
                <div className="flex items-center text-gray-500 text-sm mb-3">
                  <span className="mr-2">🗓</span> {BLOG_POSTS[0].date}
                </div>
                <h3 className="text-2xl lg:text-3xl font-display font-bold text-gray-900 mb-4 group-hover:text-[var(--color-pdp-green)] transition-colors">
                  {BLOG_POSTS[0].title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {BLOG_POSTS[0].description}
                </p>
              </div>
            </Link>

            {/* Side Posts List */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              {BLOG_POSTS.slice(1).map((post) => (
                <Link to="/events" key={post.id} className="group flex bg-white border border-gray-100 rounded-3xl overflow-hidden hover:shadow-lg transition-shadow items-stretch h-36">
                  <div className="w-1/3 shrink-0 relative overflow-hidden">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="w-2/3 p-5 flex flex-col justify-center">
                    <span className="text-[var(--color-pdp-green)] font-bold text-xs tracking-wider uppercase mb-2 block">{post.category}</span>
                    <h4 className="font-display font-bold text-gray-900 leading-tight mb-2 group-hover:text-[var(--color-pdp-red)] transition-colors line-clamp-2">
                      {post.title}
                    </h4>
                    <span className="text-gray-500 text-xs">{post.date}</span>
                  </div>
                </Link>
              ))}
            </div>
            
            <Link to="/events" className="md:hidden flex items-center justify-center text-gray-900 font-semibold hover:text-[var(--color-pdp-green)] transition-colors mt-4">
              View All Posts <ArrowRight className="ml-2 w-5 h-5 -rotate-45" />
            </Link>
          </div>
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl relative max-h-[90vh] flex flex-col"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
              >
                <X size={20} />
              </button>

              <div className="w-full h-64 sm:h-80 relative shrink-0">
                <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
              </div>

              <div className="p-8 overflow-y-auto">
                <div className="flex items-center space-x-4 mb-4 text-sm font-medium">
                  <span className="text-[var(--color-pdp-green)]">{selectedProject.category}</span>
                  <span className="text-gray-400">•</span>
                  <span className="text-gray-500">{selectedProject.date}</span>
                </div>

                <h3 className="text-3xl font-display font-bold mb-4">{selectedProject.title}</h3>

                <div className="flex items-center space-x-2 text-sm text-gray-500 mb-6">
                  <Map size={16} />
                  <span>{selectedProject.location}</span>
                </div>

                <div className="prose max-w-none">
                  <p className="text-lg leading-relaxed text-gray-700">
                    {selectedProject.description}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
