import "./styles.css";
import { generateHomePage } from "./home.js";
import { generateMenuPage } from "./menu.js";
import { generateContactPage } from "./contact.js";

const mainContent = document.getElementById("content");

function clearContent() {
    mainContent.innerHTML = "";
}

function tabSwitch(generateFunction) {
    clearContent();
    generateFunction();
}


const homeBtn = document.getElementById("homeBtn");
const menuBtn = document.getElementById("menuBtn");
const contactBtn = document.getElementById('contactBtn');

homeBtn.addEventListener("click", () => tabSwitch(generateHomePage));
menuBtn.addEventListener("click", () => tabSwitch(generateMenuPage));
contactBtn.addEventListener("click", () => tabSwitch(generateContactPage));

window.onload = generateHomePage();