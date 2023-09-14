function convert_to_fahrenheit() {
    var celsiusInput = document.getElementById("Celsius");
    var fahrenheitInput = document.getElementById("Fahrenheit");
    var result = document.getElementById("result");

    if (celsiusInput.value !== "") {
        var celsiusValue = parseFloat(celsiusInput.value);
        var fahrenheitValue = (celsiusValue - 32) * 5 / 9;
        fahrenheitInput.value = fahrenheitValue.toFixed(2);
        result.textContent = `${celsiusValue.toFixed(2)}°F is equal to ${fahrenheitValue.toFixed(2)}°C`;
    }
}

function convert_to_celsius(){
    var fahrenheitInput = document.getElementById("Fahrenheit");
    var celsiusInput = document.getElementById("Celsius");
    var result = document.getElementById("result");

    if (fahrenheitInput.value !== "") {
        var fahrenheitValue = parseFloat(fahrenheitInput.value);
        var celsiusValue = (fahrenheitValue * 9/5) + 32;
        celsiusInput.value = celsiusValue.toFixed(2);
        result.textContent = `${fahrenheitValue.toFixed(2)}°C is equal to ${celsiusValue.toFixed(2)}°F`;
    }
}

