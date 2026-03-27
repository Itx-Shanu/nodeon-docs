import { useNavigate } from "react-router"
import { motion } from "framer-motion"

type CardProps = {
  title: string
  description: string
  path: string
  active?: boolean
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" } as const
  }
}

const Card = ({ title, description, path }: CardProps) => {
  const navigate = useNavigate()

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
  )
}

export default function Home() {
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen px-6 py-10 text-white"
    >
      <div className="mx-auto max-w-6xl">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-3 text-4xl font-bold text-[#111C2D]"
        >
          Validators
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-10 text-lg text-[#111C2D]/60 md:text-2xl"
        >
          Validator nodes are the core infrastructure components that secure and
          maintain blockchain networks...
        </motion.p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid gap-6 md:grid-cols-2"
        >
          <Card
            title="N1 Validator"
            description="The N1 Validator is the foundational validator infrastructure package..."
            path="/validators/N1validator"
          />
          <Card
            title="N2 Validator Plus"
            description="The N2 Validator Plus package is an advanced validator..."
            path="/validators/N2validatorplus"
          />
          <Card
            title="Validator Requirements"
            description="Operating validator nodes requires specific..."
            path="/validators/validatorrequirements"
          />
          <Card
            title="Validator Deployment Workflow"
            description="Validator deployment follows a structured workflow..."
            path="/validators/validatordeploymentWorkflow"
          />
          <Card
            title="Validator Rewards"
            description="Validator nodes contribute by validating..."
            path="/validators/validatorrewards"
          />
          <Card
            title="Validator Monitoring"
            description="Monitoring tools track validator performance..."
            path="/validators/validatormonitoring"
          />
          <Card
            title="Validator Security"
            description="Validator nodes require secure environments..."
            path="/validators/validatorsecurity"
          />
        </motion.div>
      </div>
    </motion.div>
  )
}