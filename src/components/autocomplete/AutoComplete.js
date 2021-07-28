import './autocomplete.css'
import { AppContext } from '../../context/AppContext'
import { useContext } from 'react'
import useDarkTheme from '../../hooks/useDarkTheme';

function AutoComplete ({ recom }) {
    //GLOBAL states
    const { setSearch } = useContext(AppContext);
    const { btn, setBtn } = useContext(AppContext); 
    const autoSearch = () => {
        setSearch(recom)
        setBtn(!btn)
    }
    //DarkMode Class Conditionals from custom
    const autocompleteDarMode = useDarkTheme("recom");
    return(
        <div className={autocompleteDarMode} onClick={autoSearch} >
            <p>
                {recom}
            </p>
        </div>
    )
};

export default AutoComplete