const allSongs = document.getElementsByTagName("a");

[...allSongs].forEach((element, index) => {
  element.textContent = `${index + 1}. ` + element.textContent;
});
