import { motion } from "framer-motion";

export default function RoadMap() {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } as const },
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-10 text-black">
      {/* Title */}
      <motion.h1
        className="text-4xl font-bold mb-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        RoadMap
      </motion.h1>

      {/* Intro */}
      <section className="mb-10 space-y-4">
        {[
          "The Nodes On roadmap outlines the long-term development strategy for building a global validator infrastructure network. As blockchain ecosystems continue to evolve, the demand for reliable and scalable infrastructure grows significantly. Nodes On aims to address this demand by expanding validator deployment capabilities, strengthening infrastructure architecture, and supporting multiple blockchain networks.",
          "The roadmap reflects a phased approach to infrastructure development, ensuring stability, scalability, and continuous innovation within the platform.",
        ].map((text, index) => (
          <motion.p
            key={index}
            className="mb-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            {text}
          </motion.p>
        ))}
      </section>

      {/* Phase sections helper */}
      {[
        {
          title: "Phase 1 – Infrastructure Foundation",
          paragraphs: [
            "The first phase focuses on building the core infrastructure layer that enables validator deployment across supported blockchain networks.",
            "During this phase, the Nodes On platform establishes the foundational architecture required for secure and reliable validator operations.",
            "Key objectives in this stage include:",
            "This phase establishes the operational foundation required for validator participation.",
          ],
          list: [
            "Deployment of dedicated validator infrastructure",
            "Integration with initial blockchain networks",
            "Development of validator monitoring systems",
            "Infrastructure security implementation",
            "Initial platform launch and ecosystem onboarding",
          ],
        },
        {
          title: "Phase 2 – Multi-Chain Expansion",
          paragraphs: [
            "After establishing the core infrastructure layer, Nodes On expands its validator support across additional blockchain ecosystems.",
            "The goal of this phase is to enable multi-chain infrastructure participation while maintaining operational stability and performance.",
            "Key development areas include:",
            "This phase allows Nodes On infrastructure to support a broader range of blockchain ecosystems.",
          ],
          list: [
            "Integration with additional Layer-1 blockchain networks",
            "Expansion of validator deployment capabilities",
            "Infrastructure scalability improvements",
            "Advanced monitoring and analytics tools",
            "Network performance optimization",
          ],
        },
        {
          title: "Phase 3 – Infrastructure Scaling",
          paragraphs: [
            "As the platform grows, Nodes On focuses on expanding its infrastructure capacity to support a larger validator network.",
            "This stage emphasizes infrastructure scalability and operational efficiency.",
            "Key developments include:",
            "Scaling infrastructure ensures that Nodes On can support increasing demand for validator deployment across blockchain networks.",
          ],
          list: [
            "Expansion of validator clusters",
            "Multi-region infrastructure deployment",
            "Enhanced network reliability systems",
            "Automated infrastructure management tools",
            "Improved infrastructure monitoring dashboards",
          ],
        },
        {
          title: "Phase 4 – Ecosystem Development",
          paragraphs: [
            "Beyond infrastructure deployment, Nodes On aims to contribute to the growth of the broader blockchain ecosystem.",
            "This phase focuses on building partnerships with blockchain networks, developers, and Web3 projects that rely on reliable infrastructure.",
            "Key initiatives include:",
            "This phase strengthens the role of Nodes On within the global blockchain infrastructure landscape.",
          ],
          list: [
            "Infrastructure support for emerging blockchain networks",
            "Collaboration with Web3 ecosystem partners",
            "Expansion of node hosting services",
            "Developer support for blockchain applications",
            "Integration with decentralized technologies",
          ],
        },
        {
          title: "Phase 5 – Global Infrastructure Network",
          paragraphs: [
            "The long-term goal of Nodes On is to establish a globally distributed infrastructure network that supports decentralized systems at scale.",
            "By expanding infrastructure across multiple regions and networks, Nodes On aims to provide reliable validator deployment for participants worldwide.",
            "Future objectives include:",
            "Through continuous development and innovation, Nodes On aims to become a key infrastructure provider within the decentralized internet.",
          ],
          list: [
            "Global validator infrastructure expansion",
            "Integration with additional blockchain ecosystems",
            "Infrastructure automation and optimization",
            "Advanced monitoring and analytics systems",
            "Continued development of secure validator architecture",
          ],
        },
      ].map((phase, idx) => (
        <section key={idx} className="mb-10 space-y-4">
          <motion.h2
            className="text-2xl font-semibold"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            {phase.title}
          </motion.h2>

          {phase.paragraphs.slice(0, -1).map((text, i) => (
            <motion.p
              key={i}
              className="mb-2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              {text}
            </motion.p>
          ))}

          <motion.ul
            className="list-disc pl-6 space-y-1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            {phase.list.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </motion.ul>

          <motion.p
            className="mt-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            {phase.paragraphs[phase.paragraphs.length - 1]}
          </motion.p>
        </section>
      ))}

      {/* Long-Term Vision */}
      <section className="space-y-4">
        <motion.h2
          className="text-2xl font-semibold"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          Long-Term Vision
        </motion.h2>

        {[
          "Nodes On is committed to building a scalable infrastructure layer that supports the next generation of decentralized networks.",
          "As blockchain technology evolves, reliable infrastructure will play a critical role in maintaining secure and efficient network operations.",
          "The Nodes On roadmap represents a long-term commitment to strengthening blockchain ecosystems through professional validator infrastructure and global network participation.",
        ].map((text, index) => (
          <motion.p
            key={index}
            className="mb-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            {text}
          </motion.p>
        ))}
      </section>
    </div>
  );
}