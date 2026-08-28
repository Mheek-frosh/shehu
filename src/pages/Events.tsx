import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, ArrowRight, Clock, Calendar, ChevronLeft, ChevronRight } from 'lucide-react';
import { BLOG_POSTS } from '../data/mockData';

const ALL_CATEGORIES = ['All', ...Array.from(new Set(BLOG_POSTS.map(p => p.category).filter(Boolean)))];

const categoryColors: Record<string, string> = {
  'Campaign Update': 'bg-green-100 text-green-800',
  Innovation: 'bg-orange-100 text-orange-700',
  Education: 'bg-blue-100 text-blue-700',
  Agriculture: 'bg-green-100 text-green-700',
  Partnership: 'bg-purple-100 text-purple-700',
  Recognition: 'bg-yellow-100 text-yellow-700',
  'Civic Action': 'bg-red-100 text-red-700',
};

/**
 * Events Page Component
 * Renders the blog and latest news section.
 * Includes search functionality, category filtering, and a featured post layout.
 */
export default function Events() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [page, setPage] = useState(1);
  const postsPerPage = 6;

  const filtered = useMemo(() => {
    return BLOG_POSTS.filter(post => {
      const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
      const matchesSearch = post.title.toLowerCase().includes(search.toLowerCase()) ||
        (post.description ?? '').toLowerCase().includes(search.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [search, activeCategory]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / postsPerPage));
  const visiblePosts = filtered.slice((page - 1) * postsPerPage, page * postsPerPage);

  const changePage = (nextPage: number) => {
    setPage(Math.min(Math.max(nextPage, 1), totalPages));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Page Header */}
      <section className="pt-16 pb-12 bg-white">
        <div className="container mx-auto px-6 text-center">
          <span className="text-[var(--color-pdp-green)] font-bold tracking-widest text-sm uppercase mb-3 block">Blog</span>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-10">Latest News and Insights</h1>

          {/* Search */}
          <div className="relative max-w-2xl mx-auto mb-10">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search blog posts..."
              value={search}
              onChange={e => {
                setSearch(e.target.value);
                setPage(1);
              }}
              className="w-full pl-12 pr-6 py-4 rounded-xl border border-gray-200 bg-gray-50 shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-pdp-green)] text-gray-800 placeholder-gray-400"
            />
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3">
            {ALL_CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setPage(1);
                }}
                className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                  activeCategory === cat
                    ? 'bg-[var(--color-pdp-green)] text-white shadow-md'
                    : 'bg-gray-50 text-gray-600 border border-transparent hover:border-[var(--color-pdp-green)] hover:text-[var(--color-pdp-green)]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6 pb-16">
        {filtered.length === 0 ? (
          <div className="text-center py-24 text-gray-400 text-xl">No posts found.</div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-14 max-w-6xl mx-auto">
                {visiblePosts.map((post, i) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                  >
                    <Link to={`/blog/${post.slug}`} className="group flex flex-col h-full">
                      <div className="relative overflow-hidden aspect-[16/9] rounded-3xl shadow-sm">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        {post.category && (
                          <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold ${categoryColors[post.category] ?? 'bg-gray-100 text-gray-700'}`}>
                            {post.category}
                          </div>
                        )}
                      </div>
                      <div className="pt-6 flex flex-col flex-grow">
                        <div className="flex items-center gap-4 text-gray-400 text-xs mb-4">
                          <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {post.date}</span>
                          {post.readTime && <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {post.readTime}</span>}
                        </div>
                        <h2 className="text-2xl font-display font-bold text-gray-900 mb-3 group-hover:text-[var(--color-pdp-green)] transition-colors leading-snug">
                          {post.title}
                        </h2>
                        {post.description && (
                          <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-2">{post.description}</p>
                        )}
                        <span className="inline-flex items-center justify-center w-fit min-w-36 rounded-lg bg-[var(--color-pdp-green)] px-5 py-3 text-sm font-semibold text-white group-hover:bg-[var(--color-pdp-red)] transition-colors mt-auto">
                          Read More <ArrowRight className="ml-1.5 w-4 h-4" />
                        </span>
                      </div>
                    </Link>
                  </motion.div>
                ))}
            </div>

            {totalPages > 1 && (
              <nav aria-label="Blog pagination" className="flex items-center justify-center gap-3 mt-16 pt-10 border-t border-gray-100">
                <button onClick={() => changePage(page - 1)} disabled={page === 1} aria-label="Previous page" className="w-11 h-11 rounded-xl border border-gray-200 inline-flex items-center justify-center text-gray-600 hover:border-[var(--color-pdp-green)] hover:text-[var(--color-pdp-green)] disabled:opacity-35 disabled:pointer-events-none transition-colors">
                  <ChevronLeft className="w-5 h-5" />
                </button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(pageNumber => (
                  <button key={pageNumber} onClick={() => changePage(pageNumber)} aria-current={page === pageNumber ? 'page' : undefined} className={`w-11 h-11 rounded-xl font-bold transition-colors ${page === pageNumber ? 'bg-[var(--color-pdp-green)] text-white shadow-md' : 'text-gray-600 hover:bg-green-50 hover:text-[var(--color-pdp-green)]'}`}>
                    {pageNumber}
                  </button>
                ))}
                <button onClick={() => changePage(page + 1)} disabled={page === totalPages} aria-label="Next page" className="w-11 h-11 rounded-xl border border-gray-200 inline-flex items-center justify-center text-gray-600 hover:border-[var(--color-pdp-green)] hover:text-[var(--color-pdp-green)] disabled:opacity-35 disabled:pointer-events-none transition-colors">
                  <ChevronRight className="w-5 h-5" />
                </button>
              </nav>
            )}
          </>
        )}
      </div>

    </div>
  );
}
