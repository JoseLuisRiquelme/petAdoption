
import 'bootstrap/dist/css/bootstrap.min.css';
import { useMascotas } from "../context/DataContext";

const Home = () => {
  const mascotas = useMascotas(); 
  console.log(mascotas);

  return (
    <div className="home">
      <div className='home__content'>
        <p className='home__hashtag'>#PETCONNECT</p>
        <h2 className='home__title'>Adopta,<br/> no compres </h2>
        <p className='home__description'>
          Explora adopciones en nuestra app. Conectamos corazones peludos con hogares amorosos. Descubre historias conmovedoras y encuentra alegría en cada huella. 
        </p>
        <div className='home__register-container'>
          <span className='home__register'>Crea tu cuenta</span>
          <button className='home__btn'>
            <i className="fa-solid fa-arrow-right-long"></i>
          </button>
        </div>
      </div>

      <div className='home__image-container'>
        <img className='home__image' src='./src/assets/dog-and-cat-free.png'/>
      </div>
      
    </div>
  );
}

export default Home;