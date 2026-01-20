function displaymenu() {
  document.getElementsByClassName('azure-links')[0].classList.toggle("show");
}

document.getElementById("bars").addEventListener("click", displaymenu);


function displaylink() {
  document.getElementsByClassName('hero-links')[0].classList.toggle("show");
  const icon= document.querySelector("#display-button i");
  if(document.getElementsByClassName('hero-links')[0].classList.contains("show")){
    icon.classList.replace("fa-angle-down", "fa-angle-up");
  }else{
    icon.classList.replace("fa-angle-up", "fa-angle-down");
  }
}

document.getElementById("display-button").addEventListener("click", displaylink);