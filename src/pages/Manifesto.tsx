import { motion } from 'framer-motion';
import { BookOpen, BriefcaseBusiness, Building2, GraduationCap, HeartPulse, Leaf, ShieldCheck, Wifi } from 'lucide-react';

const priorities = [
  { title: 'Education', description: 'Strengthen public schools, support teachers, expand practical skills, and improve access to learning in every community.', icon: GraduationCap },
  { title: 'Healthcare', description: 'Improve primary healthcare, maternal care, essential medicine access, and the reliability of community health facilities.', icon: HeartPulse },
  { title: 'Jobs & enterprise', description: 'Support small businesses, expand skills development, and create a friendlier environment for investment and job growth.', icon: BriefcaseBusiness },
  { title: 'Agriculture', description: 'Help farmers improve productivity through better inputs, extension support, storage, processing, and access to markets.', icon: Leaf },
  { title: 'Infrastructure', description: 'Prioritise roads, water, energy, and public facilities that connect communities and support local economic activity.', icon: Building2 },
  { title: 'Digital opportunity', description: 'Expand digital literacy, technology-enabled public services, and pathways into the modern economy for young people.', icon: Wifi },
  { title: 'Security & peace', description: 'Strengthen community cooperation, prevention, inclusion, and coordinated action that protects lives and livelihoods.', icon: ShieldCheck },
  { title: 'Accountable government', description: 'Promote transparent budgeting, responsible use of public resources, citizen participation, and measurable delivery.', icon: BookOpen },
];

/**
 * Manifesto Page Component
 * Summarizes the policy priorities guiding the campaign's development agenda.
 */
export default function Manifesto() {
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-gray-100 bg-gray-50">
        <div className="container mx-auto max-w-6xl px-6 py-20 text-center lg:py-28">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="mb-4 block text-sm font-bold uppercase tracking-[0.2em] text-[var(--color-pdp-green)]">Manifesto priorities</span>
            <h1 className="mx-auto mb-6 max-w-4xl text-4xl font-display font-bold leading-tight text-gray-900 md:text-6xl">Practical priorities for a stronger Kaduna.</h1>
            <p className="mx-auto max-w-3xl text-xl leading-relaxed text-gray-600">A people-centred agenda focused on the foundations every family, business, and community needs to thrive.</p>
          </motion.div>
        </div>
      </header>

      <main className="container mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {priorities.map((priority, index) => {
            const Icon = priority.icon;
            return (
              <motion.article key={priority.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: (index % 4) * 0.08 }} className="group rounded-3xl border border-gray-100 bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-green-50 text-[var(--color-pdp-green)] transition-colors group-hover:bg-[var(--color-pdp-green)] group-hover:text-white"><Icon className="h-7 w-7" /></div>
                <p className="mb-2 text-xs font-bold uppercase tracking-widest text-[var(--color-pdp-red)]">Priority {String(index + 1).padStart(2, '0')}</p>
                <h2 className="mb-3 text-xl font-display font-bold text-gray-900">{priority.title}</h2>
                <p className="leading-relaxed text-gray-600">{priority.description}</p>
              </motion.article>
            );
          })}
        </div>

        <section className="mt-20 grid overflow-hidden rounded-[2rem] bg-[var(--color-pdp-green-dark)] text-white lg:grid-cols-5">
          <div className="p-10 md:p-14 lg:col-span-3">
            <span className="mb-4 block text-sm font-bold uppercase tracking-widest text-green-200">A living agenda</span>
            <h2 className="mb-5 text-3xl font-display font-bold md:text-4xl">Built through listening and improved through participation.</h2>
            <p className="max-w-2xl text-lg leading-relaxed text-green-50">These priorities provide a clear direction. Continued engagement with citizens, professionals, traditional institutions, civil society, and the private sector will help translate them into detailed, responsible programmes.</p>
          </div>
          <div className="flex items-center justify-center bg-[var(--color-pdp-green)] p-10 lg:col-span-2">
            <BookOpen className="h-28 w-28 text-white/70" />
          </div>
        </section>
      </main>
    </div>
  );
}
