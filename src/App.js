
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Room from './Pages/Room';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/room/:roomid" element={<Room/>}/>
      </Routes>
    </div>
  );
}

export default App;
