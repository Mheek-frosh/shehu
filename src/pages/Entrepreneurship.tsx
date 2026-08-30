import { motion } from 'framer-motion';
import { ArrowRight, BarChart3, BriefcaseBusiness, HandCoins, Lightbulb, Network, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';

const supportAreas = [
  { title: 'Practical skills', description: 'Training pathways linked to real services, trades, technology, and local market demand.', icon: Wrench },
  { title: 'Business knowledge', description: 'Simple guidance on planning, pricing, bookkeeping, customer service, and responsible growth.', icon: BarChart3 },
  { title: 'Mentorship', description: 'Connections with experienced entrepreneurs who can offer perspective, accountability, and encouragement.', icon: Network },
  { title: 'Access to opportunity', description: 'Better visibility for funding, partnerships, markets, and programmes suited to each stage of business.', icon: HandCoins },
];

/**
 * Entrepreneurship Page Component
 * Presents the enterprise-development approach and practical support pathways.
 */
export default function Entrepreneurship() {
  return (
    <div className="min-h-screen bg-white">
      <header className="relative overflow-hidden bg-gray-950 text-white">
        <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-[var(--color-pdp-green)]/30 blur-3xl" />
        <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-[var(--color-pdp-red)]/20 blur-3xl" />
        <div className="container relative mx-auto max-w-6xl px-6 py-24 lg:py-32">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-4xl">
            <span className="mb-5 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-green-300"><Lightbulb className="h-4 w-4" /> Entrepreneurship</span>
            <h1 className="mb-6 text-4xl font-display font-bold leading-tight md:text-6xl">Helping ideas grow into sustainable livelihoods.</h1>
            <p className="max-w-3xl text-xl leading-relaxed text-gray-300">Enterprise support should go beyond one-time assistance. It should help people build useful skills, understand their markets, manage resources, and create value that lasts.</p>
          </motion.div>
        </div>
      </header>

      <main>
        <section className="container mx-auto max-w-6xl px-6 py-20">
          <div className="mb-12 max-w-3xl">
            <span className="mb-3 block text-sm font-bold uppercase tracking-widest text-[var(--color-pdp-green)]">A practical support system</span>
            <h2 className="mb-5 text-3xl font-display font-bold text-gray-900 md:text-5xl">From first idea to stronger enterprise.</h2>
            <p className="text-lg leading-relaxed text-gray-600">Our approach focuses on the capabilities and relationships entrepreneurs need to move forward with confidence.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {supportAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <motion.article key={area.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} className="rounded-3xl border border-gray-100 bg-gray-50 p-7">
                  <Icon className="mb-6 h-8 w-8 text-[var(--color-pdp-green)]" />
                  <h3 className="mb-3 text-xl font-display font-bold text-gray-900">{area.title}</h3>
                  <p className="leading-relaxed text-gray-600">{area.description}</p>
                </motion.article>
              );
            })}
          </div>
        </section>

        <section className="bg-green-50 py-20">
          <div className="container mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-2 lg:items-center">
            <div>
              <BriefcaseBusiness className="mb-6 h-10 w-10 text-[var(--color-pdp-red)]" />
              <h2 className="mb-5 text-3xl font-display font-bold text-gray-900 md:text-4xl">Who this work is for</h2>
              <p className="mb-6 text-lg leading-relaxed text-gray-600">Young people exploring self-employment, women-led businesses, artisans, farmers, traders, creatives, and early-stage founders all face different barriers. Support must be flexible enough to meet people where they are.</p>
              <p className="text-lg leading-relaxed text-gray-600">Partnerships with professionals, financial institutions, training providers, and established businesses can help create stronger pathways from learning to earning.</p>
            </div>
            <div className="rounded-[2rem] bg-white p-8 shadow-xl shadow-green-900/5 md:p-10">
              <p className="mb-6 text-sm font-bold uppercase tracking-widest text-[var(--color-pdp-green)]">A simple growth path</p>
              {['Identify a useful skill or viable idea', 'Learn the market and build a clear plan', 'Test small, listen to customers, and improve', 'Keep records and manage resources carefully', 'Build networks and pursue responsible growth'].map((step, index) => (
                <div key={step} className="flex gap-4 border-b border-gray-100 py-4 last:border-0">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--color-pdp-green)] text-sm font-bold text-white">{index + 1}</span>
                  <p className="pt-1 font-medium text-gray-700">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="container mx-auto max-w-6xl px-6 py-20 text-center">
          <h2 className="mb-4 text-3xl font-display font-bold text-gray-900">Interested in future opportunities?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600">Connect with the Impact Group to share your interests, experience, or partnership ideas.</p>
          <Link to="/contact" className="inline-flex items-center rounded-full bg-[var(--color-pdp-green)] px-8 py-3 font-bold text-white transition-transform hover:scale-105">Get in touch <ArrowRight className="ml-2 h-4 w-4" /></Link>
        </section>
      </main>
    </div>
  );
}
