function calculate() {
    let a = parseFloat(document.getElementById("distance").value);
    let b = parseFloat(document.getElementById("fuelusage").value);
    let c = parseFloat(document.getElementById("fuelprice").value);
    if (!isNaN(a) && !isNaN(b) && !isNaN(c)) {
        let d = ((b * a) / 100) * c;
        document.getElementById("result").value = d.toFixed(2);
    }
    else {
        alert("Wypełnij poprawnie formularz")
    }

    //isNan - czy nieliczba

}