import { motion } from "framer-motion";

export default function AutomatedAlertSystems() {
  // Parent container variants to stagger children
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // Individual item animation variants
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } as const },
  };

  return (
    <motion.div
      className="max-w-6xl text-2xl tracking-wide mx-auto px-6 py-10 text-black"
      initial="hidden"
      animate="show"
      variants={containerVariants}
    >
      {/* Title */}
      <motion.h1 className="text-4xl font-bold mb-8" variants={itemVariants}>
        Automated Alert Systems
      </motion.h1>

      {/* Content */}
      <motion.div className="space-y-5" variants={itemVariants}>
        <motion.p variants={itemVariants}>
          Nodes On monitoring architecture includes automated alert systems that notify
          infrastructure operators when potential issues are detected.
        </motion.p>

        <motion.p variants={itemVariants}>Alerts may be triggered by events such as:</motion.p>

        <motion.ul className="list-disc pl-6 space-y-1">
          <motion.li variants={itemVariants}>Validator node downtime</motion.li>
          <motion.li variants={itemVariants}>Synchronization delays</motion.li>
          <motion.li variants={itemVariants}>Abnormal infrastructure resource usage</motion.li>
        </motion.ul>

        <motion.p variants={itemVariants}>
          These alerts allow rapid response to infrastructure issues and help prevent disruptions
          to validator operations.
        </motion.p>
      </motion.div>
    </motion.div>
  );
}