import { Flowbite } from 'flowbite-react';
import './App.css';
import Header from './components/Header';
import TopBar from './components/TopBar';
import ServicesCards from './components/fragments/ServicesCards';

function App() {
  return (
    <Flowbite>
      <div className="App" style={{ minHeight: '400vh' }}>
        <TopBar />
        <Header />
        <div className='container mx-auto'>
          <ServicesCards />
        </div>
      </div>
    </Flowbite>
  );
}

export default App;
