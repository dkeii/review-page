"use strict";

// Buttons
const prevBtn = document.querySelector(".previous-btn");
const nextBtn = document.querySelector(".next-btn");
const arrBtns = [prevBtn, nextBtn];

// Person Info
const img = document.querySelector(".author-img");
const name = document.querySelector(".author-name");
const status = document.querySelector(".author-status");
const description = document.querySelector(".author-description");

const imgArray = new Array();

imgArray[0] = new Image(100, 200);
imgArray[0].src = "profile-1.b8e53248.jpg";

imgArray[1] = new Image(100, 200);
imgArray[1].src = "profile-2.c632eba7.jpg";

imgArray[2] = new Image(100, 200);
imgArray[2].src = "profile-3.1633f9a4.jpg";

// const firstImg = new Image(100, 200)
// firstImg.src = 'profile-1.jpg'

// const secondImg = new Image(100,200)
// secondImg.src = 'profile-2.jpg'

// const thirdImg = new Image(100,200)
// thirdImg.src = 'profile-3.jpg'

// Current person
let curItem = 0;
const people = [
  {
    id: 1,
    name: "Sam Smith",
    status: "designer",
    img: imgArray[0],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 2,
    name: "Peter Jones",
    status: "hr",
    img: imgArray[1],
    description:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 3,
    name: "Gary Lippo",
    status: "software engineer",
    img: imgArray[2],
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
];

const initPerson = function () {
  const item = people[curItem];
  img.src = item.img.src;
  console.log(img);
  console.log(item.img.src);
  name.textContent = item.name;
  status.textContent = item.status;
  description.textContent = item.description;
  console.log(item);
};

// Loads the first person
window.addEventListener("DOMContentLoaded", function () {
  initPerson();
});

// Loads the next item
// nextBtn.addEventListener('click', function() {
//     curItem++
//     curItem > people.length - 1 ? curItem = 0 : curItem
//     initPerson(curItem)
// })

// Loads the previous item
// prevBtn.addEventListener('click', function() {
//     curItem--
//     curItem < 0 ? curItem = people.length - 1 : curItem
//     initPerson(curItem)
// })

// Advnaced solution (lemme know if u know how to write more advanced one hehe)
arrBtns.forEach((el) => {
  if (el === nextBtn)
    el.addEventListener("click", function () {
      curItem++;
      curItem > people.length - 1 ? (curItem = 0) : curItem;
      initPerson(curItem);
    });

  if (el === prevBtn)
    el.addEventListener("click", function () {
      curItem--;
      curItem < 0 ? (curItem = people.length - 1) : curItem;
      initPerson(curItem);
    });
});

/* 
Images were taken from: 

'https://www.dreamstime.com/man-hipster-avatar-cartoon-guy-black-hair-red-glasses-flat-icon-blue-background-user-person-character-vector-image151711777'

'https://devjpg.com/image/profile-icon-male-avatar-hipster-man-wear-headphones-48369-8.oYYH'

'https://www.thetrychannel.com/tryers/seanmacgabhann/'
*/
