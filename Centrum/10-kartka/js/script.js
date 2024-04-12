function changeText() {
   let text = document.getElementById("input").value;

   document.getElementById("demo").innerHTML = text;
}

function changeEmoji() {
   let emoji = document.getElementById("emoji").value;

   if (emoji == "smiley") {
      document.getElementById("emotka").innerText = "😊";
   }
   if (emoji == "funny") {
      document.getElementById("emotka").innerText = "😂";
   }
   if (emoji == "mad") {
      document.getElementById("emotka").innerText = "😒";
   }
   if (emoji == "cry") {
      document.getElementById("emotka").innerText = "😭";
   }
   if (emoji == "love") {
      document.getElementById("emotka").innerText = "😍";
   }


}

function changeOption() {
   if (document.getElementById("bigLetters").checked) {
      document.getElementById("demo").style.textTransform = "uppercase";
   }
   else {
      document.getElementById("demo").style.textTransform = "none";
   }

   if (document.getElementById("extendedText").checked) {
      document.getElementById("demo").style.letterSpacing = "5px";
   }
   else {
      document.getElementById("demo").style.letterSpacing = "0";
   }

   if (document.getElementById("smallCaps").checked) {
      document.getElementById("demo").style.fontVariant = "small-caps";
   }
   else {
      document.getElementById("demo").style.fontVariant = "normal";
   }
}


function changeBorder() {

   if (document.getElementById("solid").checked) {
      document.getElementById("border").style.borderStyle = "solid";
   }

   if (document.getElementById("line").checked) {
      document.getElementById("border").style.borderStyle = "dashed";
   }

   if (document.getElementById("dotted").checked) {
      document.getElementById("border").style.borderStyle = "dotted";
   }

}

function rangeChanged() {
   let border = parseInt(document.getElementById("range").value);
   document.getElementById("border").style.borderRadius = border + "px";
}