import './header.css'
import {AppContext} from '../../context/AppContext'
import { useContext } from 'react'

function Header(){
    //GLOBAL states from storages
    const {darkMode, setDarkMode} = useContext(AppContext)
    //HANDLER FOR DARM MODE ESTATE
    const handleDarkMode = () => {
        setDarkMode(!darkMode);
    };
    //DarkMode Conditionals
    const textButton = darkMode? "LIGHT MODE" : "DARK MODE"; 
    const logoDarkmode = darkMode? "/resources/logo-mobile-modo-noct.svg" : "/resources/logo-desktop.svg";
    const backgroundDarkMode = darkMode? "header darkmode" : "header";
    const buttonDarkMode = darkMode? "header__btn darkmode" : "header__btn";
    return (
        <header className={backgroundDarkMode}>
            <img className="header__logo" src={logoDarkmode} alt="Logo gifos"/>
            <button className={buttonDarkMode} onClick={handleDarkMode}>{textButton}</button>
        </header>
    )
}

export default Header
