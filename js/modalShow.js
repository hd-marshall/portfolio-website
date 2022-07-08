//First Modal - Crypto 
document.getElementById('mining-click').addEventListener('click',
  function() {
    document.querySelector('.modal-1').style.display = 'flex';
});

document.getElementById('close-1').addEventListener('click',
  function() {
    document.querySelector('.modal-1').style.display = 'none';
});

//Second Modal - Sweets 
document.getElementById('cake-click').addEventListener('click',
  function() {
    document.querySelector('.modal-2').style.display = 'flex';
});

document.getElementById('close-2').addEventListener('click',
  function() {
    document.querySelector('.modal-2').style.display = 'none';
});

//Third Modal - Web 
document.getElementById('web-click').addEventListener('click',
  function() {
    document.querySelector('.modal-3').style.display = 'flex';
});

document.getElementById('close-3').addEventListener('click',
  function() {
    document.querySelector('.modal-3').style.display = 'none';
});