import { motion } from "framer-motion";

export default function ValidatorRequirements() {
  // Animation variants for sections
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
      className="max-w-6xl text-2xl tracking-wide mx-auto px-6 py-10 text-black"
      initial="hidden"
      animate="show"
      variants={containerVariants}
    >
      {/* Title */}
      <motion.h1
        className="text-4xl font-bold mb-8"
        variants={sectionVariants}
      >
        Validator Requirements
      </motion.h1>

      {/* Technical Requirements */}
      <motion.section className="mb-10 space-y-4" variants={sectionVariants}>
        <h2 className="text-2xl font-semibold">Technical Requirements</h2>
        <p>
          Operating validator nodes within blockchain networks requires specific
          technical configurations. Nodes On infrastructure manages these
          technical requirements internally to simplify validator deployment.
        </p>
        <p>Typical validator requirements include:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>High uptime server infrastructure</li>
          <li>Stable internet connectivity</li>
          <li>Blockchain node synchronization</li>
          <li>Secure validator key management</li>
        </ul>
        <p>
          Nodes On infrastructure handles these requirements within managed
          server environments.
        </p>
      </motion.section>

      {/* Network Requirements */}
      <motion.section className="space-y-4" variants={sectionVariants}>
        <h2 className="text-2xl font-semibold">Network Requirements</h2>
        <p>
          Each supported blockchain network may have its own validator
          participation requirements.
        </p>
        <p>These requirements may include:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Minimum staking thresholds</li>
          <li>Validator identity registration</li>
          <li>Network synchronization parameters</li>
        </ul>
        <p>
          Nodes On infrastructure ensures validator nodes meet the technical
          requirements required for network participation.
        </p>
      </motion.section>
    </motion.div>
  );
}