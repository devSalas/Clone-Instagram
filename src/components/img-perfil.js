import "./img-perfil.css"
export default function ImgPerfil({id,name,size}){
  let Size=""
  if(size==="small"){
    Size="is-small"
  }
  if(size==="mediun"){
    Size="is-mediun"
  }
  if(size==="large"){
    Size="is-large"
  }

  return(
    <div className="img-perfil">
      <img className={Size} src={`https://randomuser.me/api/portraits/men/${id}.jpg`} alt="" />
      {name && <div className="img-name">{name}</div>}
    
    </div>
  )
}