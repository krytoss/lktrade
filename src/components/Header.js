const Header = () => {

    return (
        <header className="flex align-middle py-5">
            <div className='container mx-auto grid sm:grid-cols-2 grid-cols-1 flex items-center justify-items-center'>
                <h2 className='text-center sm:text-left text-8xl sm:text-5xl lg:text-8xl text-zinc-300'>Otvárame dvere digitálnemu pokroku</h2>
                <img className="hidden sm:block h-4/5" src='/img/mismas.png' alt='' />
            </div>
        </header>
    )

}

export default Header