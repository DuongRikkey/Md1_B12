// console.log(1 > 1);
// if (condition) {
//     do something 01

//  else if ( ){  do something 02}
//   else{  do something 03}

// }
// let hour = +prompt("Mời bạn");
// if (Number.isInteger(hour) === true && hour >= 0 && hour <= 24) {
//   if (hour < 10) {
//     console.log("Good Morning !!!!");
//   } else if (hour >= 10 && hour < 20) {
//     console.log("Good day !!!");
//   } else "Good evening";
// } else {
//   console.log("Dữ liệu ko hợp lệ");
// }
// let month=+prompt("Mời bạn nhập vào")

// if(Number.isInteger (month)===true && month <=12 && month >=1){
// // if( month >=1 && month <=3){
// //     console.log(`Tháng ${month} là mùa xuân`)
// // }
// // else if( month >=4 && month <=6){
// //     console.log(`Tháng ${month}là mùa hè`)
// // }
// // else if( month >=7 && month <=10){
// //     console.log(`Tháng ${month} là mùa thu`)
// // }
// // else{
// //     console.log(`Mùa Đông`);
// // }
// // }
//      case 1:
//      case 2:
//      case 3:
//         console.log("Mùa xuân");
//         break;
//      case 4:
//      case 5:
//      case 6:
//         console.log("Mùa Hè");
//         break;
//      case 7:
//      case 8:
//      case 9:
//         console.log("Mùa Thu");
//         break;
//      case 10:
//      case 11:
//      case 12:
//         console.log("Mùa Đông");
//         break;

//  else {
//      console.log("Dữ liêu ko ok")}}
//
// console.log(false == false);
// console.log(0 == false);
// console.log(undefined == false);
// console.log(null == false);

// for (let i = 1; i <= 5; i = i + 1) {
//   console.log("Beo thế");
//   console.log("Beo thế2");
// }
// let A=1+2+3+...+n;
// let n = +prompt("Mời bạn nhập vào");
// let sum = 0;
// for (i = 1; i <= n; i++) {
//   sum = sum + i;
// }
// console.log(sum);

// B=1**2 + 2**2 + 3**2... +n**2
// let n = +prompt("Nhập vào đây");
// let sum = 0;
// for (i = 1; i <= n; i++) {
//   sum = sum + i ** 2;
// }
// console.log(sum);

// C=1/1.2  +1/2.3 +1/3.4 +...+ 1/(n-1)n
// let n = +prompt("Nhập vào đây");
// let sum = 0;
// for (i = 2; i <= n; i++) {
//   sum = sum + 1 / ((i - 1) * i);
// }
// console.log(sum);

// let n = prompt("Nhập vào");
// let sum = 0;

// for (i = 1; i <= n; i++) {
//   sum = sum + i / (i * (i + 2));
// }
// console.log(sum);
let count;
let sum = 0;
for (let i = 1; i <= n; ++i) {
  sum = sum + 1 / (i * (i + 1));
}
console.log(sum);
