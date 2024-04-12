function calculate()
{
    let length = parseFloat(document.getElementById("length").value);
    let width = parseFloat(document.getElementById("width").value);
    let depth = parseFloat(document.getElementById("depth").value);
    let volume;

// czy opcja jest zaznaczona
// if (coś == 1) :)


    if (document.getElementById("shapeRectangle").checked)
    volume = width * length * depth;

    if (document.getElementById("shapeEllipse").checked)
    volume = width * length * depth * Math.PI / 4;

    if (document.getElementById("shapeTriangle").checked)
    volume = width * length * depth * 0.5;

    if (document.getElementById("fillTo90percent").checked)
    volume = volume * 0.9;



    document.getElementById("result").value = Math.round(volume);


}