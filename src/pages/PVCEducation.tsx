import { motion } from 'framer-motion';
import { BadgeCheck, CheckCircle2, HelpCircle, MapPin, Search, ShieldCheck } from 'lucide-react';

const pvcSteps = [
  { title: 'Confirm your registration status', description: 'Check that your voter information is correct through an official INEC channel before election day.', icon: Search },
  { title: 'Know your collection point', description: 'Use verified information to identify the appropriate location and any current collection instructions.', icon: MapPin },
  { title: 'Collect and keep your PVC safe', description: 'Review the details on your card, store it securely, and do not hand it to anyone for safekeeping.', icon: BadgeCheck },
  { title: 'Verify before you share', description: 'Election timelines and procedures can change. Confirm updates through INEC before forwarding them.', icon: ShieldCheck },
];

/**
 * PVCEducation Page Component
 * Provides general guidance on voter registration status and responsible PVC handling.
 */
export default function PVCEducation() {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-[var(--color-pdp-green)] text-white">
        <div className="container mx-auto max-w-6xl px-6 py-20 text-center lg:py-28">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="mb-5 block text-sm font-bold uppercase tracking-[0.2em] text-green-200">PVC Education</span>
            <h1 className="mx-auto mb-6 max-w-4xl text-4xl font-display font-bold leading-tight md:text-6xl">Your voter card. Your responsibility. Your voice.</h1>
            <p className="mx-auto max-w-3xl text-xl leading-relaxed text-green-50">Being ready begins with accurate information, safe handling of your Permanent Voter Card, and a clear understanding of where to get official guidance.</p>
          </motion.div>
        </div>
      </header>

      <main>
        <section className="container mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-7 md:grid-cols-2">
            {pvcSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.article key={step.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} className="flex gap-6 rounded-3xl border border-gray-100 bg-gray-50 p-8">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white text-[var(--color-pdp-green)] shadow-sm"><Icon className="h-7 w-7" /></div>
                  <div>
                    <p className="mb-2 text-xs font-bold uppercase tracking-widest text-[var(--color-pdp-red)]">Step {index + 1}</p>
                    <h2 className="mb-3 text-2xl font-display font-bold text-gray-900">{step.title}</h2>
                    <p className="leading-relaxed text-gray-600">{step.description}</p>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </section>

        <section className="bg-gray-50 py-20">
          <div className="container mx-auto grid max-w-6xl gap-8 px-6 md:grid-cols-2">
            <article className="rounded-[2rem] border border-green-100 bg-white p-9">
              <CheckCircle2 className="mb-6 h-9 w-9 text-[var(--color-pdp-green)]" />
              <h2 className="mb-5 text-3xl font-display font-bold text-gray-900">Good PVC habits</h2>
              <ul className="space-y-4 text-gray-600">
                <li>Keep your card clean, dry, and in a secure place.</li>
                <li>Check your personal details when you receive it.</li>
                <li>Rely on official sources for registration and collection guidance.</li>
                <li>Encourage family and neighbours to verify their own status early.</li>
              </ul>
            </article>
            <article className="rounded-[2rem] border border-red-100 bg-white p-9">
              <HelpCircle className="mb-6 h-9 w-9 text-[var(--color-pdp-red)]" />
              <h2 className="mb-5 text-3xl font-display font-bold text-gray-900">Remember</h2>
              <ul className="space-y-4 text-gray-600">
                <li>Your PVC is personal; do not sell, trade, or surrender it.</li>
                <li>Do not pay unofficial agents who promise special access.</li>
                <li>Do not rely on unverified social-media posts for deadlines or locations.</li>
                <li>Report suspected fraud or coercion to the appropriate authorities.</li>
              </ul>
            </article>
          </div>
        </section>

        <section className="container mx-auto max-w-4xl px-6 py-16 text-center">
          <p className="rounded-2xl bg-amber-50 p-6 leading-relaxed text-amber-900"><strong>Important:</strong> Registration periods, collection arrangements, and polling information may change. Always confirm current details directly through official INEC channels.</p>
        </section>
      </main>
    </div>
  );
}
