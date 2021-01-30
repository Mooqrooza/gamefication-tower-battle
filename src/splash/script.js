import {
  awaitToSomeElementLayoutState,
  changeTextIntoSomeElement
} from '../utils';

const awaitSplashFadeOut = ( element ) => {
return awaitToSomeElementLayoutState({
    element,
    propName: 'opacity',
    value: 0,
    compareType: '=',
    styleProps: true
  });
};

const hideAndRemoveSplash = () => {
  const element = document.getElementsByClassName('splash')[0];
  element.classList.add('hide');
  element.querySelector('.wrapper').classList.add('hide');
  awaitSplashFadeOut(element)
    .then(() => { element.remove() });
};

const chnangeTextInSplash = () => {
  const element = document.getElementsByClassName('splash')[0];
  element.classList.add('hide');
  element.querySelector('.wrapper').classList.add('hide');
  awaitSplashFadeOut(element)
    .then(() => { element.remove() });
};

const putSplashInLoadingCompleteState = () => {
  const element = document.getElementsByClassName('splash')[0];
  const infoTextElement = element.querySelector(".info-text");
  const loadingIndicatorElement = element.querySelector(".loading-indicator");
  const buttonElement = element.querySelector(".splash-ready-button");
  changeTextIntoSomeElement({
    element: infoTextElement,
    text: "Вы готовы к состязанию?"
  });
  loadingIndicatorElement.classList.add("hide");
  buttonElement.classList.remove("hidden");
  buttonElement.classList.add("show");
};

export {
  putSplashInLoadingCompleteState,
  hideAndRemoveSplash
}
