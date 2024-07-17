// Bai1
// let btn1 = document.getElementById("btn1")
// let btn2 = document.getElementById("btn2")
// let p1 = document.getElementsByTagName("p")
// console.log(p1);
// //Tag name va class phai co vi tri
// btn1.onclick = function () {
//     p1[0].style.display = "none";
// }
// btn2.onclick = function () {
// p1[0].style.display = "block";
// }
// Bài 3.2
// let div = document.getElementById("duongp")
// div.classList.add("duongp2")

// let I = document.getElementsByTagName("i")
// console.log(I);
// I[0].style.paddingLeft = "10px";
// let body = document.getElementsByTagName("body")
// let btn3 = document.getElementById("btn3")

// btn3.onclick = function () {
//     body[0].style.backgroundColor = "#999999";
//     div.style.display = "content";
//     btn3.style.display = "none"
// }
// I[0].onclick = function () {
//     div.style.display = "none"
//     body[0].style.backgroundColor = "white";
// }
// bài 3.3
// let body = document.getElementsByTagName("body")
// let box1 = document.getElementById("box1");
// let box2 = document.getElementById("box2");
// let box3 = document.getElementById("box3");

// box1.onmouseover = function () {
//     body[0].style.backgroundColor = "yellow"
// }
// box2.onmouseover = function () {
//     body[0].style.backgroundColor = "Green"
// }
// box3.onmouseover = function () {
//     body[0].style.backgroundColor = "Gray"
// }
// let body = document.getElementsByTagName("body")
// let div = document.getElementById("Textposition")
// let p = document.getElementById("text2")
// text2.onclick = function () {
//     div.style.display = "block"
// }
// body[0].onmouseover = function () {
//     div.style.display = "none"
// }

// let main = document.getElementsByTagName("main")
// let btnx = document.getElementById("btnx")

// btnx.ondblclick = function () {
//     main[0].classList.toggle("main")
// } 




const container = document.getElementById("list");
for (let i = 0; i < 3; i++) {
    container.insertAdjacentHTML("beforeBegin", `<li>${i}</li>`);
    container.insertAdjacentHTML("afterbegin", `<li>${i}</li>`);
    container.insertAdjacentHTML("beforeend", `<li>${i}</li>`);
    container.insertAdjacentHTML("afterend", `<li>${i}</li>`);
}
