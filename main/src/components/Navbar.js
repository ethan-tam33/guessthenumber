import './Navbar.css'

function Navbar() {
    return (
        <>
            <nav className="nav">
                <a href="/" className="site-title">Guess the Number</a>

                <ul>
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