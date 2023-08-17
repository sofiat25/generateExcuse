/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#the-excuse").innerHTML = generateExcuse();
  });
  console.log("Hello Rigo from the console!");
};

let generateExcuse = () => {
  let pronoun = ["Un", "El", "La"];
  let subject = ["Perro", "abuela", "conductor", "mamá"];
  let action = ["grito", "comio", "tiro", "compro", "mojó", "robo"];
  let possetion = ["tarea", "bolsa", "comida", "llaves"];
  let where = ["en la calle", "en mi casa"];

  let proIdx = Math.floor(Math.random() * pronoun.length);
  let subjIdx = Math.floor(Math.random() * subject.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let possetionIndex = Math.floor(Math.random() * possetion.length);
  let whereIndex = Math.floor(Math.random() * where.length);

  return (
    pronoun[proIdx] +
    " " +
    subject[subjIdx] +
    " " +
    action[actionIndex] +
    " " +
    possetion[possetionIndex] +
    " " +
    where[whereIndex]
  );
};
