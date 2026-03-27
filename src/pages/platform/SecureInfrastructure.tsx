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

export default function SecureInfrastructure() {
  return (
    <motion.div
      className="max-w-6xl text-2xl tracking-wide mx-auto px-6 py-10 text-black"
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
        Secure Infrastructure
      </motion.h1>

      {/* Security Framework */}
      <motion.section
        variants={itemVariants}
        className="mb-10 space-y-4"
      >
        <h2 className="text-2xl font-semibold">
          Security Framework
        </h2>

        <motion.p variants={itemVariants}>
          Security is a critical component of validator infrastructure.
          Validator nodes interact directly with blockchain networks and must
          operate within secure environments.
        </motion.p>

        <motion.p variants={itemVariants}>
          Nodes On incorporates multiple layers of security to protect validator
          operations and infrastructure systems.
        </motion.p>

        <motion.p variants={itemVariants}>
          Security mechanisms include:
        </motion.p>

        {/* Security List */}
        <motion.ul
          variants={containerVariants}
          className="list-disc pl-6 space-y-1"
        >
          {[
            "Encrypted communication channels",
            "Infrastructure isolation",
            "Secure validator key management",
            "Continuous monitoring of network activity",
          ].map((item, index) => (
            <motion.li
              key={index}
              variants={itemVariants}
              whileHover={{ x: 6 }} // subtle security feel
              transition={{ type: "spring", stiffness: 200 }}
            >
              {item}
            </motion.li>
          ))}
        </motion.ul>

        <motion.p variants={itemVariants}>
          These systems help ensure that validator infrastructure remains
          protected against unauthorized access and potential security threats.
        </motion.p>
      </motion.section>

      {/* Infrastructure Protection */}
      <motion.section
        variants={itemVariants}
        className="space-y-4"
      >
        <h2 className="text-2xl font-semibold">
          Infrastructure Protection
        </h2>

        <motion.p variants={itemVariants}>
          Security protocols are regularly updated to maintain infrastructure
          integrity and protect validator nodes from network vulnerabilities.
        </motion.p>

        <motion.p variants={itemVariants}>
          By combining infrastructure monitoring with secure network
          environments, Nodes On maintains a reliable security framework for
          validator operations.
        </motion.p>
      </motion.section>
    </motion.div>
  );
}