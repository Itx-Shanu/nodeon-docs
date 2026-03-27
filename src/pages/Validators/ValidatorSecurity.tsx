import { motion } from "framer-motion";

export default function ValidatorSecurity() {
  // Animation variants
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
      <motion.h1 className="text-4xl font-bold mb-8" variants={sectionVariants}>
        Validator Security
      </motion.h1>

      {/* Infrastructure Security */}
      <motion.section className="mb-10 space-y-4" variants={sectionVariants}>
        <h2 className="text-2xl font-semibold">Infrastructure Security</h2>
        <p>
          Validator nodes require secure environments to protect blockchain operations and network participation.
        </p>
        <p>
          Nodes On infrastructure incorporates multiple security mechanisms designed to protect validator nodes.
        </p>
        <p>Security features include:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Encrypted network communication</li>
          <li>Infrastructure isolation</li>
          <li>Secure validator key storage</li>
          <li>Continuous security monitoring</li>
        </ul>
        <p>
          These systems ensure that validator nodes operate within a protected infrastructure environment.
        </p>
      </motion.section>

      {/* Network Integrity */}
      <motion.section className="space-y-4" variants={sectionVariants}>
        <h2 className="text-2xl font-semibold">Network Integrity</h2>
        <p>
          Secure validator infrastructure helps maintain the integrity of blockchain networks by ensuring that validator nodes operate safely and reliably.
        </p>
        <p>
          Nodes On security protocols are designed to protect validator operations while supporting stable network participation.
        </p>
      </motion.section>
    </motion.div>
  );
}