
//............. Conditional component JSX .............. // 
/* 
export default function ConditionalCompoenet() {
  const display = false;

  if (display) {
    return (
      <div>
        <h3>This is component</h3>
      </div>
    );
  } else {
    return (
      <div>
        <h3>Code everyday!</h3>
      </div>
    );
  }
} */

import Wellcome from "./Wellcome";
import Code from "./Code"

/* // ---------- conditionally render components --------//
export default function ConditionalCompoenet(){
    const display=true;

    if(display){
        return(
            <Wellcome />
        )
    }else{
        return(
            <Code />
        )
    }
}
 */

// ------------ Conditional rendering using element variables -------- //

/* export default function ConditionalCompoenet(){
    let Message1 = <h1>This is message 1</h1> 
    let Message2 = <h1>This is message 2</h1> 

    const Display = true;
    if(Display){
        return Message1;
    }else{
        return Message2;
    }
} */

/* // ------- do it using one return statement ----------//
export default function ConditionalCompoenet(){
    let Message

    const Display = true;
    if(Display){
         Message = <h1>This is message 1 </h1>
    }else{
        Message = <h1>This is message 1 </h1>
    }
    return Message;
} */

// ------- Ternary operator ----------//
export default function ConditionalCompoenet(){

    const Display = true;
    return Display ? <h1>Wellcome</h1> : <h1>Kandy</h1>
   
}