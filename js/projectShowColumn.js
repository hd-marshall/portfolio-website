var selectorProjects = document.getElementById('project-selection');
var selectorProjectsValue = document.getElementById('project-selection').value;

function getSelectedValue () {
    
    if(selectorProjectsValue = 'crypto-project') {
        document.getElementById('column1').style.display = 'block';
        document.getElementById('column2').style.display = 'none';
        document.getElementById('column3').style.display = 'none';
    } else if (selectorProjectsValue = 'sweet-project') {
        document.getElementById('column1').style.display = 'none';
        document.getElementById('column2').style.display = 'block';
        document.getElementById('column3').style.display = 'none';
    } else {
        document.getElementById('column1').style.display = 'none';
        document.getElementById('column2').style.display = 'none';
        document.getElementById('column3').style.display = 'block';
}}

selectorProjects.addEventListener('change', getSelectedValue());
selectorProjectsValue.console.log()