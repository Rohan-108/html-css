const header=document.querySelector('.header');
const navBtn=document.querySelector('.nav-toggle-btn');
const close=document.querySelector('.close');
const open=document.querySelector('.open');
const goTop=document.querySelector('.go-top');
open.addEventListener('click',()=>{
    header.classList.add('active');
    navBtn.classList.add('active');
});
close.addEventListener('click',()=>{
    header.classList.remove('active');
    navBtn.classList.remove('active');
});
window.addEventListener("scroll", function () {
  window.scrollY >= 500 ? goTop.classList.add("active")
    : goTop.classList.remove("active");
});