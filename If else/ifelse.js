// Bài 1
// let a = +prompt("Mời bạn nhập vào nhé");
// let b = +prompt("Mời bạn nhập vào");
// if (a % b === 0) {
//   console.log(`${a} chia hết cho ${b}`);
// } else {
//   console.log(`${a} ko chia hết cho ${b}`);
// }

// Bài 2:

// let age = +prompt("Mời bạn nhập vào");
// if (Number.isInteger(age) === true && age > 0) {
//   if (age > 15) {
//     console.log("${age} đủ điều kiện");
//   } else {
//     console.log("ko đạt yêu cầu");
//   }
// } else {
//   console.log("Dữ liệu ko chuẩn");
// }

// Bài 4:
// let a = +prompt("Mời bạn nhập số ");
// let b = +prompt("Mời bạn nhập số");
// let c = +prompt("Mời bạn nhập số ");

// if (Number.isInteger(a && b && c) === true) {
//   if (a > b && a > c) {
//     console.log(`${a} là số max `);
//   } else if (b > a && b > c) {
//     console.log(`${b} là số max`);
//   } else {
//     console.log(`${c} là số max `);
//   }
// } else {
//   console.log(`Ko phải số nhé`);
// }
// Bài 5
// let test = +prompt("Mời nhập");
// let semifinal = +prompt("Mời nhập");
// let final = +prompt("Mời nhập");
// result = (test + semifinal + final) / 3;
// console.log(result);

// if (result > 3) {
//   console.log("Qua môn");
// } else {
//   console.log("Tạch môn");
// }
// Câu 1:

// for (i = 1; i <= 100; i = i + 1) {
//   if (i === 99) {
//     alert("Đã hoàn thành đến số 99!");
//   }
//   console.log(i);
// }
// CÂU 3
// let fib1 = 0;
// let fib2 = 1;
// let Fibnext;
// for (i = 1; i < 19; i++) {
//   Fibnext = fib1 + fib2;
//   console.log(fib1, fib2, Fibnext);
//   fib1 = fib2;
//   fib2 = Fibnext;
// }

// Câu 4

// let fib1 = 0;
// let fib2 = 1;

// let Fibnext;
// for (i = 0; i < 18; i++) {
//   Fibnext = fib1 + fib2;
//   fib1 = fib2;
//   fib2 = Fibnext;
//   if (Fibnext % 5 == 0) {
//     console.log(Fibnext);
//     break;
//   }
// }

// Câu 5:
// let fib1 = 0;
// let fib2 = 1;

// let Fibnext;
// let sum = 1;
// for (i = 0; i < 18; i++) {
//   Fibnext = fib1 + fib2;
//   fib1 = fib2;
//   fib2 = Fibnext;
//   sum = sum + Fibnext;
// }
// console.log(sum);
// for (let j = 1; j <= 5; j++) {
//   let row = "";
//   for (i = j - 1; i <= 4; i++) {
//     row += "#";
//   }
//   console.log(row);
// }
// for (let j = 1; j <= 5; j++) {
//   let row = "";
//   for (let i = 0; i < j; i++) {
//     row += "#";
//   }
//   console.log(row);
// }

// for (let j = 1; j <= 5; j++) {
//   let row = "";
//   for (let i = 0; i < j; i++) {
//     row += "#";
//   }
//   console.log(row);
// }
// Cau 6:
// let sum = 0;
// let count = 0;

// for (i = 1; count < 30; i++) {
//   if (i % 7 === 0) {
//     sum = sum + i;
//     count++;
//   }
// }
// console.log(sum);
// Cau 7:

// for (i = 1; i <= 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("FizzBuzz");
//   }
//   if (i % 3 === 0) {
//     console.log("Fizz");
//   }
//   if (i % 5 === 0) {
//     console.log("Buzz");
//   } else {
//     console.log("vô vị");
//   }
// }

// for (let i = 0; i <= 100; i++) {
//   if (i === 99) {
//     console.log("Hiển thị hoàn thành");
//   } else {
//     console.log("chịu");
//   }
// }

// Bài2:
// let a = +prompt("Nhập vào số a");
// if (Number.isInteger(a) === true && a > 0) {
//   if (a < 20) {
//     console.log("Tăng nhiệt độ đi");
//   } else if (a > 100) {
//     console.log("Giamr xuong");
//   } else console.log("Ngốc");
// } else {
//   console.log("ko co");
// }

