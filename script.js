let inputTextValue = document.getElementById('inputText');
let result = document.getElementById('result');
let inputText;


window.onload = () => {
    inputText = getValue();
}

inputTextValue.addEventListener("change", (e) => {
    inputText = getValue();
    console.log(inputText);
})

getValue = () => {
    return String(inputTextValue.value);
}

clearFields = () => {
    inputTextValue.value = '';
    result.innerText = '';
}

correctText = () => {
    // Get text value
    let text = inputText.value;

    // call api to correct text
    openai.createCompletion(text, function(error, response) {
        if (error) {
            console.log(error);
        } else {
            let correctedText = response.model.corrected_text;
            result.innerText = correctedText;
        }
    });

}

console.log(inputText)

