import './MainArea.css'
import { motion } from "framer-motion"

function MainArea(props) {
    return <motion.div
      className="MainArea"
      animate={{ 
        x: props.animate ? '-100%' : 0
      }}
      transition={{ duration: 1.4}}
    />
}

export default MainArea;