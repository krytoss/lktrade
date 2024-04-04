import { motion } from 'framer-motion'
import './Section.css'

const Section = ({ id, children }) => {
    return (
        <section id={ id }>
            <motion.div
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
            </motion.div>
        </section>
    )
}

export default Section