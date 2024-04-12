function calccels() {
    let a = parseFloat(document.getElementById("cels").value);
    let b = (a * 9) / 5 + 32;
    document.getElementById("fahren").value = Math.round(b * 100) / 100;
}

function calcfahr() {
    let a = parseFloat(document.getElementById("fahren").value);
    let b = (a - 32) * 5 / 9;
    document.getElementById("cels").value = Math.round(b * 100) / 100;
}

// Math.round(b * 100) / 100; - zaokrąglanie do 2 miejsc po przecinku
// document.getElementById("cels").value = b.toFixed(2); - zaokrąglenie do 2 miejsc po przecinku
