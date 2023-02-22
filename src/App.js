import './App.scss';
import { Router, Route, Routes, useLocation } from 'react-router-dom';
import Startpage from './pages/Startpage/Startpage';
import Homepage from './pages/Homepage/Homepage';
import { AnimatePresence } from 'framer-motion';

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <AnimatePresence initial={false} mode={"wait"}>
        <Routes location={location} key={location.pathname}>
          <Route path='*' element={<Startpage />}></Route>
          <Route path='/homepage' element={<Homepage />}></Route>
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
