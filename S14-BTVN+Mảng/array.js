let menu = [
  "Tiet canh de",
  "Long xach de xao",
  "Canh dang",
  "De xong hơi",
  "Robeo",
  "Rido",
];
//Creat tạo
console.log(menu);
//Thêm đầu
menu.unshift("Messex");
//Thêm cuối
menu.push("Torres");
//Read one lấy ra 1 phần tử menu[vị trí lấy ra]
console.log(`Ronaldo đớp ${menu[2]}`);
//Read All-lấy ra toàn bộ phần tử
for (let i = 0; i < menu.length - 1; i++) {
  console.log(`Tôi D tăng giá toàn bộ ${menu[i]} lên 199k`);
}
//Update-cập nhập;
menu[7] = "Suarez";
console.log(menu);
//Delete
//Xóa đầu mảng
menu.shift();
console.log(menu);

//Xóa cuối mảng
menu.pop();
console.log(menu);
//Xóa vị trị bất kỳ .splice(index,number),index vị trí , number: số phần tử muốn xóa tại đó theo chiều tăng dần
menu.splice(3, 2);
console.log(menu);
//Thêm mới tại vị trí bất kỳ;

menu.splice(1, 0, "Đậu lướt ván", "Đậu tẩm hành", "Đậu nhồi thịt");
