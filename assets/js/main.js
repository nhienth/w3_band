const buyBtns = document.querySelectorAll(".js-buy-ticket");
const modal = document.querySelector(".js-modal");
const modalClose = document.querySelector(".js-modal-close");
const modalContainer = document.querySelector(".js-modal-container");

const header = document.querySelector("#header");
const mobileMenu = document.querySelector(".menu-mobile-btn");
const headerHeight = header.clientHeight;

const menuItems = document.querySelectorAll("#nav li a[href*='#']");

function showBuyTickets() {
  modal.classList.add("open");
}

function hideBuyTickets() {
  modal.classList.remove("open");
}

function toggleMenu() {
  let isClosed = header.clientHeight === headerHeight;
  if (isClosed) {
    header.style.height = "auto";
  } else {
    header.style.height = null;
  }
}

for (const buyBtn of buyBtns) {
  buyBtn.addEventListener("click", showBuyTickets);
}

modalClose.addEventListener("click", hideBuyTickets);

modal.addEventListener("click", hideBuyTickets);

modalContainer.addEventListener("click", function (event) {
  event.stopPropagation();
});

mobileMenu.addEventListener("click", toggleMenu);

for (const menuItem of menuItems) {
  menuItem.addEventListener("click", function (event) {
    let isParentMenu =
      menuItem.nextElementSibling &&
      menuItem.nextElementSibling.classList.contains("subnav");

    if (isParentMenu) {
      event.preventDefault();
    } else {
      header.style.height = null;
    }
  });
}
