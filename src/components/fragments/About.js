import InfoCard from "../InfoCard"
import Section from "../Section"

const About = () => {
    return (
        <Section id='about'>
            <InfoCard className="text-md">
                <h2 className='text-5xl text-center mb-10'>O nás</h2>
                <p className="mb-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quam turpis, suscipit eget justo nec, scelerisque euismod urna. Suspendisse maximus mi nisl, viverra fringilla erat accumsan ac. Praesent sodales nec nulla et posuere. Nullam egestas turpis venenatis ante iaculis, tristique convallis leo consequat. Nulla convallis lorem in suscipit consectetur. In commodo justo massa, vitae pellentesque urna interdum ornare. Vivamus a ullamcorper risus. Sed laoreet risus in condimentum blandit. Integer viverra metus a neque accumsan, pellentesque condimentum justo vehicula. Ut ut eleifend orci, in auctor felis. Nunc quis faucibus massa, in imperdiet magna. Proin euismod commodo ante, et dictum nisl sagittis ultrices. Praesent in sollicitudin eros. Pellentesque lobortis nisl et orci ornare ultrices. Fusce porta risus et eros varius varius. Nulla porta, eros fermentum efficitur pretium, augue ligula iaculis velit, eget lobortis arcu urna at nibh.
                </p>
                <p>
                    Sed ullamcorper hendrerit rhoncus. Mauris sodales sodales metus a pretium. Nam condimentum nisl iaculis ipsum tristique, non maximus mi blandit. Integer consequat, sem ut pharetra congue, quam mauris tempor felis, in bibendum tortor lorem in eros. Aenean vel sem in turpis auctor varius ac nec urna. Cras id est sed enim pharetra aliquet. Nam ipsum metus, tempor et posuere vel, mollis eu tellus. Sed sollicitudin fringilla aliquet. Nullam faucibus elit sed dui consectetur, eu rutrum augue mollis. Nullam a lorem nunc. Donec at fringilla tellus. Nullam blandit diam at nisl condimentum iaculis. Etiam lacinia libero ante. Duis et mi laoreet, dapibus eros ut, imperdiet quam.
                </p>
            </InfoCard>
        </Section>
    )
}

export default About