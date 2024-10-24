
export default function Sidebar({selectRecipes, removeRecipe,removeRecipes,calculate,preTime,calories}) {
    
  return (
    <div className="col-span-1 border-[1px] border-grayLight border-opacity-[0.2] rounded-2xl p-6">
        <div>
            <h3 className="text-center text-grayLight text-2xl font-semibold">Want to cook: 0{selectRecipes.length}</h3>
            <div className="border-b-[1px] border-grayLight border-opacity-[0.1] my-5 w-3/4 mx-auto"></div>
           <div className="overflow-x-auto">
  <table className="table">
    
    <thead>
      <tr className="*:text-grayLighter *:text-base *:font-medium">
        <th></th>
        <th>Name</th>
        <th>Time</th>
        <th>Calories</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
       {
        selectRecipes.map((selectRecipe,index)=>{
          const {recipe_id,recipe_name,short_description,recipe_image,ingredients,preparing_time,calories} = selectRecipe;
            return(
                <>
              <tr className="hover *:text-grayLight *:text-opacity-[0.7] *:text-base *:font-normal" key={index}>
                <th>{index+1}</th>
                <td>{recipe_name}</td>
                <td>{preparing_time}</td>
                <td>{calories}</td>
                <td>
                    <button onClick={()=>{removeRecipe(recipe_id);calculate(preparing_time,calories)}} className='text-sm text-customPurple font-medium bg-springGreen rounded-full py-2 px-3'>Preparing</button>
                </td>
            </tr>
                </>
            )
        })
       }
    </tbody>
  </table>
</div>
        </div>



          <div className="mt-5">
            <h3 className="text-center text-grayLight text-2xl font-semibold">Currently cooking: 0{removeRecipes.length}</h3>
            <div className="border-b-[1px] border-grayLight border-opacity-[0.1] my-5 w-3/4 mx-auto"></div>
           <div className="overflow-x-auto">
      <table className="table">
    
    <thead>
      <tr className="*:text-grayLighter *:text-base *:font-medium">
        <th></th>
        <th>Name</th>
        <th>Time</th>
        <th>Calories</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
       {
        removeRecipes.map((removeRecipe,index)=>{
          const {recipe_id,recipe_name,short_description,recipe_image,ingredients,preparing_time,calories} = removeRecipe;
            return(
                <>
              <tr className="hover *:text-grayLight *:text-opacity-[0.7] *:text-base *:font-normal" key={index}>
                <th>{index+1}</th>
                <td>{recipe_name}</td>
                <td>{preparing_time}</td>
                <td>{calories}</td>
            </tr>
                </>
            )
        })
       }
       <tr className="hover *:text-grayLight *:text-opacity-[0.7] *:text-base *:font-normal">
        <td></td>
        <td></td>
        <td>Total Time ={preTime}</td>
       <td>Total Calories = {calories}  </td>
       </tr>
    </tbody>
  </table>
</div>
        </div>
    </div>
  )
}
