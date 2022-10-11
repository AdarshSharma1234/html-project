var circle = document.querySelector('.material-btn');
var link = document.querySelector('.material-contect');
var hum = document.querySelector('.material-humburger');
var main = document.querySelector('main');
var content = document.querySelector('.material-content');

var win=window;

function openMenu(event){
    circle.classList.toggle('active');
    ham.classList.toggle('material-class');
    main.classList.toggle('active')
    for(var i=0;i<link.length;i++){
        link[i].classList.toggle('active');
    }
    content.classList.toggle('active');
    event.preventDefault('');
}