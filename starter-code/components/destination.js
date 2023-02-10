const h2Subject = document.querySelector(".subject");
const pSubjectDescription = document.querySelector(".subject-description");
const avgDistance = document.querySelector(".distance-set .stats");
const estTravelTime = document.querySelector(".time-set .stats");
const destinationNavText = document.querySelectorAll(".destination-nav-text li");
const destinationImg = document.querySelector(".destination-img-presentation");

fetch("data.json")
  .then(response => response.json())
  .then(data => {
  destinationNavText.forEach(destination => {
  destination.addEventListener("click", e => {
    destinationNavText.forEach(d => d.classList.remove('selected-destination'));
    destination.classList.add('selected-destination');

    
  const selectedDestination = data.destinations.find( destinationData => destinationData.name === e.target.textContent);
        h2Subject.textContent = selectedDestination.name;
        pSubjectDescription.textContent = selectedDestination.description;
        avgDistance.textContent = selectedDestination.distance;
        estTravelTime.textContent = selectedDestination.travel;
        destinationImg.style.backgroundImage = `url(${selectedDestination.images.png})`;
      });
    });
});

