function generate() {
    let name = document.getElementById("text").value;
    name = name.replaceAll("#fish", "🐟");
    name = name.replaceAll("#morze", "🌊");
    name = name.replaceAll("#parasol", "☔");
    name = name.replaceAll(":)", "😀");
    name = name.replaceAll(":(", "🙁");
    name = name.replaceAll(":D", "😁");
    name = name.replaceAll("<3", "😍");
    document.getElementById("result").innerHTML = name;
}