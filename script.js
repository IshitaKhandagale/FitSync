function nextPage(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.add('hidden'));
  document.getElementById(id).classList.remove('hidden');
}

function validateAge() {
  const age = document.getElementById("age-input").value;
  if (age < 18) {
    nextPage('underage-page');
  } else {
    nextPage('gender-page');
  }
}

function submitInfo() {
  const water = parseFloat(document.getElementById("water").value);
  const exercise = parseFloat(document.getElementById("exercise").value);
  const calories = parseFloat(document.getElementById("calories").value);
  const steps = parseFloat(document.getElementById("steps").value);

  let success = water >= 2.5 && exercise >= 30 && calories >= 1200 && steps >= 5000;
  document.getElementById("feedback-title").textContent = success ? "🎉 Congratulations!" : "Keep Going!";
  document.getElementById("feedback-message").textContent = success
    ? "You've completed your daily goal!"
    : "You're doing great. Stay consistent!";
  
  nextPage("feedback-page");
}

window.onload = function() {
  const ctx = document.getElementById("weeklyGraph").getContext("2d");
  new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      datasets: [{
        label: "Steps",
        data: [4000, 5200, 6000, 4800, 5000, 7000, 8000],
        backgroundColor: "#42a5f5"
      }]
    }
  });

  document.getElementById("bpm").textContent = Math.floor(70 + Math.random() * 10);
};
