import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Contact() {
  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto px-6 max-w-5xl py-24">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider bg-green-100 text-[var(--color-pdp-green)] mb-4">
              Get in Touch
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 leading-tight mb-6">
              Connect With Us
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Whether you want to learn more about our initiatives or get involved, we would love to hear from you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {/* Address */}
            <div className="bg-gray-50 border border-gray-100 p-8 rounded-3xl text-center">
              <div className="w-14 h-14 mx-auto bg-white rounded-full flex items-center justify-center shadow-sm mb-6 text-[var(--color-pdp-green)]">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-display font-bold text-gray-900 mb-3">Office Address</h3>
              <p className="text-gray-600 leading-relaxed">
                Block 6, Flat 8<br />
                Lake Valencia Crescent<br />
                Maitama, Abuja
              </p>
            </div>

            {/* Email (Placeholder) */}
            <div className="bg-gray-50 border border-gray-100 p-8 rounded-3xl text-center">
              <div className="w-14 h-14 mx-auto bg-white rounded-full flex items-center justify-center shadow-sm mb-6 text-[var(--color-pdp-green)]">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-display font-bold text-gray-900 mb-3">Email Us</h3>
              <p className="text-gray-600 leading-relaxed">
                info@shehuabgimpact.org<br />
                contact@shehuabgimpact.org
              </p>
            </div>

            {/* Phone (Placeholder) */}
            <div className="bg-gray-50 border border-gray-100 p-8 rounded-3xl text-center">
              <div className="w-14 h-14 mx-auto bg-white rounded-full flex items-center justify-center shadow-sm mb-6 text-[var(--color-pdp-green)]">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-display font-bold text-gray-900 mb-3">Call Us</h3>
              <p className="text-gray-600 leading-relaxed">
                +234 800 000 0000<br />
                +234 800 000 0001
              </p>
            </div>
          </div>

          {/* Map */}
          <div className="w-full rounded-3xl overflow-hidden shadow-md border border-gray-100 h-[500px]">
            <iframe
              title="Office Location"
              src="https://maps.google.com/maps?q=Lake%20Valencia%20Crescent,%20Maitama,%20Abuja&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </motion.div>
      </div>

      {/* CTA Banner */}
      <section className="py-20 bg-[var(--color-pdp-green)]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">Be part of the next chapter.</h2>
          <p className="text-green-100 text-lg mb-8 max-w-xl mx-auto">
            Join the Impact Group and help move ideas from community conversations into lasting action.
          </p>
          <Link to="/contact" className="inline-block bg-white text-[var(--color-pdp-green)] font-bold px-8 py-3 rounded-full hover:bg-green-50 transition-colors shadow-lg">
            Get Involved
          </Link>
        </div>
      </section>
    </div>
  );
}
