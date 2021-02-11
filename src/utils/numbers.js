const getMaskedNumber = ({ number, mask = '000000' }) => {
  number = ''+number;
  let maskedNumber = number;
  for (let i = number.length; i < mask.length; i++) {
    maskedNumber = '0' + maskedNumber;
  };
  return maskedNumber;
};

export {
  getMaskedNumber
};
