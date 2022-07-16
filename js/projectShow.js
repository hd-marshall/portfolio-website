document.getElementById('mining-click').addEventListener('click',
  function() {

    document.querySelector('.column2').style.display = 'none';
    document.querySelector('.column3').style.display = 'none';
    document.querySelector('.project-column').style.flexDirection = 'column';
    document.querySelector('.column1').style.width = '100%';
    document.querySelector('.col-border').style.width = '100%';
    document.querySelector('.border-button').style.display = 'none';
    document.querySelector('.crypto-front').style.display = 'none';

});

document.getElementById('cake-click').addEventListener('click',
  function() {

    document.querySelector('.column1').style.display = 'none';
    document.querySelector('.column3').style.display = 'none';
    document.querySelector('.project-column').style.flexDirection = 'column';
    document.querySelector('.column2').style.width = '100%';
    document.querySelector('.col-border').style.width = '100%';
    document.querySelector  ('.border-button2').style.display = 'none';

});

document.getElementById('web-click').addEventListener('click',
  function() {

    document.querySelector('.column1').style.display = 'none';
    document.querySelector('.column2').style.display = 'none';
    document.querySelector('.project-column').style.flexDirection = 'column';
    document.querySelector('.column3').style.width = '100%';
    document.querySelector('.col-border').style.width = '100%';
    document.querySelector('.border-button3').style.display = 'none';

});