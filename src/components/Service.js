import './Service.css'
import { useState, useEffect } from 'react'

const Service = ({ order, img, title, text, className }) => {

    const [ orientation, setOrientation ] = useState('')

    const classes =
        orientation === 'left'
            ? 'rounded-tr-none rounded-br-none text-left'
            : 'rounded-tl-none rounded-bl-none text-right'

    const imgClasses = orientation === 'left' ? 'order-0 justify-start' : 'order-1 justify-end'

    useEffect(() => {
        setOrientation(order % 2 === 0 ? 'left' : 'right')
    }, [])

    return (
        <div
            className={
                `service text-white px-20 py-5 grid grid-cols-1 sm:grid-cols-2 rounded-full ${orientation} ${classes}`
                + (className ? ' ' + className : '')
            }
        >
            <div className={ `flex px-2 justify-items-center ${imgClasses}` }>
                <img src={ img }/>
            </div>
            <div>
                <h2 className='text-xl'>{ title }</h2>
                <p>
                    {text}
                </p>
            </div>
        </div>
    )
}

export default Service