function fetchData() {
    fetch('./data.json')
      .then(res => res.json())
      .then(data => {
        const crewInfoArea = document.querySelector('.crew-info-area .text');
        const crewImage = document.querySelector('.crew-image img');
        const crewSelectors = document.querySelectorAll('.crew-selectors .selector');
    
        crewInfoArea.innerHTML = `
           <h3 class="crew-occupation heading-4">${data.crews[0].role}</h2>
          <h2 class="crew-name heading-3">${data.crews[0].name}</h2>
          <p class="crew-details heading-5">${data.crews[0].bio}</p>
        `;
    
        crewImage.src = data.crews[0].images.webp;
    
        for (let i = 0; i < crewSelectors.length; i++) {
          crewSelectors[i].addEventListener('click', () => {
            crewInfoArea.innerHTML = `
              <h3 class="crew-occupation heading-4">${data.crews[i].role}</h2>
              <h2 class="crew-name heading-3">${data.crews[i].name}</h2>
              <p class="crew-details heading-5">${data.crews[i].bio}</p>
            `;
    
            crewImage.src = data.crews[i].images.webp;
    
            for (let j = 0; j < crewSelectors.length; j++) {
              crewSelectors[j].classList.remove('selected-crew');
            }
    
            crewSelectors[i].classList.add('selected-crew');
          });
        }
      });
  }
  
  fetchData();