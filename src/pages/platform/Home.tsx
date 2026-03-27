import { useNavigate } from "react-router";
import  { motion } from "framer-motion";
import type {  Variants } from "framer-motion";


type CardProps = {
  title: string;
  description: string;
  path: string;
  active?: boolean;
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.1, type: "spring", stiffness: 100 },
  }),
  hover: { scale: 1.03 },
};

const Card = ({ title, description, path }: CardProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(path);
  };

  return (
    <motion.div
      onClick={handleClick}
      className={`rounded-xl backdrop-blur-lg border border-[#FF7037] bg-gradient-to-br from-[#FF7037]/20 to-transparent p-6 cursor-pointer`}
      whileHover="hover"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="flex items-start gap-3">
        <div className="text-gray-300 text-xl">📄</div>

        <div>
          <h3 className="text-[#111C2D] text-lg font-semibold">{title}</h3>
          <p className="text-lg text-[#111C2D]/60 mt-1">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default function Home() {
  const cards = [
    {
      title: "Validator Infrastructure",
      description:
        "Validator infrastructure forms the foundation of blockchain networks...",
      path: "/platform/ValidatorInfrastructure",
    },
    {
      title: "Multi-Chain Validators",
      description:
        "Blockchain ecosystems are expanding rapidly, with multiple independent...",
      path: "/platform/MultiChainValidators",
    },
    {
      title: "Dedicated Validator Clusters",
      description: "Nodes On infrastructure uses dedicated validator clusters...",
      path: "/platform/DedicatedValidatorClusters",
    },
    {
      title: "Validator Deployment",
      description: "Nodes On simplifies the validator deployment process...",
      path: "/platform/ValidatorDeployment",
    },
    {
      title: "Monitoring Dashboard",
      description:
        "Maintaining reliable validator performance requires continuous...",
      path: "/platform/MonitoringDashboard",
    },
    {
      title: "Secure Infrastructure",
      description: "Security is a critical component of validator infrastructure...",
      path: "/platform/SecureInfrastructure",
    },
    {
      title: "Network Participation",
      description:
        "Validator nodes are responsible for verifying transactions...",
      path: "/platform/NetworkParticipation",
    },
    {
      title: "Infrastructure Architecture",
      description: "Nodes On infrastructure is built on a distributed architecture...",
      path: "/platform/InfrastructureArchitecture",
    },
  ];

  return (
    <div className="min-h-screen text-white px-6 py-10">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl text-[#111C2D] font-bold mb-3">PlatForm</h1>

        <p className="text-lg text-[#111C2D]/60 md:text-2xl mb-10">
          Nodes On is a blockchain infrastructure platform designed to simplify
          validator deployment and enable reliable participation in decentralized
          networks. The platform provides a professionally managed infrastructure
          environment where validator nodes can be deployed across multiple blockchain
          ecosystems without requiring complex server management.
          Through distributed infrastructure, dedicated validator clusters, and
          integrated monitoring systems, Nodes On ensures stable validator performance
          while maintaining high security and uptime.
          <br />
          The following sections explain the core components of the Nodes On platform.
        </p>

        <motion.div
          className="grid md:grid-cols-2 gap-6"
          initial="hidden"
          animate="visible"
        >
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              custom={index}
              variants={cardVariants}
            >
              <Card {...card} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}