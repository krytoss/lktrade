import { Card } from "flowbite-react"
import { APIProvider } from "@vis.gl/react-google-maps"
import { Map } from "@vis.gl/react-google-maps"
import { Marker } from "@vis.gl/react-google-maps"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faAt, faMapPin } from "@fortawesome/free-solid-svg-icons"
import ContactForm from "./ContactForm"
import Section from "../Section"

const Contact = () => {

    const position = {lat: 48.217882960253505, lng: 18.603501890835982};

    return (
        <Section id='contact'>
            <Card className={ "border-none bg-gray-500 bg-opacity-10" }>
                <h2 className='text-center text-4xl text-white mb-5'>Kontaktujte nás</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 w-100 lg:w-5/6 lg:mx-auto'>
                    <ul className='text-white text-xl space-y-3 mb-10 md:mb-0'>
                        <li>
                            <FontAwesomeIcon icon={ faPhone } className='mr-5' />
                            Telefón
                        </li>
                        <li>
                            <FontAwesomeIcon icon={ faAt } className='mr-5' />
                            Mail
                        </li>
                        <li>
                            <FontAwesomeIcon icon={ faMapPin } className='mr-5' />
                            Adresa
                        </li>
                    </ul>
                    <ContactForm />
                </div>
                <div className='opacity-70 hover:opacity-100'>
                    <APIProvider apiKey={ process.env.REACT_APP_GOOGLE_API }>
                        <Map
                        defaultCenter={position}
                        defaultZoom={17}
                        style={{
                            height: '300px',
                            margin: '0 auto',
                            borderRadius: '20px'
                        }}
                        >
                            <Marker position={position} />
                        </Map>
                    </APIProvider>
                </div>
            </Card>
        </Section>
    )
}

export default Contact