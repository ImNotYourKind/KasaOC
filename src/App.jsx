import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Accueil from './pages/Accueil';
import Apropos from './pages/Apropos';
import Location from './pages/Location';
import Error404 from './pages/Error404';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Accueil/>} />
        <Route path="/Apropos" element={<Apropos/>} />
        <Route path="/location/:id" element={<Location/>} />
        <Route path="/404" element={<Error404/>} />
        <Route path="*" element={<Error404/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;