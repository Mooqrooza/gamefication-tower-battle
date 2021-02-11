const getTimeAsMinutesAndSeconds = ( date ) => {
  let mm = ''+date.getMinutes();
  let ss = ''+date.getSeconds();
  mm = mm.length < 2 ? `0${mm}` : mm;
  ss = ss.length < 2 ? `0${ss}` : ss;
  return mm+':'+ss;
};

const getRemainingTimeBetween = ({ firstDate, secondDate, timeForAnswer }) => {
   const dateBetween = new Date(+firstDate + +secondDate);
   return new Date( +(timeForAnswer) - (+firstDate - +secondDate) );
};

export {
  getTimeAsMinutesAndSeconds,
  getRemainingTimeBetween,
}
