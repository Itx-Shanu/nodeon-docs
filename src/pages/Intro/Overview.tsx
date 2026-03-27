import { motion } from "framer-motion";

export default function Overview() {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } as const },
  };

  return (
    <div className="max-w-6xl text-2xl tracking-wide mx-auto px-6 py-10 text-black leading-relaxed">
      {/* Introduction */}
      <motion.h1
        className="text-3xl font-bold mb-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        Introduction to Nodes On
      </motion.h1>

      <motion.p className="mb-4" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        Nodes On is a blockchain infrastructure platform designed to simplify validator deployment,
        infrastructure management, and participation in decentralized networks. Modern blockchain
        ecosystems depend on validator nodes to maintain network consensus, verify transactions, and
        ensure the reliability of distributed systems. Operating such infrastructure traditionally requires
        extensive technical expertise, server management, network monitoring, and ongoing maintenance.
      </motion.p>

      <motion.p className="mb-4" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        Nodes On removes these complexities by providing a professionally managed validator
        infrastructure layer that allows participants to operate validator nodes without the need to
        configure or maintain underlying hardware or server environments.
      </motion.p>

      <motion.p className="mb-6" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        Through Nodes On, individuals, institutions, and blockchain projects can access secure, high-
        performance validator infrastructure capable of supporting multiple blockchain networks
        simultaneously. The platform is designed to make participation in decentralized ecosystems
        accessible while maintaining enterprise-grade reliability and performance.
      </motion.p>

      <motion.p className="mb-8" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        Nodes On focuses on building a scalable infrastructure network that powers blockchain consensus
        mechanisms and strengthens the global decentralized ecosystem.
      </motion.p>

      {/* Importance */}
      <motion.h2 className="text-2xl font-semibold mb-4" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        The Importance of Validator Infrastructure
      </motion.h2>

      <motion.p className="mb-4" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        Blockchain networks rely on validator nodes to process transactions and maintain the integrity of
        the distributed ledger. Validators are responsible for verifying new transactions, proposing new
        blocks, and participating in the network’s consensus mechanism.
      </motion.p>

      <motion.p className="mb-4" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        Without reliable validator infrastructure, blockchain networks cannot function efficiently or
        securely.
      </motion.p>

      <motion.p className="mb-4" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        Validators play several essential roles in decentralized systems:
      </motion.p>

      <motion.ul className="list-disc pl-6 mb-8 space-y-2" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        <li>validating transactions submitted to the network</li>
        <li>maintaining consensus across distributed nodes</li>
        <li>securing the blockchain against malicious activity</li>
        <li>participating in block production</li>
        <li>supporting network uptime and stability</li>
      </motion.ul>

      <motion.p className="mb-8" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        Running validator infrastructure typically involves complex processes such as server deployment,
        node configuration, network synchronization, and security management. Nodes On simplifies this
        entire process by providing infrastructure that is optimized for validator operations.
      </motion.p>

      {/* What Nodes On Provides */}
      <motion.h2 className="text-2xl font-semibold mb-4" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        What Nodes On Provides
      </motion.h2>

      <motion.p className="mb-4" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        Nodes On delivers a complete infrastructure environment that enables validator operations across
        multiple blockchain networks.
      </motion.p>

      <motion.p className="mb-4" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        The platform provides:
      </motion.p>

      <motion.ul className="list-disc pl-6 mb-8 space-y-2" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        <li>managed validator nodes</li>
        <li>dedicated infrastructure servers</li>
        <li>monitoring and performance tracking</li>
        <li>network connectivity optimization</li>
        <li>infrastructure security layers</li>
        <li>automated maintenance systems</li>
      </motion.ul>

      <motion.p className="mb-8" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        This infrastructure allows participants to operate validator nodes without needing deep technical
        knowledge of blockchain node management. Nodes On essentially acts as the infrastructure layer
        that connects participants to blockchain networks through secure validator deployment.
      </motion.p>

      {/* Platform Vision */}
      <motion.h2 className="text-2xl font-semibold mb-4" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        Platform Vision
      </motion.h2>

      <motion.p className="mb-4" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        The long-term vision of Nodes On is to build a global infrastructure network that supports
        decentralized systems across multiple blockchain ecosystems.
      </motion.p>

      <motion.p className="mb-4" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        As blockchain technology continues to expand, the demand for reliable validator infrastructure is
        increasing. Nodes On aims to address this demand by providing a scalable platform capable of
        supporting validator operations across multiple networks.
      </motion.p>

      <motion.p className="mb-4" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        The platform is designed to grow alongside the blockchain industry by expanding its infrastructure
        capabilities and integrating with emerging decentralized technologies.
      </motion.p>

      <motion.p className="mb-4" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        Nodes On focuses on enabling:
      </motion.p>

      <motion.ul className="list-disc pl-6 mb-8 space-y-2" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        <li>global validator infrastructure</li>
        <li>multi-chain network participation</li>
        <li>reliable node hosting services</li>
        <li>secure infrastructure operations</li>
      </motion.ul>

      <motion.p className="mb-8" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        This vision positions Nodes On as a foundational infrastructure provider within the decentralized
        ecosystem.
      </motion.p>

      {/* How it Works */}
      <motion.h2 className="text-2xl font-semibold mb-4" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        How Nodes On Works
      </motion.h2>

      <motion.p className="mb-4" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        Nodes On operates by deploying validator nodes on dedicated infrastructure servers designed for
        blockchain network participation.
      </motion.p>

      <motion.p className="mb-4" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        Participants interact with the platform by selecting validator infrastructure packages that determine
        how their nodes will be deployed.
      </motion.p>

      <motion.p className="mb-4" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        Once a validator node is activated through Nodes On infrastructure, it begins participating in the
        blockchain network according to the rules defined by that network’s consensus protocol.
      </motion.p>

      <motion.p className="mb-4" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        The process generally follows these steps:
      </motion.p>

      <motion.ol className="list-decimal pl-6 mb-8 space-y-2" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        <li>A participant selects a validator infrastructure option.</li>
        <li>Nodes On deploys the validator node through its infrastructure servers.</li>
        <li>The validator node connects to the blockchain network.</li>
        <li>The node participates in network consensus and transaction validation.</li>
        <li>The infrastructure continues to monitor and maintain node performance.</li>
      </motion.ol>

      {/* Multi-Chain */}
      <motion.h2 className="text-2xl font-semibold mb-4" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        Multi-Chain Validator Infrastructure
      </motion.h2>

      <motion.p className="mb-4" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        One of the defining features of Nodes On is its ability to support multiple blockchain networks.
        Modern blockchain ecosystems are fragmented across many independent networks, each with its
        own consensus rules and validator requirements.
      </motion.p>

      <motion.p className="mb-4" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        Nodes On infrastructure is designed to support multiple networks through a unified infrastructure
        environment.
      </motion.p>

      <motion.p className="mb-4" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        Examples of supported networks include:
      </motion.p>

      <motion.ul className="list-disc pl-6 mb-8 space-y-2" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        <li>Avalanche</li>
        <li>Cosmos</li>
        <li>Polygon</li>
      </motion.ul>

      <motion.p className="mb-8" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        Multi-chain infrastructure allows participants to engage with multiple blockchain ecosystems
        simultaneously while maintaining operational efficiency. This approach also allows Nodes On to
        adapt to the evolving blockchain landscape as new networks emerge.
      </motion.p>

      {/* Architecture */}
      <motion.h2 className="text-2xl font-semibold mb-4" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        Validator Infrastructure Architecture
      </motion.h2>

      <motion.p className="mb-4" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        The infrastructure architecture of Nodes On is built around reliability, scalability, and security.
        Validator nodes must operate continuously to maintain their role in the network. Any downtime or
        connectivity issues can impact validator performance.
      </motion.p>

      <motion.p className="mb-4" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        To ensure reliable operations, Nodes On infrastructure incorporates several architectural layers.
        These include:
      </motion.p>

      <motion.ul className="list-disc pl-6 mb-8 space-y-2" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        <li>dedicated validator clusters</li>
        <li>high-performance server infrastructure</li>
        <li>distributed hosting environments</li>
        <li>monitoring and alert systems</li>
        <li>secure network connectivity</li>
      </motion.ul>

      <motion.p className="mb-8" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        By combining these components, Nodes On provides a stable infrastructure environment optimized
        for blockchain validator operations.
      </motion.p>

      {/* Dedicated Validator Clusters */}
      <motion.h2 className="text-2xl font-semibold mb-4" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        Dedicated Validator Clusters
      </motion.h2>

      <motion.p className="mb-4" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        Nodes On infrastructure uses dedicated validator clusters to ensure consistent network
        participation. Validator clusters consist of specialized server environments designed specifically
        for blockchain node operations.
      </motion.p>

      <motion.p className="mb-4" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        These clusters provide:
      </motion.p>

      <motion.ul className="list-disc pl-6 mb-8 space-y-2" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        <li>high network availability</li>
        <li>optimized computing resources</li>
        <li>stable blockchain synchronization</li>
        <li>reliable transaction validation</li>
      </motion.ul>

      <motion.p className="mb-8" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        Dedicated clusters allow Nodes On to maintain consistent validator performance even during
        periods of increased network activity.
      </motion.p>

      {/* Security */}
      <motion.h2 className="text-2xl font-semibold mb-4" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        Security Framework
      </motion.h2>

      <motion.p className="mb-4" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        Security is one of the most critical aspects of validator infrastructure. Validator nodes must
        maintain secure communication with blockchain networks while protecting sensitive cryptographic
        keys.
      </motion.p>

      <motion.p className="mb-4" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        Nodes On incorporates several security mechanisms to protect validator operations. These include:
      </motion.p>

      <motion.ul className="list-disc pl-6 mb-8 space-y-2" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        <li>infrastructure isolation</li>
        <li>secure key management</li>
        <li>encrypted communication channels</li>
        <li>continuous network monitoring</li>
        <li>automated maintenance updates</li>
      </motion.ul>

      <motion.p className="mb-8" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        These security measures help ensure that validator nodes remain protected against unauthorized
        access and malicious attacks.
      </motion.p>

      {/* Monitoring */}
      <motion.h2 className="text-2xl font-semibold mb-4" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        Monitoring and Performance Management
      </motion.h2>

      <motion.p className="mb-4" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        Validator performance must be continuously monitored to ensure reliable participation in
        blockchain networks.
      </motion.p>

      <motion.p className="mb-4" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        Nodes On provides monitoring tools that track several important metrics related to validator
        operations.
      </motion.p>

      <motion.p className="mb-4" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        These metrics include:
      </motion.p>

      <motion.ul className="list-disc pl-6 mb-8 space-y-2" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        <li>validator uptime</li>
        <li>node synchronization status</li>
        <li>network connectivity</li>
        <li>resource utilization</li>
        <li>infrastructure health</li>
      </motion.ul>

      <motion.p className="mb-8" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        Monitoring systems allow Nodes On to detect potential issues early and maintain consistent
        validator performance.
      </motion.p>

      {/* Scalability */}
      <motion.h2 className="text-2xl font-semibold mb-4" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        Infrastructure Scalability
      </motion.h2>

      <motion.p className="mb-8" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        As blockchain networks grow, validator infrastructure must be able to scale accordingly. Nodes On
        infrastructure is designed to scale horizontally by expanding server resources and validator
        clusters. This scalability allows the platform to support increasing numbers of validator nodes
        without compromising performance. Scalable infrastructure also enables Nodes On to support
        additional blockchain networks in the future.
      </motion.p>
    </div>
  );
}