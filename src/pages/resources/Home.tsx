import { useNavigate } from "react-router";
import { motion, type Variants } from "framer-motion";

type CardProps = {
  title: string;
  description: string;
  path?: string;
  pdf?: string;
  active?: boolean;
};

// Animation variants with custom index for stagger
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.1, type: "spring", stiffness: 100 },
  }),
  hover: { scale: 1.03 },
};

const Card = ({ title, description, path, pdf }: CardProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (pdf) {
      window.open(pdf, "_blank"); // open PDF
    } else if (path) {
      navigate(path);
    }
  };

  return (
    <motion.div
      onClick={handleClick}
      className="cursor-pointer rounded-xl border border-[#FF7037] bg-gradient-to-br from-[#FF7037]/20 to-transparent p-6 backdrop-blur-lg"
      whileHover="hover"
      whileTap={{ scale: 0.97 }}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
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
      title: "Nodes On Business Profile",
      description:
        "Explore the complete overview of Nodes On, including our vision, infrastructure model, and core platform capabilities. This document provides a detailed understanding of how Nodes On operates as a blockchain validator infrastructure provider...",
      pdf: "/pdfs/business-profile.pdf",
    },
    {
      title: "Participation Infrastructure",
      description:
        "Understand how participants engage with Nodes On infrastructure. This presentation explains validator deployment models, participation tiers, and how infrastructure is allocated across blockchain networks...",
      pdf: "/pdfs/participation-model.pdf",
    },
    {
      title: "Incentive Model",
      description:
        "Learn about the Nodes On incentive structure, including direct rewards, profit participation models, and leadership-based incentives designed to support structured network growth....",
      pdf: "/pdfs/incentive-structure.pdf",
    },
    {
      title: "Risk Disclaimer",
      description:
        "Review important risk factors associated with blockchain infrastructure participation. This document outlines potential risks, including market volatility, network performance, and operational uncertainties...",
      pdf: "/pdfs/risk-disclaimer.pdf",
    },
    {
      title: "FAQs",
      description:
        "Find answers to commonly asked questions about Nodes On, including platform functionality, validator infrastructure, participation process, and operational guidelines. This section helps you better understand how the platform works before getting started...",
      pdf: "/pdfs/faqs.pdf",
    },
  ];

  return (
    <div className="min-h-screen px-6 py-10 text-white">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-12 text-4xl font-bold text-[#111C2D]">
          Nodes On Business Profile
        </h1>

        <motion.div
          className="grid gap-6 md:grid-cols-2"
          initial="hidden"
          animate="visible"
        >
          {cards.map((card, index) => (
            <motion.div key={card.title} custom={index} variants={cardVariants}>
              <Card {...card} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}