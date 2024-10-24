
export default function Card({rec, addRecipe}) {
    const {recipe_id,recipe_name,short_description,recipe_image,ingredients,preparing_time,calories} = rec;
  return (
    
    <div>
     <div className ="card w-full p-6 border-[1px] border-gray border-opacity-[0.2] rounded-2xl">
      <figure>
      <img
      src={recipe_image}
      alt="recipe" className="rounded-2xl"/>
      </figure>
    <div className ="">
    <h4 className = "text-grayLight text-xl font-semibold my-5">{recipe_name}</h4>
    <p className="text-grayLighter text-base font-normal">{short_description}</p>
    <div className="border-b-[1px] border-grayLight border-opacity-[0.1] my-5"></div>
    <div>
        <h5 className="text-grayLight text-lg font-medium mb-3">Ingredients: {ingredients.length}</h5>
        <ul>
           {
             ingredients.map((ingredient,ind) => <li className="list-disc list-inside text-grayLighter text-lg font-normal">{ingredient}</li>)
           }
        </ul>
    </div>
    <div className="border-b-[1px] border-grayLight border-opacity-[0.1] my-5"></div>
    <div className="flex items-center gap-5">
        <div className="flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-grayLight">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            <p className="text-grayLight text-opacity-[0.8] text-base font-normal">{preparing_time}</p>

        </div>
        <div className="flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-grayLight">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z" />
            </svg>
            <p className="text-grayLight text-opacity-[0.8] text-base font-normal">{calories}</p>

        </div>
    </div>
    <div className ="card-actions mt-5">
      <button onClick={()=>addRecipe(rec)} className='text-base lg:text-lg text-customPurple font-semibold bg-springGreen rounded-full py-2 px-4 lg:py-3 lg:px-6 mr-3 border-[1px] border-springGreen mb-3 lg:mb-0'>Want to Cook</button>
    </div>
  </div>
</div>
        </div>
        
  )
}
