import UserInterface from "./modules/UserInterface.js";
import CommonFunction from "./modules/CommonFunction.js";
import Validator from "./modules/Validator.js";

const ui = new UserInterface();
const commonFunction = new CommonFunction();
const validator = new Validator();

const loginForm = document.forms[0];
const inputElements = loginForm.querySelectorAll("input");
const imgElement = loginForm.querySelector(".eye-icon");


/* Reset Form */
commonFunction.resetForm(loginForm);

/* load user login information */
const userLoginInformation = JSON.parse(localStorage.getItem("userLoginInformation"));
if (userLoginInformation) {
  inputElements[0].value = userLoginInformation.email;
  inputElements[1].value = userLoginInformation.password;
}


imgElement.addEventListener("click", () => {
  ui.setIcon(
    imgElement,
    "/public/images/icons/eye-close-icon.png",
    "/public/images/icons/eye-open-icon.png"
  );
  commonFunction.setType(inputElements[1], "text", "password");
});


inputElements[0].addEventListener("blur", () => {
  validator.isvalidEmail(inputElements[0]);
});

inputElements[1].addEventListener("blur", () => {
  validator.isvalidPassword(inputElements[1]);
});



loginForm.querySelector("button").addEventListener("click", (event) => {
  const booleans = [];

  booleans.push(validator.isvalidEmail(inputElements[0])); 
  booleans.push(validator.isvalidPassword(inputElements[1])); 

  if (commonFunction.isTrue(booleans) && inputElements[2].checked) {
    const userLoginInformation = {
      email: inputElements[0].value,
      password: inputElements[1].value
    };
    localStorage.setItem("userLoginInformation", JSON.stringify(userLoginInformation));
  }

  if (!commonFunction.isTrue(booleans)) event.preventDefault();
  else event.stopPropagation();
});
