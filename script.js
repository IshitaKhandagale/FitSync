function nextPage(pageId) {
  const pages = document.querySelectorAll("div");
  pages.forEach((page) => page.classList.add("hidden"));
  document.getElementById(pageId).classList.remove("hidden");
}

function validateAge() {
  const age = parseInt(document.getElementById("age-input").value);
  if (age >= 18) {
    nextPage("gender-page");
  } else {
    nextPage("underage-page");
  }
}

function submitInfo() {
  const name = document.getElementById("name-input").value;
  const goal = document.getElementById("fitness-goal-select").value;

  let message = `Stay consistent, ${name}! You’re on your way to ${goal.replace("-", " ")}.`;
  document.getElementById("goal-message").textContent = message;

  nextPage("plan-page");
}

function restart() {
  document.getElementById("name-input").value = "";
  document.getElementById("age-input").value = "";
  document.getElementById("weight-input").value = "";
  document.getElementById("height-input").value = "";
  document.getElementById("water").value = "";
  document.getElementById("exercise").value = "";
  document.getElementById("calories").value = "";
  document.getElementById("steps").value = "";

  nextPage("welcome-page");
}
