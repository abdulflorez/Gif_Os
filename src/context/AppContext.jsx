import { createContext, useState } from 'react';

export const AppContext = createContext();

export function AppProvider(props) {
    const [darkMode, setDarkMode] = useState(false);
    const [search, setSearch] = useState("")
    const [btn, setBtn] = useState(false)
    const [inputSelect, setInputSelect] = useState(false)
    const [dataSuggest, setDataSuggest] = useState([])
    const [gifos, setGifos] = useState([]);
    const [textResult, setTextResult ] = useState("Realiza tus busquedas de GIFs")

    return(
        <AppContext.Provider value={{darkMode, setDarkMode,
                                     search, setSearch,
                                     btn, setBtn,
                                     inputSelect, setInputSelect,
                                     dataSuggest, setDataSuggest,
                                     gifos, setGifos,
                                     textResult, setTextResult
                                    }
                                }
        >
            {props.children}
        </AppContext.Provider>
    )
}