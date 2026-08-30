import { motion } from 'framer-motion';
import { ArrowRight, Eye, HeartHandshake, Scale, ShieldCheck, Sparkles, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const values = [
  { title: 'People first', description: 'Public decisions should begin with the needs, dignity, and aspirations of citizens.', icon: Users },
  { title: 'Integrity', description: 'Leadership must be transparent, responsible, and worthy of the public trust.', icon: ShieldCheck },
  { title: 'Fair opportunity', description: 'Every community deserves a fair chance to learn, work, grow, and prosper.', icon: Scale },
  { title: 'Shared progress', description: 'Government, communities, and the private sector achieve more when they work together.', icon: HeartHandshake },
];

/**
 * VisionMission Page Component
 * Explains the campaign vision, mission, and core leadership values.
 */
export default function VisionMission() {
  return (
    <div className="min-h-screen bg-white">
      <header className="container mx-auto max-w-6xl px-6 py-20 text-center lg:py-28">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <span className="mb-5 inline-flex items-center gap-2 rounded-full bg-green-50 px-4 py-2 text-sm font-bold uppercase tracking-wider text-[var(--color-pdp-green)]"><Sparkles className="h-4 w-4" /> Vision &amp; Mission</span>
          <h1 className="mx-auto mb-6 max-w-4xl text-4xl font-display font-bold leading-tight text-gray-900 md:text-6xl">A Kaduna where opportunity reaches every community.</h1>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-gray-600">Our direction is rooted in responsive leadership, stronger public institutions, and practical development that improves lives today while preparing the state for tomorrow.</p>
        </motion.div>
      </header>

      <main>
        <section className="container mx-auto grid max-w-6xl gap-8 px-6 pb-20 md:grid-cols-2">
          <motion.article initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="rounded-[2rem] bg-[var(--color-pdp-green)] p-10 text-white md:p-12">
            <Eye className="mb-8 h-10 w-10 text-green-200" />
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-green-200">Our vision</p>
            <h2 className="mb-5 text-3xl font-display font-bold">A peaceful, productive, and inclusive Kaduna State.</h2>
            <p className="text-lg leading-relaxed text-green-50">We envision a state where quality education, healthcare, security, infrastructure, and economic opportunity are accessible to all—regardless of background or location.</p>
          </motion.article>
          <motion.article initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="rounded-[2rem] border border-gray-100 bg-gray-50 p-10 md:p-12">
            <HeartHandshake className="mb-8 h-10 w-10 text-[var(--color-pdp-red)]" />
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[var(--color-pdp-red)]">Our mission</p>
            <h2 className="mb-5 text-3xl font-display font-bold text-gray-900">Turn public trust into visible, lasting progress.</h2>
            <p className="text-lg leading-relaxed text-gray-600">Our mission is to listen carefully, govern transparently, invest responsibly, and build partnerships that deliver practical solutions for families and communities.</p>
          </motion.article>
        </section>

        <section className="bg-gray-50 py-20">
          <div className="container mx-auto max-w-6xl px-6">
            <div className="mb-12 max-w-2xl">
              <span className="mb-3 block text-sm font-bold uppercase tracking-widest text-[var(--color-pdp-green)]">What guides us</span>
              <h2 className="text-3xl font-display font-bold text-gray-900 md:text-5xl">Values behind every decision.</h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <motion.article key={value.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} className="rounded-3xl border border-gray-100 bg-white p-7 shadow-sm">
                    <Icon className="mb-6 h-7 w-7 text-[var(--color-pdp-green)]" />
                    <h3 className="mb-3 text-xl font-display font-bold text-gray-900">{value.title}</h3>
                    <p className="leading-relaxed text-gray-600">{value.description}</p>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="container mx-auto max-w-6xl px-6 py-20 text-center">
          <h2 className="mb-4 text-3xl font-display font-bold text-gray-900 md:text-4xl">See how the vision becomes action.</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600">Explore the priority areas designed to strengthen communities and create sustainable progress.</p>
          <Link to="/manifesto" className="inline-flex items-center rounded-full bg-[var(--color-pdp-green)] px-8 py-3 font-bold text-white transition-transform hover:scale-105">View priorities <ArrowRight className="ml-2 h-4 w-4" /></Link>
        </section>
      </main>
    </div>
  );
}
