function calculate() {

    let device = parseInt(document.getElementById("power").value);
    let time = parseInt(document.getElementById("minutes").value);
    let price = parseFloat(document.getElementById("cost").value);
    if (!isNaN(device) && !isNaN(time) && !isNaN(price)) {
        let result = device / 1000 * time / 60 * price;
        document.getElementById("result").value = result.toFixed(3);
    }
    else {
        alert("wypełnij podane pola");
    }


}
