import Publication from "./publications/publication"
import "./publications.css"
import { useState,useEffect } from "react"
export default function Publications(){
  const [comments,setComments]=useState(null)

  useEffect(()=>{
    const getComment= async()=>{
      const data= await fetch('https://jsonplaceholder.typicode.com/comments')
      const json = await data.json()
      setComments(json)
    }
    getComment()
    console.log(comments)
  },[])

  return(
    <div className="publications">

      {
        comments.forEach(element => {
          
          <Publication comment={element.body}/>
        })
      }
    </div>
    
  )
}