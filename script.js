let border = document.querySelector(".email-container");
let errorMsg = document.querySelector(".error");
let errorImg = document.querySelector(".error-img");
let input = document.querySelector(".input");

function errorEmail() {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!input.value.match(emailPattern)) {
    errorImg.classList.remove("hidden");
    errorMsg.classList.remove("hidden");
    border.style.border = "1px solid red";

    return false;
  } else {
    errorImg.classList.add("hidden");
    errorMsg.classList.add("hidden");
    border.style.border = "1px solid green";
    return true;
  }
}

input.addEventListener("input", errorEmail);
