import { motion } from 'framer-motion';
import { ArrowRight, Camera } from 'lucide-react';
import { Link } from 'react-router-dom';

const galleryItems = [
  { image: '/v1.jpeg', title: 'Visit to Senator Ahmed Mohammed Makarfi', category: 'Stakeholder Engagement' },
  { image: '/v2.jpeg', title: 'Leaders in conversation', category: 'Stakeholder Engagement' },
  { image: '/v3.jpeg', title: 'A warm Kaduna welcome', category: 'Stakeholder Engagement' },
  { image: '/w1.jpeg', title: 'Celebrating family and community', category: 'Community' },
  { image: '/w2.jpeg', title: 'Wedding gathering in Kaduna', category: 'Community' },
  { image: '/c1.jpeg', title: 'Standing with families in grief', category: 'Community Support' },
  { image: '/c2.jpeg', title: 'A message of solidarity', category: 'Community Support' },
  { image: '/car1.jpeg', title: 'Mobility empowerment presentation', category: 'Empowerment' },
  { image: '/car2.jpeg', title: 'Supporting productive livelihoods', category: 'Empowerment' },
  { image: '/1.jpeg', title: 'Listening to key stakeholders', category: 'Engagement' },
  { image: '/2.jpeg', title: 'Building shared understanding', category: 'Engagement' },
  { image: '/im1.jpeg', title: 'Community-centred impact', category: 'Empowerment' },
];

/**
 * ImpactGallery Page Component
 * Displays a curated collection of local photographs from programmes and engagements.
 */
export default function ImpactGallery() {
  return (
    <div className="min-h-screen bg-white">
      <header className="container mx-auto max-w-6xl px-6 py-20 text-center lg:py-28">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <span className="mb-5 inline-flex items-center gap-2 rounded-full bg-green-50 px-4 py-2 text-sm font-bold uppercase tracking-wider text-[var(--color-pdp-green)]"><Camera className="h-4 w-4" /> Impact Gallery</span>
          <h1 className="mx-auto mb-6 max-w-4xl text-4xl font-display font-bold leading-tight text-gray-900 md:text-6xl">Moments of service, connection, and community.</h1>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-gray-600">A visual record of the people, partnerships, celebrations, and engagements that give this work its meaning.</p>
        </motion.div>
      </header>

      <main className="container mx-auto max-w-7xl px-6 pb-20">
        <div className="grid auto-rows-[260px] gap-5 md:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((item, index) => (
            <motion.figure
              key={item.image}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (index % 3) * 0.08 }}
              className={`group relative overflow-hidden rounded-3xl bg-gray-100 ${index === 0 || index === 7 ? 'md:col-span-2 lg:col-span-2' : ''}`}
            >
              <img src={item.image} alt={item.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" loading={index > 2 ? 'lazy' : 'eager'} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/5 to-transparent" />
              <figcaption className="absolute inset-x-0 bottom-0 p-6 text-white">
                <p className="mb-2 text-xs font-bold uppercase tracking-widest text-green-200">{item.category}</p>
                <h2 className="text-xl font-display font-bold">{item.title}</h2>
              </figcaption>
            </motion.figure>
          ))}
        </div>

        <section className="mt-20 rounded-[2rem] bg-gray-900 p-10 text-center text-white md:p-14">
          <h2 className="mb-4 text-3xl font-display font-bold">Read the stories behind the photographs.</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-300">Visit the blog for updates from community engagements, empowerment activities, and special occasions.</p>
          <Link to="/events" className="inline-flex items-center rounded-full bg-white px-8 py-3 font-bold text-gray-900 transition-colors hover:bg-green-50">Explore the blog <ArrowRight className="ml-2 h-4 w-4" /></Link>
        </section>
      </main>
    </div>
  );
}
