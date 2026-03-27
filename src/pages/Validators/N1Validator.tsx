import { motion } from "framer-motion";

export default function N1Validator() {
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
    show: { transition: { staggerChildren: 0.2 }  }
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
        N1 Validator
      </motion.h1>

      {/* Overview */}
      <motion.section className="mb-10 space-y-4" variants={sectionVariants}>
        <h2 className="text-2xl font-semibold">Overview</h2>
        <p>
          The N1 Validator is the foundational validator infrastructure package
          offered by Nodes On. It is designed for single-chain participation and
          provides a professionally managed validator environment for blockchain
          networks.
        </p>
        <p>
          This validator package enables participants to deploy and operate a
          validator node without managing server hardware or infrastructure.
        </p>
        <p>
          The N1 Validator is suitable for participants who wish to operate
          validator nodes within a single blockchain ecosystem while benefiting
          from managed infrastructure services.
        </p>
      </motion.section>

      {/* Supported Networks */}
      <motion.section className="mb-10 space-y-4" variants={sectionVariants}>
        <h2 className="text-2xl font-semibold">Supported Networks</h2>
        <p>
          N1 Validator nodes may be deployed on supported blockchain networks
          including:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Avalanche subnet validators</li>
          <li>Cosmos ecosystem validators</li>
        </ul>
        <p>
          These networks utilize proof-of-stake consensus mechanisms where
          validator nodes play a key role in transaction validation and network
          security.
        </p>
      </motion.section>

      {/* Infrastructure Features */}
      <motion.section className="mb-10 space-y-4" variants={sectionVariants}>
        <h2 className="text-2xl font-semibold">Infrastructure Features</h2>
        <p>
          The N1 Validator package includes several infrastructure features
          designed to ensure stable validator operations.
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Managed validator node deployment</li>
          <li>Dedicated server infrastructure</li>
          <li>Secure validator key environment</li>
          <li>Monitoring dashboard access</li>
          <li>Network synchronization management</li>
          <li>Security and infrastructure maintenance</li>
        </ul>
        <p>
          These features allow validator operators to participate in blockchain
          networks without the complexity of infrastructure management.
        </p>
      </motion.section>

      {/* Deployment Model */}
      <motion.section className="space-y-4" variants={sectionVariants}>
        <h2 className="text-2xl font-semibold">Deployment Model</h2>
        <p>
          Validator nodes deployed through the N1 package are configured to
          operate within a single blockchain network environment.
        </p>
        <p>
          This focused deployment structure allows the validator node to
          maintain stable network synchronization and consistent participation
          in consensus operations.
        </p>
      </motion.section>
    </motion.div>
  );
}