import { motion } from "framer-motion";

export default function Team() {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } as const },
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-10 text-black leading-relaxed">
      {/* Team Heading */}
      <motion.h2 className="text-2xl font-semibold mb-4" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        Team
      </motion.h2>

      {/* Intro */}
      <motion.p className="mb-4" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        At Nodes On, our team represents a combination of experience in blockchain infrastructure,
        distributed systems, and Web3 ecosystem development. The founding members bring
        together expertise from technology, finance, and network operations to build reliable
        validator infrastructure for decentralized networks.
      </motion.p>

      <motion.p className="mb-4" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        The team is focused on creating scalable infrastructure that enables individuals and
        organizations to participate in blockchain networks without the complexity of managing
        node infrastructure themselves.
      </motion.p>

      <motion.p className="mb-8" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        Through a combination of technical expertise and strategic development, the Nodes On
        team is working toward building a global infrastructure layer that supports the growth of
        decentralized ecosystems.
      </motion.p>

      {/* Technology Leadership */}
      <motion.h2 className="text-2xl font-semibold mb-4" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        Technology & Infrastructure Leadership
      </motion.h2>

      <motion.h3 className="text-xl font-semibold mb-2" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        Co-Founder & Infrastructure Architect
      </motion.h3>

      <motion.p className="mb-4" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        The infrastructure architect behind Nodes On brings extensive experience in distributed
        systems, blockchain node architecture, and cloud infrastructure. With a strong background
        in software engineering and network systems, the role focuses on designing validator
        infrastructure capable of supporting multiple blockchain networks with high reliability and
        security.
      </motion.p>

      <motion.p className="mb-6" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        This leadership role ensures that Nodes On infrastructure maintains enterprise-grade
        performance standards while adapting to the rapidly evolving blockchain ecosystem.
      </motion.p>

      <motion.h3 className="text-xl font-semibold mb-2" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        Chief Technology Officer (CTO)
      </motion.h3>

      <motion.p className="mb-4" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        The CTO leads the technical development of the Nodes On platform, overseeing the design
        and implementation of validator deployment systems, infrastructure monitoring tools, and
        network management frameworks.
      </motion.p>

      <motion.p className="mb-4" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        With expertise in blockchain protocols and large-scale system architecture, the CTO ensures
        that Nodes On infrastructure remains secure, scalable, and capable of supporting validator
        participation across multiple networks.
      </motion.p>

      <motion.p className="mb-8" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        The CTO also directs ongoing research into blockchain infrastructure optimization and
        emerging decentralized technologies.
      </motion.p>

      {/* Business */}
      <motion.h2 className="text-2xl font-semibold mb-4" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        Strategic Growth & Ecosystem Development
      </motion.h2>

      <motion.h3 className="text-xl font-semibold mb-2" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        Business Development Lead
      </motion.h3>

      <motion.p className="mb-4" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        The business development team focuses on expanding the Nodes On ecosystem through
        strategic partnerships with blockchain networks, Web3 projects, and infrastructure
        providers.
      </motion.p>

      <motion.p className="mb-4" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        Drawing on experience in financial strategy and market development, this role supports the
        growth of the platform’s network participation and helps connect Nodes On infrastructure
        with emerging blockchain ecosystems.
      </motion.p>

      <motion.p className="mb-8" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        The goal is to position Nodes On as a trusted infrastructure provider within the decentralized
        technology landscape.
      </motion.p>

      {/* Operations */}
      <motion.h2 className="text-2xl font-semibold mb-4" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        Operations & Infrastructure Management
      </motion.h2>

      <motion.p className="mb-4" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        The operations lead is responsible for maintaining the reliability and efficiency of the Nodes
        On infrastructure network.
      </motion.p>

      <motion.p className="mb-4" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        This role oversees infrastructure monitoring, server management, and operational processes
        that ensure validator nodes maintain high uptime and consistent network performance.
      </motion.p>

      <motion.p className="mb-8" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        Through continuous monitoring and optimization, the operations team ensures that the
        platform delivers reliable infrastructure services to participants and blockchain networks.
      </motion.p>

      {/* Future */}
      <motion.h2 className="text-2xl font-semibold mb-4" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        Building the Future of Blockchain Infrastructure
      </motion.h2>

      <motion.p className="mb-4" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        The Nodes On team is committed to building infrastructure that supports the long-term
        growth of decentralized technologies.
      </motion.p>

      <motion.p className="mb-4" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        By combining technical innovation with reliable infrastructure operations, the team aims to
        create a platform that enables seamless validator participation across multiple blockchain
        ecosystems.
      </motion.p>

      <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        Nodes On continues to expand its infrastructure capabilities while focusing on security,
        performance, and accessibility for participants around the world.
      </motion.p>
    </div>
  );
}