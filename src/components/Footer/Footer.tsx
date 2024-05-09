import "./Footer.scss"

const Footer = () =>{
    return(
        <footer className="footer">
            <div className="footer__container">
                <p className="footer__copyright">© 2022 Paper. Made with ❤️ Webflow, by Kreshnik Beqi</p>
                <nav className="footer-nav">
                    <ul className="footer-nav__list">
                        <li className="footer-nav__item"><a href="#" className="footer-nav__link">Image Licensing</a></li>
                        <li className="footer-nav__item"><a href="#" className="footer-nav__link">Instagram</a></li>
                        <li className="footer-nav__item"><a href="#" className="footer-nav__link">Dribbble</a></li>
                        <li className="footer-nav__item"><a href="#" className="footer-nav__link">Twitter</a></li>
                        <li className="footer-nav__item"><a href="#" className="footer-nav__link">Facebook</a></li>
                    </ul>
                </nav>
            </div>
        </footer>
    )
}

export default Footer