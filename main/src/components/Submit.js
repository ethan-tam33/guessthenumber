import {updatenumQuestions, getValues} from '../firebase.js'
import axios from 'axios';

// hmm i'd like this function to also allow the text to generate char by char
function showText(output) {
    const hiddenText = document.getElementById('output');
    hiddenText.innerHTML = output;
    hiddenText.style.display = 'block';
}

function addNewQuestion(question, output) {
    const currQuestions = document.getElementById('questions');
    const newQuestion = document.createElement('li');
    newQuestion.textContent = question + " -> " + output;
    currQuestions.appendChild(newQuestion); 
}

function numberAtEnd(question, number) {
    const lenNumber = number.toString().length;
    return question.substr(lenNumber * -1) === number.toString();
}

var solved = false;

function submitForm(questions, setQuestions, number) {
    // get user input
    const userInput = document.getElementById('userInput').value;

    // userInput must contain some string and game cannot be solved already
    if (userInput === "" || solved) {
        return;
    }

    setQuestions(questions + 1)

    // clear textarea once button is clicked
    document.getElementById("userInput").value = "";

    const options = {
        method: 'GET',
        url: 'http://localhost:8000/gpt',
        params: {number: number, userInput: userInput}
    }
    
    axios.request(options).then((response) => {
        const chatGPTOutput = response.data;
        console.log(chatGPTOutput);

        // chatGPT output appears onscreen
        showText(chatGPTOutput)

        console.log(userInput)

        // append new question to questions asked
        addNewQuestion(userInput, chatGPTOutput);

        // check if user found the correct number
        if (userInput === number.toString() || userInput.includes(' ' + number + ' ') || userInput.includes(' ' + number + '?') || (userInput.includes(' ' + number) && numberAtEnd(userInput, number))) {
            solved = true;
            questions++;
            if (questions == 1) {
                showText("Congrats, the number was " + number + "! You asked " + questions + " question." )
            } else {
                showText("Congrats, the number was " + number + "! You asked " + questions + " questions." )
            }
            updatenumQuestions(questions);
            return;
        }
    }).catch((error) => {
        console.error(error);
    })
}

export default submitForm