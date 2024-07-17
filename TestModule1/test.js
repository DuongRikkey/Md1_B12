// let A = "Hello World";
// let B = "";
// for (i = 0; i <= A.length - 1; i++) {
//   if (A[i] === A[i].toUpperCase()) {
//     B = B + A[i].toLowerCase();
//   } else {
//     B = B + A[i].toUpperCase();
//   }
// }
// console.log(B);
// Khởi tạo mảng số nguyên gồm 10 phần tử

// let A = [];
// for (i = 0; i < 10; i++) {
//   while (true) {
//     let num = parseInt(prompt(`Mời bạn nhập số ${i + 1}`));
//     if (isNaN(num) == false) {
//       A.push(num);
//       break;
//     } else {
//       alert("Vui lòng nhập lại giúp");
//     }
//   }
// }
// let count = 0;
// for (let num of A) {
//   if (num >= 10) {
//     count++;
//   }
// }

// Bài 2
// let A = [];

// for (
//   i = 0;
//   i < 10;
//   i++ // để tạo mảng số nguyên + 10 phần tử khác nhau
// ) {
//   while (true) {
//     let num = parseInt(prompt(`Mời bạn nhập vào từ ${i + 1}`));
//     if (!isNaN(num) && !A.includes(num)) {
//       A.push(num);
//       break;
//     } else {
//       alert("Mời bạn nhập lại dcm");
//     }
//   }
// }
// console.log(A);
// let max = A[0];
// let vitri = 0;
// for (let num of A) {
//   if (max < num) {
//     max = num;
//     vitri = A.indexOf(num);
//   }
// }
// console.log(`Vậy max của mảng là ${max} tại ${vitri}`);

//Bài 3
// let A = [];
// let n = parseFloat(prompt(`Mời bạn nhập n`));
// for (i = 0; i < n; i++) {
//   while (true) {
//     let num = parseInt(prompt(`Mời bạn nhập vào từ ${i + 1}`));
//     if (!isNaN(num)) {
//       A.push(num);
//       break;
//     } else {
//       alert("Mời bạn nhập lại nhé");
//     }
//   }
// }
// console.log(A);
// let sum = 0;
// let max = A[0];
// for (let num of A) {
//   if (num > max) {
//     max = num;
//   }
//   sum = sum + num;
// }
// let trungbinh = sum / A.length;
// console.log(`Gía trị lớn nhất là ${max}`);
// console.log(`Gía trị trung bình là ${trungbinh}`);

// Bài 4
// let A = [];
// let n = parseFloat(prompt("Mòi bạn nhập vào số n"));
// for (i = 0; i < n; i++) {
//   while (true) {
//     let num = parseInt(prompt(`Mời bạn nhập vào ${i + 1}`));
//     if (!isNaN(num)) {
//       A.push(num);
//       break;
//     } else {
//       alert("Yêu cầu nhập lại");
//     }
//   }
// }
// console.log(A);
// let B = A.reverse();
// console.log(`Mảng đảo người là ${B}`);
// Bài 5

// Bài 8
// let array = [];

// for (i = 0; i < 10; i++) {
//   let num = parseInt(prompt(`Mời bạn nhập ${i + 1}`));
//   while (true) {
//     if (isNaN(num) == false) {
//       array.push(num);
//       break;
//     } else alert("Nhập lại ngu");
//   }
// }
// let temp;
// for (j = 0; j < array.length - 1; j++) {
//   for (h = j + 1; h < array.length; h++) {
//     if (array[j] > array[h]) {
//       temp = array[j];
//       array[j] = array[h];
//       array[h] = temp;
//     }
//   }
// }
// console.log("Mảng sau khi sắp xếp:", array);
// console.log("Đảo ngược", array.reverse());
// Bài 5:Viết phương trình trong số nguyên âm trong một mảng:

// let A = [];
// let n = parseInt(prompt("Mời bạn nhập vào"));
// for (i = 0; i < n; i++) {
//   while (true) {
//     let num = parseInt(prompt(`Mời bạn nhập vào ${i + 1}`));
//     if (!isNaN(num)) {
//       A.push(num);
//       break;
//     } else {
//       ("Mời bạn nhập lại");
//     }
//   }
// }
// let count = 0;
// for (let num of A) {
//   if (num < 0) {
//     count++;
//   }
// }
// console.log(`Số nguyên âm có trong mảng là ${count}`);

