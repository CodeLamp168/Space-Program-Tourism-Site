
const techImg = document.querySelector('.tech-img img')

window.addEventListener('load', function(){
    if (window.innerWidth <= 1100) {
        techImg.src = 'assets/technology/image-launch-vehicle-landscape.jpg';
        techImg.classList.remove('portrait')
        techImg.classList.add('landscape');
    }
    else if (window.innerWidth >= 1101) {
        techImg.src = 'assets/technology/image-launch-vehicle-portrait.jpg';
        techImg.classList.remove('landscape');
        techImg.classList.add('portrait');
    }
});

window.addEventListener('resize', function(){
    if (window.innerWidth <= 1100) {
      if (techImg.classList.contains("vehicle-img") && techImg.classList.contains('portrait')) {
        techImg.src = 'assets/technology/image-launch-vehicle-landscape.jpg';
        techImg.classList.remove('portrait');
        techImg.classList.add('landscape');
      }
    }
    else if (window.innerWidth >= 1101) {
        if (techImg.classList.contains("vehicle-img") && techImg.classList.contains('landscape')) 
        {
          techImg.src = 'assets/technology/image-launch-vehicle-portrait.jpg';
          techImg.classList.remove('landscape');
          techImg.classList.add('portrait');
        }
      }
});