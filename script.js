function nextPage(pageId) {
  const pages = document.querySelectorAll("div");
  pages.forEach(p => p.classList.add("hidden"));
  document.getElementById(pageId).classList.remove("hidden");
}

function createAccount() {
  const username = document.getElementById("signup-username").value;
  const password = document.getElementById("signup-password").value;
  if (username && password) {
    localStorage.setItem("fit_user", JSON.stringify({ username, password }));
    alert("Account created successfully!");
    nextPage("login-page");
  } else {
    alert("Please fill out both fields.");
  }
}

function login() {
  const enteredUsername = document.getElementById("login-username").value;
  const enteredPassword = document.getElementById("login-password").value;
  const storedUser = JSON.parse(localStorage.getItem("fit_user"));
  if (storedUser && storedUser.username === enteredUsername && storedUser.password === enteredPassword) {
    nextPage("name-page");
  } else {
    alert("Invalid login. Try again.");
  }
}

function validateAge() {
  const age = parseInt(document.getElementById("age-input").value);
  if (age < 18) {
    nextPage("underage-page");
  } else {
    nextPage("gender-page");
  }
}

function submitInfo() {
  const water = parseFloat(document.getElementById("water").value);
  const exercise = parseFloat(document.getElementById("exercise").value);
  const calories = parseFloat(document.getElementById("calories").value);
  const steps = parseInt(document.getElementById("steps").value);

  const goalMet = water >= 2.5 && exercise >= 30 && calories >= 1200 && steps >= 5000;
  const message = document.getElementById("congrats-message");
  message.textContent = goalMet
    ? "🎉 Congratulations! You completed your daily goal!"
    : "You're doing great, stay consistent!";
    
  nextPage("congrats-page");
}

function restart() {
  location.reload();
}
