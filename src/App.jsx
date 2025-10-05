import { useState } from "react";
import ToggleButton from "./toggleButton.jsx"

function App(){
  // const [isVisible, setIsVisible] = useState(false);
  
  // const taggle =()=>{
  //   setIsVisible(!isVisible)
  // }

  // const [name, setName] = useState();
  // const handleChange = (event)=>{
  //   setName(event.target.value)
  // }
  return(
    <>
    {<ToggleButton/>}
    {/* <UsedCard
    name={"Saacid"}
    email={"saaciduu@gmail.com"}
    />
    <UsedCard
    name={"Asmaa"}
    email={"asmaa@gmail.com"}
    />
     <UsedCard
    name={"Axmad"}
    email={"axmad@gmail.com"}
    /> */}
  
    {/* <button 
    onClick={taggle}
    >{isVisible ? 'Hide' : 'Show'} message</button>
    {isVisible && <p>this is taggable message</p>} */}
   
    {/* <input type="text" placeholder="your name" value={name} onChange={handleChange}/>
    <p>Hello: {name}</p> */}
    </>
  )
}
export default App;