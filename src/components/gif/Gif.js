import "./gif.css";

function Gif({ 
    redirectingUrl, 
    localUrl, 
    title 
}) {
  return (
    <a className="gif" href={redirectingUrl} target="__blank">
      <img className="gif__img" src={localUrl} alt={title} />
    </a>
  );
}

export default Gif;
