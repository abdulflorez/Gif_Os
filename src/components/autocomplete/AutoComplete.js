import "./autocomplete.css";
import { AppContext } from "../../context/AppContext";
import { useContext } from "react";
import useDarkTheme from "../../hooks/useDarkTheme";

function AutoComplete({ recom }) {
  //GLOBAL states
  const { setSearch, btn, setBtn } = useContext(AppContext);
  //Function for autocomplete the input and auto flag the button for search
  const autoSearch = () => {
    setSearch(recom);
    setBtn(!btn);
  };
  //  //DarkMode Variables with custom Hook
  const autocompleteDarMode = useDarkTheme("recom");
  return (
    <p className={autocompleteDarMode} onClick={autoSearch}>
      {recom}
    </p>
  );
}

export default AutoComplete;
