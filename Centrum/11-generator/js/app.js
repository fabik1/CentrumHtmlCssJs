function generateName() {
  let name = document.getElementById("input").value;

  // propozycja 1:
  // liczba 19-20 
  // nazwa 
  // liczba 00-99

  if (name != "") {

    let a = Math.floor(Math.random() * 2 + 19);  // losowanie od 19-20
    let b = Math.floor(Math.random() * 100);

    document.getElementById("name1").innerHTML = a + name + b;

    //propozycja 2:
    // wszystko dużymi literami
    // pierwsza litera słowa
    // kropka
    // całe słowo
    // kropka
    // ostatnia litera

    let first = name.substr(0, 1).toUpperCase();
    let last = name.slice(-1).toUpperCase();
    let nameUpper = name.toUpperCase();

    document.getElementById("name2").innerHTML = first + "." + nameUpper + "." + last;

    //propopzycja 3 
    // lowoswe słowo
    // imię

    let heroes = ['Generał', 'Mr', 'Kapitan', 'Szefuńcio', 'Łotr', 'Księżniczka'];

    let c = Math.floor(Math.random() * heroes.length);

    document.getElementById("name3").innerHTML = heroes[c] + " " + name;
  }

  else {
    alert("podaj nazwę");
  }

}

/*
  słowo kluczowe: foka
 
  text.substr(0,2) - wycina litery (np fo)
  text.slice(0,-1) - odcina się ostatnia litera (np Fok)
  text.indexOf("ok") = 1 - jeśli znalazł, -1 - jeśli nie znalazł
  text.length = długośc napisu

  */