function multiply() {
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    var product = Number(num1) * Number (num2);
    window.alert(product);
}
function divide() {
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    var quotient = Number(num1) ** Number (num2);
    window.alert(quotient);
}
function add() {
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    var add = Number(num1) + Number (num2);
    window.alert(add);
}
function subtract() {
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    var diff = Number(num1) - Number (num2);
    window.alert(diff);
}
