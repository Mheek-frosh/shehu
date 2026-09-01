import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Activity, Award, BookOpen, Handshake, Heart, Leaf, Lightbulb, Map, Play, ShieldCheck, Users, X } from 'lucide-react';
import { PROJECTS, BLOG_POSTS } from '../data/mockData';

const HOME_BLOG_EXCLUSIONS = new Set([
  'shehu-abg-civic-tech-initiative',
  'educational-roundtable-2025',
  'nextgen-agricultural-programme',
  'state-ministry-workshop-partnership',
  'shehu-abg-award-of-excellence',
  'pvc-registration-drive-2025',
]);

const HOME_BLOG_POSTS = BLOG_POSTS.filter(post => !HOME_BLOG_EXCLUSIONS.has(post.slug));

/**
 * Home Page Component
 * Introduces the campaign, highlights impact projects, and features recent blog posts.
 */
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
                src="/assets/hero-poster.png"
                alt="Rt. Hon. Usman S Bawa ABG"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Links Section - Infinite Marquee */}
      <section className="py-8 bg-white overflow-hidden">
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

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <span className="text-[var(--color-pdp-green)] font-bold tracking-[0.2em] text-xs uppercase mb-4 block">Why Shehu ABG</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-5">Why Shehu ABG Is the Right Choice</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Shehu ABG brings practical experience, a listening ear, and a record of showing up for communities. Every commitment is rooted in service, accountability, and a clear plan for Kaduna&apos;s future.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {[
              { title: 'People First', description: 'Policies and projects shaped around the everyday needs of citizens.', icon: Users, color: 'text-[var(--color-pdp-green)]', bg: 'bg-emerald-50' },
              { title: 'Proven Service', description: 'A grounded approach built through years of public and community service.', icon: Award, color: 'text-[var(--color-pdp-red)]', bg: 'bg-red-50' },
              { title: 'Clear Direction', description: 'A focused agenda that turns shared hopes into measurable progress.', icon: Lightbulb, color: 'text-blue-600', bg: 'bg-blue-50' },
            ].map((reason) => (
              <div key={reason.title} className="p-7 rounded-2xl border border-gray-100 bg-white shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all">
                <div className={`w-12 h-12 rounded-xl ${reason.bg} ${reason.color} flex items-center justify-center mb-6`}>
                  <reason.icon size={24} strokeWidth={1.8} />
                </div>
                <h3 className="text-xl font-display font-bold text-gray-900 mb-3">{reason.title}</h3>
                <p className="text-gray-600 leading-relaxed">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#f6f8f4] border-y border-gray-100">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-14 items-start max-w-6xl mx-auto">
            <div className="lg:col-span-5 space-y-6">
              <div className="relative min-h-[390px] rounded-[2rem] overflow-hidden group shadow-xl">
                <img src="/assets/hero-poster.png" alt="Shehu ABG campaign community impact" className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm text-[var(--color-pdp-green)] px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider">The standard we set</div>
                <div className="absolute bottom-7 left-7 right-7 text-white">
                  <p className="text-green-200 text-sm font-semibold uppercase tracking-wider mb-3">Values in action</p>
                  <h3 className="text-3xl font-display font-bold leading-tight">Progress that reaches every community.</h3>
                </div>
              </div>

              <div className="grid grid-cols-[1fr_1.25fr] min-h-36 rounded-3xl overflow-hidden bg-[var(--color-pdp-green-dark)] text-white">
                <img src="/assets/hero-poster.png" alt="Shehu ABG campaign community" className="w-full h-full object-cover object-bottom" />
                <div className="p-5 flex flex-col justify-center">
                  <p className="text-green-200 text-xs font-bold uppercase tracking-wider mb-2">Built together</p>
                  <p className="font-display text-lg font-semibold leading-snug">Listening, learning, and moving forward as one.</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 pt-2">
              <span className="text-[var(--color-pdp-green)] font-bold tracking-[0.2em] text-xs uppercase mb-4 block">Our Culture</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 leading-tight mb-5">Our Core Values</h2>
              <p className="text-gray-600 text-lg leading-relaxed max-w-xl mb-10">
                These principles shape how we serve, how we partner with communities, and how we measure the progress we promise.
              </p>

              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
                {[
                  { title: 'Professionalism', icon: Award, color: 'text-emerald-600', bg: 'bg-emerald-50' },
                  { title: 'Accountability', icon: ShieldCheck, color: 'text-orange-500', bg: 'bg-orange-50' },
                  { title: 'Innovation', icon: Lightbulb, color: 'text-blue-600', bg: 'bg-blue-50' },
                  { title: 'Sustainability', icon: Leaf, color: 'text-indigo-600', bg: 'bg-indigo-50' },
                  { title: 'Collaboration', icon: Handshake, color: 'text-violet-600', bg: 'bg-violet-50' },
                  { title: 'Integrity', icon: Heart, color: 'text-pink-600', bg: 'bg-pink-50' },
                ].map((value) => (
                  <div key={value.title} className="flex items-center gap-4 py-5 border-b border-gray-200 group">
                    <div className={`w-11 h-11 shrink-0 rounded-xl ${value.bg} ${value.color} flex items-center justify-center group-hover:scale-105 transition-transform`}>
                      <value.icon size={22} strokeWidth={1.8} />
                    </div>
                    <h3 className="text-lg font-display font-bold text-gray-900">{value.title}</h3>
                  </div>
                ))}
              </div>
            </div>
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
            <Link to={`/blog/${HOME_BLOG_POSTS[0].slug}`} className="lg:col-span-7 group block relative rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-shadow bg-gray-50 border border-gray-100 pb-6 h-full flex flex-col">
              <div className="relative w-full aspect-[4/3] sm:aspect-[16/9] lg:aspect-[4/3] xl:aspect-[16/9] mb-6 overflow-hidden rounded-[2rem]">
                <img src={HOME_BLOG_POSTS[0].image} alt={HOME_BLOG_POSTS[0].title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-6 left-6 bg-orange-400 text-gray-900 font-semibold px-4 py-1.5 rounded-full text-sm shadow-md">
                  {HOME_BLOG_POSTS[0].category}
                </div>
              </div>
              <div className="px-8 flex-grow flex flex-col">
                <div className="flex items-center text-gray-500 text-sm mb-3">
                  <span className="mr-2">🗓</span> {HOME_BLOG_POSTS[0].date}
                </div>
                <h3 className="text-2xl lg:text-3xl font-display font-bold text-gray-900 mb-4 group-hover:text-[var(--color-pdp-green)] transition-colors">
                  {HOME_BLOG_POSTS[0].title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {HOME_BLOG_POSTS[0].description}
                </p>
              </div>
            </Link>

            {/* Side Posts List */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              {HOME_BLOG_POSTS.slice(1).map((post) => (
                <Link to={`/blog/${post.slug}`} key={post.id} className="group flex bg-white border border-gray-100 rounded-3xl overflow-hidden hover:shadow-lg transition-shadow items-stretch h-36">
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

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-[var(--color-pdp-green)] font-bold tracking-[0.2em] text-xs uppercase mb-4 block">Our Story</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900">Watch Our Story in Action</h2>
          </div>

          <div className="relative max-w-5xl mx-auto aspect-[4/3] sm:aspect-[16/8] min-h-0 sm:min-h-72 rounded-[2rem] overflow-hidden shadow-2xl group">
            <img src="/assets/hero-poster.png" alt="Shehu ABG campaign story" className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-br from-gray-950/75 via-gray-950/40 to-gray-950/20" />
            <div className="absolute inset-0 flex items-center justify-center">
              <Link to="/about" aria-label="Watch the Shehu ABG story" className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[var(--color-pdp-green)] text-white flex items-center justify-center shadow-xl shadow-black/20 hover:scale-110 transition-transform">
                <Play size={28} fill="currentColor" className="ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[var(--color-pdp-green)] text-white">
        <div className="container mx-auto px-6 text-center">
          <span className="text-green-100 font-bold tracking-[0.2em] text-xs uppercase mb-4 block">Join the Impact</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-5">Stay Connected with the Impact</h2>
          <p className="text-green-50 text-lg max-w-2xl mx-auto leading-relaxed mb-8">
            Join the Shehu ABG Impact Initiative community and be the first to hear about our latest initiatives and civic programs.
          </p>
          <Link to="/contact" className="inline-flex items-center bg-white text-[var(--color-pdp-green)] px-8 py-3.5 rounded-full font-semibold hover:bg-green-50 hover:scale-105 transition-all shadow-lg">
            Get Involved <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
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
