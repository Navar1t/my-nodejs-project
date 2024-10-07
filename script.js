function changeTitle(){
document.querySelector("p").innerHTML = "Good Bye";
}

function cal(){
    let r = parseFloat(document.getElementById('txt').value);
    document.getElementById('result').innerHTML = 1 * r * r;

}