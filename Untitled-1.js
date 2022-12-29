
// This code is an asynchronous function which is used to handle a form submit event and update the page with the result, using the value inputted by the user. 
// It sets an event listener on a form which takes in user input, converts that input to JSON format and sends it to the '/api/generate' address. 
// If the status of the response is successful, it sets the result to the value of data.result, using the setResult() function defined earlier. 
// If the status of the response is unsuccessful, it throws an error or a new error with the response status code.
// It also sets an event listener on the input element which updates animalInput with the value of e.target.value.
async function onSubmit(event) { // Creates asynchronous function which handles form submit event
    event.preventDefault(); // Prevents default behaviour of submit action- prevents redirect behaviour
    try { // Tries to run following code
      const response = await fetch("/api/generate", { // Sends POST request containing input from user to '/api/generate'
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ animal: animalInput }), // Converts input to JSON format
      });
  
      const data = await response.json(); // Stores response as data in JSON format 
      if (response.status !== 200) { // If response is unsuccessful...
        throw data.error || new Error(`Request failed with status ${response.status}`); // Throws an error or a new error with response status code
      }
  
      setResult(data.result); // Sets result using setResult() function with data.result as argument
      setAnimalInput(""); // Resets animalInput value 
    } catch(error) { // Runs if try statement throws error
      console.error(error); // Logs error
      alert(error.message); // Alerts user to error message
    }
  }
  
  const form = document.querySelector("form"); // Stores HTML form in 'form' constant 
  form.addEventListener("submit", onSubmit); // Sets event listener on form on submit action- will run onSubmit() when form is submitted
  
  const input = document.querySelector("input[name='animal']"); // Stores input element in 'input' constant 
  input.addEventListener("change", (e) => setAnimalInput(e.target.value)); // Sets event listener on input element which changes its value whenever its value is changed- will run setAnimalInput() when value is changed with e.target.value as argument
  
  const resultDiv = document.querySelector(".result"); // Stores HTML element for result localization in 'resultDiv' constant 
  
  function setResult(result) { // Function used to set result variable to given argument
    resultDiv.textContent = result; // Sets result variable in resultDiv element to given argument
  }
  
  let animalInput = ""; // Stores variable containing user's input 
  
  function setAnimalInput(input) {  // Function used to update animalInput variable with given argument 
    animalInput = input; // Sets animalInput variable to given argument 
  }