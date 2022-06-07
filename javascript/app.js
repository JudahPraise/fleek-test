const count = document.getElementById('count');
const counter = document.getElementById('counter');
count.innerHTML = 0;
counter.addEventListener("click", function(){
    count.innerHTML++;
})