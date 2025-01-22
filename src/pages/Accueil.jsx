import { useNavigate } from 'react-router-dom';

function Accueil() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Page d'accueil</h1>
      <button onClick={() => navigate('/Apropos')}>A Propos</button>
      <button onClick={() => navigate('/Location')}>Location</button>
    </div>
  );
}

export default Accueil;