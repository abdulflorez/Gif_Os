import './header.css'
import {AppContext} from '../../context/AppContext'
import { useContext } from 'react'
import useDarkTheme from '../../hooks/useDarkTheme';

function Header(){
    //GLOBAL states from storages
    const {darkMode, setDarkMode} = useContext(AppContext)
    //HANDLER FOR DARK MODE ESTATE
    const handleDarkMode = () => {
        setDarkMode(!darkMode);
    };
    //Text for button
    const textButton = darkMode? "LIGHT MODE" : "DARK MODE"; 
    //DarkMode Variables with custom Hook
    const logoDarkmode = darkMode? "/resources/logo-mobile-modo-noct.svg" : "/resources/logo-desktop.svg";
    const backgroundDarkMode = useDarkTheme("header");
    const buttonDarkMode = useDarkTheme("header__btn");
    return (
        <header className={backgroundDarkMode}>
            <img className="header__logo" src={logoDarkmode} alt="Logo gifos"/>
            <button className={buttonDarkMode} onClick={handleDarkMode}>{textButton}</button>
        </header>
    )
}

export default Header
