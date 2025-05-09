function showPopup() {
  document.getElementById("popup").classList.add("active");
}

function closePopup() {
  document.getElementById("popup").classList.remove("active");
}

//Auto-show popup after 3 seconds
setTimeout(showPopup, 3000);
