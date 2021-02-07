const getTimeAsMinutesAndSeconds = ( date ) => {
  let mm = ''+date.getMinutes();
  let ss = ''+date.getSeconds();
  mm = mm.length < 2 ? `0${mm}` : mm;
  ss = ss.length < 2 ? `0${ss}` : ss;
  return mm+':'+ss;
};

const getDateBetween = ({ firstDate = new Date, secondDate, operator }) => {
  switch (true) {
    case operator === "+":
      return new Date( +firstDate + secondDate );
    case operator === "-": 
      return new Date( +firstDate - secondDate );
    case operator === "*":
      return new Date( +firstDate * secondDate );
    case operator === "/":
      return new Date( +firstDate / secondDate );
  };
};


export {
  getTimeAsMinutesAndSeconds,
  getDateBetween,
}
