let headerTop = document.querySelector(".header-top");
let headerList = document.querySelector(".header-top__list");
let Btn = document.querySelector(".btn");

Btn.addEventListener("click", function(){
  headerTop.classList.toggle("active");
});

Btn.addEventListener("click", function(){
  headerList.classList.toggle("active");
});