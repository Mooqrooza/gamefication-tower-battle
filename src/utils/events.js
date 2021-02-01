import { hideAndRemoveSplash } from '../splash';
import { setFirstShowClassToTower} from '../tower';
import { setFirstShowClassToGround } from '../ground';
import { setFirstShowClassToMountains } from '../mountains';

const setInitialEvents = () => {
  const splashReadyButtonElement = document.getElementsByClassName("splash-ready-button")[0];

  splashReadyButtonElement.addEventListener("click", (e) => {
    hideAndRemoveSplash();
    setTimeout(() => {
      setFirstShowClassToGround();
    }, 600);
    setTimeout(() => {
      setFirstShowClassToTower();
    }, 500);
    setTimeout(() => {
      setFirstShowClassToMountains();
    }, 1000)
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
