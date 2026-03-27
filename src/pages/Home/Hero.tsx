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
  },
  {
    icon: FileText,
    title: "Infrastructure & Networks",
    description:
      "Discover how Nodes On supports blockchain networks by facilitating validator participation...",
  },
  {
    icon: PiggyBank,
    title: "Host a Validator",
    description:
      "Deploy and operate validator nodes through Nodes On infrastructure...",
  },
];

export default function Home() {
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
          The complete guide to validator infrastructure and node operations
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-4 max-w-2xl text-lg text-[#111C2D]/60 md:text-2xl"
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
            <Button className="btn-without-bg">Introduction</Button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button className="btn">Start Exploring</Button>
          </motion.div>
        </motion.div>
      </section>

      {/* WELCOME SECTION */}
      <section className="px-4 md:px-8 py-20 text-center">
        
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="pb-0 md:pb-12 text-4xl md:text-6xl lg:text-7xl font-bold text-[#111C2D]/80"
        >
          Welcome to Nodes On
        </motion.h2>

        {/* STAGGER CONTAINER */}
        <motion.div
          className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3 mt-12"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {cardsData.map((card, index) => {
            const Icon = card.icon;

            return (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 60 },
                  show: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, ease: "easeOut" },
                  },
                }}
                whileHover={{ y: -8, scale: 1.03 }}
              >
                <Card className="p-3 bg-linear-to-l from-[#FF7037] to-[#FFCB3C] hover:shadow-2xl hover:border hover:border-[#FF7037] transition-all duration-300">
                  
                  <CardContent className="flex flex-col items-center p-6 text-center">
                    
                    <motion.div
                      className="mb-4 rounded-lg bg-[#FF7037]/60 p-6"
                      whileHover={{ rotate: 5, scale: 1.1 }}
                    >
                      <Icon className="text-white" size={50} />
                    </motion.div>

                    <h3 className="text-xl font-bold text-white">
                      {card.title}
                    </h3>

                    <p className="mt-2 text-lg text-white">
                      {card.description}
                    </p>

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