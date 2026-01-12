let a = document.querySelector('.btn');

a.addEventListener("click",function(){
    document.querySelector('#pg-heading').innerHTML = "Day 1 Completed";
    document.querySelector('.pg-text').innerHTML = "I show up. I build. That is enough.";
    document.querySelector('body').style.backgroundColor = "lightgreen";
    document.querySelector('div').style.fontSize="20px";
})