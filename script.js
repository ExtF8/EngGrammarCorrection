let inputTextValue = document.getElementById('inputText');
let result = document.getElementById('result');
let inputText = '';


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
    result.innerText = inputText;
}


