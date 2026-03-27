import { motion } from "framer-motion";

export default function InfrastructureReliability() {
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
    <div className="max-w-6xl text-2xl tracking-wide mx-auto px-6 py-10 text-black">
      
      {/* Title */}
      <motion.h1
        className="text-4xl font-bold mb-8"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        Infrastructure Reliability
      </motion.h1>

      {/* High Availability Systems */}
      <motion.section
        className="mb-10 space-y-4"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-2xl font-semibold">High Availability Systems</h2>

        <p>
          Validator nodes must remain online to maintain network participation. Nodes On
          infrastructure is designed with high availability mechanisms that reduce the risk of
          validator downtime.
        </p>

        <p>Infrastructure reliability mechanisms include:</p>

        <ul className="list-disc pl-6 space-y-1">
          <li>Redundant server environments</li>
          <li>Failover infrastructure systems</li>
          <li>Distributed validator clusters</li>
        </ul>

        <p>
          These systems help maintain continuous validator operations.
        </p>
      </motion.section>

      {/* Infrastructure Maintenance */}
      <motion.section
        className="space-y-4"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-2xl font-semibold">Infrastructure Maintenance</h2>

        <p>
          Regular infrastructure maintenance ensures that server environments remain optimized
          for validator performance.
        </p>

        <p>Maintenance procedures may include:</p>

        <ul className="list-disc pl-6 space-y-1">
          <li>Infrastructure security updates</li>
          <li>Server performance optimization</li>
          <li>Network connectivity improvements</li>
        </ul>

        <p>
          This proactive approach helps maintain stable infrastructure operations across the
          platform.
        </p>
      </motion.section>

    </div>
  );
}