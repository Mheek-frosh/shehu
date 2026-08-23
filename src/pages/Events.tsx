import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, ArrowRight, Clock, Calendar } from 'lucide-react';
import { BLOG_POSTS } from '../data/mockData';

const ALL_CATEGORIES = ['All', ...Array.from(new Set(BLOG_POSTS.map(p => p.category)))];

const categoryColors: Record<string, string> = {
  Innovation: 'bg-orange-100 text-orange-700',
  Education: 'bg-blue-100 text-blue-700',
  Agriculture: 'bg-green-100 text-green-700',
  Partnership: 'bg-purple-100 text-purple-700',
  Recognition: 'bg-yellow-100 text-yellow-700',
  'Civic Action': 'bg-red-100 text-red-700',
};

export default function Events() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = useMemo(() => {
    return BLOG_POSTS.filter(post => {
      const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
      const matchesSearch = post.title.toLowerCase().includes(search.toLowerCase()) ||
        (post.description ?? '').toLowerCase().includes(search.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [search, activeCategory]);

  const featured = filtered[0];
  const rest = filtered.slice(1);

  return (
    <div className="bg-white min-h-screen">
      {/* Page Header */}
      <section className="pt-16 pb-10 bg-gray-50 border-b border-gray-100">
        <div className="container mx-auto px-6 text-center">
          <span className="text-[var(--color-pdp-green)] font-bold tracking-widest text-sm uppercase mb-3 block">Blog</span>
          <h1 className="text-5xl md:text-6xl font-display font-bold text-gray-900 mb-6">Latest News and Insights</h1>

          {/* Search */}
          <div className="relative max-w-xl mx-auto mb-8">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search blog posts..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full pl-12 pr-6 py-4 rounded-2xl border border-gray-200 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-pdp-green)] text-gray-800 placeholder-gray-400"
            />
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3">
            {ALL_CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                  activeCategory === cat
                    ? 'bg-[var(--color-pdp-green)] text-white shadow-md'
                    : 'bg-white text-gray-600 border border-gray-200 hover:border-[var(--color-pdp-green)] hover:text-[var(--color-pdp-green)]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6 py-16">
        {filtered.length === 0 ? (
          <div className="text-center py-24 text-gray-400 text-xl">No posts found.</div>
        ) : (
          <>
            {/* Featured Post */}
            {featured && (
              <motion.div
                key={featured.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-16"
              >
                <Link to={`/blog/${featured.slug}`} className="group grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-[2rem] overflow-hidden shadow-md hover:shadow-2xl transition-shadow bg-white border border-gray-100">
                  <div className="relative overflow-hidden aspect-[4/3] lg:aspect-auto">
                    <img
                      src={featured.image}
                      alt={featured.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className={`absolute top-6 left-6 px-4 py-1.5 rounded-full text-sm font-bold ${categoryColors[featured.category] ?? 'bg-gray-100 text-gray-700'}`}>
                      {featured.category}
                    </div>
                  </div>
                  <div className="p-10 lg:p-14 flex flex-col justify-center">
                    <div className="flex items-center gap-5 text-gray-400 text-sm mb-5">
                      <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> {featured.date}</span>
                      {featured.readTime && <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> {featured.readTime}</span>}
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-display font-bold text-gray-900 mb-4 group-hover:text-[var(--color-pdp-green)] transition-colors leading-tight">
                      {featured.title}
                    </h2>
                    <p className="text-gray-500 text-lg leading-relaxed mb-8">{featured.description}</p>
                    <span className="inline-flex items-center font-semibold text-[var(--color-pdp-green)] group-hover:text-[var(--color-pdp-red)] transition-colors">
                      Read More <ArrowRight className="ml-2 w-4 h-4" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            )}

            {/* Post Grid */}
            {rest.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {rest.map((post, i) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                  >
                    <Link to={`/blog/${post.slug}`} className="group flex flex-col rounded-3xl overflow-hidden bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-shadow h-full">
                      <div className="relative overflow-hidden aspect-video">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold ${categoryColors[post.category] ?? 'bg-gray-100 text-gray-700'}`}>
                          {post.category}
                        </div>
                      </div>
                      <div className="p-7 flex flex-col flex-grow">
                        <div className="flex items-center gap-4 text-gray-400 text-xs mb-4">
                          <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {post.date}</span>
                          {post.readTime && <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {post.readTime}</span>}
                        </div>
                        <h3 className="text-xl font-display font-bold text-gray-900 mb-3 group-hover:text-[var(--color-pdp-green)] transition-colors leading-snug flex-grow">
                          {post.title}
                        </h3>
                        {post.description && (
                          <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-2">{post.description}</p>
                        )}
                        <span className="inline-flex items-center text-sm font-semibold text-[var(--color-pdp-green)] group-hover:text-[var(--color-pdp-red)] transition-colors mt-auto">
                          Read More <ArrowRight className="ml-1.5 w-4 h-4" />
                        </span>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            )}
          </>
        )}
      </div>

      {/* CTA Banner */}
      <section className="py-20 bg-[var(--color-pdp-green)]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">Be part of the next chapter.</h2>
          <p className="text-green-100 text-lg mb-8 max-w-xl mx-auto">
            Join the Impact Group and help move ideas from community conversations into lasting action.
          </p>
          <Link to="/contact" className="inline-block bg-white text-[var(--color-pdp-green)] font-bold px-8 py-3 rounded-full hover:bg-green-50 transition-colors shadow-lg">
            Get Involved
          </Link>
        </div>
      </section>
    </div>
  );
}
