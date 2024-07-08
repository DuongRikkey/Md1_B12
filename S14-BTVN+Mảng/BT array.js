// let x = [-3, 5, 1, 3, 2, 10];
// let revert = "";
// // let b = "";
// // let first = 0;
// // let last = x.length - 1;
// // while (first < last) {
// //   b = x[first];
// //   x[first] = x[last];
// //   x[last] = b;
// //   first++;
// //   last--;
// // }
// // alert(x);
// for (i = x.length - 1; i >= 0; i--) {
//   revert = revert + `, ${x[i]}`;
// }
// console.log(revert);

// Bài2:
// let value = +prompt("Mời bạn nhập số vào");
// let numbers = [-3, 5, 1, 3, 2, 10];
// for (i = 0; i < numbers.length; i++) {
//   if (value === numbers[i]) {
//     alert("Value " + numbers[i] + "tại " + i);
//   }
// }
// Bài 3:
// let array = [];
// for (let i = 0; i < 5; i++) {
//   array.push(i);
// }
// console.log("Sử dụng phương thức push()", array);
// let a = 10;
// array.unshift(a);
// console.log("Sử dụng phương thức push()", array);
// // let a = 10;
// // array.unshift(a);
// // console.log("Sử dụng phương thức unshift()", array); // array=[10,0,1,2,3,4]
// array.pop();
// console.log("Sử dụng", array);
// array.shift();
// console.log("Sử dụng", array);
// array.push(20);
// console.log("Sử dụng", array);
// array.splice(1, 0, 1, 2);
// console.log("Sử dụng", array);
// array[3] = "Béo vcl";
// console.log("Sử dụng", array);

// Bài 4:
// let n = +prompt("Mời bạn nhập vào");
// let array = [1, 2, 3, 4, 5, 6];
// let check = false;
// for (i = 0; i <= array.length - 1; i++) {
//   if (n == array[i]) {
//     check = true;
//   }
// }
// if (check == true) {
//   alert("Bingo");
// } else {
//   alert("Thử lại");
// }

// Bài 5:
// let n = prompt("Mời bạn nhập vào");
// let convert = n.split(",");
// console.log("Chuyển đổi string sang array", convert);

// let array = [];
// for (let i = convert.length - 1; i >= 0; i--) {
//   array.push(convert[i]);
// }
// console.log(array);

// let n = prompt("Mời bạn nhập vào");
// let convert = n.split(",");
// console.log("Chuyển đổi string sang array", convert.reverse());

// Bài 6:

// let n = prompt("Mời bạn nhập lại");
// let convert = n.split(",");
// let max = Number(convert[0]);
// for (i = 0; i <= convert.length; i++) {
//   if (max < Number(convert[i])) {
//     max = Number(convert[i]);
//   }
// }
// console.log(max);

// Bài 9:
// let Work = ["ĂN", "NGỦ", "CHƠI"];
// Work.push("Đá pes");
// console.log(Work);
// Work.unshift("Đánh răng");
// console.log(Work);
// Work.splice(4, 0, "Ri do", "Sa ti");
// console.log(Work);
// for (i = 0; i <= Work.length - 1; i++) {
//   console.log(`${Work[i]} tang 10k`);
// }
// console.log(Work);
// Work.shift();
// console.log(Work);
// console.log(`Ronaldo đớp ${Work[2]}`);
// Work.pop();
// console.log(Work);

// Bài 7:
// bài1
// let MyColor = ["Lion", "Tiger", "Wolf", "Kangaroo"];
// console.log(MyColor);
// //bài 2
// let x = "245468".split("");
// // let y = "";
// for (i = 0; i <= x.length - 1; i++) {
//   if (x[i] % 2 == 0 && x[i + 1] % 2 == 0) {
//     x.splice(i + 1, 0, "-");
//   }
//   //   y = y + x[i];
// }
// console.log(x.join(""));
// //LÊ

// //bài 3
// let x = "Keep Calm And Code On";
// let b = "";
// for (i = 0; i <= x.length - 1; i++) {
//   if (x[i].toUpperCase() === x[i]) {
//     b = b + x[i].toLowerCase();
//   } else {
//     b = b + x[i].toUpperCase();
//   }
// }
// console.log();
// console.log(b);

//Bài 8:
let text = prompt("Mời bạn nhập vào");
let English = ["Apple", " Orange", "Tomato", "Watermelon", "Banana", "Mango"];
let Vietnam = ["Táo", "Cam", "Cà chua", "Dưa hấu", "Chuối", "Xoài"];
let dura = "";
let check = false;
for (i = 0; i <= English.length - 1; i++) {
  if (text === English[i]) {
    dura = Vietnam[i];
    check = true;
  }
}
if (check) {
  console.log(dura);
}
