import { useState } from "react";
const addItem=()=>{
    const [items, setItems ] = useState(["Moos", "Liin"])

    const kudar =()=>{
        setItems([...items, "Qare"])
    }
    return(
        <>
        <ul>
          {
           items.map(item => (
            <li>{item}</li>
           )) 
          }
        </ul>
        <button onClick={kudar}>kudar Qare</button>
        </>
    )



}
export default addItem;