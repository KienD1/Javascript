
// // $(document).ready(function() {
// //     $('#id-button').click(function() {
// //         var textbox = $('#id-textbox');
// //         alert(textbox.val());
// //     }
// // );
// // })

// // window.onload
// // Example 1 :

//     // alert('doan thu 1');
//     // alert('doan thu 2');
//     // window.onload = function() {
//     //     alert('doan thu 3');
//     // };
//     // alert('doan thu 4');


// // Example 2 :
//     // alert(document.getElementById('demo').innerHTML);

// // Sự kiện onload trong jquery:
//     // alert('lần thứ nhất');
//     // alert('lần thứ hai');
//     // $(document).ready(function() {
//     //     alert('lần thứ ba');
//     // });
//     // alert('lần thứ 4');

// // jQuery Selector
//     // var h1 = $('#title');
//     // console.log(h1);

// // Selecter theo ID 
// // function length_1()
// // {
// //     var element = $('#container');
// //     alert(element.length);
// // }

// // function length_0()
// // {
// //     var element = $('#id_not_found');
// //     alert(element.length);
// // };

// // Selecter theo Class 
// // function clickEvent()
// // {
// //     var element = $('.container');
// //     alert(element.length);
// // }

// // function clickEvent()
// // {
// //     var element = $('.container');
// //     $(element).css({
// //         background : "red"
// //     });
// // }


// Jquery selecter Form filter
// $(':text').css('border', 'solid 2px red');
// $(':password').css('border', 'solid 2px blue');
// $(':file').css('border', 'solid 2px pink');
// $(':selected').parent().css('border', 'solid 2px green');
// $(':submit').css('border', 'solid 2px black');
// $(':button').css('border', 'solid 2px yellow');


$(document).ready(function () {
    $("#loginbtn").click(function () {
        var username = $('#username').val();
        var password = $('#password').val();

        if (username == "" || password == ""){
            alert("Vui lòng nhập đầy đủ thông tin");
            return false;
        }
        else {
            alert("Thông tin hợp lệ");
            return true;
        }
    });
});