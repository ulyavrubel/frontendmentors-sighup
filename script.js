const form = document.querySelector("form");

form.addEventListener("input", event => {
  if (event.target.validity.valid && event.target.nextElementSibling) {
    removeError(event.target);
  }
});

form.addEventListener("submit", event => {
  event.preventDefault();
  console.log(event);

  const inputFields = document.querySelectorAll("input");
  inputFields.forEach(input => {
    if (!input.validity.valid) {
      event.preventDefault();
      if (input.nextElementSibling) {
        return;
      } else {
        input.classList.add("submitted");
        showError(input, input.placeholder);
      }
    }
  });
});

removeError = inputNode => {
  inputNode.nextElementSibling.remove();
  inputNode.classList.remove("submitted");
};

showError = (inputNode, value) => {
  const errMessage = " cannot be empty";
  const messageElement = document.createElement("p");
  messageElement.classList.add("error");
  if (value.includes("Email")) {
    messageElement.innerHTML = "Looks like this is not an email";
  } else {
    messageElement.innerHTML = value + errMessage;
  }
  inputNode.parentNode.appendChild(messageElement);
};
