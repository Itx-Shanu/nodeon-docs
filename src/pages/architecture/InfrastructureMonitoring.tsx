import { motion } from "framer-motion";

export default function InfrastructureMonitoring() {
  // Variants for parent container (stagger children)
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      } 
    }  
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
        Infrastructure Monitoring Systems
      </motion.h1>

      {/* Content */}
      <motion.div className="space-y-5" variants={itemVariants}>
        <motion.p variants={itemVariants}>
          The monitoring architecture tracks several key operational metrics across the platform
          infrastructure.
        </motion.p>

        <motion.p variants={itemVariants}>These metrics include:</motion.p>

        <motion.ul className="list-disc pl-6 space-y-1">
          <motion.li variants={itemVariants}>Validator node uptime</motion.li>
          <motion.li variants={itemVariants}>Blockchain synchronization status</motion.li>
          <motion.li variants={itemVariants}>Server resource utilization</motion.li>
          <motion.li variants={itemVariants}>Network connectivity performance</motion.li>
          <motion.li variants={itemVariants}>Infrastructure health indicators</motion.li>
        </motion.ul>

        <motion.p variants={itemVariants}>
          Monitoring systems collect and analyze this data to ensure that validator nodes maintain
          stable network participation.
        </motion.p>
      </motion.div>
    </motion.div>
  );
}