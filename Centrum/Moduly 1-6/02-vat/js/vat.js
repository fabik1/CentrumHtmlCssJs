function calculate()
{
    let netto = parseFloat(document.getElementById("netto").value);
    let vat = parseFloat(document.getElementById("vat").value);
        
    // Jeśli pole nie jest puste != różne
    if (netto != "")
    {
        let brutto = netto * (vat / 100) + netto;
        document.getElementById("brutto").value = brutto;
    }
    // W przeciwnym razie
    else
    {
        alert("Pole nie może być puste!");
    }
}

/*
Pobieranie danych z HTML-a:
    let netto = parseFloat(document.getElementById("netto").value);     // liczby ułamkowe
                                                                        // zmiennoprzeciknowe

    let ilosc = parseInt(document.getElementById("ilosc").value);     // liczby całkowite

    let tekst = document.getElementById("ilosc").value;                 // Tekst

Można też sprawdzać przed całym kodem:
    if (document.getElementById("netto").value != "")

*/
