import { motion } from "framer-motion";
import { certificatesData } from "../data/certificates";

const Certificates = () => {
  return (
    <section
      id="certificates"
      className="py-20 px-4 sm:px-6 lg:px-8 scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-50 mb-4">
            Certificates
          </h2>

          <div className="w-20 h-1 bg-accent-500 mx-auto rounded-full mb-4" />

          <p className="text-primary-300 max-w-2xl mx-auto">
            Certifications and courses I've completed to strengthen my
            technical skills and knowledge.
          </p>
        </motion.div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificatesData.map((certificate, index) => (
            <motion.div
              key={certificate.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="
                group
                relative
                bg-primary-800/60
                backdrop-blur-sm
                border border-primary-700
                rounded-2xl
                p-6
                shadow-lg
                hover:border-accent-500/60
                hover:shadow-accent-500/10
                transition-all
                duration-300
              "
            >
              {/* Certificate Icon */}
              <div
                className="
                  w-12 h-12
                  flex items-center justify-center
                  rounded-xl
                  bg-accent-500/10
                  border border-accent-500/20
                  text-accent-400
                  mb-5
                  text-xl
                "
              >
                🏆
              </div>

              {/* Certificate Name */}
              <h3
                className="
                  text-xl
                  font-bold
                  text-primary-50
                  mb-3
                  group-hover:text-accent-400
                  transition-colors
                "
              >
                {certificate.name}
              </h3>

              {/* Organization */}
              <p className="text-accent-400 font-medium mb-2">
                {certificate.organization}
              </p>

              {/* Date */}
              <p className="text-primary-400 text-sm mb-6">
                {certificate.date}
              </p>

              {/* View Certificate Button */}
              <a
                href={certificate.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  items-center
                  gap-2
                  px-4
                  py-2
                  rounded-lg
                  bg-accent-500
                  text-white
                  text-sm
                  font-semibold
                  hover:bg-accent-400
                  transition-all
                  duration-300
                "
              >
                View Certificate
                <span className="group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </a>

              {/* Decorative Glow */}
              <div
                className="
                  absolute
                  -z-10
                  inset-0
                  rounded-2xl
                  bg-accent-500/5
                  opacity-0
                  group-hover:opacity-100
                  blur-xl
                  transition-opacity
                  duration-300
                "
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;