/* export default function Fruit({ name, price }) {
  return (
    <div>
   <p>Fruit name: {name} {""} 
     Price: {price}</p> 
    </div>
  );
} */

/* // ------ ternary operator used in List items --------//
export default function Fruit({ name, price }) {
    return (
      <>
            { price>5 ? <li>{name} {price}</li> : " " }
      </>
    );
  } */

// ----------- condionally rendering a message using ternaory operator ----------------- //

export default function Fruit({ name, price ,soldout}) {
    return (
      <>
           <li> {name} {price} {soldout ? "Soldout" : " "}</li> 
      </>
    );
  }
