import { useNavigate } from "react-router";
import { motion } from "framer-motion";

type CardProps = {
  title: string;
  description: string;
  path: string;
  active?: boolean;
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" } as const,
  },
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
      title: "Infrastructure Monitoring Systems",
      description:
        "The monitoring architecture tracks several key operational metrics across the platform infrastructure...",
      path: "/architecture/infrastructuremonitoring",
    },
    {
      title: "Performance Analytics",
      description:
        "Monitoring tools provide performance analytics that allow infrastructure operators...",
      path: "/architecture/performanceanalytics",
    },
    {
      title: "Automated Alert Systems",
      description:
        "Nodes On monitoring architecture includes automated alert systems that notify...",
      path: "/architecture/automatedalert",
    },
    {
      title: "Monitoring Security",
      description:
        "Monitoring systems also contribute to infrastructure security by detecting unusual activity...",
      path: "/architecture/monitoringsecurity",
    },
    {
      title: "Monitoring Dashboard",
      description:
        "The Nodes On monitoring dashboard provides a centralized interface for tracking validator...",
      path: "/architecture/monitordashboard",
    },
    {
      title: "Monitoring Reliability",
      description:
        "Continuous monitoring ensures that infrastructure systems remain operational...",
      path: "/architecture/monitoringreliability",
    },
  ];

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
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
          Architecture Monitoring
        </motion.h1>

        {/* Paragraph */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-10 text-lg text-[#111C2D]/60 md:text-2xl"
        >
          Architecture monitoring refers to the systems used to track the health, performance,
          and reliability of the Nodes On infrastructure environment. Validator nodes require
          continuous monitoring to ensure stable network synchronization and operational
          reliability. Monitoring systems track infrastructure activity and detect potential
          performance issues before they affect validator operations. Nodes On monitoring
          architecture provides real-time insights into validator node performance and
          infrastructure health.
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