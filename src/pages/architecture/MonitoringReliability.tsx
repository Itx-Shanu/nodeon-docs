import { motion } from "framer-motion";

export default function MonitoringReliability() {
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
      className="max-w-4xl mx-auto px-4 py-10 text-black"
      initial="hidden"
      animate="show"
      variants={containerVariants}
    >
      {/* Title */}
      <motion.h1 className="text-3xl md:text-4xl font-semibold mb-6" variants={itemVariants}>
        Monitoring Reliability
      </motion.h1>

      {/* Paragraphs */}
      <motion.p className="mb-4 leading-relaxed" variants={itemVariants}>
        Continuous monitoring ensures that infrastructure systems remain
        operational and responsive.
      </motion.p>

      <motion.p className="mb-4 leading-relaxed" variants={itemVariants}>
        Monitoring architecture supports the long-term reliability of validator
        nodes by identifying performance issues early and enabling rapid
        corrective actions.
      </motion.p>

      <motion.p className="leading-relaxed" variants={itemVariants}>
        This approach ensures that Nodes On infrastructure maintains stable
        participation across supported blockchain networks.
      </motion.p>
    </motion.div>
  );
}