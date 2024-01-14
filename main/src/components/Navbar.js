import './Navbar.css'
import {auth} from '../firebase.js'

function Navbar() {
    function showProfileTab() {
        document.getElementById('profileTab').style.display = 'block';
    }
      
    function hideProfileTab() {
        document.getElementById('profileTab').style.display = 'none';
    }

    auth.onAuthStateChanged(user => {
        if (user) {
          // User is signed in, show the "Profile" tab
          showProfileTab();
        } else {
          // User is signed out, hide the "Profile" tab
          hideProfileTab();
        }
      });

    return (
        <>
            <nav className="nav">
                <a href="/" className="site-title">Guess the Number</a>

                <ul>
                    <li>
                        <a id='profileTab' href='profile'>Profile</a>
                    </li>
                    <li>
                        <a href='leaderboard'>Leaderboard</a>
                    </li>
                    <li>
                        <a href="/login">Login</a>
                    </li>
                    <li>
                        <a href="/createacc">Create Account</a>
                    </li>
                </ul>
            </nav>
        
        </>
    )

}

export default Navbar