import ImgPerfil from "./img-perfil";
import "./card-suggestion.css"
export default function CardSuggestion({id,nameCard,followed}){
  return(
    <div className="card-suggestion"> 
    <ImgPerfil id={id} size={"small"}/>
    <div className="card-discription">
      <b>{nameCard ||"ramdon" }</b> <br />{followed || "Suggested for you"}
    </div>
    <div className="colorBlue bold">follow</div>
    </div>
  )
}