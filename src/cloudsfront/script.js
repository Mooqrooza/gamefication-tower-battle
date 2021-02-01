const setFirstShowClassToCloudsFront = () => {
  const element = document.getElementsByClassName("clouds-front")[0];
  element.classList.add("first-show");
};

export {
  setFirstShowClassToCloudsFront
}
