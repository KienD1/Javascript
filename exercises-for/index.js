// function print_number()
// {
//     let number = document.getElementById("number").value;
//     number = parseInt(number);
//     var html = '';
//     for (var i = 1; i <= number; i++) {
//         html += i + '<br/>';
//     }
//     document.getElementById("result").innerHTML = html;
// }
function change_background()
{
    let divs = document.getElementsByTagName("div");
    for (var i = 0; i <divs.length; i++){
        if ((i + 1) % 2 == 0) {
            divs[i].style.background = "red";
        }
        else {
            divs[i].style.background = "blue";
        }
    }
}