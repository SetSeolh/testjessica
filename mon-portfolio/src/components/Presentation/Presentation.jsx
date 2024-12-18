import './Presentation.scss'
import imgProfil from '../../assets/photo-de-profil-Jessica-M.webp'

function Presentation() {
    return (
        <section className="banner" id="about"> {/* lien ancré */}
            <div className='div-photo-de-profil'>
                <img className='photo-de-profil' src={imgProfil} alt="Photo de profil de Jessica"></img>
            </div>
            <div className='banner-div-titre'>
                <h1 className="banner-h1">Développeur Web
                </h1>
                <p className="banner-p">Bonjour, je suis Jessica Menigand, développeuse front/backend.<br /> Je place l`expérience utilisateur au cœur de mes priorités, en optimisant chaque projet pour conjuguer performance et satisfaction des utilisateurs.
                    Intégrer une stratégie de conversion dès la conception d`un site web fait partie intégrante de ma démarche, tout en tenant compte des défis techniques liés au développement, 
                    car grace à mon double dîplome de Développeur Informatique et Manager de la stratégie Commerciale et Marketing, je peux allier les deux points de vue. 
                </p>
            </div>
        </section>
    )
};

export default Presentation