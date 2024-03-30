import InfoCard from "../InfoCard"

const ServicesCards = () => {

    const mainCard = {
        title: 'Nejaký text',
        content: 'Ďaľší text',
        className: 'rounded-b-none'
    }

    const smallCards = [
        {
            title: 'Predaj a servis výpočtovej techniky',
            content: 'Ďaľší text',
            className: 'rounded-t-none rounded-br-none'
        },
        {
            title: 'Tvorba SW na mieru',
            content: 'Ďaľší text',
            className: 'rounded-t-none rounded-b-none'
        },
        {
            title: 'Kamerové systémy',
            content: 'Ďaľší text',
            className: 'rounded-t-none rounded-bl-none'
        }
    ]

    return (
        <>
            <InfoCard
                title={ mainCard.title }
                content={ mainCard.content }
                button={{
                text: 'klik',
                href: '#'
                }}
                className={ mainCard.className }
            />
            <div className='grid grid-cols-3'>
                {
                    smallCards.map((card, i) => {
                        return <InfoCard
                            key={ i }
                            title={ card.title }
                            content={ card.content }
                            className={ card.className }
                        />
                    })
                }
            </div>
          </>
    )
}

export default ServicesCards