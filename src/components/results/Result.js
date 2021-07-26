import "./results.css"
import Gif from "../gif/Gif"
import { request } from '../../utils/URL_requests'
import { AppContext} from '../../context/AppContext'
import { useContext, useEffect } from 'react'

function Results() {
    //GLOBAL states from storages
    const {darkMode} = useContext(AppContext);
    const {search} = useContext(AppContext)
    const {btn, setBtn} = useContext(AppContext)
    const { setDataSuggest } = useContext(AppContext);
    const {gifos, setGifos} = useContext(AppContext);
    const { textResult ,setTextResult } = useContext(AppContext)
    //Fetching with UseEffect to get gifos
    useEffect(() => {
        if (btn) {
            async function gifosRequest() {
                try {
                    setTextResult("...Cargando")
                    const response = await request(search)
                    const data = await response.json()
                    setGifos(data.data)
                    setBtn(false)
                    setDataSuggest([])
                    if(data.data.length === 0){
                        setTextResult(`No hemos hecontrado ${search}`)
                    }
                } catch (error) {
                    alert("UPS, LO SENTIMOS... ha ocurrido un vuelve a intentar o hazlo mas tarde")
                }
            }
            gifosRequest()
        }
    }
        , [btn])
    //.Map to walk the array of gifos state
    const renderGifos = gifos.map((gif) => {
        const urlToGiphy = gif.url;
        const urlToRender = gif.images.downsized.url;
        const titleToAlt = gif.title;
        return <Gif key={gif.id} redirectingUrl={urlToGiphy} localUrl={urlToRender} title={titleToAlt} />
    })
    //DarkMode conditionals
    const backGroundDarkMode = darkMode ? "results darkmode" : "results";
    const textDarkMode = darkMode ? "results__text darkmode" : "results__text";
    //conditional to render gifos
    const renderIFGifos = gifos.length > 0
        ? renderGifos
        : <p className={textDarkMode}>{textResult}</p>;
    return (
        <section className={backGroundDarkMode}>
            {renderIFGifos}
        </section>
    )
}
export default Results