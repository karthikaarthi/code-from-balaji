
export default class UserInterface {

  BORDER_1PX_RED = "1px solid red";
  BORDER_1PX_TRANSPARENT = "1px solid transparent";

  setIcon(imgElement, oldImgPath, newImgPath) {
    if (imgElement) {
      if (imgElement.src.match(oldImgPath)) {
        imgElement.src = newImgPath;
      } else {
        imgElement.src = oldImgPath;
      }
    } else {
      throw new Error("Given imgElement is null ....");
    }
  }

  setBorder(element, cssStyle) {
    if (element) {
      element.style.border = cssStyle;
    } else {
      throw new Error("Given element is null ....");
    }
  }
  
  setMessage(element, message) {
    if (element) {
      element.innerHTML = message;
    } else {
      throw new Error("Given element is null ....");
    }
  }

}