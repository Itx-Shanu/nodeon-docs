import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 15,
    },
  },
};

export default function InfrastructureArchitecture() {
  return (
    <motion.div
      className="max-w-6xl mx-auto px-6 py-10 text-black"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {/* Title */}
      <motion.h1
        variants={itemVariants}
        className="text-4xl font-bold mb-8"
      >
        Infrastructure Architecture
      </motion.h1>

      {/* Platform Architecture */}
      <motion.section
        variants={itemVariants}
        className="mb-10 space-y-4"
      >
        <h2 className="text-2xl font-semibold">
          Platform Architecture
        </h2>

        <motion.p variants={itemVariants}>
          Nodes On infrastructure is built on a distributed architecture designed
          to support scalable validator deployment.
        </motion.p>

        <motion.p variants={itemVariants}>
          The platform architecture includes several core components.
        </motion.p>

        {/* Architecture List */}
        <motion.ul
          variants={containerVariants}
          className="list-disc pl-6 space-y-1"
        >
          {[
            "Distributed validator clusters",
            "Multi-region hosting environments",
            "Infrastructure monitoring systems",
            "Secure network connectivity",
          ].map((item, index) => (
            <motion.li
              key={index}
              variants={itemVariants}
              whileHover={{ x: 6, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              {item}
            </motion.li>
          ))}
        </motion.ul>

        <motion.p variants={itemVariants}>
          This architecture ensures that validator nodes remain synchronized with
          blockchain networks and maintain stable network participation.
        </motion.p>
      </motion.section>

      {/* Scalability */}
      <motion.section
        variants={itemVariants}
        className="space-y-4"
      >
        <h2 className="text-2xl font-semibold">
          Scalability
        </h2>

        <motion.p variants={itemVariants}>
          The Nodes On platform is designed to scale as blockchain networks
          continue to expand.
        </motion.p>

        <motion.p variants={itemVariants}>
          Infrastructure clusters can be extended to support additional validator
          nodes while maintaining performance standards.
        </motion.p>

        <motion.p variants={itemVariants}>
          This scalable architecture ensures that Nodes On can support the
          growing demand for blockchain infrastructure across multiple
          ecosystems.
        </motion.p>
      </motion.section>
    </motion.div>
  );
}