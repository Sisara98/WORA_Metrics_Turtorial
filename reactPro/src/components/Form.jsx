import { useState } from "react";

/* export default function Form(){
    const[name,setName] = useState(" ");

    function handleChange(e){
        setName(e.target.value);
        //console.log(e.target.value);
    }

    return (
        <div>
            <form>
                <input onChange={(e)=> handleChange(e)} type="text" value= {name}  />
            </form>
        </div>
    )
} */

//---------- do it easily ----------//

/* export default function Form() {
  const [name, setName] = useState(" ");

  return (
    <div>
      <form>
        <h1>Form</h1>
        <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          value={name}
        />
      </form>
    </div>
  );
} */

// ---------- Handling multiple inputs in React --------------- //

export default function Form(){
    const [name,setName] = useState({FirstName:" " , LastName:" "});

    function handleSubmit(e){
        e.preventDefault();
        console.log(name);
    }

    return (
        <div>
            {name.FirstName} - {name.LastName}
            <form>
                <h1>Form</h1>
                <p>First Name:</p><input onChange={(e)=> setName({ ...name , FirstName:e.target.value })} type="text" value= {name.FirstName}  />
                <p>Last Name:</p><input onChange={(e)=> setName({...name , LastName:e.target.value})} type="text" value= {name.LastName}  />
                <br />
                <button onClick={(e)=> handleSubmit(e)}> Submit</button>
            </form>
        </div>
    )
}
