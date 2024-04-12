function c2f()
{
    var c = parseFloat(document.getElementById("celsius").value);
    var f = 32 + 9 * c / 5;
    document.getElementById("fahrenheit").value = f.toFixed(2);
    //document.getElementById("fahrenheit").value = Math.round(f * 100) / 100;
}
function f2c()
{
    var f = parseFloat(document.getElementById("fahrenheit").value);
    var c = 5 * (f - 32) / 9;
    document.getElementById("celsius").value = c.toFixed(2);
    //document.getElementById("celsius").value = Math.round(c * 100) / 100;
}
