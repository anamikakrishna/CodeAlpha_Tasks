let display = document.getElementById("display");


/* Add number or operator to display */

function appendValue(value) {
    display.value += value;
}


/* Clear calculator */

function clearDisplay() {
    display.value = "";
}


/* Delete last character */

function deleteLast() {
    display.value = display.value.slice(0, -1);
}


/* Calculate result */

function calculate() {

    try {

        if (display.value === "") {
            return;
        }

        display.value = eval(display.value);

    } catch (error) {

        display.value = "Error";

    }

}
