import { motion } from "framer-motion";

export default function MonitorDashboard() {
  // Parent container variants for staggering children
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // Individual item animation
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } as const },
  };

  return (
    <motion.div
      className="max-w-6xl text-2xl tracking-wide mx-auto px-4 py-10 text-black"
      initial="hidden"
      animate="show"
      variants={containerVariants}
    >
      {/* Title */}
      <motion.h1
        className="text-3xl md:text-4xl font-semibold mb-6"
        variants={itemVariants}
      >
        Monitoring Dashboard
      </motion.h1>

      {/* Paragraphs */}
      <motion.p className="mb-4 leading-relaxed" variants={itemVariants}>
        The Nodes On monitoring dashboard provides a centralized interface for
        tracking validator node activity and infrastructure health.
      </motion.p>

      <motion.p className="mb-4 leading-relaxed" variants={itemVariants}>
        The dashboard allows infrastructure operators to observe:
      </motion.p>

      {/* List */}
      <motion.ul className="list-disc pl-6 mb-4 space-y-2">
        <motion.li variants={itemVariants}>validator operational status</motion.li>
        <motion.li variants={itemVariants}>infrastructure performance metrics</motion.li>
        <motion.li variants={itemVariants}>network synchronization indicators</motion.li>
      </motion.ul>

      <motion.p className="leading-relaxed" variants={itemVariants}>
        This visibility allows proactive infrastructure management and helps
        maintain stable validator operations.
      </motion.p>
    </motion.div>
  );
}