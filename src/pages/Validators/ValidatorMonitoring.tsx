import { motion } from "framer-motion";

export default function ValidatorMonitoring() {
  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: "easeOut" }
    } as const
  };

  const containerVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.2 } }
  };

  return (
    <motion.div
      className="max-w-6xl mx-auto px-6 py-10 text-black"
      initial="hidden"
      animate="show"
      variants={containerVariants}
    >
      {/* Title */}
      <motion.h1 className="text-4xl font-bold mb-8" variants={sectionVariants}>
        Validator Monitoring
      </motion.h1>

      {/* Node Performance Tracking */}
      <motion.section className="mb-10 space-y-4" variants={sectionVariants}>
        <h2 className="text-2xl font-semibold">Node Performance Tracking</h2>
        <p>
          Nodes On provides monitoring tools designed to track validator performance across deployed networks.
        </p>
        <p>Monitoring systems observe several operational indicators including:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Validator uptime</li>
          <li>Node synchronization status</li>
          <li>Infrastructure performance</li>
          <li>Network connectivity health</li>
        </ul>
        <p>
          These systems help ensure that validator nodes remain operational and synchronized with the blockchain network.
        </p>
      </motion.section>

      {/* Infrastructure Alerts */}
      <motion.section className="space-y-4" variants={sectionVariants}>
        <h2 className="text-2xl font-semibold">Infrastructure Alerts</h2>
        <p>
          Automated alerts notify infrastructure operators if potential performance issues are detected.
        </p>
        <p>
          This allows the platform to respond quickly to infrastructure events and maintain validator stability.
        </p>
      </motion.section>
    </motion.div>
  );
}