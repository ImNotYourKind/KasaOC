import { useNavigate } from 'react-router-dom';

function Apropos() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>A Propos</h1>
      <button onClick={() => navigate('/')}>Retour à l'accueil</button>
      <button onClick={() => navigate('/Location')}>Location</button>
    </div>
  );
}

export default Apropos;