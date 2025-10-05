import { useState } from "react";

const ToggleButton =()=>{
    const [isOn, setOn] = useState();
    const taggle =()=>{
        setOn(!isOn)
    }
    return(
    <>
    <h2> Nalka wuu {isOn? 'Daaranyahay' : 'Densanyahay' }</h2>
    <button onClick={taggle}>  {isOn? 'Demi' : 'Daar' }</button>
    </>)
    // The button is Turn
}
export default ToggleButton;