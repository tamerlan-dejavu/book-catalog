function toNumber(text) {
  if (text === null) {
    return NaN;
  }
  return parseFloat(text.replace(",", "."));
}

// Task 1. Takes the username from the input field and shows it on the page.
function showUsername() {
  const name = document.getElementById("username").value.trim();
  const result = document.getElementById("result1");

  if (name === "") {
    result.textContent = "Please enter a username.";
  } else {
    result.textContent = "Username: " + name;
  }
}

// Task 2. Asks for hours and rate, calculates payment = hours * rate.
function calculateWages() {
  const hours = toNumber(prompt("Enter hours:"));
  const rate = toNumber(prompt("Enter rate per hour:"));
  const result = document.getElementById("result2");

  if (isNaN(hours) || isNaN(rate)) {
    result.textContent = "Error: please enter numbers.";
    return;
  }

  const payment = hours * rate;
  result.textContent = "Payment: " + payment.toFixed(2);
}

// Task 3. Asks for temperature in Celsius and converts it to Fahrenheit.
function convertTemperature() {
  const celsius = toNumber(prompt("Enter temperature in Celsius:"));
  const result = document.getElementById("result3");

  if (isNaN(celsius)) {
    result.textContent = "Error: please enter a number.";
    return;
  }

  let fahrenheit = celsius * 9 / 5 + 32;
  fahrenheit = Math.round(fahrenheit * 100) / 100;
  result.textContent = celsius + " °C = " + fahrenheit + " °F";
}

// Task 4. Calculates pay with overtime:
function calculateOvertime() {
  const hours = toNumber(prompt("Enter hours:"));
  const rate = toNumber(prompt("Enter rate per hour:"));
  const result = document.getElementById("result4");

  if (isNaN(hours) || isNaN(rate)) {
    result.textContent = "Error: please enter numbers.";
    return;
  }

  let pay;
  if (hours <= 40) {
    pay = hours * rate;
  } else if (hours <= 60) {
    pay = 40 * rate + (hours - 40) * rate * 1.5;
  } else {
    pay = 40 * rate + 20 * rate * 1.5 + (hours - 60) * rate * 2;
  }

  result.textContent = "Pay: " + pay.toFixed(1);
}

// Task 5. Sum of odd numbers from 1 to 100 using a while loop.
function sumOddWhile() {
  let sum = 0;
  let i = 1;

  while (i <= 100) {
    sum = sum + i;
    i = i + 2;
  }

  document.getElementById("result5").textContent = "Sum of odd numbers: " + sum;
}

// Task 6. Sum of even numbers from 1 to 100 using a for loop.
function sumEvenFor() {
  let sum = 0;

  for (let i = 2; i <= 100; i = i + 2) {
    sum = sum + i;
  }

  document.getElementById("result6").textContent = "Sum of even numbers: " + sum;
}

// Task 7. Turns the text "12, 5, 33" into an array of numbers,
function arrayStats() {
  const text = document.getElementById("numbers7").value;
  const parts = text.split(",");
  const result = document.getElementById("result7");
  const numbers = [];

  for (let i = 0; i < parts.length; i++) {
    const number = parseFloat(parts[i]);
    if (isNaN(number)) {
      result.textContent = "Error: \"" + parts[i].trim() + "\" is not a number.";
      return;
    }
    numbers.push(number);
  }

  let max = numbers[0];
  let min = numbers[0];
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
    if (numbers[i] < min) {
      min = numbers[i];
    }
    sum = sum + numbers[i];
  }

  const average = sum / numbers.length;
  const message = "Max: " + max + ", Min: " + min + ", Average: " + average.toFixed(2);

  alert(message);
  result.textContent = message;
}

// Task 8. Finds unique words in the text, sorts them and shows the list.
function uniqueWords() {
  const text = "But soft what light through yonder window breaks\n" +
               "It is the east and Juliet is the sun\n" +
               "Arise fair sun and kill the envious moon\n" +
               "Who is already sick and pale with grief";

  const lines = text.split("\n");
  const words = [];

  for (let i = 0; i < lines.length; i++) {
    const lineWords = lines[i].split(" ");
    for (let j = 0; j < lineWords.length; j++) {
      if (!words.includes(lineWords[j])) {
        words.push(lineWords[j]);
      }
    }
  }

  words.sort();

  document.getElementById("result8").textContent =
    "['" + words.join("', '") + "'] (" + words.length + " words)";
}
