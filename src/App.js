import { useState, useEffect } from "react"; 

/*function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("")
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  useEffect(() => {
    console.log("I run only once.");
  }, []);
  useEffect(() => {
    console.log("I run when 'keyword' changes."); 
  }, [keyword]);
  useEffect(() => {
    console.log("I run when 'counter' changes."); 
  }, [counter]);
  useEffect(() => {
    console.log("I run when keyword & counter change");
  }, [keyword, counter]);
  return (
    <div>
      <input 
      value={keyword}
      onChange={onChange} 
      type="text" 
      placeholder="Search here..." 
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
} */

/* function Hello(){
  useEffect(() => {
    console.log("hi :)");
    return () => console.log("bye :(");
  }, []);
  return <h1>Hello</h1>;
} */

/* function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
  <div>
    {showing ? <Hello /> : null}
    <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
  </div>
  );
} */

/* ToDoList

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if(toDo === "") {
      return;
    }
    setToDos((currentArray) => [toDo, ...currentArray]);
    setToDo("");
  };
  return (
  <div>
    <h1>My ToDos ({toDos.length})</h1>
    <form onSubmit={onSubmit}>
      <input 
        onChange={onChange} 
        value={toDo} 
        type="text" 
        placeholder="Write your to do..." 
        />
        <button>Add To Do</button>
    </form>
    <hr />
      <ul>
        {toDos.map((item, index) => (
        <li key={index}>{item}</li>
        ))}
      </ul>
  </div>
  );
} */

// Coin Tracker
function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([])
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
    .then((response) => response.json())
    .then((json) => {
      setCoins(json);
      setLoading(false);
    });
  }, []);
  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong> 
        ) : (       
      <select>
        {coins.map((coin) => (
          <option>
            {coin.name} ({coin.symbol}) : ${coin.quotes.USD.price} USD
          </option>
          ))}
      </select>
      )}
    </div>
  );
}


export default App;
