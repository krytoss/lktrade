import { motion } from 'framer-motion'
import './Section.css'

const Section = ({ id, children, className }) => {
    return (
        <section id={ id } className={`h-screen snap-start py-20 ${className}`}>
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