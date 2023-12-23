import React, {useState} from 'react'

function Textbox() {
    return (
        <>
            <input type="text" id="userInput" placeholder="Type here"></input>

            <button type="button" onclick="submitForm()">Submit</button>
        </>
    )
    
}

export default Textbox