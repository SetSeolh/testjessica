import './Footer.scss'

function Footer () {
    return(
        <footer>
            <nav className='footer-nav'>
            <ul className='footer-ul'>
                <li><a href="#about">Présentation</a></li>
                <li><a href="#skills">Compétences</a></li>
                <li><a href="#projects">Projets</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
        </footer>
    )
}
export default Footer