const allSongs = document.getElementsByTagName("a");

[...allSongs].forEach((element, index) => {
  const text = element.textContent;

  if (text.includes(" - ")) {
    const parts = text.split(" - ");

    element.innerHTML = `${index + 1}. ${parts[0]} - <br>${parts[1]}`;
  } else {
    element.textContent = `${index + 1}. ${text}`;
  }
});

