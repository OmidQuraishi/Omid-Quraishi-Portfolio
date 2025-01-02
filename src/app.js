let a = document.querySelectorAll(".resume section");
let btn = document.querySelectorAll(".sidebar button");

function removeClass() {
  for (let i = 0; i < btn.length; i++) {
    btn[i].classList.remove("bg-accent");
    btn[i].classList.add("bg-custome", "text-white");
  }
}

btn.forEach((btn, index) => {
  btn.addEventListener("click", function () {
    showLeftSide(index);
    removeClass();
    counter = index;
    btn.classList.add("bg-accent", "text-primary");
    btn.classList.remove("text-white");
    a[counter].classList.remove("hidden");
  });
});

function showLeftSide(count = 0) {
  for (let i = 0; i < a.length; i++) {
    a[i].classList.add("hidden");
  }
  a[count].classList.remove("hidden");
}
showLeftSide();
