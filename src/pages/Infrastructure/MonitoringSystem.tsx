import { motion } from "framer-motion";

export default function MonitoringSystem() {
  // Animation variant
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    }  as const
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-10 text-black">
      {/* Page Title */}
      <motion.h1
        className="text-4xl font-bold mb-8"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        Monitoring System
      </motion.h1>

      {/* Infrastructure Monitoring */}
      <motion.section
        className="mb-10 space-y-4"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-2xl font-semibold">Infrastructure Monitoring</h2>

        <p>
          Nodes On infrastructure includes continuous monitoring systems 
        </p>

        <p>
          Monitoring tools collect data related to validator operations and server
          performance.
        </p>

        <p>Infrastructure monitoring includes:</p>

        <ul className="list-disc pl-6 space-y-1">
          <li>validator uptime tracking</li>
          <li>node synchronization monitoring</li>
          <li>server performance metrics</li>
          <li>network connectivity health</li>
        </ul>

        <p>
          These monitoring systems provide real-time insights into validator
          infrastructure operations.
        </p>
      </motion.section>

      {/* Automated Alerts */}
      <motion.section
        className="space-y-4"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-2xl font-semibold">Automated Alerts</h2>

        <p>
          Automated alert systems notify infrastructure operators when potential
          issues are detected.
        </p>

        <p>Alert triggers may include:</p>

        <ul className="list-disc pl-6 space-y-1">
          <li>validator node downtime</li>
          <li>synchronization failures</li>
          <li>server resource overload</li>
        </ul>

        <p>
          These systems allow infrastructure teams to respond quickly to potential
          disruptions.
        </p>
      </motion.section>
    </div>
  );
}