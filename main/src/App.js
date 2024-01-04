import './App.css';
import Navbar from './components/Navbar.js'
import Home from './pages/Home.js'
import Login from './pages/Login.js'
import CreateAcc from './pages/CreateAcc.js'
import AuthDetails from './components/auth/AuthDetails.jsx'

function App() {
  const number = Math.floor(Math.random() * 100);
  console.log(number)

  let component
  switch (window.location.pathname) {
    case "/":
      component = <Home number={number}></Home>
      break
    case "/login":
      component = <Login/>
      break
    case "/createacc":
      component = <CreateAcc/>
      break
  }
  return (
    <>
      <div className='container'>

        <Navbar></Navbar>
        {component}
        <AuthDetails></AuthDetails>
        
      </div>
    </>
  );
}

export default App;
