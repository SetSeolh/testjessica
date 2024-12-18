import './Projets.scss'
import ProjetArticle from '../ProjetArticle/ProjetArticle';
import Booki from '../../assets/Booki.webp'
import NinaCarducci from '../../assets/NinaCarducci.webp'
import SophieBluel from '../../assets/SophieBluel.webp'

function Projets() {
    return(
        <section id='projects'>
            <h2>Mes projets</h2>
            <div className='projects-div'>
                <ProjetArticle
                    imgSrc={Booki}
                    imgAlt={'Capture écran du site web Booki'}
                    text={'Projet Booki'}
                />
                <ProjetArticle
                    imgSrc={SophieBluel}
                    imgAlt={'Capture écran du site web Sophie Bluel'}
                    text={'Projet Sophie Bluel'}
                />
                <ProjetArticle
                    imgSrc={NinaCarducci}
                    imgAlt={'Capture écran du site web Nina Carducci'}
                    text={'Projet Sophie Bluel'}
                />
            </div>
        </section>
    )
}

export default Projets