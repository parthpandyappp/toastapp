import './App.css';
import { Nav } from './components';
import { Routes } from './routes';
function App() {
  return (
    <div className="flex flex-col h-screen min-h-screen w-3/5 mx-auto border">
      <Nav />
      <Routes />
    </div>
  );
}

export default App;
