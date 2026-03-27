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

export default function MultiChainValidators() {
  return (
    <motion.div
      className="max-w-6xl mx-auto px-6 py-10 text-black"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Title */}
      <motion.h1
        variants={itemVariants}
        className="text-4xl font-bold mb-8"
      >
        Multi-Chain Validators
      </motion.h1>

      {/* Multi-Network Infrastructure */}
      <motion.section
        variants={itemVariants}
        className="mb-10 space-y-4"
      >
        <h2 className="text-2xl font-semibold">
          Multi-Network Infrastructure
        </h2>

        <motion.p variants={itemVariants}>
          Blockchain ecosystems are expanding rapidly, with multiple independent
          networks operating simultaneously. Nodes On infrastructure is designed
          to support validator operations across several blockchain networks.
        </motion.p>

        <motion.p variants={itemVariants}>
          This multi-chain capability enables participants to deploy validators
          across different ecosystems without managing separate infrastructure
          environments.
        </motion.p>

        <motion.p variants={itemVariants}>
          Supported networks may include:
        </motion.p>

        <motion.ul
          variants={containerVariants}
          className="list-disc pl-6 space-y-1"
        >
          {["Avalanche", "Cosmos", "Polygon"].map((item, index) => (
            <motion.li key={index} variants={itemVariants}>
              {item}
            </motion.li>
          ))}
        </motion.ul>

        <motion.p variants={itemVariants}>
          Multi-chain validator deployment allows participants to engage with
          different blockchain ecosystems through a unified infrastructure
          platform.
        </motion.p>
      </motion.section>

      {/* Infrastructure Flexibility */}
      <motion.section
        variants={itemVariants}
        className="space-y-4"
      >
        <h2 className="text-2xl font-semibold">
          Infrastructure Flexibility
        </h2>

        <motion.p variants={itemVariants}>
          Nodes On infrastructure is designed to adapt to the technical
          requirements of various blockchain networks.
        </motion.p>

        <motion.p variants={itemVariants}>
          Different networks may require specific node configurations, hardware
          resources, or synchronization protocols. The Nodes On platform
          provides infrastructure environments optimized for each supported
          network.
        </motion.p>

        <motion.p variants={itemVariants}>
          This flexibility enables seamless validator deployment across multiple
          blockchain ecosystems.
        </motion.p>
      </motion.section>
    </motion.div>
  );
}