// let todoList = [
//     "Go to sleep early",
//     "Take a shower",
//     "Do homework",
//     "Learn a new thing!!!",
//   ];
//   let loop = true;
//   while (loop) {
//     let command = prompt(
//       "Mời bạn nhập vào các chữ cái C/R/U/D để điều khiển dnah sách Todo List"
//     );
//     if (command === "C") {
//       //Thêm mới một todo vào danh sách todo List
//       let todo = prompt("Mời bạn nhập vào todo mới");
//       todoList.push(todo);
//       printTdo();
//     //   for (let i = 0; i < todoList.length; i++) {
//     //     console.log(`${i + 1}, ${todoList[i]}`);
//     //   }
//     } else if (command == "R") {
//       //In ra toàn bộ todo trong danh sách todoList
//       printTdo();
//     } else if (command == "U") {
//       //Cho người dùng chọn vị trí của todo muốn cập nhật
//       let index = +prompt("Mời bạn nhập vào vị trí của todo muốn cập nhập");
//       //Cho người dùng nhập vào nội dung cập nhật mới của todo đó
//       let updateTodo = prompt("Mời bạn nhập vào nội dug mới của todo");
//       //Tiến hành cập nhật
//       todoList[index - 1] = updateTodo;
//       //In ra toàn bộ todo có trong danh sách todo List
//       printTdo();
//     } else if (command == "D") {
//       //Cho người dùng chọn vị trí của todo muốn xóa
//       let index = +prompt("Mời bạn nhập vào vị trí muốn xóa");
//       //Tiến hành xóa
//       todoList.splice(index - 1, 1);
//       //In ra toàn bộ todo có trong danh sáh  todoList (Để kiểm tra xóa thành công chưa?)
//       printTdo();
//     } else if (command == "E") {
//       // Kết thúc chương trình
//       loop = false;
//     } else {
//       console.log("Invalid command!!!!!");
//     }
//   }

//   function printTdo() {
//     for (let i = 0; i < todoList.length; i++) {
//       console.log(`${i + 1}, ${todoList[i]}`);
//     }
//   }

// function mayBannuoc(money) {
// //
// if(money ==="5000"){
//    return("Lavie");
// } else if ( money ==="10000") {
//    return("Coca");
// }
// else if ( money ==="20000") {
//    return("Sting");
// } else {
//    return("Chúng tôi ko ok");
// }
// }
// // Argumênt- Đối số thực tế
// mayBannuoc("5000");//Lavie
// alert(mayBannuoc("10000"))//Coca
// mayBannuoc("20000");//Moutain Dew

// Viết 1 hàm (chương trình con), nhận vào 2 tham số
// Là 2 số cần tính tổng
// Tính tổng và trả kqua
// function tinhTong(num1,num2){
//    let total=num1+num2;
//     return total;

// }

// let sum =(tinhTong(1,2));
// let tb = sum/3;
// alert(tb);

// tinhTong(1,2);//3
// tinhTong(4,2);//6
// tinhTong(4,1);//5

// Bài mẫu 2

//Viết phương trình hàm thực hiện
//Tính toán và output ra kết quả 2 số
//+,-,/,*

// calculate2Num(10,20);
// calculate2Num(-1,1);
// Cal2(1,2,"+");
// function Cal2(n1,n2,ope) {

//     if(ope==="+"){
//         let sum=n1+n2;
//         console.log("sum =",n1 + n2);
//     }
//     if(ope==="-"){
//         let sum=n1-n2;
//         console.log("tru =",n1 - n2);
//     }
//     if(ope==="/"){
//         let sum=n1/n2;
//         console.log("chia =",n1 / n2);
//     }
//     if(ope==="*"){
//         console.log("nhan =",n1 * n2);
//     }
//     else {
//       console.log("mời bạn nhập lại")}
// }

// Gọi hàm Cal2 với các tham số cho trước
// Kết quả: Tổng = 3

