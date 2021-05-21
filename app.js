const { checkAndGenerate } = require("./util");

const initApp = () => {
  const newUserButton = document.querySelector("#btnAddUser");
  newUserButton.addEventListener("click", addUser);
};

const createElement = (type, text, className) => {
  const newElement = document.createElement(type);
  newElement.classList.add(className);
  newElement.textContent = text;
  return newElement;
};

const addUser = () => {
  const newUserNameInput = document.querySelector("input#name");
  const newUserAgeInput = document.querySelector("input#age");

  const outputText = checkAndGenerate(
    newUserNameInput.value,
    newUserAgeInput.value
  );

  if (!outputText) {
    return;
  }

  const userList = document.querySelector(".user-list");

  const element = createElement("li", outputText, "user-item");
  userList.appendChild(element);
};

initApp();
