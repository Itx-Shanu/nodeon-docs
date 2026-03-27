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

export default function ValidatorInfrastructure() {
  return (
    <motion.div
      className="max-w-6xl text-2xl tracking-wide mx-auto px-6 py-10 text-black"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Title */}
      <motion.h1
        variants={itemVariants}
        className="text-4xl font-bold mb-8"
      >
        Validator Infrastructure
      </motion.h1>

      {/* Overview */}
      <motion.section
        variants={itemVariants}
        className="mb-10 space-y-4"
      >
        <h2 className="text-2xl font-semibold">Overview</h2>

        <motion.p variants={itemVariants}>
          Validator infrastructure forms the foundation of blockchain networks.
          Validator nodes verify transactions, maintain consensus, and ensure the
          integrity of distributed ledgers.
        </motion.p>

        <motion.p variants={itemVariants}>
          Nodes On provides enterprise-grade validator infrastructure that allows
          participants to operate validator nodes without managing hardware,
          network environments, or server configurations.
        </motion.p>

        <motion.p variants={itemVariants}>
          The infrastructure is designed to deliver reliable uptime,
          high-performance computing resources, and secure network connectivity.
        </motion.p>
      </motion.section>

      {/* Infrastructure Components */}
      <motion.section
        variants={itemVariants}
        className="mb-10 space-y-4"
      >
        <h2 className="text-2xl font-semibold">
          Infrastructure Components
        </h2>

        <motion.p variants={itemVariants}>
          Nodes On validator infrastructure consists of several integrated
          components that work together to maintain stable node operations.
        </motion.p>

        <motion.p variants={itemVariants}>
          These components include:
        </motion.p>

        <motion.ul
          variants={containerVariants}
          className="list-disc pl-6 space-y-1"
        >
          {[
            "Dedicated validator servers optimized for blockchain operations",
            "Distributed infrastructure clusters designed for reliability",
            "Network connectivity systems ensuring stable synchronization",
            "Monitoring and alert systems that track node performance",
            "Secure environments for validator key management",
          ].map((item, index) => (
            <motion.li key={index} variants={itemVariants}>
              {item}
            </motion.li>
          ))}
        </motion.ul>

        <motion.p variants={itemVariants}>
          Together these elements create a stable infrastructure environment
          capable of supporting validator operations across multiple blockchain
          networks.
        </motion.p>
      </motion.section>

      {/* Operational Benefits */}
      <motion.section
        variants={itemVariants}
        className="space-y-4"
      >
        <h2 className="text-2xl font-semibold">
          Operational Benefits
        </h2>

        <motion.p variants={itemVariants}>
          Validator infrastructure deployed through Nodes On provides several
          operational advantages.
        </motion.p>

        <motion.p variants={itemVariants}>
          Participants gain access to professionally managed servers that are
          optimized for blockchain node operations. Infrastructure monitoring
          ensures consistent uptime and helps maintain network synchronization.
        </motion.p>

        <motion.p variants={itemVariants}>
          This approach allows validator operators to participate in
          decentralized networks while minimizing technical complexity.
        </motion.p>
      </motion.section>
    </motion.div>
  );
}