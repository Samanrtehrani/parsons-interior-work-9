window.onload=function(){"use strict";var e=document.querySelector("body"),s=e.firstElementChild,a=document.createElement("div"),i=0;a.setAttribute("id","column-baseline-grid"),null!==s?e.insertBefore(a,s):e.textContent="The body element does not have a child element.",document.onkeydown=function(e){if(27===e.keyCode){switch(i){case 0:a.classList.add("column-grid"),a.classList.remove("user-supplied-bg-image");break;case 1:a.classList.remove("column-grid"),a.classList.add("modular-grid");break;case 2:a.classList.remove("modular-grid"),a.classList.add("baseline-grid");break;case 3:a.classList.remove("baseline-grid"),a.classList.add("all-grids");break;case 4:a.classList.remove("all-grids"),a.classList.add("user-supplied-bg-image");break;case 5:a.classList.remove("user-supplied-bg-image")}5===i++&&(i=0)}}};