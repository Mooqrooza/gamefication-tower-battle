const setFirstShowClassToGround = () => {
  const element = document.getElementsByClassName("ground")[0];
  element.classList.add("first-show");
};

export {
  setFirstShowClassToGround
}
