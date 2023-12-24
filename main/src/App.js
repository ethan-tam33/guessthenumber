import './App.css';
import Chat from './components/Chat.js'

function App() {
  const number = Math.floor(Math.random() * 100);

  console.log(number)
  return (
    <>
      <h1>Guess the Number</h1>

      <p>The number is between and including 0 and 100.</p>
      <Chat number={number}></Chat>
    </>
    

  );
}

export default App;
