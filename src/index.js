
const loader = document.getElementById('loader');
const content = document.querySelector('.container');

window.addEventListener('load', function () {
  const text = loader.querySelector('p');
  setTimeout(function () {
    text.innerHTML = "Quisque consecte...";
    text.style.textAlign = 'left';
    text.style.animation = 'fadeInText 200ms'
  }, 500);
  setTimeout(function () {
    text.innerHTML = "Quisque";
  }, 530);
  setTimeout(function () {
    text.innerHTML = "Quisque, ipsum primis...";
  }, 710);
  setTimeout(function () {
    loader.style.opacity = "0";
  }, 1500);
  setTimeout(function () {
    loader.style.display = 'none';
    content.style.display = 'block';
  }, 1700);
  setTimeout(function () {
    content.style.opacity = "1";
  }, 2100);
});

const backgrounPositionValues = ["0%", "12%", "20%", "32%", "44%", "58%", "72%", "89%", "89.01%", "105%"]
const buttons = document.querySelectorAll("[data-button]");
const container = document.querySelector("[data-container]");
const navigator = document.querySelectorAll(".nav-btn");
const texts = document.querySelectorAll("[data-text]");

const contentManager = (value) => {
  texts.forEach(textBox => {
    if (textBox.dataset.text != value) {
      textBox.style.transitionDuration = "0s";
      textBox.style.transitionDelay = "0s";
      textBox.style.visibility = "hidden";
      textBox.style.opacity = "0";
    } else {
      textBox.style.transitionDuration = "0.5s";
      textBox.style.transitionDelay = "1s";
      textBox.style.visibility = "visible";
      textBox.style.opacity = "1";
    }
  })
}

const navigatorMarker = (newButton) => {
  navigator.forEach(btn => {
    if (btn.dataset.navbtn != newButton) {
      if (btn.dataset.navbtn != 0 && btn.dataset.navbtn != 9) btn.innerHTML = btn.dataset.navbtn;
      btn.classList.remove("background-white");
    } else {
      btn.innerHTML = '&#8203;';
      btn.classList.add("background-white");
    }
  })
}

const buttonsHider = (value) => {
  if (value != 0) {
    buttons[0].style.visibility = "visible";
    if (value != 9) {
      buttons[1].style.visibility = "visible";
    } else {
      buttons[1].style.visibility = "hidden";
      buttons[0].style.visibility = "visible";
    }
  } else {
    buttons[0].style.visibility = "hidden";
    buttons[1].style.visibility = "visible";
  }
}

const imageMover = (newIndex) => {
  container.style.backgroundPositionX = backgrounPositionValues[newIndex];
}

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const offset = button.dataset.button === "next" ? 1 : -1;
    const value = getComputedStyle(container, null).backgroundPositionX;
    const index = backgrounPositionValues.indexOf(value, 0);
    if (index != -1) {
      const newIndex = index + offset;
      imageMover(newIndex);
      contentManager(newIndex);
      navigatorMarker(newIndex);
      buttonsHider(newIndex);
    }
  });
});


navigator.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.dataset.navbtn;
    imageMover(parseInt(value));
    contentManager(value);
    navigatorMarker(value);
    buttonsHider(value);
  })
})
