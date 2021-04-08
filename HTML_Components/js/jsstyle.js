$(document).ready(function() {
   $(".accordion__title").click(function() {
      $(this).toggleClass("active");
   }); 
});

// form 

//Khi thay đổi value thì data-error sẽ biến mất
document.querySelectorAll('.from__container[data-error] .input').forEach(inpEl =>{
   inpEl.addEventListener('input', ()=> inpEl.parentElement.removeAttribute('data-error'));
});
// form 