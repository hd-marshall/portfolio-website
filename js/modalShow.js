const miningOpen = document.getElementById("mining-click");
const cakeOpen = document.getElementById("cake-click");
const webOpen = document.getElementById("web-click");

miningOpen.addEventListener('click', function() {
    document.querySelector('.mine-modal').style.display = 'flex';
});

document.querySelector('.close').addEventListener('click', function (){
    document.querySelector('.mine-modal').style.display = 'none';
});

cakeOpen.addEventListener('click', function() {
    document.querySelector('.cake-modal').style.display = 'flex';
});

document.querySelector('.close-close').addEventListener('click', function (){
    document.querySelector('.cake-modal').style.display = 'none';
});

webOpen.addEventListener('click', function() {
    document.querySelector('.web-modal').style.display = 'flex';
});

document.querySelector('.close-close2').addEventListener('click', function (){
    document.querySelector('.web-modal').style.display = 'none';
});