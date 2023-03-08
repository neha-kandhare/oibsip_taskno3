function convertTemp() {
  const inputTemp = parseFloat(document.getElementById('input-temp').value);
  const fromUnit = document.getElementById('from-unit').value;
  const toUnit = document.getElementById('to-unit').value;
  let outputTemp;

  if (fromUnit === 'celsius' && toUnit === 'fahrenheit') {
    outputTemp = (inputTemp * 1.8) + 32;
  } else if (fromUnit === 'celsius' && toUnit === 'kelvin') {
    outputTemp = inputTemp + 273.15;
  } else if (fromUnit === 'fahrenheit' && toUnit === 'celsius') {
    outputTemp = (inputTemp - 32) / 1.8;
  } else if (fromUnit === 'fahrenheit' && toUnit === 'kelvin') {
    outputTemp = (inputTemp + 459.67) * 5/9;
  } else if (fromUnit === 'kelvin' && toUnit === 'celsius') {
    outputTemp = inputTemp - 273.15;
  } else if (fromUnit === 'kelvin' && toUnit === 'fahrenheit') {
    output