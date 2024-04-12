function calculate()
{
   
    let license = parseFloat(document.getElementById("license").value);

    if (document.getElementById("standard").checked)
    license = license * 49;

    if (document.getElementById("pro").checked)
    license = license * 99;

    if (document.getElementById("ultimate").checked)
    license = license * 149;

    let promoCode = document.getElementById("discount").value;
    if (promoCode == "promo2022");
    license = license * 0.9;

    document.getElementById("result").value = license.toFixed(2);
}