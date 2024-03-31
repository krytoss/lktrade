import { Flowbite } from 'flowbite-react';
import './App.css';
import Header from './components/Header';
import TopBar from './components/TopBar';
import ServicesCards from './components/fragments/ServicesCards';
import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps';

function App() {
  const position = {lat: 48.217882960253505, lng: 18.603501890835982};
  return (
    <Flowbite>
      <div className="App" style={{ minHeight: '400vh' }}>
        <TopBar />
        <Header />
        <div className='container mx-auto'>
          <ServicesCards />
        </div>
        <div className='opacity-40 hover:opacity-90 rounded-lg overflow-hidden'>
          <APIProvider apiKey={ process.env.REACT_APP_GOOGLE_API }>
            <Map
              defaultCenter={position}
              defaultZoom={17}
              style={{
                width: '95%',
                height: '300px',
                margin: '0 auto',
                borderRadius: '20px'
              }}
            >
              <Marker position={position} />
            </Map>
          </APIProvider>
        </div>
      </div>
    </Flowbite>
  );
}

export default App;
