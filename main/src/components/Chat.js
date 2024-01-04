import React, {useState} from 'react'
import submitForm from './Submit.js'
import "./Chat.css"

function Chat(props) {
    const [questions, setQuestions] = useState(0)

    return (
        <>
            <h3>Number of Questions Asked: {questions}</h3>

            <img src='capybara.png' alt="capybara" className="biggerImage"></img>

            <p id="output"></p>

            <br></br>
            
            <textarea className="text" type="text" id="userInput" placeholder="Ask Chub the Capybara Yes or No questions to find the number!"></textarea>

            <br></br>
            <br></br>
            <br></br>

            <button className="button" type="button" onClick={() => submitForm(questions, setQuestions, props.number)}>Submit</button>
            
            <br></br>
            <br></br>

            <h3>Questions Asked</h3>

            <div id="questions"></div>
        </>
    )
    
}

export default Chat