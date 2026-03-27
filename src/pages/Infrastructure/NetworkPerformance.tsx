import { motion } from "framer-motion";

export default function NetworkPerformance() {
  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    } as const
  }; 

  return (
    <div className="max-w-6xl mx-auto px-6 py-10 text-black">
      {/* Title */}
      <motion.h1
        className="text-4xl font-bold mb-8"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        Network Performance
      </motion.h1>

      {/* Infrastructure Optimization */}
      <motion.section
        className="mb-10 space-y-4"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-2xl font-semibold">Infrastructure Optimization</h2>
        <p>
          Blockchain validator nodes must maintain stable connections with peer nodes within the
          network. Nodes On infrastructure includes performance optimization systems that maintain
          stable validator connectivity.
        </p>
        <p>Performance optimization focuses on:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Network latency reduction</li>
          <li>Blockchain synchronization speed</li>
          <li>Server response times</li>
          <li>Infrastructure resource management</li>
        </ul>
        <p>
          These optimizations help ensure that validator nodes remain synchronized with blockchain
          networks.
        </p>
      </motion.section>

      {/* Resource Allocation */}
      <motion.section
        className="space-y-4"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-2xl font-semibold">Resource Allocation</h2>
        <p>
          Validator nodes require consistent computing resources in order to process network
          transactions effectively.
        </p>
        <p>
          Nodes On dynamically allocates server resources to maintain stable infrastructure
          performance across all deployed validator nodes.
        </p>
        <p>
          This ensures that validator nodes maintain reliable operations even during periods of
          increased blockchain activity.
        </p>
      </motion.section>
    </div>
  );
}