import { useNavigate } from "react-router";
import { motion } from "framer-motion";

type CardProps = {
  title: string;
  description: string;
  path: string;
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } as const },
};

const Card = ({ title, description, path }: CardProps) => {
  const navigate = useNavigate();

  return (
    <motion.div
      variants={cardVariants}
      onClick={() => navigate(path)}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.98 }}
      className="cursor-pointer rounded-xl border border-[#FF7037] bg-linear-to-br from-[#FF7037]/20 to-transparent p-6 backdrop-blur-lg"
    >
      <div className="flex items-start gap-3">
        <div className="text-xl text-gray-300">📄</div>
        <div>
          <h3 className="text-lg font-semibold text-[#111C2D]">{title}</h3>
          <p className="mt-1 text-lg text-[#111C2D]/60">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default function Home() {
  const cards = [
    {
      title: "Server Architecture",
      description: "Nodes On uses a distributed server architecture specifically optimized...",
      path: "/infrastructure/ServerArchitecture",
    },
    {
      title: "Multi Region Hosting",
      description: "Nodes On infrastructure operates across multiple geographic...",
      path: "/infrastructure/multiregionhosting",
    },
    {
      title: "Validator Security",
      description: "Security is one of the most important components of validator infrastructure...",
      path: "/infrastructure/validatorsecurity",
    },
    {
      title: "Network Performance",
      description: "Blockchain validator nodes must maintain stable connections with peer nodes within the network...",
      path: "/infrastructure/networkperformance",
    },
    {
      title: "Monitoring System",
      description: "Nodes On infrastructure includes continuous monitoring systems that track validator...",
      path: "/infrastructure/monitoringsystem",
    },
    {
      title: "Infrastructure Scalability",
      description: "Nodes On infrastructure is designed to scale as blockchain ecosystems continue to expand...",
      path: "/infrastructure/infrastructurescalability",
    },
    {
      title: "Infrastructure Reliability",
      description: "Validator nodes must remain online to maintain network participation...",
      path: "/infrastructure/infrastructurereliability",
    },
  ];

  const containerVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.15 } },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen px-6 py-10 text-white"
    >
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-3 text-4xl font-bold text-[#111C2D]"
        >
          Infrastructure
        </motion.h1>

        {/* Paragraph */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-10 text-lg text-[#111C2D]/60 md:text-2xl"
        >
          Nodes On infrastructure is designed to provide reliable, scalable, and
          secure environments for validator node deployment across multiple
          blockchain networks. The infrastructure layer combines distributed
          server clusters, multi-region hosting environments, and continuous
          monitoring systems to maintain consistent validator performance.
          Validator nodes must maintain high uptime and continuous
          synchronization with blockchain networks. Any interruption in
          validator connectivity can affect network participation. To address
          this, Nodes On infrastructure is built around high-availability server
          environments and optimized network architecture. The infrastructure
          layer removes the complexity of running blockchain nodes independently
          while ensuring that validators maintain stable participation in
          decentralized ecosystems.
        </motion.p>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid gap-6 md:grid-cols-2"
        >
          {cards.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}