// let sum = 0;
// let count = 0;

// for (let i = 5; count < 30; i += 5) {
//   sum += i;
//   count++;
// }

// console.log("Tổng của 30 số đầu tiên chia hết cho 5 là:", sum);
// for (let j = 1; j <= 5; j++) {
//   let row = "";
//   for (let i = 1; i <= 5; i++) {
//     row += "#";
//   }
//   console.log(row);
// }
// let isAdult = confirm("Bạn đã đủ 18 tuổi chưa?");
// if (isAdult) {
//   alert("Bạn đã xác nhận rằng bạn đủ 18 tuổi.");
// } else {
//   alert("Bạn chưa đủ 18 tuổi.");
// }

// for (let j = 1; j <= 10; j++) {
//   console.log(`------------`);
//   for (let i = 1; i <= 10; i++) {
//     console.log(`${j}*${i}=${j * i}`);
//   }
// }
// Ex7.

// let n = +prompt("Nhập (2-100)");
// if (Number.isInteger(n) && n >= 2 && n <= 100) {
//   for (let i = 2; i < n; i = i + 1) {
//     if (i % 2 === 0) {
//       console.log(`Bình phương ${i}=${i ** 2}`);
//     }
//   }

//   // C2;
//   for (let i = 2; i <= n; i = i + 2) {
//     console.log(`Bình phương của ${1}=${i ** 2}`);
//   }
// } else {
//   console.log("Dũ liệu ko oke");
// }
// for (let i = 0; i <= 10; i++) {
//   let red = Math.floor(Math.random() * 256);
//   let green = Math.floor(Math.random() * 256);
//   let blue = Math.floor(Math.random() * 256);
//   console.log(
//     "%c Anh tên là....",
//     `background-color: red; color: rgb(${red}, ${green},${blue}`
//   );
// }

// let N = +prompt("Mời bạn nhập vào");
// for (let i = 2; i < N; i++) {
//   let check = true;
//   if (N % i == 0) {
//     check = false;

//     break;
//   }
//   if (check) {
//     console.log(`${N}Đây phải số nguyên tố`);
//   }
// }

// let n = +prompt("Mời bạn nhập vào0");
// // số nguyên tố là số chỉ chia hết cho 1 và chính nó
// // 14,[13,12,2]
// let check = false;

// for (let i = 2; i < n; i = i + 1) {
//   if (n % i === 0) {
//     check = true;
//     break;
//   }
// }

// if (!check) {
//   console.log(`${n} là số nguyên tố`);
// } else {
//   console.log(`${n} là ko phai số nguyên tố`);
// }
//Kỹ thuật cắm cờ

// let d = +prompt("Mời bạn nhập vào");
// //  14(13,12...1)
// let check = false;
// for (i = 2; i < d; i++) {
//   if (d % i === 0) {
//     check = true;
//     break;
//   }
// }
// if (!check) {
//   console.log("nguyên tố");
// } else {
//   console.log("ko phải nguyên tốt nhé");
// }

// Viết chương trình kiểm tra số N có phải là số hoàn hảo hay không? N nhập từ browser

// let N = +prompt("Mời bạn nhập vào");
// let sum = 0;
// for (i = 1; i < N; i++) {
//   if (N % i === 0) {
//     sum = sum + i;
//   }
// }
// if (sum === N && N !== 0) {
//   console.log("Đây là số hoàn hảo");
// } else {
//   console.log("Đây không phải số hoàn hảo");
// }

// Cho người dùng đăng nhập vào số n
// Tạo sẵn 1 biến result =17

// Tiến hành kiểm tra
// Nếu n < results ===>"Too small"
// Nếu n > results ===>"Too big"
// nếu n === results ===>"Bingo!!!"
// let result = 17;
// let loop = true;
// while (){
// let Num = +prompt("Text(0-100)");

// if (Num < result) {
//   console.log("Too Small");
// } else if (Num > result) {
//   console.log("Too Big");
// } else {
//   console.log("Bingo");
//   //Đây là chỗ STOP..
//   loop = false;
// }
// }

// while(condition){
//   //do something
// }

// do {
//   // do something
// }while(1 !== 1);
