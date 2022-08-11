const burgerMenu = document.querySelector(".header__burger-menu");
const headerMenu = document.querySelector(".header__menu");
const headerLogo = document.querySelector(".header__logo");
const headerContainer = document.querySelector(".header__container");
const mediaQueryMobile = window.matchMedia('(min-width: 320px)');
const mediaQueryTablet = window.matchMedia('(min-width: 768px)');
const mediaQueryDesktop = window.matchMedia('(min-width: 1440px)');
const sectionsButtons = document.querySelectorAll(".button");
const sectionsButtonsPaths = ["#wheel-excavator", "#enroll", "#enroll"];
const pageAnchors = document.querySelectorAll(".header__item");
let menuOpened = false;

mediaQueryMobile.addEventListener('change', handleTabletChange);
mediaQueryTablet.addEventListener('change', handleTabletChange);
mediaQueryDesktop.addEventListener('change', handleTabletChange);

const popupView = document.querySelector('.popup');
const popupViewContainer = document.querySelector('.popup__container');
const popupViewImg = popupView.querySelector('.popup__image');
const popupViewText = popupView.querySelector('.popup__text');
const btnClosePopupView = popupView.querySelector('.popup__close-button');
addEventClosePopup(btnClosePopupView, popupView);

const images = document.querySelectorAll(".image");

images.forEach((el) => {
  viewImage(el);
});

popupView.addEventListener("click", (e) => {
	const withinBoundaries = e.composedPath().includes(popupViewContainer);
 
	if (!withinBoundaries ) {
		closePopup(popupView);
	}

	if( e.keyCode == 27 ){ // код клавиши Escape, но можно использовать e.key
		closePopup(popupView);
	}
});

pageAnchors.forEach((el) => {
  el.addEventListener("click", () => {
    menuOpened = false;
    handleTabletChange();
  });
});

sectionsButtons.forEach((el, index) => {
  el.onclick = () => document.location = sectionsButtonsPaths[index];
});

burgerMenu.addEventListener("click", () => {
  burgerMenu.classList.toggle("header__burger-menu_opened");
  menuOpened = !menuOpened;
  handleTabletChange();
});

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
  burgerMenu.classList.remove("header__burger-menu_opened");
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
  burgerMenu.classList.remove("header__burger-menu_opened");
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

function addEventClosePopup(btnClose, popup) {
  btnClose.addEventListener('click', () => {
    closePopup(popup);
  });
}

function viewImage(img) {
  img.addEventListener('click', () => {
    openPopup(popupView);
    popupViewImg.src = img.src;
    popupViewImg.alt = img.alt;
    popupViewText.textContent = img.alt;
  });
}

function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.querySelector("body").style.overflow = "hidden";
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.querySelector("body").style.overflow = "unset";
}

