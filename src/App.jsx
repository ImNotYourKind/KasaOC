import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Accueil from './pages/Accueil';
import Apropos from './pages/Apropos';
import Location from './pages/Location';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Accueil/>} />
        <Route path="/Apropos" element={<Apropos/>} />
        <Route path="/Location" element={<Location/>} />
      </Routes>
    </Router>
  );
}

export default App;