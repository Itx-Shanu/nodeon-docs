import { motion } from "framer-motion";

export default function InfrastructureScalability() {
  // Animation variant
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    } as const
  };

  return (
    <div className="max-w-5xl text-2xl tracking-wide mx-auto px-6 py-10 text-black">
      
      {/* Title */}
      <motion.h1
        className="text-4xl font-bold mb-8"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        Infrastructure Scalability
      </motion.h1>

      {/* Scalable Infrastructure Design */}
      <motion.section
        className="mb-10 space-y-4"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-2xl font-semibold">Scalable Infrastructure Design</h2>

        <p>
          Nodes On infrastructure is designed to scale as blockchain ecosystems continue to expand.
        </p>

        <p>
          Scalable infrastructure allows additional validator nodes to be deployed without affecting
          platform performance.
        </p>

        <p>Infrastructure scalability is achieved through:</p>

        <ul className="list-disc pl-6 space-y-1">
          <li>Distributed server clusters</li>
          <li>Horizontal infrastructure scaling</li>
          <li>Automated infrastructure provisioning</li>
        </ul>

        <p>
          This scalable architecture ensures that the platform can support increasing validator
          participation.
        </p>
      </motion.section>

      {/* Network Expansion */}
      <motion.section
        className="space-y-4"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-2xl font-semibold">Network Expansion</h2>

        <p>
          As blockchain ecosystems evolve, Nodes On infrastructure can expand to support additional
          networks and infrastructure regions.
        </p>

        <p>
          The platform architecture allows new validator clusters to be integrated seamlessly.
        </p>

        <p>
          This ensures that Nodes On remains capable of supporting emerging blockchain ecosystems.
        </p>
      </motion.section>
    </div>
  );
}