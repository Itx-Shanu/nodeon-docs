import { motion } from "framer-motion";

export default function MultiRegionHosting() {
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
      className="max-w-6xl text-2xl tracking-wide mx-auto px-6 py-10 text-black"
      initial="hidden"
      animate="show"
      variants={containerVariants}
    >
      {/* Title */}
      <motion.h1 className="text-4xl font-bold mb-8" variants={sectionVariants}>
        Multi-Region Hosting
      </motion.h1>

      {/* Global Infrastructure Deployment */}
      <motion.section className="mb-10 space-y-4" variants={sectionVariants}>
        <h2 className="text-2xl font-semibold">
          Global Infrastructure Deployment
        </h2>
        <p>
          Nodes On infrastructure operates across multiple geographic regions to ensure reliable
          validator connectivity. Hosting infrastructure across multiple regions reduces the risk
          of localized infrastructure failures.
        </p>
        <p>
          Multi-region hosting helps maintain consistent network synchronization and improves
          overall infrastructure resilience.
        </p>
        <p>Infrastructure regions may include:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>North America</li>
          <li>Europe</li>
          <li>Asia-Pacific</li>
        </ul>
        <p>
          This distributed infrastructure model ensures that validator nodes maintain stable
          connections with blockchain networks.
        </p>
      </motion.section>

      {/* Reliability Benefits */}
      <motion.section className="space-y-4" variants={sectionVariants}>
        <h2 className="text-2xl font-semibold">Reliability Benefits</h2>
        <p>
          Hosting infrastructure across multiple regions provides several advantages.
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Improved validator uptime</li>
          <li>Reduced network latency</li>
          <li>Improved infrastructure redundancy</li>
          <li>Global network accessibility</li>
        </ul>
        <p>
          This architecture allows Nodes On to maintain stable validator operations even during
          infrastructure disruptions.
        </p>
      </motion.section>
    </motion.div>
  );
}