import { motion } from "framer-motion";

export default function UseCases() {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } as const },
  };

  return (
    <div className="max-w-6xl mx-auto text-2xl tracking-wide px-6 py-10 text-black leading-relaxed">
      {/* Use Case Heading */}
      <motion.h2
        className="text-2xl font-semibold mb-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        Use Case
      </motion.h2>

      {/* Intro */}
      <motion.p className="mb-4" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        Nodes On provides validator infrastructure designed to support a wide range of blockchain
        ecosystem participants. As decentralized networks continue to grow, the need for reliable
        infrastructure becomes increasingly important. Validator nodes are a critical component of
        blockchain networks, ensuring the integrity of transactions, maintaining consensus, and
        supporting network security.
      </motion.p>

      <motion.p className="mb-4" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        Nodes On enables individuals, organizations, and blockchain projects to access secure validator
        infrastructure without managing complex server environments. By providing professionally
        managed node deployment and infrastructure hosting, the platform allows participants to engage
        with blockchain networks efficiently and reliably.
      </motion.p>

      <motion.p className="mb-8" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        The following sections outline the primary use cases for Nodes On infrastructure.
      </motion.p>

      {/* Validator Participation */}
      <motion.h2 className="text-2xl font-semibold mb-4" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        Validator Participation
      </motion.h2>

      <motion.p className="mb-4" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        One of the core use cases of Nodes On is enabling validator participation across supported
        blockchain networks.
      </motion.p>

      <motion.p className="mb-4" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        Validators play an essential role in decentralized networks by verifying transactions, participating
        in block production, and maintaining the consensus mechanism that secures the blockchain.
      </motion.p>

      <motion.p className="mb-4" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        Operating a validator node typically requires advanced technical knowledge, infrastructure setup,
        network configuration, and continuous monitoring. Nodes On simplifies this process by providing a
        managed infrastructure environment that allows participants to deploy validator nodes through
        optimized systems.
      </motion.p>

      <motion.p className="mb-4" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        Participants can use Nodes On to join blockchain networks as validators and contribute to network
        operations without needing to maintain their own server infrastructure.
      </motion.p>

      <motion.p className="mb-8" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        Validator participation through Nodes On supports the decentralization of blockchain networks by
        increasing the number of reliable validator nodes operating within the ecosystem.
      </motion.p>

      {/* Blockchain Infrastructure */}
      <motion.h2 className="text-2xl font-semibold mb-4" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        Blockchain Network Infrastructure
      </motion.h2>

      <motion.p className="mb-4" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        Blockchain networks require a stable and distributed infrastructure layer in order to function
        efficiently. Nodes On provides infrastructure services that support blockchain networks by hosting
        validator nodes and maintaining reliable connectivity across the network.
      </motion.p>

      <motion.p className="mb-4" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        Projects launching new blockchain networks or maintaining existing ones require dependable
        infrastructure providers capable of supporting validator operations.
      </motion.p>

      <motion.p className="mb-4" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        Nodes On infrastructure enables blockchain projects to deploy validator nodes within a
        professionally managed environment designed for high uptime and secure connectivity.
      </motion.p>

      <motion.p className="mb-4" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        This infrastructure ensures that networks remain operational and that consensus mechanisms
        continue functioning reliably.
      </motion.p>

      <motion.p className="mb-8" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        By supporting validator infrastructure, Nodes On contributes to the long-term stability and growth
        of decentralized blockchain ecosystems.
      </motion.p>

      {/* Multi-chain */}
      <motion.h2 className="text-2xl font-semibold mb-4" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        Multi-Chain Validator Operations
      </motion.h2>

      <motion.p className="mb-4" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        Modern blockchain ecosystems consist of multiple independent networks, each with its own
        consensus mechanisms and validator requirements.
      </motion.p>

      <motion.p className="mb-4" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        Nodes On provides infrastructure designed to support validator operations across multiple
        blockchain networks simultaneously.
      </motion.p>

      <motion.p className="mb-4" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        This multi-chain capability allows participants to engage with different blockchain ecosystems
        without needing to manage separate infrastructure environments for each network.
      </motion.p>

      <motion.p className="mb-4" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        Validator nodes can be deployed across supported networks such as Avalanche, Cosmos, and
        Polygon through a unified infrastructure system.
      </motion.p>

      <motion.p className="mb-8" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        Multi-chain operations enable broader participation in decentralized networks while maintaining
        efficient infrastructure management.
      </motion.p>

      {/* Hosting */}
      <motion.h2 className="text-2xl font-semibold mb-4" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        Infrastructure Hosting for Web3 Projects
      </motion.h2>

      <motion.p className="mb-4" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        Many blockchain projects require dedicated infrastructure in order to maintain network stability
        and support decentralized applications.
      </motion.p>

      <motion.p className="mb-4" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        Nodes On provides infrastructure hosting services that allow Web3 projects to deploy and
        maintain blockchain nodes within a reliable infrastructure environment.
      </motion.p>

      <motion.p className="mb-4" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        These nodes may include validator nodes, full nodes, RPC nodes, and other components required
        to support decentralized networks.
      </motion.p>

      <motion.p className="mb-4" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        Infrastructure hosting ensures that blockchain projects can maintain high availability and reliable
        network performance without needing to manage server environments internally.
      </motion.p>

      <motion.p className="mb-8" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        This service enables projects to focus on protocol development and ecosystem growth while
        relying on Nodes On infrastructure to support network operations.
      </motion.p>

      {/* Institutional */}
      <motion.h2 className="text-2xl font-semibold mb-4" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        Institutional Infrastructure Access
      </motion.h2>

      <motion.p className="mb-4" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        As blockchain technology continues to mature, institutional participants are increasingly entering
        the ecosystem. These participants require infrastructure that meets higher standards of reliability,
        performance, and security.
      </motion.p>

      <motion.p className="mb-4" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        Nodes On provides infrastructure environments suitable for institutional-level validator
        operations.
      </motion.p>

      <motion.p className="mb-4" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        The platform’s architecture is designed to support stable validator deployment with monitoring
        systems, dedicated infrastructure clusters, and network optimization.
      </motion.p>

      <motion.p className="mb-4" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        Institutional participants can access blockchain infrastructure through Nodes On while
        maintaining operational efficiency and reliability.
      </motion.p>

      <motion.p className="mb-8" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        This use case reflects the growing demand for professional infrastructure providers within the
        decentralized ecosystem.
      </motion.p>

      {/* Developer */}
      <motion.h2 className="text-2xl font-semibold mb-4" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        Developer and Ecosystem Support
      </motion.h2>

      <motion.p className="mb-4" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        Blockchain developers rely on node infrastructure to interact with networks, test applications,
        and deploy decentralized services.
      </motion.p>

      <motion.p className="mb-4" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        Nodes On infrastructure can support developers by providing reliable node connectivity across
        supported networks.
      </motion.p>

      <motion.p className="mb-4" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        Developers building decentralized applications may require access to blockchain nodes in order
        to interact with network data, execute transactions, and test smart contracts.
      </motion.p>

      <motion.p className="mb-4" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        By maintaining infrastructure capable of supporting these interactions, Nodes On contributes to
        the broader development of decentralized technologies.
      </motion.p>

      <motion.p className="mb-8" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        This infrastructure layer supports innovation within blockchain ecosystems by enabling
        developers to build applications on top of stable network environments.
      </motion.p>

      {/* Decentralization */}
      <motion.h2 className="text-2xl font-semibold mb-4" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        Strengthening Network Decentralization
      </motion.h2>

      <motion.p className="mb-4" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        Decentralization is one of the fundamental principles of blockchain technology. Networks become
        more secure and resilient when validator nodes are distributed across multiple participants and
        infrastructure environments.
      </motion.p>

      <motion.p className="mb-4" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        Nodes On supports network decentralization by enabling more participants to deploy validator
        nodes without requiring complex technical setups.
      </motion.p>

      <motion.p className="mb-4" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        By lowering the infrastructure barrier for validator participation, Nodes On helps increase the
        number of active validators across supported networks.
      </motion.p>

      <motion.p className="mb-8" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        This contributes to stronger decentralization, improved network security, and a healthier
        blockchain ecosystem.
      </motion.p>

      {/* Growth */}
      <motion.h2 className="text-2xl font-semibold mb-4" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        Supporting the Growth of the Decentralized Internet
      </motion.h2>

      <motion.p className="mb-4" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        Blockchain technology is increasingly viewed as a foundational layer of the decentralized
        internet. As decentralized systems expand, the demand for reliable infrastructure continues to
        grow.
      </motion.p>

      <motion.p className="mb-4" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        Nodes On is designed to support this growth by providing scalable infrastructure capable of
        powering validator nodes across multiple blockchain ecosystems.
      </motion.p>

      <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        Through reliable infrastructure services, Nodes On contributes to the broader development of
        decentralized networks and the technologies built on top of them. The platform aims to become
        an infrastructure layer that supports the next generation of decentralized applications, blockchain
        protocols, and Web3 services.
      </motion.p>
    </div>
  );
}