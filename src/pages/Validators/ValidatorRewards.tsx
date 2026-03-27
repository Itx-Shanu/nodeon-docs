import { motion } from "framer-motion";

export default function ValidatorRewards() {
  // Section animation variants
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
      <motion.h1 className="text-4xl font-bold mb-8" variants={sectionVariants}>
        Validator Rewards
      </motion.h1>

      {/* Network Incentives */}
      <motion.section className="mb-10 space-y-4" variants={sectionVariants}>
        <h2 className="text-2xl font-semibold">Network Incentives</h2>
        <p>
          Validator nodes contribute to blockchain networks by validating transactions
          and maintaining consensus mechanisms.
        </p>
        <p>
          In many blockchain ecosystems, validator nodes receive network incentives
          for their participation. These incentives are typically distributed based on
          network activity and validator performance.
        </p>
        <p>Rewards may depend on several factors including:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Validator uptime</li>
          <li>Network participation</li>
          <li>Transaction validation activity</li>
        </ul>
      </motion.section>

      {/* Infrastructure Support */}
      <motion.section className="space-y-4" variants={sectionVariants}>
        <h2 className="text-2xl font-semibold">Infrastructure Support</h2>
        <p>
          Nodes On infrastructure ensures that validator nodes remain synchronized with
          blockchain networks so they can maintain consistent participation.
        </p>
        <p>
          Monitoring systems track validator performance to ensure infrastructure
          stability and reliable validator operations.
        </p>
      </motion.section>
    </motion.div>
  );
}