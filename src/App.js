import { useLocation } from 'react-router-dom';
import './App.css';
import { Footer, Nav } from './components';
import { Routes } from './routes';
function App() {
  const location = useLocation()
  return (
    <div className="bg-[#f1f1f1]">
      <div className="flex flex-col min-h-screen md:w-3/5 w-full mx-auto ">
        {location.pathname !== "/placeorder" && <Nav />}
        <Routes />
        {location.pathname !== "/placeorder" && <Footer />}
      </div>
    </div>
  );
}

export default App;
