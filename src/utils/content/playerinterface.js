import {
  setShowClassToElement,
  setHideClassToElement,
  setSenseClassToElement,
} from './classmodifers';


import { getMaskedNumber } from '../numbers';

const setSenseClassToPlayerInterfaceElement = ({ element }) => {
  const useClassIdentifer = element.classList.contains('sense') ? true : false;
  element.classList.remove( useClassIdentifer ? 'sense' : 're-sense' );
  element.offsetWidth;
  element.classList.add( useClassIdentifer ? 're-sense' : 'sense' );
};

const setLossClassToPlayerInterfaceElement = ({ element }) => {
  element.classList.add('loss');
};

const updateDataInPlayerInterface = ({
   mainPlayer = true,
   data,
   updateScrores,
   loseLive,
   useHint,
 }) => {
  const interfaceElement = document.getElementsByClassName('player-interface')[0];
  const livesBoxElement = interfaceElement.getElementsByClassName('lives')[0];
  const hartElements = Array.from(interfaceElement.querySelectorAll('.hart-ico:not(.loss)'));
  const hintsFlashElement = interfaceElement.querySelector('.hints-ico');
  const scoresElement = interfaceElement.querySelector('.scores');
  if (loseLive) {
      const hartElementsLength = hartElements.length;
      if (hartElementsLength > 0)
        setLossClassToPlayerInterfaceElement({ element: hartElements[hartElementsLength-1] });
  };
  if (useHint) {
    setSenseClassToPlayerInterfaceElement({ element: hintsFlashElement });
  };
  if (updateScrores) {
      setSenseClassToPlayerInterfaceElement({ element: scoresElement });
      scoresElement.querySelector('p :nth-child(1)').innerText = getMaskedNumber({ number: data.scores });
      scoresElement.querySelector('p :nth-child(2)').innerText = '+'+data.plusScores;
  };
};

export {
  updateDataInPlayerInterface
}
