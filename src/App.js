import { Flowbite } from 'flowbite-react'
import './App.css'
import Header from './components/fragments/Header'
import TopBar from './components/fragments/TopBar'
import ServicesCards from './components/fragments/ServicesCards'
import Contact from './components/fragments/Contact'
import About from './components/fragments/About'

function App() {
  return (
    <Flowbite>
      <div className='fixed-bg'></div>
      <div id='home' className="App" style={{ minHeight: '400vh' }}>
        <TopBar />
        <Header />
        <div className='container mx-auto space-y-20'>
          <About />
          <ServicesCards />
          <Contact />
        </div>
      </div>
    </Flowbite>
  );
}

export default App;
