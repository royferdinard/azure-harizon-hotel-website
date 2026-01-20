function displaymenu() {
  document.getElementsByClassName('azure-links')[0].classList.toggle("show");
}

document.getElementById("bars").addEventListener("click", displaymenu);
