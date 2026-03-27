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

export default function NetworkParticipation() {
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
        Network Participation
      </motion.h1>

      {/* Validator Role */}
      <motion.section
        variants={itemVariants}
        className="mb-10 space-y-4"
      >
        <h2 className="text-2xl font-semibold">
          Validator Role in Blockchain Networks
        </h2>

        <motion.p variants={itemVariants}>
          Validator nodes are responsible for verifying transactions and
          maintaining consensus across blockchain networks.
        </motion.p>

        <motion.p variants={itemVariants}>
          Nodes deployed through Nodes On infrastructure participate in network
          operations according to the consensus mechanisms defined by each
          supported protocol.
        </motion.p>

        <motion.p variants={itemVariants}>
          Validator participation contributes to several important aspects of
          blockchain networks:
        </motion.p>

        {/* Interactive List */}
        <motion.ul
          variants={containerVariants}
          className="list-disc pl-6 space-y-1"
        >
          {[
            "Transaction validation",
            "Block production",
            "Consensus maintenance",
            "Network security",
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
          Nodes On infrastructure enables participants to contribute to these
          processes through professionally managed validator nodes.
        </motion.p>
      </motion.section>

      {/* Supporting Decentralization */}
      <motion.section
        variants={itemVariants}
        className="space-y-4"
      >
        <h2 className="text-2xl font-semibold">
          Supporting Decentralization
        </h2>

        <motion.p variants={itemVariants}>
          Decentralization is a fundamental principle of blockchain technology.
          Networks become more secure and resilient when validator nodes are
          distributed across multiple participants.
        </motion.p>

        <motion.p variants={itemVariants}>
          Nodes On supports network decentralization by enabling more
          participants to deploy validator nodes without requiring complex
          technical infrastructure.
        </motion.p>

        <motion.p variants={itemVariants}>
          This contributes to stronger and more secure blockchain ecosystems.
        </motion.p>
      </motion.section>
    </motion.div>
  );
}