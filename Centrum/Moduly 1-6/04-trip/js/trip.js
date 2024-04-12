function calculate()
{
    let distance = parseFloat(document.getElementById("distance").value);
    let usage = parseFloat(document.getElementById("usage").value);
    let price = parseFloat(document.getElementById("price").value);

    // Sprawdzenie poprawności liczb
    // ! - czy nie
    // isNaN - czy nieliczba
    // && - i
    // || - lub
    if (!isNaN(distance) && !isNaN(usage) && !isNaN(price))
    {
        let cost = distance * usage / 100 * price;
        document.getElementById("cost").value = cost.toFixed(2);
    }
    else
    {
        alert("Wypełnij poprawnie formularz!");
    }
}

