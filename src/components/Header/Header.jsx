import './Header.scss'

function Header() {
    return (
    <header>
        <div>
            <p className='header-logo'>Jessica Menigand</p>
        </div>
        <nav className='header-nav'>
            <ul className='header-ul'>
                <li><a href="#about">Présentation</a></li>
                <li><a href="#skills">Compétences</a></li>
                <li><a href="#projects">Projets</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>
)};

export default Header