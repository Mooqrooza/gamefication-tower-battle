const awaitToSomeElementLayoutState = ({
    element,
    propName,
    value,
    compareType,
    styleProps
  }) => {
  let mainTimer, abortTimer;
  const elementComputedStyle = window.getComputedStyle(element);
  const clearTimers = () => { clearInterval(mainTimer); clearTimeout(abortTimer); }
  return new Promise ((resolve, reject) => {
    const comprareResultIsTrue = () => {
      const getValue = styleProps ?
        elementComputedStyle.getPropertyValue(propName) : element[propName];
       switch(true) {
        case compareType === '=':
          return getValue == value;
        case compareType === '<':
          return getValue < value;
        case compareType === '>':
          return getValue > value;
        default: return false;
      };
    };
    mainTimer = setInterval(() => {
      if (comprareResultIsTrue()) {
        clearTimers();
        resolve();
      };
    }, 100);
    abortTimer = setTimeout( () => {
      clearTimers();
      reject();
    } , 10000);
  });
};

export {
  awaitToSomeElementLayoutState
}
