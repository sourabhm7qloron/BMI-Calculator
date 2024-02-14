  function calculateBMI() {
    var heightInput = document.getElementById("height");
    var weightInput = document.getElementById("weight");
    var resultDiv = document.getElementById("result");
  
    var height = parseFloat(heightInput.value);
    var weight = parseFloat(weightInput.value);
  
    if (isNaN(height) || isNaN(weight)) {
      resultDiv.innerHTML = "Please enter valid height and weight.";
      return;
    }
  
    var bmi = (weight / ((height * height) / 10000));
    var category = "";
  
    if (bmi < 18.5) {
      category = "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
      category = "Normal weight";
    } else if (bmi >= 25 && bmi < 29.9) {
      category = "Overweight";
    } else if (bmi >= 30 && bmi < 34.9) {
      category = "Class 1: Obesity";
    } else if (bmi >= 35.5 && bmi < 39.9) {
      category = "Class 2: Obesity";
    } else {
      category = "Extreme Obesity";
    }
  
    resultDiv.innerHTML = "Your BMI is " + bmi.toFixed(2) + " (" + category + ")";
  }