// Bài 6

// let A = [11, 12, 14, 2, 1, -33, 1, 122, -1, 9];

// let check = false;
// for (let i = 0; i < 10; i++) {
//   let num = parseInt(prompt(`mời bạn nhập vào ${i + 1}`));
//   if (!A.includes(num)) {
//     check = true;
//     break;
//   }
// }
// if (!check) {
//   console.log(`${num} Number X is in the array `);
// } else {
//   console.log(`${num} Number X is not in the array `);
// }

// Bài 7
// let A = [11, 12, 14, 2, 1, -33, 1, 122, -1, 9];

// let check = false;
// let num = parseInt(prompt(`mời bạn nhập vào:`));
// for (let i = 0; i < A.length; i++) {
//   if (num === A[i]) {
//     check = true;
//     A.splice(i, 1);
//     A.push(0);
//     break;
//   }
// }
// if (check === true) {
//   console.log("Mảng sau khi xoá:", A);
// } else {
//   console.log("Mời nhập lại)

// }

// Bài 9
// let A = [];
// let B = [];
// for (i = 0; i < 3; i++) {
//   while (true) {
//     let num = +parseInt(prompt(`Mời bạn nhập vào ${i + 1}`));
//     if (!isNaN(num)) {
//       A.push(num);
//       break;
//     } else {
//       alert("Vui lòng nhập một số hợp lệ.");
//     }
//   }
// }
// console.log(A);
// for (i = 0; i < 3; i++) {
//   while (true) {
//     let num1 = +parseInt(prompt(`Mời bạn nhập vào ${i + 1}`));
//     if (!isNaN(num1)) {
//       B.push(num1);
//       break;
//     } else {
//       alert("Vui lòng nhập một số hợp lệ.");
//     }
//   }
// }
// let c = [];
// for (i = 0; i < 3; i++) {
//   c.push(A[i]);
//   c.push(B[i]);
// }
// console.log(c);
// console.log(B);
// C = A.concat(B);
// console.log(C);

// Mảng 2:
// //Bài 2
// let A = ["c", "s", "c", "2", "6", "1"];
// let B = [];
// for (i = A.length - 1; i >= 0; i--) {
//   B.push(A[i]);
//   let str = B.join("");
// }
// console.log(`"${str}"`);
//Bài 3
// let A = [];
// let count = 0;
// for (i = 0; i < 10; i++) {
//   while (true) {
//     let num = prompt(`Mời bạn nhập vào phần tử ${i + 1}`);
//     if (!isNaN(num)) {
//       A.push(num);
//       count++;
//       break;
//     } else {
//       A.push(num);
//       break;
//     }
//   }
// }
// console.log("là chữ số",count);
// console.log(A);
//Bài 4

// let text = "Hello World A";
// let convert = text.split(" ");
// // console.log(convert);
// convert.join();
// console.log(convert);
// console.log(convert.length);
// Bài 5
// let c1 = prompt("Mời bạn nhận chuỗi 1");
// let c2 = prompt("Mời bạn nhập c2");
// if (c1 === c2) {
//   console.log("Hai chuỗi giống nhau");
// } else {
//   console.log("Hai chuỗi khác nhau");
// }
// Bài 6
// let A = ["C", "-", "t", "-", "2", "3"];
// for (i = 0; i <= A.length - 1; i++) {
//   if (A[i] == "-") {
//     A.splice(i, 1, "_");
//   }
// }
// console.log(A);

// Bài tập xóa phần tử mảng
// let A = [];

// for (i = 0; i < 5; i++) {
//   while (true) {
//     let num = parseInt(prompt(`Mời bạn nhập vào ${i + 1}`));
//     if (!isNaN(num)) {
//       A.push(num);
//       break;
//     } else {
//       alert("Mời bạn nhập lại");
//     }
//   }
// }
// console.log(A);

// for (let i = A.length - 1; i >= 0; i--) {
//   if (A[i] % 2 !== 0) {
//     A.splice(i, 1); // Remove element at index i
//   }
// }
// console.log(A);
// let A = [];

