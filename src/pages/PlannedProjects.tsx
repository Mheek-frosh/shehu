import { motion } from 'framer-motion';
import { ArrowRight, BriefcaseBusiness, GraduationCap, HeartPulse, Leaf, Lightbulb, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const plannedProjects = [
  { status: 'Proposed', title: 'Community Skills & Enterprise Hubs', description: 'Accessible spaces for vocational training, business support, mentorship, and digital skills development.', icon: BriefcaseBusiness },
  { status: 'Proposed', title: 'Youth Innovation Fellowship', description: 'A structured pathway for young people to develop practical solutions to challenges in their communities.', icon: Lightbulb },
  { status: 'Proposed', title: 'Primary Healthcare Support Programme', description: 'Targeted support for frontline facilities, preventive health education, and community outreach.', icon: HeartPulse },
  { status: 'Proposed', title: 'Next-Generation Farmer Network', description: 'Training, market connections, and cooperative support designed to help farmers grow sustainable enterprises.', icon: Leaf },
  { status: 'Proposed', title: 'School Readiness Initiative', description: 'Community partnerships focused on learning materials, safe classrooms, attendance, and foundational skills.', icon: GraduationCap },
  { status: 'Proposed', title: 'Community Leadership Forum', description: 'Regular listening sessions connecting citizens, local leaders, professionals, and development partners.', icon: Users },
];

/**
 * PlannedProjects Page Component
 * Introduces proposed initiatives and distinguishes them from completed work.
 */
export default function PlannedProjects() {
  return (
    <div className="min-h-screen bg-white">
      <header className="container mx-auto max-w-6xl px-6 py-20 lg:py-28">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-4xl">
          <span className="mb-4 block text-sm font-bold uppercase tracking-[0.2em] text-[var(--color-pdp-red)]">Planned projects</span>
          <h1 className="mb-6 text-4xl font-display font-bold leading-tight text-gray-900 md:text-6xl">Ideas designed to become practical community impact.</h1>
          <p className="max-w-3xl text-xl leading-relaxed text-gray-600">These proposed initiatives represent areas for future development, partnership, and consultation. Scope and delivery will be shaped by community needs and available resources.</p>
        </motion.div>
      </header>

      <main className="container mx-auto max-w-6xl px-6 pb-20">
        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {plannedProjects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.article key={project.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: (index % 3) * 0.1 }} className="rounded-3xl border border-gray-100 bg-gray-50 p-8">
                <div className="mb-7 flex items-start justify-between gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-[var(--color-pdp-green)] shadow-sm"><Icon className="h-7 w-7" /></div>
                  <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-amber-800">{project.status}</span>
                </div>
                <h2 className="mb-4 text-2xl font-display font-bold text-gray-900">{project.title}</h2>
                <p className="leading-relaxed text-gray-600">{project.description}</p>
              </motion.article>
            );
          })}
        </div>

        <section className="mt-20 rounded-[2rem] border border-green-100 bg-green-50 p-10 text-center md:p-14">
          <h2 className="mb-4 text-3xl font-display font-bold text-gray-900">Help shape what comes next.</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-gray-600">Community knowledge makes projects stronger. Share the needs, ideas, and partnerships that could make the greatest difference.</p>
          <Link to="/contact" className="inline-flex items-center rounded-full bg-[var(--color-pdp-green)] px-8 py-3 font-bold text-white transition-transform hover:scale-105">Share your ideas <ArrowRight className="ml-2 h-4 w-4" /></Link>
        </section>
      </main>
    </div>
  );
}
