import './autocomplete.css'
import { AppContext } from '../../context/AppContext'
import { useContext } from 'react'

function AutoComplete ({ recom }) {
    //GLOBAL states
    const { darkMode } = useContext(AppContext);
    const { setSearch } = useContext(AppContext);
    const { btn, setBtn } = useContext(AppContext); 
    const autoSearch = () => {
        setSearch(recom)
        setBtn(!btn)
    }
    //DarkMode Variables
    const autocompleteDarMode = darkMode? "recom darkmode" : "recom";
    return(
        <div className={autocompleteDarMode} onClick={autoSearch} >
            <p>
                {recom}
            </p>
        </div>
    )
};

export default AutoComplete