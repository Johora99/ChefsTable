import { useEffect } from "react";
import { useState } from "react"
import Card from "./Card";

export default function Cards({addRecipe}) {
    const [recipes,setRecipes] = useState([]);
    useEffect(()=>{
        fetch('recipes.json')
        .then(res => res.json())
        .then(data => setRecipes(data))
    },[])
  return (
    <div className="col-span-2">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

        {
            recipes.map((recipe,inx)=><Card rec = {recipe} key={inx} addRecipe = {addRecipe}></Card>)
        }
        </div>
       
    </div>
  )
}
