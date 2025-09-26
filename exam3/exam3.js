'use strict'
    
const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");
let expression = "";

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
    if (btn.textContent === "=") {
        try {
        expression = eval(expression).toString();
        display.value = expression;
        } catch {
        expression = "";
        }
    } else {
        expression += btn.textContent;
        display.value = expression;
    }
    });
});

