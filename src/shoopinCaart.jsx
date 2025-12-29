import { useState } from "react"

const ShoopingCaart = ()=>{
    // products
    const [product, setProducts] = useState([])
    // product name
    const [productName, setProductName] = useState("")
    // product price
    const[productPrice, setProductPrice] = useState('')

    const handleAddProduct = () =>{
        if(productName.trim !== 0 && productPrice.trim !==""){
            const newProduct = {
                id: Date.now,
                name: productName,
                price: productPrice,
                quantity:1
            }
            setProducts([...productName, newProduct])
        }
       
    }



return (
    <div>
        <h2>Shoobin Cart fudud</h2>
        <div>
            <h3>ku dar product</h3>
            <input type="text" placeholder="magac productga"/>
            <input type="number" placeholder="Price"/>
            <button onClick={handleAddProduct}>ku darso</button>
        </div>
        {
            product.length > 0 ? (
                <h3>product-ga kujiro cart-ga</h3>
            )
            :<p>halkan waxba kuma jiraan</p>
        }
    </div>
)
}
export default ShoopingCaart