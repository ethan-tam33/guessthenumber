import Chat from '../components/Chat.js'

function Home(props) {
    return (
        <>
            <h1>Guess the Number</h1>

            <p>The chosen number is between and including 0 and 100.</p>

            <Chat number={props.number}></Chat>
        </>
    )
}

export default Home