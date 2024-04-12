function sequence()
{
    let from = parseInt(document.getElementById("from").value);
    let to = parseInt(document.getElementById("to").value);

    document.getElementById("result").innerHTML = "";

    for(let i = from; i<=to; i++)
    {   
        document.getElementById("result").innerHTML += i + " "; 
    }
}