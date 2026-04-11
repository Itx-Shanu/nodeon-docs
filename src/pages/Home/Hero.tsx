import { useNavigate } from "react-router";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Boxes, FileText, PiggyBank } from "lucide-react";
import { motion } from "motion/react";

const cardsData = [
  {
    icon: Boxes,
    title: "Introduction",
    description:
      "Our platform simplifies the deployment of validator infrastructure on major blockchains...",
    path: "/intro",
  },
  {
    icon: FileText,
    title: "Infrastructure & Networks",
    description:
      "Discover how Nodes On supports blockchain networks by facilitating validator participation...",
    path: "/infrastructure",
  },
  {
    icon: PiggyBank,
    title: "Host a Validator",
    description:
      "Deploy and operate validator nodes through Nodes On infrastructure...",
    path: "/validators",
  },
];

export default function Home() {
  const navigate = useNavigate();

  const handleReadMore = (path: string) => {
    navigate(path); // Navigate to card-specific page
  };

  return (
    <div className="min-h-screen pt-10">

      {/* HERO SECTION */}
      <section className="relative flex flex-col items-center justify-center px-4 py-24 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl text-4xl md:text-6xl lg:text-7xl font-bold tracking-wide text-[#111C2D]/80"
        >
          The Complete Guide to Validator Infrastructure and Nodes Operations
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-4 max-w-2xl text-lg font-urbanist text-[#111C2D]/60 md:text-3xl"
        >
          Learn everything about Nodes On, from our platform architecture to deploying validator nodes...
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-6 flex flex-col gap-4 md:flex-row"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button onClick={() => navigate("/intro")} className="btn-without-bg">
              Introduction
            </Button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button onClick={() => navigate("/platform")} className="btn">
              Start Exploring
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* CARDS SECTION */}
      <section className="px-4 md:px-8 py-20 text-center">
        <motion.div
          className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-3 mt-12"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          {cardsData.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={index}
                className="h-full"
                variants={{
                  hidden: { opacity: 0, y: 60 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
                }}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
              >
                <Card className="h-full flex flex-col p-3 bg-linear-to-l from-[#FF7037] to-[#FFCB3C] hover:shadow-2xl transition-all duration-300">
                  <CardContent className="flex flex-col grow items-center p-6 text-center">

                    {/* Icon */}
                    <motion.div
                      className="mb-4 rounded-lg bg-[#FF7037]/60 p-6"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Icon className="text-white" size={50} />
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-white min-h-14">{card.title}</h3>

                    {/* Description */}
                    <p className="mt-2 text-lg text-white grow">{card.description}</p>

                    {/* Read More Button */}
                    <motion.button
                      onClick={() => handleReadMore(card.path)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="mt-4 px-10 py-3 text-lg text-black  bg-linear-to-r from-[#FF7037] to-transparent font-semibold rounded-lg  transition-all duration-300"
                    >
                      Read More
                    </motion.button>

                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </section>
    </div>
  );
}