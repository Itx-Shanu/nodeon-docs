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
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.96 }}
      className="rounded-xl backdrop-blur-lg border border-[#FF7037] bg-linear-to-br from-[#FF7037]/20 to-transparent p-6 cursor-pointer"
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
    { title: "Overview", description: "What is Node ON?", path: "/intro/overview" },
    { title: "Use Cases", description: "Exploring the Use Cases of Node ON", path: "/intro/useCases" },
    { title: "Team", description: "At Node ON, our core team...", path: "/intro/team" },
    { title: "Infrastructure Model", description: "Infrastructure Model and Revenue Sharing", path: "/intro/infrastructureModel" },
    { title: "Roadmap", description: "The roadmap for Node On...", path: "/intro/roadmap" },
  ];

  const containerVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.15 } },
  };

  return (
    <motion.div
      className="min-h-screen px-6 py-10"
      initial="hidden"
      animate="show"
      variants={containerVariants}
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl text-[#111C2D] font-bold mb-3"
        >
          Node On Guides
        </motion.h1>

        {/* Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-[#111C2D]/60 md:text-2xl mb-10"
        >
          Let's learn about the most important Node ON concepts!
        </motion.p>

        {/* Cards Grid */}
        <motion.div
          className="grid md:grid-cols-2 gap-6"
          variants={containerVariants}
        >
          {cards.map((card, i) => (
            <Card key={i} {...card} />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}