import { motion } from "framer-motion";

export default function InfrastructureModel() {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } as const },
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 text-black">
      {/* Title */}
      <motion.h1
        className="text-4xl font-bold mb-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        Infrastructure Model
      </motion.h1>

      {/* Overview */}
      <section className="mb-10 space-y-4">
        <motion.h2 className="text-2xl font-semibold" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          Overview
        </motion.h2>

        {[
          "Nodes On operates a validator infrastructure model designed to support blockchain networks through reliable, secure, and scalable node deployment.",
          "Modern blockchain networks rely on validator nodes to maintain consensus, validate transactions, and secure decentralized ecosystems. Running this infrastructure independently requires significant technical expertise, hardware resources, and continuous monitoring.",
          "Nodes On simplifies this process by providing professionally managed infrastructure that enables individuals, organizations, and blockchain projects to deploy validator nodes without managing complex server environments.",
          "Through optimized infrastructure architecture and distributed node hosting, Nodes On provides a stable foundation for validator operations across multiple blockchain networks.",
        ].map((text, index) => (
          <motion.p key={index} className="mb-2" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            {text}
          </motion.p>
        ))}
      </section>

      {/* Framework */}
      <section className="mb-10 space-y-4">
        <motion.h2 className="text-2xl font-semibold" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          Validator Infrastructure Framework
        </motion.h2>

        {[
          "The Nodes On infrastructure framework is designed around reliability, scalability, and operational efficiency.",
          "Validator nodes deployed through Nodes On operate within a secure infrastructure environment that includes dedicated servers, distributed network connectivity, and monitoring systems. This infrastructure model ensures that validator nodes maintain high uptime and consistent performance across supported networks.",
          "The framework includes several core components:",
        ].map((text, index) => (
          <motion.p key={index} className="mb-2" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            {text}
          </motion.p>
        ))}

        <motion.ul className="list-disc pl-6 space-y-1" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <li>Dedicated validator servers</li>
          <li>Distributed infrastructure clusters</li>
          <li>Multi-region hosting environments</li>
          <li>Monitoring and performance tracking systems</li>
          <li>Secure validator key management</li>
        </motion.ul>

        <motion.p className="mt-2" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          Together, these components create an infrastructure layer optimized for blockchain network participation.
        </motion.p>
      </section>

      {/* Deployment */}
      <section className="mb-10 space-y-4">
        <motion.h2 className="text-2xl font-semibold" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          Validator Deployment Model
        </motion.h2>

        {[
          "Nodes On provides a structured deployment process that allows validator nodes to be activated through managed infrastructure.",
          "The deployment process typically includes the following steps:",
        ].map((text, index) => (
          <motion.p key={index} className="mb-2" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            {text}
          </motion.p>
        ))}

        <motion.ol className="list-decimal pl-6 space-y-1" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <li>Selection of validator infrastructure package</li>
          <li>Network selection based on supported blockchain ecosystems</li>
          <li>Validator node deployment through Nodes On infrastructure</li>
          <li>Continuous monitoring and performance management</li>
        </motion.ol>

        <motion.p className="mt-2" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          This process removes the complexity traditionally associated with running validator infrastructure and ensures reliable participation in blockchain networks.
        </motion.p>
      </section>

      {/* Multi-chain */}
      <section className="mb-10 space-y-4">
        <motion.h2 className="text-2xl font-semibold" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          Multi-Chain Infrastructure
        </motion.h2>

        {[
          "Blockchain ecosystems continue to expand across multiple independent networks, each with its own consensus mechanism and validator requirements.",
          "Nodes On infrastructure is designed to support validator deployment across multiple blockchain networks simultaneously. This multi-chain approach enables participants to engage with different blockchain ecosystems through a unified infrastructure environment.",
          "Supported networks may include:",
        ].map((text, index) => (
          <motion.p key={index} className="mb-2" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            {text}
          </motion.p>
        ))}

        <motion.ul className="list-disc pl-6 space-y-1" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <li>Avalanche</li>
          <li>Cosmos</li>
          <li>Polygon</li>
        </motion.ul>

        <motion.p className="mt-2" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          Multi-chain infrastructure allows Nodes On to adapt to the evolving blockchain landscape while providing participants with broader network participation opportunities.
        </motion.p>
      </section>

      {/* Participation */}
      <section className="mb-10 space-y-4">
        <motion.h2 className="text-2xl font-semibold" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          Validator Participation Model
        </motion.h2>

        {[
          "Validator nodes deployed through Nodes On infrastructure participate in blockchain networks according to the consensus mechanisms defined by each protocol.",
          "These nodes contribute to network operations by validating transactions and supporting the decentralized consensus process.",
          "The validator participation model is designed to maintain reliable node operations while ensuring that infrastructure performance remains consistent across supported networks.",
          "Nodes On infrastructure continuously monitors validator performance to maintain stable network participation.",
        ].map((text, index) => (
          <motion.p key={index} className="mb-2" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            {text}
          </motion.p>
        ))}
      </section>

      {/* Security */}
      <section className="mb-10 space-y-4">
        <motion.h2 className="text-2xl font-semibold" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          Infrastructure Security
        </motion.h2>

        {[
          "Security is a fundamental component of the Nodes On infrastructure model.",
          "Validator nodes interact directly with blockchain networks and require secure environments to protect sensitive cryptographic operations. Nodes On infrastructure incorporates multiple security layers to ensure safe validator operations.",
          "These security mechanisms include:",
        ].map((text, index) => (
          <motion.p key={index} className="mb-2" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            {text}
          </motion.p>
        ))}

        <motion.ul className="list-disc pl-6 space-y-1" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <li>Infrastructure isolation</li>
          <li>Secure communication channels</li>
          <li>Validator key protection systems</li>
          <li>Continuous monitoring and alerts</li>
          <li>Automated maintenance updates</li>
        </motion.ul>

        <motion.p className="mt-2" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          These measures ensure that validator infrastructure remains secure while maintaining operational efficiency.
        </motion.p>
      </section>

      {/* Monitoring */}
      <section className="mb-10 space-y-4">
        <motion.h2 className="text-2xl font-semibold" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          Monitoring & Performance Management
        </motion.h2>

        {[
          "Maintaining consistent validator performance is critical for successful network participation.",
          "Nodes On provides monitoring systems that track key infrastructure and validator metrics.",
          "Monitoring includes:",
        ].map((text, index) => (
          <motion.p key={index} className="mb-2" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            {text}
          </motion.p>
        ))}

        <motion.ul className="list-disc pl-6 space-y-1" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <li>Validator uptime</li>
          <li>Node synchronization status</li>
          <li>Server resource usage</li>
          <li>Network connectivity</li>
          <li>Infrastructure health</li>
        </motion.ul>

        <motion.p className="mt-2" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          These systems allow the platform to detect potential issues and maintain optimal validator operations.
        </motion.p>
      </section>

      {/* Scalability */}
      <section className="mb-10 space-y-4">
        <motion.h2 className="text-2xl font-semibold" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          Infrastructure Scalability
        </motion.h2>

        {[
          "The Nodes On infrastructure model is designed to scale as blockchain networks and validator demand continue to grow.",
          "The platform architecture supports horizontal infrastructure expansion through additional validator clusters and distributed hosting environments. This scalability enables Nodes On to support increasing numbers of validator nodes while maintaining performance standards.",
          "Scalable infrastructure also ensures that the platform can integrate with additional blockchain networks in the future.",
        ].map((text, index) => (
          <motion.p key={index} className="mb-2" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            {text}
          </motion.p>
        ))}
      </section>

      {/* Ecosystem */}
      <section className="space-y-4">
        <motion.h2 className="text-2xl font-semibold" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          Supporting the Decentralized Ecosystem
        </motion.h2>

        {[
          "The Nodes On infrastructure model is designed to support the long-term development of decentralized networks.",
          "By providing reliable validator infrastructure, Nodes On contributes to the security and stability of blockchain ecosystems.",
          "The platform enables broader participation in decentralized networks while maintaining professional infrastructure standards.",
          "Through this infrastructure model, Nodes On aims to become a foundational layer supporting the growth of blockchain technology worldwide.",
        ].map((text, index) => (
          <motion.p key={index} className="mb-2" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            {text}
          </motion.p>
        ))}
      </section>
    </div>
  );
}