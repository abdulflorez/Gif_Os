import './search.css'
import AutoComplete from '../autocomplete/AutoComplete'
import { AppContext } from '../../context/AppContext'
import { useContext, useEffect } from 'react'
import { suggest } from '../../utils/URL_requests'
import useDarkTheme from '../../hooks/useDarkTheme'

function Search() {
    //GLOBAL states from storage
    const { darkMode } = useContext(AppContext);
    const { search, setSearch } = useContext(AppContext);
    const { btn, setBtn } = useContext(AppContext);
    const { inputSelect, setInputSelect } = useContext(AppContext);
    const { dataSuggest, setDataSuggest } = useContext(AppContext);
    //HANLDRES
    const handleSearch = (event) => setSearch(event.target.value)
    const handleBtn = () => setBtn(!btn)
    const handleOnFocus = () => setInputSelect(true)
    const handleOnBlur = () => setInputSelect(false)
    const handleKeyEnter = (event) => {
        if (event.keyCode === 13) {
            setBtn(!btn)
        }
    }
    //DarkMode Variables
    const backGroundDarkMode = useDarkTheme("search");
    const titleDarkMode = useDarkTheme("search__title");
    const inputDarkMode = useDarkTheme("search__input");
    const buttonDarkMode = useDarkTheme("search__btn");
    const autocompleteDarkMode = useDarkTheme("search__autocomplete");
    //------ FECHING SUGGEST -----
    useEffect(() => {
        if (inputSelect && search.length > 0) {
            async function suggestions() {
                const response = await suggest(search);
                const data = await response.json();
                setDataSuggest(data.data)
            }
            suggestions()
        }
    }, [inputSelect, search])
    //----- Removing  sugets panel empty
    useEffect(() => {
        if (search.length < 1) {
            setDataSuggest([])
        }
    }, [search])
    //RENDER SUGEST
    const componentAutoCompplete = dataSuggest.map(recommend => {
        return <AutoComplete key={recommend.analytics_response_payload} recom={recommend.name} onClick={() => (console.log(recommend.name))} />
    })
    return (
        <section className={backGroundDarkMode}>
            <h1 className={titleDarkMode}>¡Inspirate y busca los mejores GIFS!</h1>
            <img className="search__img" src="/resources/ilustra_header.svg" alt="search_illustration" />
            <div className="search__container">
                <input
                    className={inputDarkMode}
                    type="text"
                    placeholder="Busca gifs"
                    value={search}
                    onChange={handleSearch}
                    onFocus={handleOnFocus}
                    onBlur={handleOnBlur}
                    onKeyDown={handleKeyEnter}
                />
                <button
                    onClick={handleBtn}
                    className={buttonDarkMode}
                >
                    <img className="search__btn--icon" src="/resources/icon-search.svg" />
                </button>
                <div className={autocompleteDarkMode}>{componentAutoCompplete}</div>
            </div>
        </section>
    )
}

export default Search