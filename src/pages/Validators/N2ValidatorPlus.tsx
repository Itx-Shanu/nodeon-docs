import { motion } from "framer-motion";

export default function N2ValidatorPlus() {
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
      className="max-w-6xl mx-auto px-6 py-10 text-black"
      initial="hidden"
      animate="show"
      variants={containerVariants}
    >
      {/* Title */}
      <motion.h1
        className="text-4xl font-bold mb-8"
        variants={sectionVariants}
      >
        N2 Validator Plus
      </motion.h1>

      {/* Overview */}
      <motion.section className="mb-10 space-y-4" variants={sectionVariants}>
        <h2 className="text-2xl font-semibold">Overview</h2>
        <p>
          The <strong>N2 Validator Plus</strong> package is an advanced validator
          infrastructure solution offered by Nodes On, designed for multi-chain
          validator participation.
        </p>
        <p>
          Unlike the N1 Validator, which operates within a single blockchain
          network, N2 Validator Plus enables deployment across multiple blockchain
          ecosystems simultaneously, allowing participants to diversify their
          validator operations.
        </p>
        <p>
          This package is ideal for users seeking broader exposure, scalability,
          and enhanced infrastructure capabilities in blockchain validation.
        </p>
      </motion.section>

      {/* Multi-Chain Deployment */}
      <motion.section className="mb-10 space-y-4" variants={sectionVariants}>
        <h2 className="text-2xl font-semibold">Multi-Chain Deployment</h2>
        <p>
          The N2 Validator Plus package supports validator deployment across
          multiple blockchain networks within a unified infrastructure environment.
        </p>
        <p>Supported combinations may include:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Avalanche + Cosmos</li>
          <li>Polygon + Cosmos</li>
        </ul>
        <p>
          This multi-chain capability allows validator operators to:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Participate in different ecosystems simultaneously</li>
          <li>Optimize staking opportunities across networks</li>
          <li>Reduce dependency on a single blockchain</li>
        </ul>
      </motion.section>

      {/* Advanced Infrastructure Features */}
      <motion.section className="mb-10 space-y-4" variants={sectionVariants}>
        <h2 className="text-2xl font-semibold">Advanced Infrastructure Features</h2>
        <p>N2 Validator Plus includes enhanced infrastructure features designed for high-performance validator operations:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>High-performance validator server environments</li>
          <li>Multi-chain node deployment capability</li>
          <li>Optimized computing resource allocation</li>
          <li>Priority infrastructure monitoring</li>
          <li>Enhanced security configurations</li>
        </ul>
        <p>
          These features ensure stable, secure, and efficient validator performance across multiple blockchain networks.
        </p>
      </motion.section>

      {/* Infrastructure Optimization */}
      <motion.section className="space-y-4" variants={sectionVariants}>
        <h2 className="text-2xl font-semibold">Infrastructure Optimization</h2>
        <p>
          Validator nodes deployed under the N2 package are optimized for multi-network participation.
        </p>
        <p>
          Infrastructure resources are dynamically allocated to:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Maintain consistent synchronization across networks</li>
          <li>Handle varying network loads efficiently</li>
          <li>Ensure uninterrupted validator performance</li>
        </ul>
        <p>
          This optimization ensures reliable validator operations, even during periods of high network activity or congestion.
        </p>
      </motion.section>
    </motion.div>
  );
}