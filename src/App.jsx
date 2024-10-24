
import { useState } from 'react'
import './App.css'
import Card from './Card'
import Cards from './Cards'
import Banner from './components/Banner'
import Header from './components/Header'
import Recipes from './components/Recipes'
import Sidebar from './Sidebar'


function App() {
  
    const [selectRecipes,setSelectRecipes] = useState([]);
    const [removeRecipes,setRemoveRecipes] = useState([]);
    const [preTime,setPreTime]= useState(0);
    const [calories,setCalories] = useState(0)
    const addRecipe = (id)=>{
      const isExist = selectRecipes.find((item,ind)=> item.recipe_id === id.recipe_id)
      if(isExist){
        alert('Already Selected');
      }
      else{
        const newRecipes = [...selectRecipes,id];
        setSelectRecipes(newRecipes);
      

      }
      

    }
    const removeRecipe = (id) =>{
       const deleteRecipe = selectRecipes.find(recipe =>recipe.recipe_id === id)
       const updateRecipe = selectRecipes.filter(recipe => recipe.recipe_id !== id)
       setSelectRecipes(updateRecipe);
       const newUpdate = [...removeRecipes,deleteRecipe]
       setRemoveRecipes(newUpdate);
    }
    const calculate = (time,cal) =>{
      const calculateTime = preTime + time;
      const calculateCalories = calories + cal;
      setPreTime(calculateTime);
      setCalories(calculateCalories);

    }
  return (
    <>
    <div className='lexend'>

     <Header></Header>
     <Banner></Banner>
     <Recipes></Recipes>
    
     <section className='container w-11/12 mx-auto'>
     <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 mb-20'>
       <Cards addRecipe = {addRecipe}></Cards>
      <Sidebar selectRecipes={selectRecipes} removeRecipe={removeRecipe} removeRecipes={removeRecipes} calculate={calculate} preTime={preTime} calories={calories} ></Sidebar>
     </div>
     </section>
    </div>
    </>
  )
}

export default App
