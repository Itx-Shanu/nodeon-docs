import { motion } from "framer-motion";

export default function ValidatorDeploymentWorkflow() {
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
      <motion.h1
        className="text-4xl font-bold mb-8"
        variants={sectionVariants}
      >
        Validator Deployment Workflow
      </motion.h1>

      {/* Deployment Process */}
      <motion.section className="space-y-6" variants={sectionVariants}>
        <h2 className="text-2xl font-semibold">Deployment Process</h2>
        <p>
          Validator deployment on the Nodes On platform follows a structured workflow
          designed to simplify infrastructure setup.
        </p>
        <p>The deployment process typically includes the following stages:</p>

        {/* Stage 1 */}
        <motion.div className="space-y-2" variants={sectionVariants}>
          <h3 className="text-2xl tracking-wide font-semibold">1. Infrastructure Selection</h3>
          <p>
            Participants select the validator infrastructure package suitable for their
            participation requirements. Available packages include:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>N1 Validator</li>
            <li>N2 Validator Plus</li>
          </ul>
        </motion.div>

        {/* Stage 2 */}
        <motion.div className="space-y-2" variants={sectionVariants}>
          <h3 className="text-2xl tracking-wide font-semibold">2. Network Selection</h3>
          <p>
            Participants choose the blockchain network where their validator node will be
            deployed. Network options may include Avalanche, Cosmos, or Polygon ecosystems.
          </p>
        </motion.div>

        {/* Stage 3 */}
        <motion.div className="space-y-2" variants={sectionVariants}>
          <h3 className="text-2xl tracking-wide font-semibold">3. Validator Configuration</h3>
          <p>
            Once the network and infrastructure package are selected, the validator node
            configuration process begins. Nodes On infrastructure automatically prepares
            server environments and initializes validator node synchronization.
          </p>
        </motion.div>

        {/* Stage 4 */}
        <motion.div className="space-y-2" variants={sectionVariants}>
          <h3 className="text-2xl tracking-wide font-semibold">4. Node Activation</h3>
          <p>
            After deployment is completed, the validator node connects to the blockchain
            network and begins participating in consensus operations. Monitoring systems
            begin tracking node performance and synchronization status.
          </p>
        </motion.div>
      </motion.section>
    </motion.div>
  );
}