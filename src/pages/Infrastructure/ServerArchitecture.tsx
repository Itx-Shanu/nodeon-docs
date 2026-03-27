import { motion } from "framer-motion";

export default function ServerArchitecture() {
  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } as const },
  };

  const containerVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.2 } },
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
        Server Architecture
      </motion.h1>

      {/* Overview */}
      <motion.section className="mb-10 space-y-4" variants={sectionVariants}>
        <h2 className="text-2xl font-semibold">Overview</h2>
        <p>
          Nodes On uses a distributed server architecture specifically optimized for blockchain
          validator operations. The server infrastructure is designed to support high-performance
          computing environments required by validator nodes.
        </p>
        <p>
          Each validator node operates on dedicated infrastructure that maintains consistent
          communication with blockchain networks while ensuring reliable uptime.
        </p>
      </motion.section>

      {/* Infrastructure Design */}
      <motion.section className="mb-10 space-y-4" variants={sectionVariants}>
        <h2 className="text-2xl font-semibold">Infrastructure Design</h2>
        <p>
          Validator nodes require several technical components in order to operate correctly. Nodes
          On server environments are configured to support these components.
        </p>
        <p>Server architecture includes:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Dedicated validator server environments</li>
          <li>Optimized blockchain node configurations</li>
          <li>Network synchronization systems</li>
          <li>Secure infrastructure isolation</li>
        </ul>
        <p>
          These systems work together to maintain stable validator participation within blockchain
          networks.
        </p>
      </motion.section>

      {/* Hardware Optimization */}
      <motion.section className="space-y-4" variants={sectionVariants}>
        <h2 className="text-2xl font-semibold">Hardware Optimization</h2>
        <p>
          Validator nodes often require specialized hardware resources to maintain network
          synchronization and process transactions efficiently.
        </p>
        <p>Nodes On servers are optimized using:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>High-performance CPU environments</li>
          <li>Fast SSD storage systems</li>
          <li>Optimized memory allocation</li>
          <li>High-bandwidth network connectivity</li>
        </ul>
        <p>
          These hardware optimizations ensure that validator nodes remain synchronized with
          blockchain networks.
        </p>
      </motion.section>
    </motion.div>
  );
}