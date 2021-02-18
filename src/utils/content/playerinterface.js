import {
  setShowClassToElement,
  setHideClassToElement,
  setSenseClassToElement,
} from './classmodifers';


import playerinterface from '../../playerinterface';

import { getMaskedNumber } from '../numbers';

const createPlayerInterface = ({ playerData, mainPlayer, secondPlayer }) => {
  const interfacesBoxElement = document.getElementsByClassName('player-interfaces')[0];
  const { name, lives, hints, scores } = playerData;
  if (mainPlayer) {
     interfacesBoxElement.innerHTML += playerinterface({
       classIdentifer: 'main',
       name, lives, hints, scores
     });
     setHintsCountsLeftOnPlayerInterface({
       element: document.querySelector('.player-interface.main .hints .amount-indycator'),
       countsLeft: hints
     });
  };
  if (secondPlayer) {
    interfacesBoxElement.innerHTML += playerinterface({
      classIdentifer: 'second',
      name, lives, hints, scores
    });
    setHintsCountsLeftOnPlayerInterface({
      element: document.querySelector('.player-interface.second .hints .amount-indycator'),
      countsLeft: hints
    });
  };
};

const setSenseClassToPlayerInterfaceElement = ({ element }) => {
  const useClassIdentifer = element.classList.contains('sense') ? true : false;
  element.classList.remove( useClassIdentifer ? 'sense' : 're-sense' );
  element.offsetWidth;
  element.classList.add( useClassIdentifer ? 're-sense' : 'sense' );
};

const setLossClassToPlayerInterfaceElement = ({ element }) => {
  element.classList.add('loss');
};

const setDisabledClassToPlayerInterfaceElement = ({ element }) => {
  element.classList.add('disabled');
};

const setHintsCountsLeftOnPlayerInterface = ({ element, countsLeft, maxCounts = 2 }) => {
  element.innerHTML = '';
  for (let i=0; i < maxCounts; i++) {
    countsLeft > 0 ?
      element.innerHTML += '<div class="turquoise"></div>'
        : element.innerHTML += '<div class="dark-blue"></div>';
    countsLeft--;
  };
};

const updatePlayerInterface = ({
   mainPlayer = true,
   playerData,
   updateScrores,
   loseLive,
   useHint,
 }) => {
  const interfaceElement = document.getElementsByClassName('player-interface')[0];
  const livesBoxElement = interfaceElement.getElementsByClassName('lives')[0];
  const hartElements = Array.from(interfaceElement.querySelectorAll('.hart-ico:not(.loss)'));
  const hintsElement = interfaceElement.querySelector('.hints-ico');
  const hintsAmountIndycatorElement = interfaceElement.querySelector('.hints .amount-indycator');
  const scoresElement = interfaceElement.querySelector('.scores');

  if (loseLive) {
    const hartElementsLength = hartElements.length;
    if (hartElementsLength > 0)
      setLossClassToPlayerInterfaceElement({ element: hartElements[hartElementsLength-1] });
  };

  if (useHint) {
    setHintsCountsLeftOnPlayerInterface({ element: hintsAmountIndycatorElement, countsLeft: playerData.hints });
    if (playerData.hints === 0) setDisabledClassToPlayerInterfaceElement({ element: hintsElement })
    else setSenseClassToPlayerInterfaceElement({ element: hintsElement });
  };

  if (updateScrores) {
    setSenseClassToPlayerInterfaceElement({ element: scoresElement });
    scoresElement.querySelector('p :nth-child(1)').innerText = getMaskedNumber({ number: playerData.scores });
    scoresElement.querySelector('p :nth-child(2)').innerText = '+'+playerData.plusScores;
  };

};

export {
  createPlayerInterface,
  updatePlayerInterface,
}
