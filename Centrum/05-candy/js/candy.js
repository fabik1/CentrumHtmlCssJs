function shareCandies() {
    var people = parseInt(document.getElementById("people").value);
    var candies = parseInt(document.getElementById("candies").value);
    let candiesPerPerson = Math.floor(candies / people);
    let candiesRest = candies % people;
    document.getElementById("candiesPerPerson").value = candiesPerPerson;
    document.getElementById("candiesRest").value = candiesRest;

    // % = modulo czyli reszta z dzielenia

}