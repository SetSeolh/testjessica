import './App.css'
import Header from "./components/Header/Header";
import Presentation from './components/Presentation/Presentation';
import Competences from './components/Competences/Competences';

function App() {
  return (
    <div>
      <Header/>{/* j'aimerai le sortir de la div pour ne pas subir le margin */}
      <main className='main-home'>
        <Presentation />
        <Competences />
      </main>
    </div>
  );
}

export default App