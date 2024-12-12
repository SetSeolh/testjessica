import './Competences.scss'
import frontend from '../../assets/outils-web-dev-frontend.webp'
import backend from '../../assets/outils-web-dev-backend.webp'

function Competences() {
    return (
        <section id='skills'>
            <h2>Mes compétences</h2>
            <div className='skills-div'>
                <figure>
                    <img className='img-skills-frontend' src={frontend} alt="logos d'outils front-end"></img>
                <figcaption>Front-end</figcaption>
                </figure>
                <figure>
                    <img className='img-skills-backend' src={backend} alt="logos d'outils back-end"></img>
                <figcaption>Back-end</figcaption>
                </figure>
            </div>
            <h3>Front-End</h3>
            <p>Ma formation de Développeur Web orientée sur des projets concrets, m&apos;a permis de concevoir des sites web reponsives et dynamiques, adaptés à tous les écrans. 
                En me basant sur les maquettes graphiques des projets, j&apos;ai principalement travaillé avec des technologies clés comme <strong>HTML, CSS, JavaScript et React</strong> pour concevoir des solutions performantes et attractives.</p>
            <h3>Back-End</h3>
            <p>Créer des API et des bases de données (pour développer des sites complets et dynamiques et assurer le bon fonctionnement côté serveur (développement back-end avec NodeJS, Express et MongoDB).)</p>
            <p>Optimisesr les performances et réaliser la maintenance de sites web déjà existants (pour permettre leur fonctionnement optimal et une bonne visibilité sur les moteurs de recherche (SEO).)</p>
        </section>
    )
}

export default Competences