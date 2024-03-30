import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react"
import { useEffect, useState } from "react"

const TopBar = ({ active }) => {

    const [ yOffset, setYOffset ] = useState(0)

    const links = {
        'home': 'Domov',
        'about': 'O nás',
        'services': 'Služby',
        'cams': 'Kamerové systémy',
        'contact': 'Kontakt',
    }

    const handleScroll = () => {
            const offset = window.scrollY
            setYOffset(offset)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () =>{
            window.removeEventListener('scroll', handleScroll);
        }
    })

    return (
        <Navbar
            fluid
            className={
                'sticky top-0 text-white border-gray-200 transition-all duration-500 bg-opacity-30 backdrop-blur-md z-50'
                + (yOffset > 100 ? ' bg-gray-700' : ' bg-transparent')
            }>
            <NavbarBrand href="https://flowbite-react.com">
                <img src='./logo_transparent_without_text.png' className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">LK Trade</span>
            </NavbarBrand>
            <NavbarToggle />
            <NavbarCollapse>
                { Object.keys(links).map((link, i) => {
                    const isActive = active === link
                    return <NavbarLink key={i} className='text-white' href={link} active={ isActive }>{ links[link] }</NavbarLink>
                }) }
            </NavbarCollapse>
        </Navbar>
    )

}

export default TopBar