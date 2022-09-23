import ImgPerfil from "./img-perfil"
import "./story.css"

export default function Story(){
  return(
    <div>
      <div className="Story">
        <div className="img-perfiles">
          <ImgPerfil name={"fredy"} id={1} size={"mediun"}/>
          <ImgPerfil name={"ale"} id={2} size={"mediun"} />
          <ImgPerfil name={"ronal"} id={3} size={"mediun"}/>
          <ImgPerfil name={"cris"} id={4} size={"mediun"}/>
          <ImgPerfil name={"martin"} id={5} size={"mediun"}/>
          <ImgPerfil name={"gustavo"} id={6} size={"mediun"}/>
          <ImgPerfil name={"gustavo"} id={6} size={"mediun"}/>
          <ImgPerfil name={"gustavo"} id={6} size={"mediun"}/>
        </div>

      </div>

    </div>
  )
}