// for (i = 0; i < 5; i++) {
//   while (true) {
//     let num = parseInt(prompt(`Mời bạn nhập vào ${i + 1}`));
//     if (!isNaN(num)) {
//       A.push(num);
//       break;
//     } else {
//       alert("Mời bạn nhập lại");
//     }
//   }
// }
// console.log(A); // Output the modified array A

// Bài 1
// let A = [];

// for (i = 0; i < 5; i++) {
//   while (true) {
//     let num = parseInt(prompt(`Mời bạn nhập vào ${i + 1}`));
//     if (!isNaN(num)) {
//       A.push(num);
//       break;
//     } else {
//       alert("Mời bạn nhập lại");
//     }
//   }
// }
// console.log(A);
// let max = A[0];
// let min = A[0];
// for (i = 0; i <= 4; i++) {
//   // for (let num of A) {
//   if (A[i] > max) {
//     max = A[i];
//   } else {
//     min = A[i];
//   }
// }
// console.log(max);
// console.log(min);
//Bài 2
// let a = +prompt("Mời bạn nhập vào");
// let b = +prompt("Mời bạn nhập vào");
// let c = [];
// if (a > b) {
//   for (i = b; i <= a; i++) {
//     c.push(i);
//   }
// } else {
//   for (i = a; i <= b; i++) {
//     c.push(i);
//   }
// }
// console.log(c);
//Bài 4
// let A = [];

// for (i = 0; i < 5; i++) {
//   while (true) {
//     let num = parseInt(prompt(`Mời bạn nhập vào ${i + 1}`));
//     if (!isNaN(num)) {
//       A.push(num);
//       break;
//     } else {
//       alert("Mời bạn nhập lại");
//     }
//   }
// }
// console.log(A);
// let B = [];
// let C = [];
// for (i = 0; i < A.length; i++) {
//   if (A[i] % 2 === 0) {
//     B.push(A[i]);
//   } else {
//     C.push(A[i]);
//   }
// }
// console.log(B);
// console.log(C);

// bài 6
// let arr = [];
// for (i = 0; i < 5; i++) {
//   while (true) {
//     let num = parseInt(prompt(`Mời bạn nhập vào ${i + 1}`));
//     if (!isNaN(num)) {
//       arr.push(num);
//       break;
//     } else {
//       alert("Mời bạn nhập lại");
//     }
//   }
// }
// console.log(arr);

// for (let i = arr.length - 1; i > 0; i--) {
//   let j = Math.floor(Math.random() * (i + 1));
//   // Hoán đổi phần tử arr[i] với arr[j]
//   let temp = arr[i];
//   arr[i] = arr[j];
//   arr[j] = temp;
// }

// // In mảng mới ra màn hình console
// console.log("Mảng sau khi sắp xếp ngẫu nhiên:", arr);

//Bài 7
// let inputString = prompt("Nhập vào một chuỗi bất kỳ:");
// let substrings = [];

// // Duyệt qua từng vị trí bắt đầu của chuỗi
// for (let start = 0; start < inputString.length; start++) {
//   // Duyệt qua từng độ dài của chuỗi con
//   for (let length = 1; length <= inputString.length - start; length++) {
//     let substring = inputString.substr(start, length);
//     substrings.push(substring);
//   }
// }

// console.log("Các chuỗi con của chuỗi đã nhập:", substrings);

//Bài 7 :Giỏi
// let input = prompt("Mời bạn nhập nhé");
// let output = [];
// let i = 0;
// while (i < input.length) {
//   let j = i;
//   let be = "";
//   while (j < input.length) {
//     be += input[j];
//     output.push(be);
//     j++;
//   }
//   i++;
// }
// console.log(output);
//Bài 8
let arr = [1, 2, 1, 3, 4, "f"];
console.log("Mảng ban đầu:", arr);

// Xóa đi phần tử đầu tiên của mảng
if (arr.length > 0) {
  arr.shift();
}

// In mảng ra màn hình sau khi xóa phần tử đầu tiên
console.log("Mảng sau khi xóa phần tử đầu tiên:", arr);
