import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Heart, MapPin, ShieldCheck, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const focusAreas = [
	{
		title: 'Community First',
		description: 'Every initiative starts with listening to citizens and understanding the realities of their communities.',
		icon: Users,
	},
	{
		title: 'Service with Integrity',
		description: 'We believe public service should be transparent, accountable, and measured by the lives it improves.',
		icon: ShieldCheck,
	},
	{
		title: 'A Future We Share',
		description: 'Progress is strongest when young people, families, leaders, and local institutions build it together.',
		icon: Heart,
	},
];

export default function About() {
	return (
		<div className="bg-white min-h-screen">
			<article className="container mx-auto px-6 max-w-4xl">
				<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
					<div className="mb-6 flex justify-center">
						<span className="inline-block px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider bg-green-100 text-green-700">Our Story</span>
					</div>

					<h1 className="text-center text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 leading-tight mb-8">
						Leadership rooted in service, built for lasting impact.
					</h1>

					<div className="flex flex-wrap justify-center items-center gap-6 text-gray-500 text-sm pb-8 border-b border-gray-100 mb-10">
						<span className="flex items-center gap-2"><div className="w-7 h-7 rounded-full bg-[var(--color-pdp-green)]/10 flex items-center justify-center"><Users className="w-4 h-4 text-[var(--color-pdp-green)]" /></div>Shehu ABG Impact Group</span>
						<span className="flex items-center gap-2"><Calendar className="w-4 h-4" /> Established 2024</span>
						<span className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Kaduna State</span>
					</div>

					<div className="w-full aspect-[16/9] rounded-[2rem] overflow-hidden mb-12 shadow-md">
						<img src="/src/assets/hero-poster.png" alt="Shehu ABG campaign vision for Kaduna State" className="w-full h-full object-cover object-top" />
					</div>

					<div className="prose prose-lg max-w-none mb-16">
						<p className="text-xl text-gray-600 leading-relaxed font-medium border-l-4 border-[var(--color-pdp-green)] pl-6 mb-8 italic">
							The Shehu ABG Impact Group exists to turn a shared hope for Kaduna into practical action: stronger communities, wider opportunity, and leadership that remains accountable to the people it serves.
						</p>
						<p className="text-gray-700 leading-relaxed text-lg mb-6">Shehu ABG is a community-focused platform built around a simple belief: meaningful change begins with people. From civic education and youth development to agricultural support and community outreach, our work is shaped by the needs we hear directly from citizens.</p>
						<p className="text-gray-700 leading-relaxed text-lg mb-6">We bring together volunteers, local leaders, professionals, educators, and families who want to contribute to a more capable and inclusive Kaduna. The Impact Group gives that shared energy a clear direction, connecting ideas to programmes and programmes to measurable outcomes.</p>
						<p className="text-gray-700 leading-relaxed text-lg mb-6">Our approach is practical and collaborative. We invest in people, support local solutions, and make room for honest feedback. Whether the work is helping a young person gain a digital skill, supporting a farmer with better tools, or helping a first-time voter understand their civic rights, every step matters.</p>
						<p className="text-gray-700 leading-relaxed text-lg">This is more than a campaign promise. It is an ongoing commitment to show up, listen carefully, and keep building with the communities at the heart of our story.</p>
					</div>
				</motion.div>
			</article>

			<section className="bg-gray-50 border-y border-gray-100 py-20">
				<div className="container mx-auto px-6 max-w-4xl">
					<div className="mb-10">
						<p className="text-xs uppercase tracking-widest text-[var(--color-pdp-green)] font-bold mb-3">What guides us</p>
						<h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900">The work behind the name</h2>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
						{focusAreas.map((area, index) => (
							<motion.div key={area.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm">
								<div className="w-11 h-11 rounded-xl bg-[var(--color-pdp-green)]/10 text-[var(--color-pdp-green)] flex items-center justify-center mb-6"><area.icon className="w-5 h-5" /></div>
								<h3 className="font-display font-bold text-gray-900 text-lg mb-3">{area.title}</h3>
								<p className="text-gray-600 leading-relaxed text-sm">{area.description}</p>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			<section className="container mx-auto px-6 max-w-4xl py-20">
				<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 bg-white border border-gray-100 rounded-3xl p-8 shadow-sm">
					<div><p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-2">Keep reading</p><h2 className="text-2xl font-display font-bold text-gray-900">See the vision in action.</h2></div>
					<Link to="/projects" className="inline-flex items-center shrink-0 text-[var(--color-pdp-green)] font-semibold hover:text-[var(--color-pdp-red)] transition-colors">Explore our projects <ArrowRight className="ml-2 w-4 h-4" /></Link>
				</div>
			</section>

			<section className="py-20 bg-[var(--color-pdp-green)]">
				<div className="container mx-auto px-6 text-center">
					<h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">Stay Connected with the Impact</h2>
					<p className="text-green-100 text-lg mb-8 max-w-xl mx-auto">Join the Shehu ABG Impact Group community and be the first to hear about our latest initiatives and civic programs.</p>
					<Link to="/contact" className="inline-flex items-center bg-white text-[var(--color-pdp-green)] font-bold px-8 py-3 rounded-full hover:bg-green-50 transition-colors shadow-lg">Get Involved <ArrowRight className="ml-2 w-4 h-4" /></Link>
				</div>
			</section>
		</div>
	);
}
