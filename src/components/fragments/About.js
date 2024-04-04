import InfoCard from "../InfoCard"
import Section from "../Section"

const About = () => {
    return (
        <Section id='about'>
            <InfoCard>
                <h2 className='text-5xl text-center'>O nás</h2>
                <p>
                    Sme profesionáli v obore už cez 30 rokov...
                </p>
            </InfoCard>
        </Section>
    )
}

export default About