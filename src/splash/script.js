import { awaitToSomeElementLayoutState } from '../utils';

const awaitSplashFadeOut = ( element ) => {
  return awaitToSomeElementLayoutState({
      element,
      propName: 'opacity',
      value: 0,
      compareType: '=',
      styleProps: true
    })
};

const hideAndRemoveSplash = () => {
  const element = document.getElementsByClassName('splash')[0];
  element.classList.add('hide');
  element.querySelector('.wrapper').classList.add('hide');
  awaitSplashFadeOut(element)
    .then(() => { element.remove() });
};

export {
  hideAndRemoveSplash
}
