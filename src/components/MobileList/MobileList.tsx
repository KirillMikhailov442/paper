import React from "react";
import "./MobileList.scss"
import { IoClose } from "react-icons/io5";

interface MobileListProps{
    isOpen: boolean,
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const MobileList: React.FC<MobileListProps> = ({
    isOpen,
    setIsOpen
}) =>{

    return(
        <div className={`mobile-list ${isOpen ? 'mobile-list--show': ''}`}>
            <div className="mobile-list__container">
                <header className="mobile-list__header">
                    <button
                    onClick={()=> setIsOpen(prev => !prev)}
                     className="mobile-list__button"><IoClose/></button>
                </header>
                <ul className="mobile-list__list">
                    <li className="mobile-list__item"><a href="#" className="mobile_list__link">Work</a></li>
                    <li className="mobile-list__item"><a href="#" className="mobile_list__link">About</a></li>
                    <li className="mobile-list__item"><a href="#" className="mobile_list__link">Blog</a></li>
                    <li className="mobile-list__item"><a href="#" className="mobile_list__link">Contact</a></li>
                </ul>
            </div>
        </div>
    )
}

export default MobileList