// Bài 3
// function duong(n1,n2,n3) {
//     let total=n1-n2+n3;
//     return total;

// }
// let x=duong(1,2,4);
// alert(x);
// (function (name) {
//     console.log("Helo",name)

// })("Duong")
// sayhi("Dog");
// sayhi("Abe");


// let hibe= function (name) {
//     console.log("Hi",name)

// }
// hibe("Tao là tao");
// hibe("Sao nao");
// hibe("Ko sao ");

// Bài 3: Tính diện tích chu
// function chuvi(r) {
//     return 2*Math*3,14*r

// }
// let x= chuvi(5);
// alert(x);
// ALL
// function check(a) {
// return Number.isFinite(a)
// }

// if (check(5)) {

//     console.log('Ky tu nhap vao la mot so')

// } else {

//     console.log("ky tu nhap vao khong phai la so")

// }
// function processConfirm(answer) {
//     let result = "";
//     if (answer) {
//         result = "Excellent. We'll play a nice game of chess.";
//     } else {
//         result = "Maybe later then.";
//     }
//     return result;
// }

// let confirmAnswer = confirm("Shall we play a game?");
// let theAnswer = processConfirm(confirmAnswer);
// alert(theAnswer);
// Thực hành 1
// function processConfirm(answer) {
//     let result=""
//     if(answer){
//         result="Chơi gì cũng được thôi";
//     }
//     else{result="Khi khác"
//     }
//     return result;
// }
// let confirmAnswer =confirm("Chơi ko nào");
// // let theAnswer = processConfirm(confirmAnswer);
// // alert(theAnswer);
//Thực hành 2
// function Duong(mang) {
//     if(mang.length==0)
//         return-1;
//     //Khai báo min
//     let min=mang[0];
//     for(let i=0;i<mang.length;i++){
//     if(min>mang[i]){
//         min=mang[i]
//     }
// }
//     return min

// }
// // let mang2=[8, 12, 6, 9, 20, 56, 89];
// // let min= Duong(mang2)
// // alert(min);

// let mang3=[];
// let min=Duong(mang3);
// alert(min)


function Duong(arr) {
    let max = arr[0]
    for (i = 0; i <= arr.length - 1; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
    } return max;

}
let arr2 = [7, 9, 1, 2, 199, -10]
alert(`Vậy max là  ${Duong(arr2)}`);
// true
// let input = prompt("Nhập vào chuỗi kí tự bất kì");

// function isPalindrome(str) {
//     // Chuyển chuỗi về dạng chữ thường và loại bỏ khoảng trắng và dấu câu
//     str = str.toLowerCase().replace(/[^a-zA-Z]/g, "");

//     // Đảo ngược chuỗi
//     let reversed = str.split("").reverse().join("");

//     // So sánh chuỗi gốc với chuỗi đảo ngược
//     return str === reversed;
// }

// console.log(isPalindrome(input));
// console.log(isPalindrome("racecar")); // true
// console.log(isPalindrome("hello")); // false
// console.log(isPalindrome("A man, a plan, a canal, Panama!")); // true


// function CtoF(CDO) {
//     let F = CDO * 1.8 + 32;
//     return F;
// }
// function FtoC(f) {
//     let c = (f - 32) / 1.8;
//     return c;
// }

// console.log(CtoF(25)); // Kết quả: 77
// console.log(FtoC(77));
//th6
// function Sum1(array) {
//     let sum = 0;
//     for (let i = 0; i < array.length; i++) {
//         sum += array[i];
//     }
//     return sum;
// }
// let arr = [1, 2, 3, 4, 5, 6];
// console.log(Sum1(arr));
// function Sum2(arr) {
//     let sum = 0;
//     for (i = 0; i < Sum2.length; i++) {
//         sum += arr[i]
//     }
//     return sum;

// }
// let arr2 = [10, 20, 30, 40, 50];
// let arr3 = [1, 3, 5, 7, 9];
// let x = Sum2(arr2)
// let y = Sum2(arr3)
// console.log(x);
