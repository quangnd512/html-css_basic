// Progress
const progressBar = document.getElementsByClassName('progress__bar')[0]
console.log(progressBar);
setInterval(()=>{
   const computerStyle = getComputedStyle(progressBar);
   const witdh = parseFloat(computerStyle.getPropertyValue('--width')) || 0
   progressBar.style.setProperty('--width', witdh+ .1)
}, 10);
// Progress

/* Toasts */
$(document).ready(function(){
    $('.icon--close').click(function() {
        $('.toast__content').hide();
    });
    $('.toast__button').click(function() {
        $('.toast__content').toggle();
    });
});
/* Toasts */

// Scrollspy
// Scrollspy

