import { useState, useEffect } from "react";
const CabirkaShaashada =()=>{
  const[muus, setMuus] = useState({y:0, x:0})
  useEffect(() =>{ const handleDhaqdhaqaaqaMuuska = (e) =>{
    setMuus({x: e.clientX, y: e.clientY});
  };
  window.addEventListener('mousemove', handleDhaqdhaqaaqaMuuska)

  return()=>{
    window.removeEventListener('mousemove', handleDhaqdhaqaaqaMuuska)
  }

  },[])
  return(
    <div>
      <p>Cabirka X: {muus.x}</p>
      <p>Cabirka Y: {muus.y}</p>
    </div>
  )
}
export default CabirkaShaashada;