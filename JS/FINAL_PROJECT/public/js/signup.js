import UserInterface from "./modules/UserInterface.js";
import CommonFunction from "./modules/CommonFunction.js";
import Validator from "./modules/Validator.js";

const ui = new UserInterface();
const commonFunction = new CommonFunction();
const validator = new Validator();

const signupForm = document.forms[0];
const imgElements = signupForm.querySelectorAll(".eye-icon");
const inputElements = signupForm.querySelectorAll("input");


// Reset Form
commonFunction.resetForm(signupForm);


imgElements[0].addEventListener("click", () => {
  ui.setIcon(
    imgElements[0],
    "/public/images/icons/eye-close-icon.png",
    "/public/images/icons/eye-open-icon.png"
  );
  commonFunction.setType(inputElements[2], "text", "password");
});

imgElements[1].addEventListener("click", () => {
  ui.setIcon(
    imgElements[1],
    "/public/images/icons/eye-close-icon.png",
    "/public/images/icons/eye-open-icon.png"
  );
  commonFunction.setType(inputElements[3], "text", "password");
});


for (let inputElement of inputElements) {
  inputElement.addEventListener("blur", () => {
    if (inputElement.name == "name") 
      validator.isvalidName(inputElement);

    if (inputElement.name == "email") 
      validator.isvalidEmail(inputElement);

    if (inputElement.name == "password") 
      validator.isvalidPassword(inputElement);
    
    if (inputElement.name == "confirmPassword") 
      validator.isvalidConfirmPassword(inputElement, inputElements[2].value.trim());
    
  });
}



signupForm.querySelector("button").addEventListener("click", (event) => {
  const booleans = [];

  for (let inputElement of inputElements) {
    if (inputElement.name == "name") 
      booleans.push(validator.isvalidName(inputElement));

    if (inputElement.name == "email") 
      booleans.push(validator.isvalidEmail(inputElement));

    if (inputElement.name == "password") 
      booleans.push(validator.isvalidPassword(inputElement));
    
    if (inputElement.name == "confirmPassword") 
      booleans.push(validator.isvalidConfirmPassword(inputElement, inputElements[2].value.trim()));
  }

  if (!commonFunction.isTrue(booleans)) event.preventDefault();
  else event.stopPropagation();

});