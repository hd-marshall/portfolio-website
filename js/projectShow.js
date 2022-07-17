document.getElementById('mining-click').addEventListener('click',
  function() {

    document.querySelector('.column2').style.display = 'none';
    document.querySelector('.column3').style.display = 'none';
    document.querySelector('.project-column').style.flexDirection = 'column';
    document.querySelector('.column1').style.width = '95%';
    document.querySelector('.crypto-front').style.display = 'none';

    document.querySelector('.crypto-back').style.display = 'block';

    document.querySelector('.more-btn').style.display = 'none';
    document.querySelector('.return-projects').style.display = 'block';

});

document.getElementById('cake-click').addEventListener('click',
  function() {

    document.querySelector('.column1').style.display = 'none';
    document.querySelector('.column3').style.display = 'none';
    document.querySelector('.project-column').style.flexDirection = 'column';
    document.querySelector('.column2').style.width = '95%';
    document.querySelector('.sweet-front').style.display = 'none';

    document.querySelector('.sweet-back').style.display = 'block';

    document.querySelector('.more-btn').style.display = 'none';
    document.querySelector('.return-projects').style.display = 'block';

});

document.getElementById('web-click').addEventListener('click',
  function() {

    document.querySelector('.column1').style.display = 'none';
    document.querySelector('.column2').style.display = 'none';
    document.querySelector('.project-column').style.flexDirection = 'column';
    document.querySelector('.column3').style.width = '95%';
    document.querySelector('.personal-front').style.display = 'none';

    document.querySelector('.personal-back').style.display = 'block';

    document.querySelector('.more-btn').style.display = 'none';
    document.querySelector('.return-projects').style.display = 'block';

});

/*document.getElementById('back-button').addEventListener('click',
  function() {

    document.querySelector('.crypto-back').style.display = 'none';
    document.querySelector('.crypto-front').style.display = 'block';
    document.querySelector('.border-button').style.display = 'block';
    document.querySelector('.column1').style.width = '33%';
    document.querySelector('.project-column').style.flexDirection = 'row';
    document.querySelector('.column3').style.display = 'block';
    document.querySelector('.column2').style.display = 'block';

});*/

/*document.getElementById('back-button2').addEventListener('click',
  function() {

    document.querySelector('.sweet-back').style.display = 'none';
    document.querySelector('.sweet-front').style.display = 'block';
    document.querySelector('.border-button2').style.display = 'block';
    document.querySelector('.column2').style.width = '33%';
    document.querySelector('.project-column').style.flexDirection = 'row';
    document.querySelector('.column1').style.display = 'block';
    document.querySelector('.column3').style.display = 'block';

});*/

/*document.getElementById('back-button3').addEventListener('click',
  function() {

    document.querySelector('.personal-back').style.display = 'none';
    document.querySelector('.personal-front').style.display = 'block';
    document.querySelector('.border-button3').style.display = 'block';
    document.querySelector('.column3').style.width = '33%';
    document.querySelector('.project-column').style.flexDirection = 'row';
    document.querySelector('.column1').style.display = 'block';
    document.querySelector('.column2').style.display = 'block';

});*/

var toggleProjects = document.getElementById("more-btn");
var toggleTarget = document.getElementById("project-column2");

toggleProjects.addEventListener("click", ToggleDisplayFunction);

function ToggleDisplayFunction(){
    if(toggleTarget.style.display == "none"){
        toggleTarget.style.display = "grid";
        toggleProjects.innerHTML = "Less Projects";
    } else {
        toggleTarget.style.display = "none";
        toggleProjects.innerHTML = "More Projects";
    }
}

var toggleReturn = document.getElementById("return-btn");
var toggleColumn1 = document.getElementById("column1");
var toggleColumn2 = document.getElementById("column2");

toggleReturn.addEventListener("click", CloseDisplayFunction);

function CloseDisplayFunction () {
    if(toggleColumn1.style.display == "flex"){

        document.querySelector('.crypto-back').style.display = 'none';
        document.querySelector('.crypto-front').style.display = 'block';
        document.querySelector('.project-column').style.flexDirection = 'row';
        document.querySelector('.column1').style.width = '33%';
        document.querySelector('.column3').style.display = 'block';
        document.querySelector('.column2').style.display = 'block';

        document.querySelector('.return-projects').style.display = 'none';
        document.querySelector('.more-btn').style.display = 'inline';

    } else if (toggleColumn2.style.display == "flex") {

        document.querySelector('.sweet-back').style.display = 'none';
        document.querySelector('.sweet-front').style.display = 'block';
        document.querySelector('.column2').style.width = '33%';
        document.querySelector('.project-column').style.flexDirection = 'row';
        document.querySelector('.column1').style.display = 'block';
        document.querySelector('.column3').style.display = 'block';

        document.querySelector('.more-btn').style.display = 'inline';
        document.querySelector('.return-projects').style.display = 'none';

    } else {

        document.querySelector('.personal-back').style.display = 'none';
        document.querySelector('.personal-front').style.display = 'block';
        document.querySelector('.column3').style.width = '33%';
        document.querySelector('.project-column').style.flexDirection = 'row';
        document.querySelector('.column1').style.display = 'block';
        document.querySelector('.column2').style.display = 'block';

        document.querySelector('.more-btn').style.display = 'inline';
        document.querySelector('.return-projects').style.display = 'none';

    }
}