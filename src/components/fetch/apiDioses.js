export const getData=async ()=>{
  const res= await fetch("http://localhost:5000/");
  const json = await res.json();
  console.log(json)
}

