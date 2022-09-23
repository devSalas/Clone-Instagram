import ImgPerfil from "../img-perfil";
import Description from "./description";
import "./publication.css"
import MoreVertIcon from '@mui/icons-material/MoreVert';
export default function Publication({name,comment}){
  
  return(
    <div className="publication">
      <hr /> 
    <div className="flex">
      <div className="flex">
        <ImgPerfil id={32} size={"small"}/>
        <span>{name || "esteban"}</span>        
      </div>
      <MoreVertIcon/>
    </div>
    <img className="publication-img" src="http://placeimg.com/470/587/animals" alt="" />
    <Description comment={comment} />
    </div>
  )
}