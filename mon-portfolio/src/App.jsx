import './App.css'
import Header from "./components/Header/Header";
import Presentation from './components/Presentation/Presentation';
import Competences from './components/Competences/Competences';
import Projets from './components/Projets/Projets';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div>
      <Header/>{/* j'aimerai le sortir de la div pour ne pas subir le margin */}
      <main className='main-home'>
        <Presentation />
        <Competences />
        <Projets />
        <Contact />
      </main>
    </div>
  );
}

export default App