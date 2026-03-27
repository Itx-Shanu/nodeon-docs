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

export default function DedicatedValidatorClusters() {
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
        Dedicated Validator Clusters
      </motion.h1>

      {/* Cluster Architecture */}
      <motion.section
        variants={itemVariants}
        className="mb-10 space-y-4"
      >
        <h2 className="text-2xl font-semibold">
          Cluster Architecture
        </h2>

        <motion.p variants={itemVariants}>
          Nodes On infrastructure uses dedicated validator clusters to ensure
          stable and reliable validator performance.
        </motion.p>

        <motion.p variants={itemVariants}>
          Validator clusters consist of specialized server environments designed
          specifically for blockchain node operations. These clusters are
          configured to maintain consistent uptime and provide optimized
          computing resources for validator participation.
        </motion.p>

        <motion.p variants={itemVariants}>
          Clusters also improve network stability by distributing infrastructure
          workloads across multiple servers.
        </motion.p>
      </motion.section>

      {/* Benefits */}
      <motion.section
        variants={itemVariants}
        className="space-y-4"
      >
        <h2 className="text-2xl font-semibold">
          Benefits of Cluster Infrastructure
        </h2>

        <motion.p variants={itemVariants}>
          Dedicated validator clusters provide several advantages.
        </motion.p>

        <motion.ul
          variants={containerVariants}
          className="list-disc pl-6 space-y-1"
        >
          {[
            "Improved network reliability",
            "Optimized hardware allocation",
            "Consistent validator performance",
            "Enhanced infrastructure scalability",
          ].map((item, index) => (
            <motion.li key={index} variants={itemVariants}>
              {item}
            </motion.li>
          ))}
        </motion.ul>

        <motion.p variants={itemVariants}>
          By distributing validator operations across cluster environments,
          Nodes On ensures stable network participation even during periods of
          high blockchain activity.
        </motion.p>
      </motion.section>
    </motion.div>
  );
}