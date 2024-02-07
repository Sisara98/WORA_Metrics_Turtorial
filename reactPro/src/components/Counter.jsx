import { useState } from "react";

/* export default function Counter(){
    const [count,setCount] = useState(0);

    function Increment(){
        setCount(count + 1);
    }
    function Decrement(){
        setCount(count - 1);
    }

    return(
        <div>
            
           <h1> Count Value is: {count} </h1>
           <button onClick={Increment}> Increment</button>
           <button onClick={Decrement}> Decrement</button>
        </div>
    )
} */

// ------------------------ multiple states in react ------------------//

export default function Counter(){
    const [count,setCount] = useState(0);
    const [incrementBy,setIncrementBy] = useState(5);

    function Increment(){
        setCount(incrementBy + 1);
    }
    function Decrement(){
        setCount(incrementBy - 1);
    }

    function increaseIncrement(){
        setIncrementBy(incrementBy + 1);
    }
    function decreaseDecrement(){
        setIncrementBy(incrementBy - 1);
    }

    return(
        <div>
            
           <h1> Count Value is: {count} </h1>
           <button onClick={Increment}> Increment</button>
           <button onClick={Decrement}> Decrement</button>

           <h1> We are increasing the value by: {incrementBy} </h1>
           <button onClick={increaseIncrement}> Increase Increment</button>
           <button onClick={decreaseDecrement}> Increase Decrement</button>
        </div>
    )
} 