import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, User, Tag, ArrowRight } from 'lucide-react';
import { BLOG_POSTS } from '../data/mockData';

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
 * BlogDetail Page Component
 * Renders an individual blog post based on the route slug parameter.
 * Also displays related posts from the same category.
 */
export default function BlogDetail() {
  const { slug } = useParams<{ slug: string }>();
  const post = BLOG_POSTS.find(p => p.slug === slug);

  if (!post) return <Navigate to="/events" replace />;

  const related = BLOG_POSTS.filter(p => p.slug !== slug && p.category === post.category).slice(0, 2);
  const others = BLOG_POSTS.filter(p => p.slug !== slug && p.category !== post.category).slice(0, 2 - related.length);
  const relatedPosts = [...related, ...others].slice(0, 3);

  const paragraphs = (post.body ?? post.description ?? '').split('\n\n').filter(Boolean);
  const gallery = 'gallery' in post && Array.isArray(post.gallery) ? post.gallery : [];
  const authorRole = 'authorRole' in post ? post.authorRole : undefined;

  return (
    <div className="bg-white min-h-screen">
      {/* Back Navigation */}
      <div className="container mx-auto px-6 pt-8 pb-4">
        <Link
          to="/events"
          className="inline-flex items-center text-gray-500 hover:text-[var(--color-pdp-green)] transition-colors font-medium text-sm"
        >
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Blog
        </Link>
      </div>

      {/* Article Header */}
      <article className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Category Badge */}
          {post.category && (
            <div className="mb-6">
              <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider ${categoryColors[post.category] ?? 'bg-gray-100 text-gray-700'}`}>
                {post.category}
              </span>
            </div>
          )}

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 leading-tight mb-8">
            {post.title}
          </h1>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-6 text-gray-500 text-sm pb-8 border-b border-gray-100 mb-10">
            {post.author && (
              <span className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-[var(--color-pdp-green)]/10 flex items-center justify-center">
                  <User className="w-4 h-4 text-[var(--color-pdp-green)]" />
                </div>
                {post.author}
              </span>
            )}
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" /> {post.date}
            </span>
            {post.readTime && (
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" /> {post.readTime}
              </span>
            )}
          </div>

          {/* Hero Image */}
          <div className="w-full aspect-[16/9] rounded-[2rem] overflow-hidden mb-12 shadow-md">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Body Content */}
          <div className="prose prose-lg max-w-none mb-12">
            {post.description && (
              <p className="text-xl text-gray-600 leading-relaxed font-medium border-l-4 border-[var(--color-pdp-green)] pl-6 mb-8 italic">
                {post.description}
              </p>
            )}
            {paragraphs.map((para, i) => (
              <p key={i} className="text-gray-700 leading-relaxed text-lg mb-6">
                {para}
              </p>
            ))}
          </div>

          {gallery.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-14" aria-label="Article photo gallery">
              {gallery.map((image, index) => (
                <figure key={image} className={`overflow-hidden rounded-2xl bg-gray-100 ${index === 0 ? 'md:col-span-2' : ''}`}>
                  <img src={image} alt={`Shehu ABG stakeholder engagement ${index + 2}`} className={`w-full object-cover ${index === 0 ? 'aspect-[3/2] md:aspect-[16/9]' : 'aspect-[3/2]'}`} loading="lazy" />
                </figure>
              ))}
            </div>
          )}

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap items-center gap-3 pt-8 border-t border-gray-100 mb-16">
              <Tag className="w-4 h-4 text-gray-400" />
              {post.tags.map(tag => (
                <span key={tag} className="px-4 py-1.5 bg-gray-100 text-gray-600 rounded-full text-sm font-medium hover:bg-[var(--color-pdp-green)]/10 hover:text-[var(--color-pdp-green)] transition-colors cursor-pointer">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </motion.div>
      </article>

      {/* Author Card */}
      <section className="container mx-auto px-6 max-w-4xl mb-20">
        <div className="bg-gray-50 border border-gray-100 rounded-3xl p-8 flex flex-col sm:flex-row gap-6 items-start">
          <div className="w-16 h-16 rounded-full bg-[var(--color-pdp-green)] flex items-center justify-center shrink-0 shadow-lg shadow-[var(--color-pdp-green)]/20">
            <User className="w-8 h-8 text-white" />
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-1">Written by</p>
            <h3 className="text-xl font-display font-bold text-gray-900 mb-1">{post.author ?? 'Shehu ABG Impact Team'}</h3>
            {authorRole && <p className="text-[var(--color-pdp-green)] font-semibold text-sm mb-3">{authorRole}</p>}
            <p className="text-gray-500 text-sm leading-relaxed">
              The Shehu ABG Impact Group communications team covers civic engagement, community projects, and governance initiatives across Kaduna State.
            </p>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="bg-gray-50 border-t border-gray-100 py-20">
          <div className="container mx-auto px-6">
            <div className="flex justify-between items-end mb-10">
              <h2 className="text-3xl font-display font-bold text-gray-900">More Articles</h2>
              <Link to="/events" className="hidden sm:flex items-center text-[var(--color-pdp-green)] font-semibold hover:text-[var(--color-pdp-red)] transition-colors text-sm">
                View all posts <ArrowRight className="ml-1.5 w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((rp, i) => (
                <motion.div
                  key={rp.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link to={`/blog/${rp.slug}`} className="group flex flex-col rounded-3xl overflow-hidden bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-shadow h-full">
                    <div className="relative overflow-hidden aspect-video">
                      <img src={rp.image} alt={rp.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                      {rp.category && (
                        <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold ${categoryColors[rp.category] ?? 'bg-gray-100 text-gray-700'}`}>
                          {rp.category}
                        </div>
                      )}
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <span className="text-xs text-gray-400 flex items-center gap-1.5 mb-3"><Calendar className="w-3.5 h-3.5" /> {rp.date}</span>
                      <h4 className="font-display font-bold text-gray-900 text-lg leading-snug mb-3 group-hover:text-[var(--color-pdp-green)] transition-colors flex-grow">
                        {rp.title}
                      </h4>
                      <span className="text-sm font-semibold text-[var(--color-pdp-green)] group-hover:text-[var(--color-pdp-red)] inline-flex items-center mt-auto transition-colors">
                        Read More <ArrowRight className="ml-1.5 w-3.5 h-3.5" />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

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
