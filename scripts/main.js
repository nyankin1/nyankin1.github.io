const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/wojak.jpg") {
    myImage.setAttribute("src", "images/wojak2.jpeg");
  } else {
    myImage.setAttribute("src", "images/wojak.jpg");
  }
});
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `I painted you as Wojak, ${myName}`;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `I painted you as Wojak, ${storedName}`;
}

myButton.addEventListener("click", () => {
  setUserName();
});
