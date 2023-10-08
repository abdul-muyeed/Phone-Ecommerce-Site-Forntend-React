import { useState } from "react"
import Card from "./Card";
import Header from "./Header";



function Itemcounter() {
    const [count, setCount] = useState(1);
    function increment() {
        setCount(count + 1);
    }
 return <>
    <Card increment={increment}/>
    
    <Header count={count}/>
    </>
  
}

export default Itemcounter