function clearScreen() {
    document.getElementById("result").value = "";
   }
   
   // This function display values
   function display(value) {
    document.getElementById("result").value += value;
   }
   // This function evaluates the expression and return result
   function calculate() {
    var p = document.getElementById("result").value; // "1+2+3" 
    var q = eval(p); // eval("1+2+3")=6
    document.getElementById("result").value = q;
   }