// When the user submits the form, this function will run
document.getElementById('fitnessForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent page reload when form is submitted
  
    // Get user input from the form
    const water = document.getElementById('water').value;
    const exercise = document.getElementById('exercise').value;
    const calories = document.getElementById('calories').value;
  
    // Display the user's input data on the page
    document.getElementById('waterProgress').textContent = 'Water Intake: ' + water + ' liters';
    document.getElementById('exerciseProgress').textContent = 'Exercise Time: ' + exercise + ' minutes';
    document.getElementById('caloriesProgress').textContent = 'Calories Consumed: ' + calories + ' kcal';
  });
  