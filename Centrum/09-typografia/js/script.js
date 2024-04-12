
// !!!! font-family ---> fontFamily

//w CSS rgb(red,green,blue)

function changeText() {
   //pobieramy tekst do zmiennej

   let text = document.getElementById("input").value;

   //wpisujemy do elementu html

   document.getElementById("demo").innerHTML = text;
}

function changeFont() {
   //pobieramy czcionkę ze selecta 

   let font = document.getElementById("font").value;

   //zmiana stylu CSS

   document.getElementById("demo").style.fontFamily = font;


}

function changeColor() {

   if (document.getElementById("white").checked) {
      document.getElementById("demo").style.color = "white";
   }

   if (document.getElementById("black").checked) {
      document.getElementById("demo").style.color = "black";
   }

   if (document.getElementById("yellow").checked) {
      document.getElementById("demo").style.color = "yellow";
   }

   if (document.getElementById("navy").checked) {
      document.getElementById("demo").style.color = "navy";
   }

   if (document.getElementById("custom").checked) {
      let red = document.getElementById("red").value
      let green = document.getElementById("green").value
      let blue = document.getElementById("blue").value

      let color = "rgb(" + red + ", " + green + ", " + blue + ")";

      document.getElementById("demo").style.color = color;
   }

}

function changeOption() {
   if (document.getElementById("bold").checked) {
      document.getElementById("demo").style.fontWeight = "bold";
   }
   else {
      document.getElementById("demo").style.fontWeight = "normal";
   }

   if (document.getElementById("italic").checked) {
      document.getElementById("demo").style.fontStyle = "italic";
   }
   else {
      document.getElementById("demo").style.fontStyle = "normal";
   }

   if (document.getElementById("shadow").checked) {
      document.getElementById("demo").style.textShadow = "0px 0px 6px rgba(255,255,255,0.7)";
   }
   else {
      document.getElementById("demo").style.textShadow = "0 0 0";
   }


}