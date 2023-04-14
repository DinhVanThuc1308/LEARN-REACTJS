import { useState,useMemo,useRef } from "react";

function App() {
    const [name,setName] = useState('');
    const [price,setPrice] = useState('');
    const [products,setProducts] = useState([]);
    const nameRef =useRef()

    const handleSubmit = () => {
        setProducts([...products,{
            name,price:+price}
        ]);
        setName('');
        setPrice('');
        nameRef.current.focus();
    }

    const total = useMemo(() => {
        const result = products.reduce((result,product) => {
            return result + product.price;
    },0);
    return result;

},[products]);
return(
        <div>
            <input ref={nameRef} type="text" value={name} onChange={(e) => setName(e.target.value)} /> <br />
            <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} /> <br />
            <button onClick={handleSubmit}>Submit</button> <br />
            <h3>Total: {total}</h3>
            <ul>
                {products.map((product,index) => (
                    <li key={index}>{product.name} - {product.price}</li>
                ))}
            </ul>
        </div>
    )
}
export default App