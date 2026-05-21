import React from 'react'
import Light from '../assets/LightMode.png'
import Dark from '../assets/Dark-Mode.png'
const Darkmode = () => {
  const[theme, setTheme]=React.useState(localStorage.getItem("theme")
||  "light");

React.useEffect(() => {
  const element = document.documentElement;
  
  if (theme === "dark") {
    element.classList.add("dark");
  }else{
    element.classList.remove("dark");
  }
  localStorage.setItem("theme", theme)
},[theme]);

  return(
    <div>
      <img
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      src={Dark}
      alt='Light'
      className={`w-14 cursor-pointer mt-2  absolute  ${
        theme === "dark" ? "opacity-0" : "opacity-100"}
        transition-all duration-300`}
      />
       <img
       onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      src={Light}
      alt='Dark'
      className={`w-14 cursor-pointer mt-4   ${
        theme === "light" ? "opacity-0" : "opacity-100"}
        transition-all duration-300`}
      />
    </div>
  )
}
 
export default Darkmode
