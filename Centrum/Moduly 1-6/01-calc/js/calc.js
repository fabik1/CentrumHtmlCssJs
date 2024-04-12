function add()
{
    // 1. Pobieramy dane z HTML-a
    let a = parseFloat(document.getElementById("number1").value);
    let b = parseFloat(document.getElementById("number2").value);

    // 2. Obliczenie
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
    let c = a * b;
    document.getElementById("result").value = c;
}

function divide()
{
    let a = parseFloat(document.getElementById("number1").value);
    let b = parseFloat(document.getElementById("number2").value);
    // Jeśli różne od zera to podziel
    if (b != 0)
    {
        let c = a / b;
        document.getElementById("result").value = c;
    }
    // W przeciwnym wypadku błąd
    else
    {
        alert("Błąd! Dzielenie przez zero");
    }
}

function power()
{
    let a = parseFloat(document.getElementById("number1").value);
    let b = parseFloat(document.getElementById("number2").value);
    //let c = a ** b;
    c = Math.pow(a, b);
    document.getElementById("result").value = c;
}

function random()
{
    // Losuje od min do max liczbę całkowitą
    let min = parseFloat(document.getElementById("number1").value);
    let max = parseFloat(document.getElementById("number2").value);
    let c = Math.floor(Math.random() * (max - min + 1) + min);
    document.getElementById("result").value = c;

    // Zaokrąglenia:
    // Math.floor(3.99) - w dół     = 3
    // Math.ceil(3.01)  - w górę     = 4
    // Math.round(3.05) - do bliższej    = 3
}
