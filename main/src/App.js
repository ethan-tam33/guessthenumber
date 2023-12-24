import './App.css';
import Chat from './components/Chat.js'

function App() {
  const number = Math.floor(Math.random() * 100);

  console.log(number)
  return (
    <>
      <div class='container'>
        <h1>Guess the Number</h1>

        <p>The chosen number is between and including 0 and 100.</p>

        <Chat number={number}></Chat>
      </div>
      
     
      
    </>
    

  );
}

export default App;
