import './Projets.scss'
import {useRef} from "react";
import Booki from '../../assets/Booki.webp'
import NinaCarducci from '../../assets/NinaCarducci.webp'

function Projets() {
    const showButtonRef = useRef(null);
    const dialogRef = useRef(null);

  const handleClick = () => {
    dialogRef.current.showModal();
  };
    return(
        <section id='projects'>
            <h2>Mes projets (experiense?)</h2>
            <div className='projects-div'>
            <button ref={showButtonRef} onClick={handleClick}>
                <img src={Booki} alt="Print écran du ma version de Booki"></img>
            </button>
            <dialog ref={dialogRef}>
                <img src={Booki} alt="Print écran du ma version de Booki"></img>
                <p>Text en rapport avec Booki</p>
                <button onClick={() => dialogRef.current.close()}>Fermer</button>
            </dialog>
            </div>
            <div className='projects-div'>
            <button ref={showButtonRef} onClick={handleClick}>
                <img src={NinaCarducci} alt="Print écran du site Nina Carducci"></img>
            </button>
            <dialog ref={dialogRef}>
                <img src={Booki} alt="Print écran du site Nina Carducci"></img>
                <p>Text en rapport avec Nina Carducci</p>
                <button onClick={() => dialogRef.current.close()}>Fermer</button>
            </dialog>
            </div>
        </section>
    )
}

export default Projets