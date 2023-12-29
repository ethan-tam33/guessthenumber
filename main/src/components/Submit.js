import OpenAI from "openai";

// make sure to specify to chatgpt to only answer yes/no questions in a yes or no format.

// const openaiApiKey = process.env.OPENAI_API_KEY;
// const openai = new OpenAI({apiKey : openaiApiKey});
const openai = new OpenAI();

async function askChatGPT(input) {
    const completion = await openai.chat.completions.create({
        messages: [{ role: "system", content: input }],
        model: "gpt-3.5-turbo",
      });

    return completion[0].message.content;
}


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

    // send user input to chatgpt
    const chatGPTOutput = askChatGPT(userInput + " Answer only with just yes or no.");
    // const chatGPTOutput = "Yes."

    // chatGPT output appears onscreen
    // showText(chatGPTOutput)
    showText(chatGPTOutput)

    console.log(userInput)

    // append new question to questions asked
    addNewQuestion(userInput, chatGPTOutput);

    // check if user found the correct number
    if (userInput.includes(' ' + number + ' ') || userInput.includes(' ' + number + '?')) {
        solved = true;
        questions++;
        if (questions == 1) {
            showText("Congrats, the number was " + number + "! You asked " + questions + " question." )
        } else {
            showText("Congrats, the number was " + number + "! You asked " + questions + " questions." )
        }
        return;
    }
}

export default submitForm