function add() 
{
    // 1. Pobieramy dane z HTML-a
    let a = parseFloat(document.getElementById("number1").value);
    let b = parseFloat(document.getElementById("number2").value);

    // 2. Obliczanie
    let c = a + b;

    // 3. Wpisanie wyniku do HTML-a
    document.getElementById("result").value = c;

}

function subtract() 
{
    let a = parseFloat(document.getElementById("number1").value);
    let b = parseFloat(document.getElementById("number2").value);

    let c = a - b;

    document.getElementById("result").value = c;

}

function multiply() 
{
    let a = parseFloat(document.getElementById("number1").value);
    let b = parseFloat(document.getElementById("number2").value);

    let c = a*b;

    document.getElementById("result").value = c;

}

function divide() 
{
    let a = parseFloat(document.getElementById("number1").value);
    let b = parseFloat(document.getElementById("number2").value);

    let c = a/b;

    document.getElementById("result").value = c;

}

function divide() 
{
    let a = parseFloat(document.getElementById("number1").value);
    let b = parseFloat(document.getElementById("number2").value);
    if (b==0) {
        alert("Błąd! Dzielenie przez zero");
    }
    else {
        let c = a/b;

    document.getElementById("result").value = c;
    }


}

function power() 
{
    let a = parseFloat(document.getElementById("number1").value);
    let b = parseFloat(document.getElementById("number2").value);
    let c = a**b;

    document.getElementById("result").value = c;

}

function random() 
{
    let min = parseFloat(document.getElementById("number1").value);
    let max = parseFloat(document.getElementById("number2").value);
   //losowanie liczby z przedzialu od min do max 
    let c = Math.floor(Math.random() * (max - min +1) + min);

    document.getElementById("result").value = c;

    //Math.floor(3.99) - w dół = 3
   //Math.ceil(3.01) - w góre = 4
  //Math.round(3.05) - do bliższej = 3
}