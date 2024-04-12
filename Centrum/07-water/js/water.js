function inputChanged() {
    let temparture = parseInt(document.getElementById("temperature").value);
    document.getElementById("range").value = temparture;
    setTemperature(temparture);
}

function rangeChanged() {
    let temparture = parseInt(document.getElementById("range").value);
    document.getElementById("temperature").value = temparture;
    setTemperature(temparture);

}

function setTemperature(temparture) {

    if (temparture < -273)
        document.getElementById("picture").src = "../images/teemo.png";

    if (temparture >= -273 && temparture <= 0)
        document.getElementById("picture").src = "../images/freezing.jpg";

    if (temparture > 0 && temparture < 100)
        document.getElementById("picture").src = "../images/normal.jpg";

    if (temparture >= 100)
        document.getElementById("picture").src = "../images/hot.jpg"
}
