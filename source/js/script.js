'use strict';

const navElement = document.querySelector(`.navigation`);
const navButtonElement = navElement.querySelector(`.navigation__toggle`)

navElement.classList.remove(`navigation--no-js`);
navElement.classList.add(`navigation--close`);

const toggleNavDisplay = () => {
  navElement.classList.toggle(`navigation--close`);
  navElement.classList.toggle(`navigation--open`);
}

const navButtonClickHandler = (evt) => {
  evt.preventDefault();
  toggleNavDisplay();
}

navButtonElement.addEventListener(`click`, navButtonClickHandler);

function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 59.939232124174936, lng: 30.323311787444275 },
    zoom: 15,
    disableDefaultUI: true,
  });

  const marker = new google.maps.Marker({
    position: { lat: 59.939232124174936, lng: 30.323311787444275 },
    map,
    icon: `../img/map-pin.png`,
  });
}
