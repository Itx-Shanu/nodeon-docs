import { motion } from "framer-motion";

export default function MonitoringSecurity() {
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
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" }  as const},
  };

  return (
    <motion.div
      className="max-w-6xl mx-auto px-4 py-10 text-black"
      initial="hidden"
      animate="show"
      variants={containerVariants}
    >
      <motion.h1
        className="text-3xl md:text-4xl font-semibold mb-6"
        variants={itemVariants}
      >
        Monitoring Security
      </motion.h1>

      <motion.p className="mb-4 leading-relaxed" variants={itemVariants}>
        Monitoring systems also contribute to infrastructure security by
        detecting unusual activity within server environments.
      </motion.p>

      <motion.p className="mb-4 leading-relaxed" variants={itemVariants}>
        Security monitoring tools analyze network activity and infrastructure
        logs to identify potential vulnerabilities or unauthorized access
        attempts.
      </motion.p>

      <motion.p className="leading-relaxed" variants={itemVariants}>
        These systems help maintain the security and integrity of validator
        infrastructure.
      </motion.p>
    </motion.div>
  );
}