

// Dom Document Object Model
// console.dir(document);

// let h1HTMl = document.getElementById("demoid")
// console.log(h1HTMl);
// ------------------------------------------------------------------------------
// let demoClasslist = document.getElementsByClassName("demo-class")//[div,p,div,p]
// console.log(demoClasslist[1]);
// for (let i = 0; i < demoClasslist.length; i++) {

// }
// // //Là dữ liễu gần giống mảng
// // //-Có cả phần tử bên trong đều được đánh chỉ số
// // //-Có thuộc tính length
// // //-Có thể sử dụng vòng lặp for
// // //-Nhưng ko phải mảng(không thế sư dung được các phương thức sẵn của mạng)
// // // ---------------------------------------------------------------------
// let divCollection = document.getElementsByTagName("div");//[div,div,div]
// console.log(divCollection[0
// ]);
// --------------------------------------------------------------------------
// // document.querySelector
// let h1 = document.querySelector("#test-demo")
// console.log(h1);
// // // ----------------------------------------------
// // // lấy toàn bộ sử dụng chung .demo-class
// let classCollecton = document.querySelectorAll(".demo-class");
// console.log(classCollecton);
// // Gần giống mảng , trả vê Nodelis

// let h1 = document.getElementById("demoid")
// h1.textContent = "Nội dung cập nhập mới"
// console.dir(h1.textContent);


// // Content:Nội dung
// // -.inner Text:Lấy ra nội dung là text ở bên trong HTML ko bao gồm(khoảng trắng, xuống dòng, space)
// //    -Ko lấy ra được nội dung đã bị display:none
// // -.textContent:Lấy ra nội dung là text ở bên trong HTML bao gồm(khoảng trắng, xuống dòng, space)//code nào hiển thị vậy
// //    -Lấy ra được toàn bộ nội dung kể cả display none
// // -.innerHTML
// //    ấy ra được toàn bộ nội dung là HTML trong phần tử HTMl
// h1.innerText = "Tôi vừa được cập nhâị nội dung bằng innerText";
// h1.textContent = h1.textContent + "Nội dung nối sau";
// h1.innerHTML = `<ul style="text-decoration: line-through">Hello</ul>`;
// console.log(h1.innerText);
// console.log(h1.textContent);
// console.log(h1.innerHTML);

// // h1.innerText//chữ trong H1
// // h1.textContent//Nội dung
// // h1.innerHTML//HTML TRONG H1

// { ID, TITLE, DESCRIPTION, IMAGE, CONTENT }
// const blogData = [
//     {
//         id: 1,
//         title: "Tôi buồn",
//         description: "Tôi vui",
//         image: "HInhf ảnh 1",
//         content: "Tôi là tôi",

//     },
//     {
//         id: 2,
//         title: "Tôi buồn",
//         description: "Tôi yêu đời",
//         image: "HInhf ảnh 2",
//         content: "Tôi là tôi",

//     },
//     {
//         id: 3,
//         title: "Tôi chơi",
//         description: "Tôi play football",
//         image: "HInhf ảnh 3",
//         content: "Tôi là tôi",

//     },
//     {
//         id: 4,
//         title: "Tôi bay",
//         description: "Tôi play hehe",
//         image: "HInhf ảnh 4",
//         content: "Tôi là tôi",

//     }
// ];
// const cardContainer = document.getElementById("card-container");
// console.log(cardContainer);
// let cardTemplae = `<div class="card">
//           <h2>TITLE HEADING</h2>
//           <h5>Title description, Dec 7, 2017</h5>
//           <div class="fakeimg" style="height: 200px">Image</div>
//           <p>Some text..</p>
//         </div>`;
// for (let blog of blogData) {
//     cardContainer.innerHTML = cardContainer.innerHTML + `<div class="card">
//           <h2>${blog.title}</h2>
//           <h5>${blog.description}</h5>
//           <div  class="fakeimg" style="height: 200px"> ${blog.image}</div>
//           <p>${blog.text}</p>
//         </div>`;
// }


// // Attribue-Thuộc tính
// // Lấy Attribute thông qua Atrribute
// let img = document.getElementById("img")
// console.log(img.src);
// img.src = "https://inkythuatso.com/uploads/thumbnails/800/2022/06/hinh-nen-cong-nghe-3d-cho-dien-thoai-6-07-13-57-45.jpg"
// img.setAttribute("src", "https://hoanghamobile.com/tin-tuc/wp-content/uploads/2023/09/hinh-nen-may-tinh-4k-cong-nghe-19.jpg")
// img.setAttribute("src", "HIHIHI")
// console.dir(img);

// // let a = document.getElementById("a");
// // console.log(a.href);
// // let input = document.getElementById("input")
// // console.log(input.placeholder);
// // console.log(input.type);
// // // Cách khác
// console.log(img.getAttribute("src"));

// // .setAtribute()

// // -------------------------------
// // STYLE
// // ------------------------------
// console.log(img.style);
// img.style.borderRadius = "50%";
// let div = document.getElementById("Demo-style");
// div.style.backgroundColor = "pink"
// div.style.width = "300px";
// div.style.height = "300px";
// div.style.color = "yellOW";
// div.style.textAlign = "center";
// div.style.fontSize = "50%";
// div.style.lineHeight = "40px";
//Chỉ phù hợp cho việc style ngắn cho HTML

// Đối với tạo kiểu dài :Classlist
// // 1-Add()
// //2-Remove()
// // 3-toggle
// console.log(div.classList);
// // Trả về danh sách các class của phần tử HTML
// div.classList.add("pink-circle");
// div.classList // danh sách class của HTML
// // ----------------------------------------------------------
// // Event-Sự kiện: là những sự kiện những hành động người dùng có thể phát sinh trên Web
// //Sau khi những hành động này xảy ra- Mội chuỗi các hành động tiếp thoe cũng sẽ được kích hoạt theo
// // 1-Mouse event1
// // 2 keyboard evend
// // 3 Formevent1
// // 4 inputevent
let btn = document.getElementById("btn")
console.log(btn);

// // btn.onclick// đưa vào trạng thái lắng nghe của người dùng
btn.onclick = function () {
    btn.innerHTML = `<img
      id="img"
      src="https://hoanghamobile.com/tin-tuc/wp-content/uploads/2023/09/hinh-nen-may-tinh-4k-cong-nghe-41.jpg"
      alt=""
    />`

}