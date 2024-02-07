import Fruit from "./Fruit";

export default function Fruits() {
  //   const fruits = ["Apple", "Mango", "Banana", "Orange"];

  const fruits = [
    { name: "Apple", price: 10, emoji: "🍎", soldout: false },
    { name: "Mango", price: 3, emoji: "🥭", soldout: true },
    { name: "Banana", price: 7, emoji: "🍌", soldout: false },
    { name: "Pineapple", price: 2, emoji: "🍍", soldout: true },
  ];

  // ................ Rendering arrays of objects ......................//
  /* 
  //   return <div>{fruits}</div>;
  return (
    <div>
      <ul>
        {fruits.map((fruit) => (
          <li key={fruit}>
            {fruit.name} ${fruit.price} {fruit.emoji}
          </li>
        ))}
      </ul>
    </div>
  ); */

  // ................ Rendering components inside a loop ......................//

  return (
    <div>
      <ul>
        {fruits.map((fruit) => (
          <Fruit
            key={fruit.name}
            name={fruit.name}
            price={fruit.price}
            soldout={fruit.soldout}
          />
        ))}
      </ul>
    </div>
  );
}
