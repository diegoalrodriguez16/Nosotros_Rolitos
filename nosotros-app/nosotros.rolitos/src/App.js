
import './App.css';
import Nosotros from './componentes/Nosotros.js'

function App() {
  return (
    <div className='App'>
      <div className= 'contenedor-principal'>
        <h1>Nuestra empresa</h1>
        <Nosotros 
        nombre='Reino Rolitos'
        imagen='Nosotros (2)'
        informacion='Acerca de nosotros'
        texto='Nuestra idea nace de una necesidad de la comunidad, pero ante todo de una lucha que se da por proteger los derechos que tienen los animales de nuestro país. En Reino Rolitos trabajamos en conjunto con las organizaciones que ayudan día a día a nuestros animales que son vulnerados (maltratados o abandonados).' />
    
        <Nosotros 
        nombre='Mision'
        imagen='mision'
        informacion='Nuestro proposito'
        texto='Somos una empresa que ofrece y distribuye productos que van orientados a satisfacer las necesidades y ofrecer soluciones integrales a los tenedores y sus animales de compañía. ' />

        <Nosotros 
        nombre='Vision'
        imagen='vision'
        informacion='Nuestro objetivo'
        texto='Para el 2025, Reino Rolitos se posicionará en el mercado colombiano, siendo altamente reconocida por la calidad de nuestros productos, el servicio que brindamos a nuestros clientes, el bienestar que otorgamos a todos los animales de compañía y de calle, además del compromiso social y ambiental que tenemos con nuestros grupos de interés.' />
    </div>
    </div>
  );
}

export default App;
