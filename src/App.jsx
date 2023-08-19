import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Cards from './components/Card';


function App() {
  
  return (
    <>
      <Header title="Cat's Family"/>

      <article className='flex'>

        <Cards
        image='src\assets\imgs\yasmin.jpeg'
        name='Yasmin'
        description='Traviesa y amorosa, ¿Qué otra razón necesitas? Que su cara de asesina no te asuste, es amor puro.'
        bgColor='dark'
        shortText='Adoptar es amor'
        />

        <Cards
        image='src\assets\imgs\charles.jpeg'
        name='Charles'
        description='Este pequeño está listo para llenar tus días de alegría, ternura y muchisima diversión.'
        bgColor='warning'
        shortText ='Adoptar es diversión'
        />

        <Cards
        image='src\assets\imgs\Max&Sasha.jpeg'
        name='Sasha & Max'
        description='Nacieron para estar juntos, son inseparables y serán el duo perfecto para complementar tu familia.'
        bgColor='danger'
        shortText='Adoptar es unión'
        />

        <Cards
        image='src\assets\imgs\Apollo.jpeg'
        name='Apollo'
        description='¿Buscas un compañero de aventura en la naturaleza? Apollo lo será en todo momento'
        bgColor='success'
        shortText='Adoptar es oportunidad'
        />

      </article>

      <Footer text='Creemos en las segundas oportunidades para los animales, y en este espacio, podrás encontrar a tu o tus compañeros de vida más fieles, para que puedas brindarles esa oportunidad que tanto se merecen.'/>
    </>
  )
}

export default App
