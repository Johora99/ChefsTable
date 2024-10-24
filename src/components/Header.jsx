

export default function Header() {
  return (
    <div className="container w-11/12 mx-auto py-5 md:py-10">
       <div className="navbar">
  <div className="navbar-start">
    <h3 className="text-customPurple text-2xl md:text-3xl font-bold">Recipe Calories</h3>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 *:text-customPurple *:text-opacity-[0.7] *text-base *:font-normal">
       <li><a>Home</a></li>
        <li><a>Recipes</a></li>
        <li><a>About</a></li>
        <li><a>Search</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <div className="lg:flex items-center gap-3 hidden">

    <div className="flex gap-2 items-center bg-customPurple bg-opacity-[0.05] px-6 py-3 rounded-full">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-customPurple text-opacity-[0.7]">
      <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
      </svg>
      <input type="search" name="" id="" placeholder="Search" className="bg-transparent focus-visible:outline-0" />
    </div>
      <div className="bg-springGreen w-12 h-12 rounded-full relative">

      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 absolute transform top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      </svg>
      </div>
    </div>
     <div className="dropdown ">
      <div tabindex="0" role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabindex="0"
        className="menu menu-sm dropdown-content rounded-box mt-3 w-52 p-2 shadow *:text-customPurple *:text-opacity-[0.7] *text-base *:font-normal right-0 z-50">
        <li><a>Home</a></li>
        <li><a>Recipes</a></li>
        <li><a>About</a></li>
        <li><a>Search</a></li>
      </ul>
    </div>
  </div>
      </div>
      <div className="flex items-center gap-2 lg:hidden justify-center mt-2">
      
    <div className="flex gap-2 items-center bg-customPurple bg-opacity-[0.05] px-3 py-2 rounded-full">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-customPurple text-opacity-[0.7]">
      <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
      </svg>
      <input type="search" name="" id="" placeholder="Search" className="bg-transparent focus-visible:outline-0" />
    </div>
      <div className="bg-springGreen w-8 h-8 rounded-full relative ">

      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 absolute transform top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      </svg>
      </div>
    </div>

    </div>
  )
}
