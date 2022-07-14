// lấy phần tử trong javascript bằng chỉ mục
// var domain = ['freetuts.net','acb','124',];
// console.log(domain[1]);
// phần tử thứ 2 trong mảng có chỉ mục là 1 





// Lấy phần tử trong JS bằng hàm find()
// var ages = [3, 10, 19, 20];
 
// function checkAdult(age) {
//   return age >= 18;
// }
 
// function myFunction() {
//   var age = ages.find(checkAdult);
// }




// Lấy phần tử trong JS bằng hàm findIndex()
// hàm findIndex() giống hàm find() nhưng thay vì trả về giá trị thì nó trả về vị trí xuất hiện của phần tử cần tìm 

var ages = [3, 10, 19, 20];
function checkAdult(age) {
    return age >= 18;
}
function myFunction() {
    var age = ages.find(checkAdult);
}