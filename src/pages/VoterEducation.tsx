import { motion } from 'framer-motion';
import { CheckCircle2, Eye, FileCheck2, ShieldAlert, Users, Vote } from 'lucide-react';

const phases = [
  {
    label: 'Before election day',
    title: 'Prepare with verified information',
    points: ['Confirm your voter status and polling information', 'Learn the ballot process from official guidance', 'Compare candidates and issues carefully', 'Plan your movement and arrive prepared'],
    icon: FileCheck2,
  },
  {
    label: 'At the polling unit',
    title: 'Participate peacefully and independently',
    points: ['Follow lawful instructions from election officials', 'Protect the secrecy of your vote', 'Reject intimidation, inducement, and violence', 'Be patient and respect other voters'],
    icon: Vote,
  },
  {
    label: 'After voting',
    title: 'Stay responsible and informed',
    points: ['Share only information you can verify', 'Use lawful channels to report concerns', 'Avoid inflammatory claims and rumours', 'Respect peaceful democratic processes'],
    icon: Users,
  },
];

/**
 * VoterEducation Page Component
 * Explains responsible participation before, during, and after election day.
 */
export default function VoterEducation() {
  return (
    <div className="min-h-screen bg-white">
      <header className="container mx-auto max-w-6xl px-6 py-20 text-center lg:py-28">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <span className="mb-5 inline-flex items-center gap-2 rounded-full bg-red-50 px-4 py-2 text-sm font-bold uppercase tracking-wider text-[var(--color-pdp-red)]"><Vote className="h-4 w-4" /> Voter Education</span>
          <h1 className="mx-auto mb-6 max-w-4xl text-4xl font-display font-bold leading-tight text-gray-900 md:text-6xl">An informed voter strengthens democracy.</h1>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-gray-600">Your vote is most powerful when it is informed, freely chosen, peacefully cast, and protected from manipulation.</p>
        </motion.div>
      </header>

      <main>
        <section className="container mx-auto max-w-6xl px-6 pb-20">
          <div className="grid gap-7 lg:grid-cols-3">
            {phases.map((phase, index) => {
              const Icon = phase.icon;
              return (
                <motion.article key={phase.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="rounded-[2rem] border border-gray-100 bg-gray-50 p-8">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--color-pdp-green)] text-white"><Icon className="h-7 w-7" /></div>
                  <p className="mb-2 text-xs font-bold uppercase tracking-widest text-[var(--color-pdp-red)]">{phase.label}</p>
                  <h2 className="mb-6 text-2xl font-display font-bold text-gray-900">{phase.title}</h2>
                  <ul className="space-y-4">
                    {phase.points.map(point => (
                      <li key={point} className="flex gap-3 text-gray-600"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[var(--color-pdp-green)]" /> <span>{point}</span></li>
                    ))}
                  </ul>
                </motion.article>
              );
            })}
          </div>
        </section>

        <section className="bg-gray-950 py-20 text-white">
          <div className="container mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-2 lg:items-center">
            <div>
              <ShieldAlert className="mb-6 h-10 w-10 text-red-400" />
              <h2 className="mb-5 text-3xl font-display font-bold md:text-4xl">Pause before you share.</h2>
              <p className="text-lg leading-relaxed text-gray-300">False information can discourage voters, create fear, or provoke conflict. A responsible citizen checks the source, date, context, and supporting evidence before forwarding any election-related claim.</p>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
              <p className="mb-5 text-sm font-bold uppercase tracking-widest text-green-300">Quick verification check</p>
              {['Is the source official or clearly identified?', 'Is the information current and complete?', 'Can another reliable source confirm it?', 'Could sharing it cause harm if it is false?'].map(question => (
                <div key={question} className="flex gap-4 border-b border-white/10 py-4 last:border-0">
                  <Eye className="mt-0.5 h-5 w-5 shrink-0 text-green-300" />
                  <p className="text-gray-200">{question}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="container mx-auto max-w-4xl px-6 py-20 text-center">
          <h2 className="mb-5 text-3xl font-display font-bold text-gray-900 md:text-4xl">Vote with conviction, not pressure.</h2>
          <p className="text-lg leading-relaxed text-gray-600">No one should threaten, bribe, deceive, or force you to support a candidate. Learn about the choices, decide for yourself, and participate peacefully.</p>
        </section>
      </main>
    </div>
  );
}
