import { motion } from 'framer-motion';
import { ArrowRight, Handshake, Landmark, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const journey = [
  {
    title: 'A foundation in community service',
    description: 'The story begins with a commitment to listen to people, understand local challenges, and support practical efforts that improve everyday life.',
    icon: Users,
  },
  {
    title: 'Building partnerships for impact',
    description: 'Engagement with community leaders, professionals, young people, and public institutions has helped turn shared concerns into constructive action.',
    icon: Handshake,
  },
  {
    title: 'A wider vision for Kaduna',
    description: 'That experience now informs a people-centred approach to leadership focused on accountable government, opportunity, and progress across Kaduna State.',
    icon: Landmark,
  },
];

/**
 * History Page Component
 * Presents the public-service journey and the values shaping Shehu ABG's leadership.
 */
export default function History() {
  return (
    <div className="min-h-screen bg-white">
      <header className="relative overflow-hidden bg-[var(--color-pdp-green-dark)] text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-[var(--color-pdp-red)]/20" />
        <div className="container relative mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-2 lg:items-center lg:py-28">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="mb-5 block text-sm font-bold uppercase tracking-[0.2em] text-green-200">Political History</span>
            <h1 className="mb-6 text-4xl font-display font-bold leading-tight md:text-6xl">A journey shaped by service, listening, and community.</h1>
            <p className="max-w-xl text-lg leading-relaxed text-green-50">Shehu ABG's public journey reflects a consistent belief: leadership earns meaning when it stays close to the people and responds to their hopes with practical action.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.1 }} className="overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl">
            <img src="/assets/hero-poster.png" alt="Shehu ABG" className="aspect-[4/3] w-full object-cover object-top" />
          </motion.div>
        </div>
      </header>

      <main className="container mx-auto max-w-6xl px-6 py-20">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="mb-3 block text-sm font-bold uppercase tracking-widest text-[var(--color-pdp-green)]">The journey so far</span>
          <h2 className="mb-5 text-3xl font-display font-bold text-gray-900 md:text-5xl">Leadership grows through responsibility.</h2>
          <p className="text-lg leading-relaxed text-gray-600">From grassroots conversations to broader civic engagement, each stage has reinforced the importance of inclusion, integrity, and measurable impact.</p>
        </div>

        <div className="grid gap-7 md:grid-cols-3">
          {journey.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.article key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="rounded-3xl border border-gray-100 bg-gray-50 p-8">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--color-pdp-green)] text-white"><Icon className="h-6 w-6" /></div>
                <p className="mb-3 text-xs font-bold uppercase tracking-widest text-[var(--color-pdp-red)]">Chapter {index + 1}</p>
                <h3 className="mb-4 text-2xl font-display font-bold text-gray-900">{item.title}</h3>
                <p className="leading-relaxed text-gray-600">{item.description}</p>
              </motion.article>
            );
          })}
        </div>

        <section className="mt-20 rounded-[2rem] bg-gray-900 p-10 text-white md:p-14">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <h2 className="mb-4 text-3xl font-display font-bold">The next chapter is built together.</h2>
              <p className="leading-relaxed text-gray-300">Explore the vision for a more inclusive, productive, and accountable Kaduna State.</p>
            </div>
            <Link to="/vision" className="inline-flex w-fit items-center rounded-full bg-white px-7 py-3 font-bold text-gray-900 transition-colors hover:bg-green-50">Explore the vision <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </div>
        </section>
      </main>
    </div>
  );
}
