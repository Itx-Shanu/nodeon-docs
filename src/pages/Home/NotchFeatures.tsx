import {
  Cpu,
  Layers,
  Wallet,
  Database,
  Coins,
  Zap,
  ChartNetwork,
  Cable,
  CircleDashed,
  Send,
  Monitor,
  Rocket,
} from "lucide-react";
import { motion } from "motion/react";

const features = [
  {
    icon: Wallet,
    badge: "Profit Distribution",
    title: "Revenue Sharing",
    description:
      "Learn more about our Revenue Sharing model. This system transforms users and contributors into stakeholders, rewarding their engagement with the platform's financial success.",
    button: "GET STARTED",
  },
  {
    icon: Layers,
    badge: "Blockchain",
    title: "Layer 1",
    description:
      "Node ON is at the vanguard, introducing a specialized Layer 1 (L1) blockchain designed to streamline the distribution of tasks across a decentralized network of nodes.",
    button: "READ MORE",
  },
  {
    icon: Cpu,
    badge: "Rent",
    title: "Renting",
    description:
      "We provide clients with bespoke access to computational resources such as GPUs, CPUs, RAM, disk storage, and more, encapsulated primarily within Docker containers.",
    button: "FIND RESOURCES",
  },
  {
    icon: Database,
    badge: "Host a Node",
    title: "Lending",
    description:
      "Becoming a node provider on Node ON involves a clear and secure setup process. Follow these steps to prepare your node for our network.",
    button: "HOST A NODE",
  },
  {
    icon: Coins,
    badge: "Stake to earn",
    title: "Staking $GPU Tokens",
    description:
      "We offer 'Stake and Earn ETH' feature that rewards users with Ethereum (ETH) for their engagement and long-term commitment to the platform.",
    button: "LEARN ABOUT STAKING",
  },
  {
    icon: Zap,
    badge: "Instant Access",
    title: "On Demand Nodes",
    description:
      "Node ON is reshaping the landscape of computational resource, offering a scalable and flexible solution for users with varying computational demands.",
    button: "HOW IT WORKS",
  },
];

const endpoint = [
  {
    icon: Cable,
    badge: "API",
    title: "Lender API",
    description:
      "We integrate several key components within its ecosystem to ensure seamless operation and communication. Here's a brief overview of these elements and how they interact",
    button: "GET STARTED",
  },
  {
    icon: Layers,
    badge: "Availability",
    title: "Node Availability",
    description:
      "Stay informed about the status and availability of our nodes with just a click. Our endpoint provides up-to-date information, ensuring you always know which nodes are active and ready.",
    button: "READ MORE",
  },
  {
    icon: ChartNetwork,
    badge: "Coming soon!",
    title: "Future features",
    description: "Stay tuned for exciting updates!",
    button: "FIND RESOURCES",
    links: ["LLM", "Text to image", "Text to video"], // Added links array
  },
];

const architectureItems = [
  {
    icon: Cpu,
    title: "Hardware Architecture",
    description:
      "Our foundation is its state-of-the-art GPU farm, designed to exceed expectations.",
  },
  {
    icon: CircleDashed,
    title: "Software Architecture",
    description:
      "Our software architecture is crafted with precision, focusing on optimizing GPU acceleration.",
  },
];

const links = [
  {
    icon: Send,
    title: "Join Telegram",
    description: "Check out the Node ON community on Telegram.",
  },
  {
    icon: Monitor,
    title: "Visit Website",
    description: "Visit the Node ON website to learn more about our platform.",
  },
  {
    icon: Rocket,
    title: "Start Now",
    description: "Visit our dapp to start renting GPUs for your AI projects.",
  },
];

// Motion Variants
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariant ={
  hidden: { opacity: 0, y: 50 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5, ease: "easeInOut" as const } // ✅ add 'as const'
  },
};

