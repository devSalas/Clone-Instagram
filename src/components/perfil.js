import ImgPerfil from "./img-perfil"
import "./perfil.css"
export default function Perfil(){
  return(
    <>
      <div className="perfil">
        <ImgPerfil  size={"mediun"} id={24}/>
        <div className="user">
          <b>esteban_tubebo </b> <br/>
          Esteban Salas Sulca
        </div>
      <div className="colorBlue bold">cambiar</div>  
      </div>
      
    </>
  
  )

}