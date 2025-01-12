const images = document.querySelectorAll(".add-button");
const h2 = document.querySelectorAll(".h2");

const hiddenText = document.querySelectorAll(".hidden-text");

images.forEach((image, index) => {
  image.addEventListener("click", function () {
    hiddenText[index].classList.toggle("hidden-text");

    if (hiddenText[index].classList.contains("hidden-text")) {
      image.src = "assets/images/icon-plus.svg";
    } else {
      image.src = "assets/images/icon-minus.svg";
      hiddenText[index].classList.add("active");
    }
  });
});


