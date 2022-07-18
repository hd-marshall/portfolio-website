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
    document.querySelector('.project-column2').style.display = 'none';

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
    document.querySelector('.project-column2').style.display = 'none';

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
    document.querySelector('.project-column2').style.display = 'none';

});

document.getElementById('api-click').addEventListener('click',
  function() {

    document.querySelector('.column5').style.display = 'none';
    document.querySelector('.project-column2').style.display = 'block';
    document.querySelector('.column4').style.width = '95%';
    document.querySelector('.api-front').style.display = 'none';

    document.querySelector('.api-back').style.display = 'block';

    document.querySelector('.more-btn').style.display = 'none';
    document.querySelector('.return-projects').style.display = 'block';

    document.querySelector('.project-column').style.display = 'none';

});

document.getElementById('port-click').addEventListener('click',
  function() {

    document.querySelector('.column4').style.display = 'none';
    document.querySelector('.project-column2').style.display = 'block';
    document.querySelector('.column5').style.width = '95%';
    document.querySelector('.port-front').style.display = 'none';

    document.querySelector('.port-back').style.display = 'block';

    document.querySelector('.more-btn').style.display = 'none';
    document.querySelector('.return-projects').style.display = 'block';

    document.querySelector('.project-column').style.display = 'none';

});

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
var toggleColumn1 = document.getElementById("crypto-back");
var toggleColumn2 = document.getElementById("sweet-back");
var toggleColumn3 = document.getElementById("personal-back");
var toggleColumn4 = document.getElementById("api-back");
var toggleColumn5 = document.getElementById("port-back");

toggleReturn.addEventListener("click", CloseDisplayFunction);

function CloseDisplayFunction () {
    if(toggleColumn1.style.display == "block"){

        document.querySelector('.crypto-back').style.display = 'none';
        document.querySelector('.crypto-front').style.display = 'block';
        document.querySelector('.project-column').style.flexDirection = 'row';
        document.querySelector('.column1').style.width = '33%';
        document.querySelector('.column3').style.display = 'block';
        document.querySelector('.column2').style.display = 'block';

        document.querySelector('.return-projects').style.display = 'none';
        document.querySelector('.more-btn').style.display = 'inline';

    } else if (toggleColumn2.style.display == "block") {

        document.querySelector('.sweet-back').style.display = 'none';
        document.querySelector('.sweet-front').style.display = 'block';
        document.querySelector('.column2').style.width = '33%';
        document.querySelector('.project-column').style.flexDirection = 'row';
        document.querySelector('.column1').style.display = 'block';
        document.querySelector('.column3').style.display = 'block';

        document.querySelector('.more-btn').style.display = 'inline';
        document.querySelector('.return-projects').style.display = 'none';

    } else if (toggleColumn3.style.display == "block") {

        document.querySelector('.personal-back').style.display = 'none';
        document.querySelector('.personal-front').style.display = 'block';
        document.querySelector('.column3').style.width = '33%';
        document.querySelector('.project-column').style.flexDirection = 'row';
        document.querySelector('.column1').style.display = 'block';
        document.querySelector('.column2').style.display = 'block';

        document.querySelector('.more-btn').style.display = 'inline';
        document.querySelector('.return-projects').style.display = 'none';

    } else if (toggleColumn4.style.display == "block") {

      document.querySelector('.project-column2').style.display = 'grid';
      document.querySelector('.column5').style.display = 'block';
      
      document.querySelector('.api-front').style.display = 'block';
      document.querySelector('.api-back').style.display = 'none';

      document.querySelector('.more-btn').style.display = 'inline';
      document.querySelector('.return-projects').style.display = 'none';

      document.querySelector('.project-column').style.display = 'flex';

    } else if (toggleColumn5.style.display == "block") {

      document.querySelector('.project-column2').style.display = 'grid';
      document.querySelector('.column4').style.display = 'block';
      
      document.querySelector('.port-front').style.display = 'block';
      document.querySelector('.port-back').style.display = 'none';

      document.querySelector('.more-btn').style.display = 'inline';
      document.querySelector('.return-projects').style.display = 'none';

      document.querySelector('.project-column').style.display = 'flex';

    }
    
}