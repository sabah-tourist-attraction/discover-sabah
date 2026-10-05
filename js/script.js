
const menu=document.querySelector('.menu-btn');
const links=document.querySelector('.nav-links');
if(menu) menu.addEventListener('click',()=>links.classList.toggle('open'));
const here=location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(a=>{
  if(a.getAttribute('href')===here) a.classList.add('active');
});
const top=document.querySelector('.backtop');
window.addEventListener('scroll',()=>{if(top) top.style.display=scrollY>500?'block':'none'});
if(top) top.onclick=()=>scrollTo({top:0,behavior:'smooth'});
