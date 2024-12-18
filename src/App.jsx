import './App.css'
import Header from "./components/Header/Header";
import Presentation from './components/Presentation/Presentation';
import Competences from './components/Competences/Competences';
import Projets from './components/Projets/Projets';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <Header/>
      <main className='main-home'>
        <Presentation />
        <Competences />
        <Projets />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App