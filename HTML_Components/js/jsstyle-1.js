// Progress
const progressBar = document.getElementsByClassName('progress__bar')[0]
console.log(progressBar);
setInterval(() => {
    const computerStyle = getComputedStyle(progressBar);
    const witdh = parseFloat(computerStyle.getPropertyValue('--width')) || 0
    progressBar.style.setProperty('--width', witdh + .1)
}, 10);
// Progress

/* Toasts */
$(document).ready(function() {
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

// Pagination
const ulTag = document.querySelector("ul");
let totalPage = 20;

function element(totalPage, page) {
    let liTag = '';
    let activeLi;
    let beforePage = page - 1; //beforePage = 5-1 = 4
    let afterPage = page + 1; //afterPage = 5+1 = 6

    if (page > 1) {
        liTag += '<li class="btn btn-prev" onclick=\"element(totalPage, ' + (page - 1) + ')"><span><i class="fas fa-angle-left"></i>Prev</span></li>';
    }
    if (page > 2) {
        liTag += '<li class="num" onclick=\"element(totalPage, 1)"><span>1</span></li>';
        if (page > 3) {
            liTag += '<li class="dots"><span>...</span></li>';
        }
    }

    for (let pageLength = beforePage; pageLength <= afterPage; pageLength++) {
        // ẩn số 0 và số 21
        if (pageLength > totalPage) {
            continue;
        }
        if (pageLength == 0) {
            pageLength = pageLength + 1;
        }
        // hiện thị active 
        if (page == pageLength) {
            activeLi = "active";
        } else {
            activeLi = "";
        }
        liTag += '<li class="num ' + activeLi + '" onclick=\"element(totalPage, ' + pageLength + ')"><span>' + pageLength + '</span></li>';
    }

    if (page < totalPage - 1) {
        if (page < totalPage - 2) {
            liTag += '<li class="num"><span>...</span></li>';
        }
        liTag += '<li class="dots" onclick=\"element(totalPage, ' + totalPage + ')"><span>' + totalPage + '</span></li>'
    }
    if (page < totalPage) {
        liTag += '<li class="btn btn-next"  onclick=\"element(totalPage, ' + (page + 1) + ')"><span>Next<i class="fas fa-angle-right"></i></span></li>';
    }

    ulTag.innerHTML = liTag;
}
element(totalPage, 5);
// Pagination