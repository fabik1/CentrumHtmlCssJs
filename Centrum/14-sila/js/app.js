function passwordTest() {
    let password = document.getElementById("password").value;
    let points = 0;

    if (password.match(/[a-z]/)) {
        points = points + 1
    }
    if (password.match(/[A-Z]/)) {
        points = points + 1
    }
    if (password.match(/[0-9]/)) {
        points = points + 1
    }
    if (password.match(/[!,@]/)) {
        points = points + 1
    }

    if (password.length >= 6) {
        points = points + 1
    }
    if (password.length >= 8) {
        points = points + 1
    }
    console.log(points);

    document.getElementById("result").innerHTML = "";

    for (let i = 1; i <= 6; i++) {
        if (i <= points) {
            document.getElementById("result").innerHTML += '<img src="../images/lock-open.png">'
        }
        else {
            document.getElementById("result").innerHTML += '<img src="../images/lock.png">'
        }
    }
}

function sprawdz() {
    let password = document.getElementById("password").value;
    document.getElementById("result2").innerHTML = password;
}