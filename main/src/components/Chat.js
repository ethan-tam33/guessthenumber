import React, {useState} from 'react'

function Chat() {
    const [questions, setQuestions] = useState(0)

    return (
        <>
            <input type="text" id="userInput" placeholder="Type here"></input>
            <> </>
            <button type="button" onclick="submitForm()">Submit</button>
        </>
    )
    
}

export default Chat