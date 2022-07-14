// Arrow function
// var hello = (Name, message) => {
//     console.log("Chao " + Name + ", ban la " + message);
// };
// hello('cuong', 'gay phai khong?');

// Normal function
// function hello(Name, message) {
//     console.log("Chao " + Name + ", ban la " + message);
// }
// hello("cuong", "gay phai khong?");

// truong hop mot cau lenh don
// var hello = (Name, message) => console.log("Chao" + Name + ", ban la " + message);
// hello(" cuong", "gay phai khong?")

// truong hop mot tham so
// var hello = message => {
//     console.log(message);
// };
// hello("chao mung ban den voi ES6");

// Truong hop khong co tham so

// var hello = () => {
//     console.log("chao mung ban den voi ES6");
// };
// hello();


// Sử dụng hàm map để chuyển đổi các giá trị của các phần tử trong mảng sang chữ in hoa
// cách viết bằng Arrow Function

// var domain = ["abcd", "efgh", "zxcv"];
// domain.map((val,key) => {
//     console.log(val.toUpperCase());
// });

// Ví dụ với hàm setTimeout 
// setTimeout(() => {
//     console.log("3 s da troi qua");
// }, 3000);

// var blog = {
//     domain : "abcxzy",
//     showWebsite : function (callbackFunction) {
//         callbackFunction();
//     },
//     render : function() {
//         this.showWebsite((() => {
//             console.log(this.domain);
//         }));
//     }
// };
// blog.render();


// Promise trong ES6
// Xử lý gửi email
// function sendEmail()
// {
//     $.ajax({
//         url : "some-url",
//         data : {},
//         success : function(result){
//             alert('Send Success!');
//         },
//         error : function(eror){
//             alert('Send Error!');
//         }
//     });
// }
 
// // Xử lý gửi email
// function sendEmail()
// {
//     $.ajax({
//         url : "some-url",
//         data : {},
//         success : function(result){
//             alert('Send Success!');
//         },
//         error : function(eror){
//             alert('Send Error!');
//         }
//     });
// }
 
// // Khi chưa bổ sung listener
// $('#button').click(function(){
//     // Tôi chả quan tâm nó làm cái gì cả
// });
 
// // Khi bổ sung listener
// // Gán  hàm send Email vào sự kiện click
// $('#button').click(function(){
//     // Tôi quan tâm đến thao tác gửi email có thành công hay không?
//     // Lúc này phụ thuộc vào hàm callback sendEmail
//     sendEmail();
// });


var promise = new Promise(function(resolve, reject){
    resolve('Success!');
});
 
 
promise.then(
    function(success){
        console.log(success);
    }
);