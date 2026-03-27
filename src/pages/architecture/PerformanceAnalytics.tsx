import { motion } from "framer-motion";

export default function PerformanceAnalytics() {
  // Variants for parent container to stagger children
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // Variants for individual elements
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
      <motion.h1
        className="text-4xl font-bold mb-8"
        variants={itemVariants}
      >
        Performance Analytics
      </motion.h1>

      {/* Content */}
      <motion.div className="space-y-5" variants={itemVariants}>
        <motion.p variants={itemVariants}>
          Monitoring tools provide performance analytics that allow infrastructure operators to
          evaluate validator performance and infrastructure efficiency.
        </motion.p>

        <motion.p variants={itemVariants}>Performance analytics may include:</motion.p>

        <motion.ul className="list-disc pl-6 space-y-1">
          <motion.li variants={itemVariants}>Validator performance trends</motion.li>
          <motion.li variants={itemVariants}>Infrastructure resource usage</motion.li>
          <motion.li variants={itemVariants}>Network connectivity metrics</motion.li>
        </motion.ul>

        <motion.p variants={itemVariants}>
          These insights allow the platform to optimize infrastructure performance and maintain
          reliable validator operations.
        </motion.p>
      </motion.div>
    </motion.div>
  );
}