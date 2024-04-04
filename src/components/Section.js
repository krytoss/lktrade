import { motion } from 'framer-motion'
import './Section.css'

const Section = ({ id, children }) => {
    return (
        <motion.section
            id={ id }
            initial={{
                filter: 'blur(30px)'
            }}
            whileInView={{
                filter: 'blur(0)'
            }}
            viewport={{
                margin: '-100px'
            }}
            transition={{ duration: .5 }}
        >
            { children }
        </motion.section>
    )
}

export default Section