
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

function useDarkTheme (classText){
    const {darkMode} = useContext(AppContext);

    return darkMode ? `${classText} darkmode` : classText;
}

export default useDarkTheme