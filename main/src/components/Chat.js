import React, {useState} from 'react'
import submitForm from './Submit.js'

function Chat() {
    const [questions, setQuestions] = useState(0)

    return (
        <>
            <h3>Number of Questions: {questions}</h3>

            <input type="text" id="userInput" placeholder="Type here"></input>

            <button type="button" onClick={() => submitForm(questions, setQuestions)}>Submit</button>

            {/* <script src="Submit.js"></script> */}
        </>
    )
    
}

export default Chat