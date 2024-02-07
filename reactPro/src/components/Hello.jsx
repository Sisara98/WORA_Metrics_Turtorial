/* 7 video -------
const name = "Rob";

function displayMessage() {
  return "wow";
} 
*/

/* function Hello(Props) {
    console.log(Props);
  return (
   /*  //<h1>Hello! {name}</h1>
    //<h1>Hi ...I'm {20+5} </h1>
    //<h1>Hi {displayMessage()} </h1>

    <div>
      <h1>Hello! {name}</h1>
      <h1>Hi ...I'm {20 + 5} </h1>
      <h1>Hi {displayMessage()} </h1>
    </div> 

    <div>
        <h1>{Props.message} {Props.name} </h1>
    </div>
  );

  
} */

//       Destructing Props   //

/* function Hello(Props) {
    console.log(Props);
    const {name,message} = Props;
    return (
      <div>
          <h1>{message} {name} </h1>
      </div>
    );
  
    
  }  */

  /* function Hello({name,message,emoji, seatNumbers}) {
    return (
      <div>
          <h1>{message} {name} {emoji} {seatNumbers} </h1>
      </div>
    );
  
    
  } 

 */

// ............... multiple object ...............//

/* function Hello(props){
    return(
        <div>
            <h1>{props.person.name}{props.person.seatNumber}</h1>
        </div>
    )
} */

function Hello({person}){
    return(
        <div>
            <h1>{person.name}{person.seatNumber}</h1>
        </div>
    );
}

export default Hello;
