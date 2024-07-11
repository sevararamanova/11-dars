
import  './App.css';
import Nav from './components/nav/Nav.jsx';
import Hero from './components/hero/Hero.jsx';
import Cards from './components/cards/Cards.jsx';
import Footer from './components/footer/Footer.jsx'
import Details from './components/Details.jsx'


function App() {

  return (
    <div className='container'>
     <Nav/>
     <Hero/>
     <Cards/>
     <Footer/>
      <Details/>
    </div>
  )
}

export default App
