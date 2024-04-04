import InfoCard from "../InfoCard"
import Section from "../Section"
import Service from "../Service"

const ServicesCards = () => {

    const mainCard = {
        title: 'Ponúkame kompletné riešenia pre domácnosti a firmy',
        content: <>
            <p>
                Či už potrebujete nové zariadenie alebo opravu starého,
                nainštalovať software alebo vytvoriť modernú webstránku, nainštalovať server vo vašej firme,
                sme Vám k dispozícii!
            </p>
            <p>
                Zverte sa nám s Vašimi požiadavkami, a my Vám pomôžeme zmeniť Vaše starosti na radosti.
                Za roky pôsobnosti sme si vybudovali obrovskú sieť spokojných zákazníkov, pridajte sa k nim aj Vy!
            </p>
        </>,
        className: 'rounded-b-none p-5',
        button: {
            text: 'Kontaktujte nás ešte dnes!',
            href: '#contact'
        }
    }

    const services = [
        {
            title: 'Predaj výpočtovej techniky',
            content: 'Nájdete u nás širokú škálu výpočtovej techniky, či už novej alebo profesionálne repasovanej za tie najlepšie ceny. Príďte sa pozrieť na výber na našu predajňu!',
            img: './img/services/pc.gif'
        },
        {
            title: 'Servis výpočtovej techniky',
            content: 'Nájdete u nás širokú škálu výpočtovej techniky, či už novej alebo profesionálne repasovanej za tie najlepšie ceny. Príďte sa pozrieť na výber na našu predajňu!',
            img: './img/services/repair.gif'
        },
        {
            title: 'Kamerové systémy',
            content: '',
            img: './img/services/cam.gif'
        },
        {
            title: 'Tvorba webových prezentácií a kompletných riešení pre firmy',
            content: 'Začínate podnikať a nemáte sa ako prezentovať na internete? Alebo Vám príde Vaša stránka príliš stará, nemoderná, a máte pocit že Vás to už neodzrkadluje? Neváhajte sa nám ozvať, a my Vám nájdeme čo najvhodnejšie riešenie!',
            img: './img/services/code.gif'
        }
    ]

    return (
        <Section id='services'>
            <InfoCard
                title={ mainCard.title }
                button={ mainCard.button }
                className={ mainCard.className + ' mb-5' }
            >
                { mainCard.content }
            </InfoCard>
            {
                services.map((s, i) => {
                    return <Service key={i} order={i} title={s.title} text={s.content} img={s.img}/>
                })
            }
          </Section>
    )
}

export default ServicesCards