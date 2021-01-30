import { hideAndRemoveSplash } from '../splash';

const setInitialEvents = () => {
  const splashReadyButtonElement = document.getElementsByClassName("splash-ready-button")[0];

  splashReadyButtonElement.addEventListener("click", (e) => {
    hideAndRemoveSplash();
  });

  splashReadyButtonElement.addEventListener("mouseenter", (e) => {
    e.currentTarget.classList.remove('hoverOff');
    e.currentTarget.offsetWidth;
    e.currentTarget.classList.add('hoverOn');
  });

  splashReadyButtonElement.addEventListener("mouseleave", (e) => {
    e.currentTarget.classList.remove('hoverOn');
    e.currentTarget.offsetWidth;
    e.currentTarget.classList.add('hoverOff');
  });

};

export {
  setInitialEvents
}
