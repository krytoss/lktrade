import { Flowbite } from 'flowbite-react'
import './App.css'
import Header from './components/Header'
import TopBar from './components/TopBar'
import ServicesCards from './components/fragments/ServicesCards'
import Contact from './components/fragments/Contact'

function App() {
  const position = {lat: 48.217882960253505, lng: 18.603501890835982};
  return (
    <Flowbite>
      <div className="App" style={{ minHeight: '400vh' }}>
        <TopBar />
        <Header />
        <div className='container mx-auto space-y-20'>
          <ServicesCards />
          <Contact />
        </div>
      </div>
    </Flowbite>
  );
}

export default App;
