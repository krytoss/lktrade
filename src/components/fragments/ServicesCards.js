import InfoCard from "../InfoCard"

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

    const smallCards = [
        {
            title: 'Predaj a servis výpočtovej techniky',
            content: 'Nájdete u nás širokú škálu výpočtovej techniky, či už novej alebo profesionálne repasovanej za tie najlepšie ceny. Príďte sa pozrieť na výber na našu predajňu!',
            className: 'rounded-t-none rounded-b-none sm:rounded-br-none sm:rounded-bl-lg p-5 text-center'
        },
        {
            title: 'Tvorba softwarových riešení na mieru',
            content: 'Neváhajte sa nám ozvať s Vašim problémom, a my Vám na neho nájdeme čo najvhodnejšie riešenie!',
            className: 'rounded-t-none rounded-b-none p-5 text-center'
        },
        {
            title: 'Kamerové systémy',
            content: '',
            className: 'rounded-t-none rounded-b-lg sm:rounded-bl-none sm:rounded-br-lg p-5 text-center'
        }
    ]

    return (
        <section id='services'>
            <InfoCard
                title={ mainCard.title }
                button={ mainCard.button }
                className={ mainCard.className }
            >
                { mainCard.content }
            </InfoCard>
            <div className='grid grid-cols-1 sm:grid-cols-3'>
                {
                    smallCards.map((card, i) => {
                        return <InfoCard
                            key={ i }
                            title={ card.title }
                            className={ card.className }
                        >{ card.content }</InfoCard>
                    })
                }
            </div>
          </section>
    )
}

export default ServicesCards