import './Header.css'
import { useEffect, useState } from 'react'

const Header = () => {

    const [motto, setMotto] = useState(' ')
    const [index, setIndex] = useState(0)
    const [whichMotto, setWhichMotto] = useState(0)

    useEffect(() => {
        const mottos = [
            'Otvárame dvere digitálnemu pokroku',
            'Sme Vašim partnerom do firmy aj do domácnosti'
        ]

        if (whichMotto < mottos.length) {
            if (motto.length < mottos[whichMotto].length) {
                setTimeout(() => {
                    setMotto(mottos[whichMotto].slice(0, index))
                    setIndex(index => index + 1)
                }, 50)
            } else {
                if (mottos.length > 1) {
                    setTimeout(() => {
                        setMotto(' ')
                        setWhichMotto(last => last + 1)
                        setIndex(0)
                    }, 3000)
                }
            }
        } else {
            setWhichMotto(0)
        }
    }, [ motto, setMotto, whichMotto, setWhichMotto, index, setIndex ])

    return (
        <header className="flex align-middle py-10 sm:py-20 lg:py-5 snap-start">
            <div className='container mx-auto grid grid-cols-1 flex items-center justify-items-center'>
                <h2
                    className='header-left text-center text-7xl
                        sm:text-6xl lg:text-6xl text-zinc-300 min-h-20'>
                    { motto } 
                </h2>
                {/*
                    <img className="header-right hidden sm:block mh-4/5" src='./img/mismas.png' alt='Pomáhame spájať svet' />
                */}
            </div>
        </header>
    )

}

export default Header