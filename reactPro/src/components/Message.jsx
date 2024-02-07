export default function Message(){

    function handleclick(){
        console.log("Button clicked");
    }

    return (
        <div>
            <button onClick={handleclick}>Click here</button>
        </div>
    )
}