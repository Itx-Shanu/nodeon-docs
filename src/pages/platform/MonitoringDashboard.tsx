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

export default function MonitoringDashboard() {
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
        Monitoring Dashboard
      </motion.h1>

      {/* Infrastructure Monitoring */}
      <motion.section
        variants={itemVariants}
        className="mb-10 space-y-4"
      >
        <h2 className="text-2xl font-semibold">
          Infrastructure Monitoring
        </h2>

        <motion.p variants={itemVariants}>
          Maintaining reliable validator performance requires continuous
          monitoring of infrastructure health and network connectivity.
        </motion.p>

        <motion.p variants={itemVariants}>
          Nodes On provides monitoring systems that track the operational
          status of validator nodes and infrastructure resources.
        </motion.p>

        <motion.p variants={itemVariants}>
          The monitoring dashboard provides insights into key operational
          metrics including:
        </motion.p>

        {/* Metrics List */}
        <motion.ul
          variants={containerVariants}
          className="list-disc pl-6 space-y-1"
        >
          {[
            "Validator uptime",
            "Node synchronization status",
            "Server resource utilization",
            "Network connectivity performance",
          ].map((item, index) => (
            <motion.li
              key={index}
              variants={itemVariants}
              whileHover={{ x: 5 }} // subtle interaction
              transition={{ type: "spring", stiffness: 200 }}
            >
              {item}
            </motion.li>
          ))}
        </motion.ul>

        <motion.p variants={itemVariants}>
          These monitoring systems allow infrastructure operators to maintain
          stable validator operations.
        </motion.p>
      </motion.section>

      {/* Performance Insights */}
      <motion.section
        variants={itemVariants}
        className="space-y-4"
      >
        <h2 className="text-2xl font-semibold">
          Performance Insights
        </h2>

        <motion.p variants={itemVariants}>
          Monitoring tools enable the platform to detect potential issues before
          they affect validator performance.
        </motion.p>

        <motion.p variants={itemVariants}>
          Automated alerts and infrastructure diagnostics help maintain
          consistent node synchronization with blockchain networks.
        </motion.p>

        <motion.p variants={itemVariants}>
          This proactive monitoring approach ensures reliable participation in
          decentralized ecosystems.
        </motion.p>
      </motion.section>
    </motion.div>
  );
}