const NotchFeatures = () => {
  return (
    <>
      {/* ---------- FEATURES ---------- */}
      <section className="py-20 px-4 md:px-10">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-4xl md:text-6xl lg:text-7xl font-bold tracking-wide text-[#111C2D]/80 mb-16"
        >
          Top notch features
        </motion.h2>

        <motion.div
          className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2 lg:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariant}
                whileHover={{ y: -10, scale: 1.03 }}
                className="relative bg-linear-to-br from-[#FF7037]/20 to-transparent rounded-2xl border border-[#FF7037]/30 p-6 shadow-lg hover:border-[#FF7037] transition-all duration-300"
              >
                <span className="absolute right-4 top-6 text-sm border border-gray-900 px-3 py-1 rounded-full text-[#111C2D]">
                  {item.badge}
                </span>

                <motion.div
                  className="mb-6 w-16 h-16 flex items-center justify-center rounded-full bg-[#FF7037]/40"
                  whileHover={{ rotate: 8, scale: 1.1 }}
                >
                  <Icon className="text-white" size={30} />
                </motion.div>

                <h3 className="text-2xl font-semibold text-[#111C2D]">{item.title}</h3>
                <p className="mt-3 text-[#111C2D]/60 text-xl leading-relaxed">
                  {item.description}
                </p>

                <button className="mt-6 w-full rounded-full bg-linear-to-l from-[#FF7037] to-[#FFCB3C] py-2 text-sm font-semibold text-white">
                  {item.button}
                </button>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* ---------- ENDPOINT ---------- */}
      <section className="py-20 px-4 md:px-10">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-4xl md:text-6xl lg:text-7xl font-bold tracking-wide text-[#111C2D]/80 mb-16"
        >
          Check out our endpoints
        </motion.h2>

        <motion.div
          className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2 lg:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {endpoint.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariant}
                whileHover={{ y: -10, scale: 1.03 }}
                className="relative bg-linear-to-bl from-[#FF7037]/20 to-transparent rounded-2xl border border-[#FF7037]/30 p-6 shadow-lg hover:border-[#FF7037] transition-all duration-300"
              >
                <span className="absolute right-4 top-6 text-sm border border-gray-900 px-3 py-1 rounded-full text-[#111C2D]">
                  {item.badge}
                </span>

                <motion.div
                  className="mb-6 w-16 h-16 flex items-center justify-center rounded-full bg-[#FF7037]/40"
                  whileHover={{ rotate: 8, scale: 1.1 }}
                >
                  <Icon className="text-white" size={30} />
                </motion.div>

                <h3 className="text-2xl font-semibold text-[#111C2D]">{item.title}</h3>
                <p className="mt-3 text-[#111C2D]/60 text-xl leading-relaxed">{item.description}</p>

                {item.links && (
                  <div className="mt-4 space-y-1">
                    {item.links.map((link, linkIndex) => (
                      <a
                        key={linkIndex}
                        href="#"
                        className="block text-[#FF7037] hover:underline text-xl"
                      >
                        {link}
                      </a>
                    ))}
                  </div>
                )}

                <button className="mt-6 w-full rounded-full bg-linear-to-l from-[#FF7037] to-[#FFCB3C] py-2 text-sm font-semibold text-white">
                  {item.button}
                </button>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* ---------- ARCHITECTURE ---------- */}
      <section className="py-20 px-4 md:px-10">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-4xl md:text-5xl lg:text-6xl font-bold tracking-wide text-[#111C2D]/80 mb-16"
        >
          Our architecture
        </motion.h2>

        <div className="mx-auto max-w-6xl grid gap-6 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="relative bg-linear-to-br from-[#FF7037]/20 to-transparent rounded-2xl border border-[#FF7037]/30 p-8 md:p-12 min-h-100 flex items-center justify-center"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 16 16"
              className="w-50 h-50 md:w-64 md:h-64"
              role="img"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14.773 3.485l-.78-.184-2.108 2.096-1.194-1.216 2.056-2.157-.18-.792a4.42 4.42 0 0 0-1.347-.228 3.64 3.64 0 0 0-1.457.28 3.824 3.824 0 0 0-1.186.84 3.736 3.736 0 0 0-.875 1.265 3.938 3.938 0 0 0 0 2.966 335.341 335.341 0 0 0-6.173 6.234c-.21.275-.31.618-.284.963a1.403 1.403 0 0 0 .464.967c.124.135.272.247.437.328.17.075.353.118.538.127.316-.006.619-.126.854-.337 1.548-1.457 4.514-4.45 6.199-6.204.457.194.948.294 1.444.293a3.736 3.736 0 0 0 2.677-1.133 3.885 3.885 0 0 0 1.111-2.73 4.211 4.211 0 0 0-.196-1.378zM2.933 13.928a.31.31 0 0 1-.135.07.437.437 0 0 1-.149 0 .346.346 0 0 1-.144-.057.336.336 0 0 1-.114-.11c-.14-.143-.271-.415-.14-.568 1.37-1.457 4.191-4.305 5.955-6.046.1.132.21.258.328.376.118.123.245.237.38.341-1.706 1.75-4.488 4.564-5.98 5.994zm11.118-9.065c.002.765-.296 1.5-.832 2.048a2.861 2.861 0 0 1-4.007 0 2.992 2.992 0 0 1-.635-3.137A2.748 2.748 0 0 1 10.14 2.18a2.76 2.76 0 0 1 1.072-.214h.254L9.649 3.839v.696l1.895 1.886h.66l1.847-1.816v.258zM3.24 6.688h1.531l.705.717.678-.674-.665-.678V6.01l.057-1.649-.22-.437-2.86-1.882-.591.066-.831.849-.066.599 1.838 2.918.424.215zm-.945-3.632L4.609 4.58 4.57 5.703H3.494L2.002 3.341l.293-.285zm7.105 6.96l.674-.673 3.106 3.185a1.479 1.479 0 0 1 0 2.039 1.404 1.404 0 0 1-1.549.315 1.31 1.31 0 0 1-.437-.315l-3.142-3.203.679-.678 3.132 3.194a.402.402 0 0 0 .153.105.477.477 0 0 0 .359 0 .403.403 0 0 0 .153-.105.436.436 0 0 0 .1-.153.525.525 0 0 0 .036-.184.547.547 0 0 0-.035-.184.436.436 0 0 0-.1-.153L9.4 10.016z"
              ></path>
            </svg>
          </motion.div>

          <motion.div
            className="flex flex-col gap-6"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {architectureItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariant}
                  whileHover={{ y: -6 }}
                  className="relative bg-linear-to-br from-[#FF7037]/20 to-transparent rounded-2xl border border-[#FF7037]/30 p-6 flex-1"
                >
                  <div className="mb-4 w-12 h-12 flex items-center justify-center rounded-lg bg-[#FF7037]/20 border border-[#FF7037]/30">
                    <Icon className="text-[#FF7037]" size={24} />
                  </div>
                  <h3 className="text-2xl font-semibold text-[#111C2D] mb-3">{item.title}</h3>
                  <p className="text-[#111c2d99] text-xl leading-relaxed">{item.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ---------- USEFUL LINKS ---------- */}
      <section className="py-20 px-4 md:px-10">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-4xl md:text-6xl lg:text-7xl font-bold text-[#111C2D]/80 mb-16"
        >
          Useful links
        </motion.h2>

        <motion.div
          className="mx-auto max-w-6xl grid gap-6 md:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {links.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariant}
                whileHover={{ y: -8, scale: 1.03 }}
                className="relative bg-linear-to-b from-[#FF7037]/20 to-transparent rounded-2xl border border-[#FF7037]/20 p-8 text-center hover:shadow-lg hover:border-[#FF7037]/50 transition-all duration-300 min-h-70 flex flex-col items-center justify-center"
              >
                <div className="mb-6 w-16 h-16 flex items-center justify-center rounded-xl bg-[#FF7037]/20 border border-[#FF7037]/20">
                  <Icon className="text-[#FF7037]" size={30} />
                </div>
                <h3 className="text-2xl font-semibold text-[#111C2D] mb-3">{item.title}</h3>
                <p className="text-[#111c2d99] text-xl">{item.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </section>
    </>
  );
};

export default NotchFeatures;