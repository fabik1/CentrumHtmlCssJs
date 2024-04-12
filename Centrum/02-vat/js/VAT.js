function calculate() {
    if (document.getElementById("netto").value != "") // <-- zeby sprawdzic czy pole jest puste
    {
        let netto = parseFloat(document.getElementById("netto").value);
        let vat = parseFloat(document.getElementById("vat").value);
        let brutto = netto * (vat / 100) + netto;
        document.getElementById("brutto").value = brutto;
    }
    else {
        alert("pole nie może być puste!")
    }

}