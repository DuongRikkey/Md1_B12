// let fa1 = 0;
// let fa2 = 1;
// let sum = 0;
// for (i = 3; i <= 20; i++) {
//   let fab = fa1 + fa2;
//   fa1 = fa2;
//   fa2 = fab;
//   sum = sum + fab;
// }
// console.log(sum);

// let fa1 = 0;
// let fa2 = 1;
// let sum = 0;
// for (i = 3; i < 20; i++) {
//   let fab = fa1 + fa2;
//   fa1 = fa2;
//   fa2 = fab;
//   if (fab % 5 == 0) {
//     console.log(fab);
//     break;
//   }
// }

// let sum = 0;
// let count = 0;

// for (let i = 1; count < 30; i++) {
//   if (i % 7 === 0) {
//     sum = sum + i;
//     count++;
//   }
// }
// console.log(sum);
// let A = [1, 2, 3, 4, 5];
// let vitri;
// for (i = 0; i < N/2; i++) {
//   vitri = A[i];
//   A[i] = A[4 - i];
//   A[4 - i] = vitri;
// }
// Từ bé đến lớn r quay lại
// let sumchan = 0;
// let A = [-3, -5, 5, 1, 2, 4];
// for (i = 0; i < A.length; i++) {
//   if (A[i] % 2 === 0) {
//     sumchan = sumchan + A[i];
//   }
// }
// console.log(sumchan);

// let temp;
// for (let i = 0; i < 5; i++) {
//   for (let j = i + 1; j < 6; j++) {
//     if (A[i] > A[i + 1]) {
//       temp = A[i];
//       A[i] = A[i + 1];
//       A[j] = temp;
//     }
//   }
// }
// console.log(A);
//Bai toan Max Min
// let max = A[0];
// let min = A[0];
// for (i = 0; i < 5; i++) {
//   if (A[i] > max) {
//     max = A[i];
//   }
//   if (A[i] < min) {
//     min = A[i];
//   }
// }
// console.log(max);
// console.log(min);
//----------------
//Bai Toan tu lon den be
// let B = A;

// let tao;
// for (j = 0; j < 3; j++) {
//   tao = A[j];
//   A[j] = A[5 - j];
//   A[5 - j] = tao;
// }
// console.log(B);

// for (j = 1; j <= 10; j++) {
//   console.log(`----------------`);
//   for (i = 1; i <= 10; i++) {
//     console.log(`${j}.${i}=${i}`);
//   }
// }
// let N = +prompt("NV");
// let sum = 0;
// for (i = 1; i < N; i++) {
//   if (N % i === 0) {
//     sum += i;
//   }
// }
// if (N === sum && N != 0) {
//   console.log("đây hoàn hảo");
// } else {
//   console.log("no");
// }

// let N = +prompt("NV");
// let check = true;
// for (i = 2; i < N; i++) {
//   if (N % i === 0) {
//     check = false;
//     break;
//   }
// }
// if (!check) {
//   console.log("số nguyên tố");
// } else {
//   console.log("ko phải");
// }

// let N = +prompt("NV");
// let N = 1;
// for (i = 1; i < N; i++) {
//   N = (N - 1) * i;
// }
for (let i = 0; i < array.length; i++) {
  const element = array[i];
}

// let n = prompt("Nhập số");
// let revert = "";
// for (let i = n.length - 1; i >= 0; i--) {
//   revert += n[i];
// }
// console.log(revert);

// In 20 số nguyên tố đầu
// let n = +prompt("Mời bạn nhập số n");
// //Tạo ra biến đếm số nguyên tố sẽ được in ra
// let count = 0;
// let num = 2; // con số nguyên tố đầu tiên trong dãy số nguyên tốt
// while (count < n) {
//   // Phải tìm ra được số nguyên tố,1 thì biến count ms tăng lên 1 đơn vị
//   let check = false;
//   for (let i = 2; i < num; i = i + 1) {
//     if (num % i === 0) {
//       check = true;
//     }
//   }
//   if (!check) {
//     console.log(num);
//     count = count + 1;
//   }
//   num = num + 1;
// }
// let n = +prompt("Mời bạn nhập vào");
// let num = 2;
// let count = 0;

// while (count < n) {
//   let check = false;
//   for (i = 2; i < num; i++) {
//     if (num % i === 0) {
//       check = true;
//       break;
//     }
//   }
//   if (!check) {
//     console.log(num);
//     count = count + 1;
//   }
//   num = num + 1;
// }

// let n = +prompt("Mời bạn nhập số n");
// // Dòng này yêu cầu người dùng nhập một số và chuyển đổi giá trị nhập từ chuỗi thành số.

// let count = 0;
// // Biến `count` để đếm số lượng số nguyên tố đã tìm thấy.

// let num = 2;
// // Biến `num` bắt đầu từ 2, vì 2 là số nguyên tố nhỏ nhất.

// while (count < n) {
//   // Vòng lặp `while` tiếp tục chạy cho đến khi `count` bằng `n`, tức là đã tìm thấy đủ `n` số nguyên tố.

//   let check = false;
//   // Biến `check` để kiểm tra xem `num` có phải là số nguyên tố không. Khởi tạo `check` là `false`.

//   for (let i = 2; i < num; i++) {
//     // Vòng lặp `for` kiểm tra các số từ 2 đến `num-1` để xem `num` có chia hết cho bất kỳ số nào trong khoảng đó không.

//     if (num % i === 0) {
//       check = true;
//       break;
//       // Nếu `num` chia hết cho `i`, tức là `num` không phải là số nguyên tố, đặt `check` là `true` và thoát vòng lặp `for`.
//     }
//   }

//   if (!check) {
//     // Nếu `check` vẫn là `false`, tức là `num` không chia hết cho bất kỳ số nào từ 2 đến `num-1`, thì `num` là số nguyên tố.

//     console.log(num);
//     // In ra số nguyên tố `num`.

//     count++;
//     // Tăng `count` lên 1 để đếm số nguyên tố đã tìm thấy.
//   }

//   num++;
//   // Tăng `num` lên 1 để kiểm tra số tiếp theo.
// }

// Lý thuyến String
// let randomString = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam eaque ut in, inventore obcaecati esse quos id, delectus
//     possimus, quis beatae modi illum neque rem magni omnis recusandae necessitatibus natus?`; //[0-- độ dài chuoõi -1]

// console.log("Hello World"[0]);
// console.log("Hello World"[6]);
// console.log(randomString[randomString.length - 1]);

// Bài 14
// Nháp //
// let n = +prompt("Mời bạn nhập vào (1-100)");
// let result = "";
// for (let i = 1; i <= n; i++) {
//   result = result + ` ${i}`;
// }
// console.log(result.trim());
// let result2 = "";
// for (let i = 1; i <= n; i++) {
//   result2 = result2 + ` ${i}`;
// }
// console.log(result2.trim());

// Bài 14 n=5
// let n = +prompt("Mời bạn nhập vào (1-100)");
// for (let j = 1; j <= n; j = j + 1) {
//   let result = "";
//   for (let i = j; i < n + j; i = i + 1) {
//     result = result + ` ${i}`;
//   }
//   console.log(result.trim());
// }
// Bài học         // Array
// let mon1 = "Tiet canh de";
// let mon2 = "Long xach de xao";
// let mon3 = "Canh dang";
// //...Nồi hấp bị hỏng
// let mon80 = "De xong hơi";
// let mon81 = "Robeo";
// //...
let mon1000 = "Rido";
