function NavFunc() {
  const header = document.querySelector("header");
  if (header.classList.contains("h-20")) {
    header.classList.replace("h-20", "h-auto");
  } else {
    header.classList.replace("h-auto", "h-20");
  }
}
