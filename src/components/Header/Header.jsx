import './Header.scss'
import { useState } from 'react';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
    <header>
        <div>
            <p className='header-logo'>Jessica Menigand</p>
        </div>
        <button className='hamburger-btn' onClick={toggleMenu}>
            e
            <span className='hamburger-icon'></span>
        </button>
        <nav className={`header-nav ${isMenuOpen ? 'open' : ''}`}>
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