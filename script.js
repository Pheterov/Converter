"use strict";

const userInput = document.querySelector(".user-input");
const convertBtn = document.querySelector(".convert-btn");
const lengthResult = document.querySelector(".length-result");
const volumeResult = document.querySelector(".volume-result");
const massResult = document.querySelector(".mass-result");

convertBtn.addEventListener("click", function () {
  lengthResult.innerHTML = `${userInput.value} meters = ${(
    userInput.value * 3.2808
  ).toFixed(3)} feet | ${userInput.value} feet = ${(
    userInput.value / 3.2802
  ).toFixed(3)}`;
  volumeResult.innerHTML = `${userInput.value} liters = ${(
    userInput.value / 3.78501135503
  ).toFixed(3)} | ${userInput.value} = ${(
    userInput.value * 3.78501135503
  ).toFixed(3)} liters`;
  massResult.innerHTML = `${userInput.value} kilos = ${(
    userInput.value * 2.2046
  ).toFixed(3)} punds | ${userInput.value} pounds = ${(
    userInput.value / 2.2046
  ).toFixed(3)} kilos`;
});
