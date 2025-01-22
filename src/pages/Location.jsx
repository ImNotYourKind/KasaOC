import { useNavigate } from 'react-router-dom';

function Location() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Location</h1>
      <button onClick={() => navigate('/')}>Retour à l'accueil</button>
      <button onClick={() => navigate('/Apropos')}>A Propos</button>
    </div>
  );
}

export default Location;