const menuBtn =document.getElementById('menu');
const nav =document.getElementById('nav');

menuBtn.addEventListener('click', (e)=>{
    nav.classList.toggle('active');
   // menuBtn.classList.add

    if(e.target.classList.contains('active')){
    nav.classList.remove('active');

    }

})