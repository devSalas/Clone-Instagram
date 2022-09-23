
import CardSuggestion from "./card-suggestion"
import "./suggestions.css"
export default function Suggestions(){
  return(
    <div className="suggestions">
      <div>
        <div>Suggestions For You</div>
        <div>Follow</div>
      </div>
      <CardSuggestion id={13}/>
      <CardSuggestion id={14}/>
      <CardSuggestion id={15}/>
      
    </div>
    
  )
}