var modal = document.getElementById(".bg-modal");


const miningOpen = document.getElementById("mining-click");
const cakeOpen = document.getElementById("cake-click");
const webOpen = document.getElementById("web-click");

miningOpen.addEventListener('click', function() {
    document.querySelector('.bg-modal').style.display = 'flex';
});

document.querySelector('.close').addEventListener('click', function (){
    document.querySelector('.bg-modal').style.display = 'none';
});