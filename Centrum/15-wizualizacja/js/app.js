function generate() {
    let wysokosc = parseInt(document.getElementById("wysokosc").value);
    let szerokosc = parseInt(document.getElementById("szerokosc").value);
    let border = parseInt(document.getElementById("border").value);
    let red = parseInt(document.getElementById("red").value);
    let green = parseInt(document.getElementById("green").value);
    let blue = parseInt(document.getElementById("blue").value);
    let color = "rgb(" + red + ", " + green + ", " + blue + ")";


    document.getElementById("obiekt").style.height = wysokosc + "px";
    document.getElementById("obiekt").style.width = szerokosc + "px";
    document.getElementById("obiekt").style.backgroundColor = color;
    document.getElementById("obiekt").style.borderRadius = border + "%";


}