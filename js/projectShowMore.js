document.getElementById('project-read').addEventListener('click',
  function() {
    document.querySelector('.project-2').style.display = 'block';
    document.querySelector('.project-read').style.display = 'none';
});

document.getElementById('project-close').addEventListener('click',
  function() {
    document.querySelector('.project-2').style.display = 'none';
    document.querySelector('.project-close').style.display = 'none';
    document.querySelector('.project-read').style.display = 'block';
});