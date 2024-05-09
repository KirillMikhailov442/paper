import { useEffect, useState } from 'react';
import './Header.scss'
import { IoMenu } from "react-icons/io5";
import {MobileList} from '@components/index';

const Header = () =>{

    const [scrolled, setScrolled] = useState(0)
    const [isMobileListOpen, setIsMobileListOpen] = useState(false)

    window.addEventListener('scroll', ()=> setScrolled(window.scrollY))

    useEffect(()=>{
        console.log(isMobileListOpen);
        
    }, [isMobileListOpen])

    return(
        <>
        <header className={`header ${scrolled > 200 ? 'header--dark-bg' : ''}`}>
            <div className='header__container'>
                <a className='header__logo' href="#">Paper</a>
                <nav className='nav'>
                    <ul className='nav__list'>
                        <li className="nav__item"><a className='nav__link'>Work</a></li>
                        <li className="nav__item"><a className='nav__link'>About</a></li>
                        <li className="nav__item"><a className='nav__link'>Blog</a></li>
                        <li className="nav__item"><a className='nav__link'>Contact</a></li>
                    </ul>
                    <button
                        onClick={()=> setIsMobileListOpen(prev => !prev)}
                        className='nav__hamburger'><IoMenu/></button>
                </nav>
            </div>
        </header>
        <MobileList isOpen={isMobileListOpen} setIsOpen={setIsMobileListOpen}/>
        </>
    )
}

export default Header