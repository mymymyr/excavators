const burgerMenu = document.querySelector(".header__burger-menu");
const headerMenu = document.querySelector(".header__menu");
const headerLogo = document.querySelector(".header__logo");
const headerContainer = document.querySelector(".header__container");
const enrollForm = document.querySelector(".enroll");
const enrollInput = enrollForm.querySelector(".enroll__input");
const enrollSendButton = enrollForm.querySelector(".enroll__send-button");
const mediaQueryMobile = window.matchMedia('(min-width: 320px)');
const mediaQueryTablet = window.matchMedia('(min-width: 768px)');
const mediaQueryDesktop = window.matchMedia('(min-width: 1440px)');
const sectionsButtons = document.querySelectorAll(".button");
const sectionsButtonsPaths = ["#composition", "#enroll", "#enroll"];
let menuOpened = false;

mediaQueryMobile.addEventListener('change', handleTabletChange);
mediaQueryTablet.addEventListener('change', handleTabletChange);
mediaQueryDesktop.addEventListener('change', handleTabletChange);

sectionsButtons.forEach((el, index) => {
  el.onclick = () => document.location = sectionsButtonsPaths[index];
});

burgerMenu.addEventListener("click", () => {
  burgerMenu.classList.toggle("header__burger-menu_opened");
  menuOpened = !menuOpened;
  handleTabletChange();
});

enrollInput.addEventListener("focus", () => {
  enrollInput.placeholder = "";
  enrollSendButton.textContent = "Записаться!";
});

enrollInput.addEventListener("blur", () => {
  enrollInput.placeholder = "Ваша почта";
});

enrollForm.addEventListener('submit', submitHandlerEnroll);

function submitHandlerEnroll(evt) {
  evt.preventDefault();
  enrollSendButton.textContent = "Спасибо!";
}

function handleTabletChange() {
  if (mediaQueryDesktop.matches) {
    setStylesDesktop(menuOpened);
  } else if (mediaQueryTablet.matches) {
    setStylesTablet(menuOpened);
  } else if (mediaQueryMobile.matches) {
    setStylesMobile(menuOpened);
  }
};

function setStylesMobile(isOpen = false) {
  headerLogo.style.display = "block";
  headerContainer.style.width = "100%";
  headerMenu.style.display = "none";
  if (isOpen) {
    burgerMenu.classList.add("header__burger-menu_opened");
    headerMenu.style.display = "flex";
    headerMenu.style.justifyContent = "center";
  }
}

function setStylesTablet(isOpen = false) {
  headerContainer.style.width = "100%";
  headerMenu.style.display = "none";
  headerLogo.style.display = "block";
  if (isOpen) {
    burgerMenu.classList.add("header__burger-menu_opened");
    headerContainer.style.width = "auto";
    headerLogo.style.display = "none";
    headerMenu.style.display = "flex";
    headerMenu.style.justifyContent = "start";
  }
}

function setStylesDesktop(isOpen = false) {
  burgerMenu.classList.remove("header__burger-menu_opened");
  headerLogo.style.display = "block";
  headerMenu.style.display = "flex";
  headerMenu.style.justifyContent = "end";
  headerContainer.style.width = "auto";
}
