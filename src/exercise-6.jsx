import { useState, useEffect } from "react";
const BedelTitleka = ()=>{
    const[magac, setmagaca] = useState("")
    const[salaan, setNoocaSalaanta] = useState("ASC")

    useEffect(()=>{
        if(!magac){
            document.title="soo dhowoow"
        }else{
            document.title= `${salaan}, ${magac}`
        }
    }, [magac, salaan])

    return(
        <div>
            <div>
                <h2>Geli magaacaga hoos</h2>
                <input type="text"
                value={magac}
                placeholder="magacaa?"
                onChange={(e)=>setmagaca(e.target.value)}
                />
            </div>
            <div>
                <h2>Dooro nooca salaanta</h2>
                <input type="text" 
                value={salaan}
                placeholder="dooro salaan"
                onChange={(e)=> setNoocaSalaanta(e.target.value)}
                />
            </div>
        </div>
    )
}
export default BedelTitleka;