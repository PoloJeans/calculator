let display = document.getElementById('display');

function append(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function calculate(value) {
    try {
        display.value = eval(display.value);
    }
    catch {
        display.value = 'Error';
    }
}