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

/**
 * About Page Component
 * Displays the organization's story, mission, vision, and core focus areas.
 * Uses Framer Motion for scroll animations.
 */
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
						<span className="flex items-center gap-2"><div className="w-7 h-7 rounded-full bg-[var(--color-pdp-green)]/10 flex items-center justify-center"><Users className="w-4 h-4 text-[var(--color-pdp-green)]" /></div>Shehu ABG Impact Initiative</span>
						<span className="flex items-center gap-2"><Calendar className="w-4 h-4" /> Established 2024</span>
						<span className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Kaduna State</span>
					</div>

					<div className="mx-auto mb-12 max-w-2xl overflow-hidden rounded-[2rem] bg-gray-50 shadow-md">
						<img src="/pp.png" alt="Rt. Hon. Usman S. Bawa (Shehu ABG)" className="h-auto w-full" />
					</div>

					<div className="prose prose-lg max-w-none mb-16">
						<h2 className="text-3xl font-display font-bold text-gray-900 mb-6">About Us</h2>
						<p className="text-gray-700 leading-relaxed text-lg mb-6">Shehu ABG Impact Initiative is a nonprofit, community-focused organisation established to document, showcase and promote public awareness of the developmental contributions and social-impact initiatives associated with Rt. Hon. Usman S. Bawa (ABG).</p>
						<p className="text-gray-700 leading-relaxed text-lg mb-6">The Group provides a platform for citizens, stakeholders and members of the public to learn about his record of public service, community interventions and contributions to human development across Kaduna State.</p>
						<p className="text-gray-700 leading-relaxed text-lg mb-6">Our work is centred on impact, service, inclusion and accountability. We seek to bring together credible information about initiatives connected to education, digital inclusion, youth development, healthcare, access to basic amenities, economic empowerment and community development.</p>
						<p className="text-gray-700 leading-relaxed text-lg mb-6">Through research, documentation, storytelling and public engagement, the Group aims to preserve a clear record of interventions and their beneficiaries, while providing an accessible resource for anyone interested in understanding Hon. Usman S. Bawa’s contribution to Kaduna’s development.</p>
						<p className="text-gray-700 leading-relaxed text-lg mb-6">We believe that public service should be measured not only by positions held, but by the lives touched, opportunities created and communities strengthened.</p>
						<p className="text-xl text-gray-600 leading-relaxed font-medium border-l-4 border-[var(--color-pdp-green)] pl-6 mb-8 italic">Shehu ABG Impact Initiative — Documenting Impact. Celebrating Service. Preserving the Record.</p>

						<h2 className="text-3xl font-display font-bold text-gray-900 mb-6 mt-12">Vision</h2>
						<p className="text-gray-700 leading-relaxed text-lg mb-6">To become a credible and trusted platform for documenting public service, community impact and development initiatives associated with Hon. Usman S. Bawa, while promoting greater public awareness of the importance of accountable and people-centred leadership in Kaduna State.</p>

						<h2 className="text-3xl font-display font-bold text-gray-900 mb-6 mt-12">Mission</h2>
						<p className="text-gray-700 leading-relaxed text-lg mb-6">Our mission is to research, document, verify and communicate the impact of Hon. Usman S. Bawa’s public service and community interventions across Kaduna State.</p>
						<p className="text-gray-700 leading-relaxed text-lg mb-4">We seek to:</p>
						<ul className="list-disc pl-6 text-gray-700 leading-relaxed text-lg space-y-2 mb-6">
							<li>Document development initiatives and their outcomes.</li>
							<li>Preserve stories and experiences of beneficiaries and communities.</li>
							<li>Promote access to reliable information about public service and community development.</li>
							<li>Highlight initiatives relating to education, healthcare, digital inclusion, youth development, economic empowerment and grassroots interventions.</li>
							<li>Encourage constructive civic engagement and informed public discussion.</li>
							<li>Build an accessible digital archive of documented impact for present and future generations.</li>
						</ul>
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
					<p className="text-green-100 text-lg mb-8 max-w-xl mx-auto">Join the Shehu ABG Impact Initiative community and be the first to hear about our latest initiatives and civic programs.</p>
					<Link to="/contact" className="inline-flex items-center bg-white text-[var(--color-pdp-green)] font-bold px-8 py-3 rounded-full hover:bg-green-50 transition-colors shadow-lg">Get Involved <ArrowRight className="ml-2 w-4 h-4" /></Link>
				</div>
			</section>
		</div>
	);
}
