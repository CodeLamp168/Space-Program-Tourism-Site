const techBtns = document.querySelectorAll(".tech-btn");
const techText = document.querySelector(".tech-text");
const techImg = document.querySelector(".tech-img img");

// Fetch the data.json file
fetch("data.json")
  .then(response => response.json())
  .then(data => {
    techBtns.forEach((btn, index) => {
      btn.addEventListener("click", () => {
        techBtns.forEach(t => t.classList.remove('tech-select'));
        btn.classList.add('tech-select');
        const currentTech = data.technology[index];
        
        techText.innerHTML = `
          <h3 class="tech-terminology heading-4">The terminology...</h3>
          <h2 class="tech-info-heading heading-3">${currentTech.name}</h2>
          <p class="tech-info-paragraph heading-5">${currentTech.description}</p>
        `;
        
        // Update the tech-img
        window.addEventListener("resize", function() {
          if(window.innerWidth <= 1100){
            techImg.src = currentTech.images.landscape;
            techImg.classList.add('landscape')
          }
          else if (window.innerWidth >= 1101){
            techImg.src = currentTech.images.portrait;
            techImg.classList.remove('landscape')
          }
        })
        if(window.innerWidth <= 1100){
          techImg.src = currentTech.images.landscape;
        }
        else if (window.innerWidth >= 1101){
          techImg.src = currentTech.images.portrait;
        }
      });
    });
  });

// Function to change the images from landscape to portrait
window.addEventListener("load", function() {
  if (window.innerWidth <= 1100) {
    techImg.src = "assets/technology/image-launch-vehicle-landscape.jpg";
    techImg.classList.remove("portrait");
    techImg.classList.add("landscape");
  } else if (window.innerWidth >= 1101) {
    techImg.src = "assets/technology/image-launch-vehicle-portrait.jpg";
    techImg.classList.remove("landscape");
    techImg.classList.add("portrait");
  }
});
