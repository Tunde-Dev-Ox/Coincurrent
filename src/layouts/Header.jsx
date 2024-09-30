import '../css/header.css';

function Header() {
    return (
        <header className="app-header">
            <div className="header-inner-wrapper">
                <div className="logo-wrapper">
                    <a href="#" className="logo-link">
                       CoinCurrent
                    </a>
                </div>
                <nav className="nav">
                    <ul className="nav-list">
                        <li className="nav-item">
                            <a href="https://github.com/Tunde-Dev-Ox" target="_blank" rel="noopener noreferrer">
                               <img src="/assets/github-svgrepo-com.svg" alt="github" />
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="https://twitter.com/TundeDevOx" target="_blank" rel="noopener noreferrer">
                                <img src="/assets/twitter-svgrepo-com.svg" alt="twitter" />
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="https://www.linkedin.com/in/tunde-oladipupo-7b1b3b1a2/" target="_blank" rel="noopener noreferrer">
                                <img src="/assets/linkedin-svgrepo-com.svg" alt="linkedin" />
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;