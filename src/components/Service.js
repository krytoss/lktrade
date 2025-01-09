import './Service.css'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const Service = ({ order, img, title, text, className }) => {

    const [ orientation, setOrientation ] = useState('')

    const classes =
        orientation === 'left'
            ? 'rounded-tr-none rounded-br-none text-left bg-white'
            : 'rounded-tl-none rounded-bl-none text-right'

    const imgClasses = orientation === 'left' ? 'order-0 justify-start' : 'order-1 justify-end'

    useEffect(() => {
        setOrientation(order % 2 === 0 ? 'left' : 'right')
    }, [ order ])

    return (
        <motion.div
            className={
                `service text-white px-20 py-5 grid grid-cols-1 sm:grid-cols-2  ${orientation} ${classes}`
                + (className ? ' ' + className : '')
            }
            initial={{
                filter: 'blur(30px)',
                left: orientation === 'left' ? '-200px' : '200px'
            }}
            whileInView={{
                filter: 'blur(0)',
                left: 0
            }}
            viewport={{
                margin: '-100px'
            }}
            transition={{
                duration: .5
            }}
        >
            <div className={ `flex px-2 justify-items-center ${imgClasses}` }>
                <img src={ img } alt={title}/>
            </div>
            <div>
                <h2 className='text-xl'>{ title }</h2>
                <p>
                    {text}
                </p>
            </div>
        </motion.div>
    )
}

export default Service