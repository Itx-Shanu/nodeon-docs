import { motion } from "framer-motion";

export default function ValidatorSecurity() {
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
    <div className="max-w-6xl text-2xl tracking-wide mx-auto px-6 py-10 text-black">
      {/* Title */}
      <motion.h1
        className="text-4xl font-bold mb-8"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        Validator Security
      </motion.h1>

      {/* Security Architecture */}
      <motion.section
        className="mb-10 space-y-4"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-2xl font-semibold">Security Architecture</h2>
        <p>
          Security is one of the most important components of validator infrastructure.
          Validator nodes interact directly with blockchain networks and handle cryptographic
          operations that must remain secure.
        </p>
        <p>
          Nodes On implements a multi-layered security framework to protect infrastructure
          systems and validator environments.
        </p>
        <p>Security systems include:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Secure network communication</li>
          <li>Firewall-protected server environments</li>
          <li>Encrypted infrastructure connections</li>
          <li>Validator key protection mechanisms</li>
        </ul>
        <p>
          These systems help maintain a secure environment for validator node operations.
        </p>
      </motion.section>

      {/* Infrastructure Protection */}
      <motion.section
        className="space-y-4"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-2xl font-semibold">Infrastructure Protection</h2>
        <p>
          Continuous security monitoring ensures that infrastructure systems remain protected
          from unauthorized access or network vulnerabilities.
        </p>
        <p>
          Nodes On regularly updates security configurations and performs infrastructure audits
          to maintain platform integrity.
        </p>
      </motion.section>
    </div>
  );
}