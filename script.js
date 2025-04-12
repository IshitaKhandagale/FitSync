let step = 0;
let formContainer = document.querySelector('.form-container');
let container = document.querySelector('.container');
let question = document.getElementById('question');
let inputField = document.getElementById('inputField');
let dropdown = document.getElementById('dropdown');
let message = document.getElementById('message');

let userData = {};

function nextStep() {
  container.style.display = 'none';
  formContainer.style.display = 'block';
  loadQuestion();
}

function loadQuestion() {
  inputField.style.display = 'block';
  dropdown.style.display = 'none';
  message.innerText = '';

  switch (step) {
    case 0:
      question.innerText = "Hi, hope you're having a nice day. What can I call you?";
      inputField.type = "text";
      inputField.value = '';
      break;
    case 1:
      question.innerText = "What's your age?";
      inputField.type = "number";
      inputField.value = '';
      break;
    case 2:
      if (parseInt(userData.age) < 18) {
        message.innerText = "Sorry, you must be 18 or older to use this app.";
        step = -1; // stop flow
        inputField.style.display = 'none';
        return;
      }
      question.innerText = "Select your gender:";
      inputField.style.display = 'none';
      dropdown.style.display = 'block';
      dropdown.innerHTML = `
        <option value="" disabled selected>Select gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Other">Other</option>`;
      break;
    case 3:
      question.innerText = "What's your weight (in kg)?";
      inputField.type = "number";
      inputField.value = '';
      inputField.style.display = 'block';
      dropdown.style.display = 'none';
      break;
    case 4:
      question.innerText = "What's your height (in cm)?";
      inputField.type = "number";
      inputField.value = '';
      break;
    case 5:
      question.innerText = "What are your fitness goals?";
      inputField.style.display = 'none';
      dropdown.style.display = 'block';
      dropdown.innerHTML = `
        <option value="" disabled selected>Select a goal</option>
        <option value="Weight Loss">Weight Loss</option>
        <option value="Weight Gain">Weight Gain</option>
        <option value="Muscle Gain">Muscle Gain</option>
        <option value="Healthy Skin">Healthy Skin</option>`;
      break;
    case 6:
      formContainer.innerHTML = `<h2>Thanks for sharing your info!</h2><p>Work in progress...</p>`;
      break;
  }
}

function handleNext() {
  if (step === -1) return;

  if (dropdown.style.display === 'block') {
    if (!dropdown.value) {
      message.innerText = "Please select an option.";
      return;
    }
  } else {
    if (!inputField.value) {
      message.innerText = "Please fill the field.";
      return;
    }
  }

  switch (step) {
    case 0:
      userData.name = inputField.value;
      break;
    case 1:
      userData.age = inputField.value;
      break;
    case 2:
      userData.gender = dropdown.value;
      break;
    case 3:
      userData.weight = inputField.value;
      break;
    case 4:
      userData.height = inputField.value;
      break;
    case 5:
      userData.goal = dropdown.value;
      break;
  }

  step++;
  loadQuestion();
}
