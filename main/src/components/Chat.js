import React, {useState} from 'react'
import submitForm from './Submit.js'
import "./Chat.css"

function Chat(props) {
    const [questions, setQuestions] = useState(0)

    return (
        <>
            <h3>Number of Questions Asked: {questions}</h3>

            <img src='capybara.png' alt="capybara" class="biggerImage"></img>

            <br></br>
            
            <textarea class="text" type="text" id="userInput" placeholder="Ask Chub the Capybara Yes or No questions to find the number!"></textarea>

            <br></br>
            <br></br>
            <br></br>

            <button class="button" type="button" onClick={() => submitForm(questions, setQuestions, props.number)}>Submit</button>

        </>
    )
    
}

export default Chat