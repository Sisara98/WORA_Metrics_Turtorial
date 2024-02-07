import Hello from "./components/Hello"
import Fruits from "./components/Fruits";
import ConditionalCompoenet from "./components/ConditionalComponent";
import Message from "./components/Message";
import Counter from "./components/Counter";
import Form from "./components/Form";

function App() {
  //const seatNumber = [1 , 4 , 7];

  // Passing Objects
  const person = {
    name: "Rob",
    message: "Hi",
    emoji: " 👏 ",
    seatNumber: [1,4,7]
  }; 

  return (
    <div className="App">
          {/* <Hello name="Rubi" message="Hi " emoji="👋"  seatNumbers={seatNumber}/>
          <Hello name="Chris" message="Hi " /> */}
           <Hello person = {person}/> 
          <Fruits/>
          <ConditionalCompoenet/>
          <Message/>
          <Counter />
          <br />
          <Form/>
    </div>
  )
}

export default App
