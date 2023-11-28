

const tabItem = document.querySelectorAll(`.tabs__btn-item`);
const tabContent = document.querySelectorAll(`.tabs__content-item`);

// добавили, убрали активный класс (сортировка товаров)

tabItem.forEach(function(element){
  element.addEventListener('click', open);
})

function open(evt) {
  const tabTarget = evt.currentTarget;
  const button = tabTarget.dataset.button;

  tabItem.forEach(function(item){
    item.classList.remove(`tabs__btn-item--active`);
  })

  tabTarget.classList.add(`tabs__btn-item--active`);

  tabContent.forEach(function(item){
    item.classList.remove(`tabs__content-item--active`);
  })

  document.querySelector(`#${button}`).classList.add(`tabs__content-item--active`);
}


// бургер меню

const menuBtn = document.querySelector (`.menu__btn`);
const menu = document.querySelector (`.menu__list`);

menuBtn.addEventListener(`click`, ()=> {
  menu.classList.toggle(`menu__list--active`)
})



// код может не работать, если swiper будет выше. лучше делать его в отдельном файле

const swiper = new Swiper(".swiper", {
  effect: "fade",
    pagination: {
      el: ".swiper-pagination",
    },
    autoplay: {
      delay: 3000,        //смена слайда время (3 секунды)
      disableOnInteraction: false,      //смена при наведении мышки
    },
  });