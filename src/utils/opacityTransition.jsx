import { motion } from 'framer-motion'

const opacityTransition = (Component) => {
  return () => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 0.1 }}
    >
      <Component />
    </motion.div>
  )
}

export default opacityTransition
