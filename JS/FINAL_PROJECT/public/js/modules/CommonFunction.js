export default class CommonFunction {

  setType(element, oldType, newType) {
    if (element) {
      if (element.type.match(oldType)) {
        element.type = newType;
      } else {
        element.type = oldType;
      }
    } else {
      throw new Error("Given element is null ....");
    }
  }

  getSibling(element, siblingElementName) {
    if (element) {
      return element.parentElement.querySelector(siblingElementName);
    } else {
      throw new Error("Given element is null ....");
    }
  }

  isTrue(booleans) {    
    for (let boolean of booleans) {
      if (!boolean) return false;
    }
    return true;
  }


  resetForm(form) {
    if (form) {
      form.reset();
    } else {
      throw new Error("Given form element is null ....");
    }
  }

}