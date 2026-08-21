import { motion } from 'framer-motion';
import { ArrowRight, Calendar, CheckCircle2, Clock3, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../data/mockData';

const fallbackImage = '/src/assets/hero-poster.png';

export default function Projects() {
	const [featuredProject, ...supportingProjects] = PROJECTS;

	return (
		<div className="bg-white min-h-screen">
			<header className="container mx-auto px-6 max-w-6xl pt-16 pb-16 text-center">
				<div className="max-w-3xl mx-auto">
					<span className="inline-block px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider bg-green-100 text-green-700 mb-6">Impact Projects</span>
					<h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 leading-tight mb-6">Turning commitment into visible change.</h1>
					<p className="text-xl text-gray-600 leading-relaxed">Explore the programmes and partnerships helping communities across Kaduna build healthier, more skilled, and more resilient futures.</p>
				</div>
			</header>

			<main>
				<section className="container mx-auto px-6 max-w-6xl mb-20">
					<motion.article
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						className="grid lg:grid-cols-12 bg-gray-50 border border-gray-100 rounded-[2rem] overflow-hidden shadow-sm"
					>
						<div className="lg:col-span-7 aspect-[4/3] lg:aspect-auto min-h-[360px] relative overflow-hidden group">
							<img
								src={featuredProject.image}
								onError={(event) => { event.currentTarget.src = fallbackImage; }}
								alt={featuredProject.title}
								className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
							<span className="absolute top-6 left-6 px-4 py-1.5 rounded-full bg-orange-100 text-orange-700 text-xs font-bold uppercase tracking-wider">Featured Project</span>
							<span className="absolute bottom-6 left-6 text-white text-sm font-semibold">{featuredProject.category}</span>
						</div>
						<div className="lg:col-span-5 p-8 md:p-10 flex flex-col justify-center">
							<div className="flex items-center gap-2 text-sm text-[var(--color-pdp-green)] font-semibold mb-5">
								<CheckCircle2 className="w-4 h-4" /> {featuredProject.status}
							</div>
							<h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 leading-tight mb-5">{featuredProject.title}</h2>
							<p className="text-gray-600 text-lg leading-relaxed mb-7">{featuredProject.description}</p>
							<div className="flex flex-wrap gap-x-5 gap-y-3 text-sm text-gray-500 border-t border-gray-200 pt-5">
								<span className="inline-flex items-center gap-2"><MapPin className="w-4 h-4 text-[var(--color-pdp-green)]" />{featuredProject.location}</span>
								<span className="inline-flex items-center gap-2"><Calendar className="w-4 h-4 text-[var(--color-pdp-green)]" />{featuredProject.date}</span>
							</div>
						</div>
					</motion.article>
				</section>

				<section className="bg-gray-50 border-y border-gray-100 py-20">
					<div className="container mx-auto px-6 max-w-6xl">
						<div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-10">
							<div>
								<p className="text-xs uppercase tracking-widest text-[var(--color-pdp-green)] font-bold mb-3">More from the Impact Group</p>
								<h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900">Projects in motion</h2>
							</div>
							<p className="text-gray-600 max-w-md leading-relaxed">Each project is designed around a real need and delivered with local partners who understand the communities they serve.</p>
						</div>

						<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
							{supportingProjects.map((project, index) => (
								<motion.article
									key={project.id}
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ delay: index * 0.1 }}
									className="group bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow"
								>
									<div className="relative aspect-[16/9] overflow-hidden">
										<img
											src={project.image}
											onError={(event) => { event.currentTarget.src = fallbackImage; }}
											alt={project.title}
											className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
										/>
										<span className={`absolute top-5 left-5 px-3 py-1 rounded-full text-xs font-bold ${project.status === 'Ongoing' ? 'bg-blue-100 text-blue-700' : 'bg-green-100 text-green-700'}`}>{project.status}</span>
									</div>
									<div className="p-7">
										<div className="flex items-center gap-2 text-xs text-[var(--color-pdp-green)] font-bold uppercase tracking-wider mb-3"><span>{project.category}</span><span className="text-gray-300">/</span><span>{project.location}</span></div>
										<h3 className="text-2xl font-display font-bold text-gray-900 mb-3 group-hover:text-[var(--color-pdp-green)] transition-colors">{project.title}</h3>
										<p className="text-gray-600 leading-relaxed mb-6">{project.description}</p>
										<div className="flex items-center justify-between border-t border-gray-100 pt-5 text-sm text-gray-500">
											<span className="inline-flex items-center gap-2"><Calendar className="w-4 h-4" />{project.date}</span>
											<span className="inline-flex items-center text-[var(--color-pdp-green)] font-semibold">Read project <ArrowRight className="ml-1.5 w-4 h-4" /></span>
										</div>
									</div>
								</motion.article>
							))}
						</div>
					</div>
				</section>

				<section className="container mx-auto px-6 max-w-6xl py-20">
					<div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
						<div className="p-7 rounded-3xl bg-[var(--color-pdp-green)] text-white"><p className="text-4xl font-display font-bold mb-2">150+</p><p className="text-green-100 text-sm">Community projects completed</p></div>
						<div className="p-7 rounded-3xl bg-gray-50 border border-gray-100"><p className="text-4xl font-display font-bold text-[var(--color-pdp-red)] mb-2">50k</p><p className="text-gray-600 text-sm">Young people empowered</p></div>
						<div className="p-7 rounded-3xl bg-gray-50 border border-gray-100"><p className="text-4xl font-display font-bold text-gray-900 mb-2"><Clock3 className="inline-block w-8 h-8 text-[var(--color-pdp-green)]" /> 24/7</p><p className="text-gray-600 text-sm">Commitment to service</p></div>
					</div>
				</section>

				<section className="py-20 bg-[var(--color-pdp-green)]">
					<div className="container mx-auto px-6 text-center">
						<h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">Be part of the next chapter.</h2>
						<p className="text-green-100 text-lg mb-8 max-w-xl mx-auto">Join the Impact Group and help move ideas from community conversations into lasting action.</p>
						<Link to="/contact" className="inline-flex items-center bg-white text-[var(--color-pdp-green)] font-bold px-8 py-3 rounded-full hover:bg-green-50 transition-colors shadow-lg">Get Involved <ArrowRight className="ml-2 w-4 h-4" /></Link>
					</div>
				</section>
			</main>
		</div>
	);
}
