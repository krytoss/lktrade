import Section from "../Section"
import Service from "../Service"

const ServicesCards = () => {

    const services = [
        {
            title: 'Predaj výpočtovej techniky',
            content: 'Nájdete u nás širokú škálu výpočtovej techniky, či už novej alebo profesionálne repasovanej za tie najlepšie ceny. Príďte sa pozrieť na výber na našu predajňu!',
            img: './img/darcek.svg'
        },
        {
            title: 'Servis výpočtovej techniky',
            content: 'Nájdete u nás širokú škálu výpočtovej techniky, či už novej alebo profesionálne repasovanej za tie najlepšie ceny. Príďte sa pozrieť na výber na našu predajňu!',
            img: './img/hw.svg'
        },
        {
            title: 'Kamerové systémy',
            content: '',
            img: './img/surveillance.svg'
        },
        {
            title: 'Tvorba webových prezentácií a kompletných riešení pre firmy',
            content: 'Začínate podnikať a nemáte sa ako prezentovať na internete? Alebo Vám príde Vaša stránka príliš stará, nemoderná, a máte pocit že Vás to už neodzrkadluje? Neváhajte sa nám ozvať, a my Vám nájdeme čo najvhodnejšie riešenie!',
            img: './img/services/code.gif'
        }
    ]

    return (
        <Section id='services' className="pt-[56px] pb-0">
            {
                services.map((s, i) => {
                    return <Service className="h-[calc((100vh-56px)/4)]" key={i} order={i} title={s.title} text={s.content} img={s.img}/>
                })
            }
          </Section>
    )
}

export default ServicesCards