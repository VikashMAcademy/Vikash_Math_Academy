// ------------------------For Nav Bar-------------------------

var navbar = document.getElementById("navbar");
function showMenu(){
    navbar.style.top = "0";
}
function hideMenu(){
    navbar.style.top = "-120vh";
}

// ---------------------------Preloader----------------------------

var Preloader = document.getElementById("loading");
function myfunction(){
    Preloader.style.display = "none";
}

// -----------------Trigonometric calculator--------------

function calculateTrigRatios() {
    var angleInput = document.getElementById("angle");
    var resultDiv = document.getElementById("result");

    var angle = parseFloat(angleInput.value);

    if (!isNaN(angle)) {
        var radians = (angle * Math.PI) / 180;
        var sine = Math.sin(radians).toFixed(4);
        var cosine = Math.cos(radians).toFixed(4);
        var tangent = Math.tan(radians).toFixed(4);

        resultDiv.innerHTML = "<p>Sine: " + sine + "</p>" +
                              "<p>Cosine: " + cosine + "</p>" +
                              "<p>Tangent: " + tangent + "</p>";
    } else {
        resultDiv.innerHTML = "<p>Please enter a valid angle.</p>";
    }
}

// --------------------Temperature Converter--------------------

function convertTemperature() {
    var celsiusInput = document.getElementById("celsiusInput");
    var resultsDiv = document.getElementById("results");

    var celsius = parseFloat(celsiusInput.value);

    if (!isNaN(celsius)) {
        var fahrenheit = (celsius * 9/5) + 32;
        resultsDiv.innerHTML = "<p>Temperature in Fahrenheit: " + fahrenheit.toFixed(2) + "°F</p>";
    } else {
        resultsDiv.innerHTML = "<p>Please enter a valid temperature in Celsius.</p>";
    }
}

// -----------------------------------Factor Calculator---------------------

function findFactors() {
    // Clear previous result
    document.getElementById('result').innerHTML = '';

    // Get the user input
    const number = parseInt(document.getElementById('number').value);

    // Validate the input
    if (isNaN(number) || number < 1) {
      alert('Please enter a valid positive integer.');
      return;
    }

    // Find and display the factors
    const factors = [];
    for (let i = 1; i <= number; i++) {
      if (number % i === 0) {
        factors.push(i);
      }
    }

    const resultssDiv = document.getElementById('resultss');
    resultssDiv.innerHTML = `<p>Factors of ${number} is: ${factors.join(', ')}</p>`;
  }