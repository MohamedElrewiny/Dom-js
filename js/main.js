let imgs = Array.from(document.querySelectorAll(".item img"));
let imgContainer = document.getElementById("imgContainer");
let imgitem = document.getElementById("itemimg");
let closeIcon = document.getElementById("close");
let nextIcon = document.getElementById("next");
let prevIcon = document.getElementById("prev");
let index = 0;

for (let i = 0; i < imgs.length; i++) {
  imgs[i].addEventListener("click", openItem);
}

function openItem(e) {
  index = imgs.indexOf(e.target);
  imgitem.style.backgroundImage = `url(${e.target.src})`;
  imgContainer.style.display = "flex";
}

closeIcon.addEventListener("click", closeItem);
function closeItem() {
  imgContainer.style.display = "none";
}

nextIcon.addEventListener("click", nextItem);
function nextItem() {
  index++;
  index = index % imgs.length;
  imgitem.style.backgroundImage = `url(${imgs[index].src})`;
}

prevIcon.addEventListener("click", prevItem);
function prevItem() {
  index--;
  index = index % imgs.length;
  if (index < 0) {
    index = imgs.length - 1;
  }
  imgitem.style.backgroundImage = `url(${imgs[index].src})`;
}

imgContainer.addEventListener("click", () => {
  imgContainer.style.display = "none";
});

imgitem.addEventListener("click", (e) => {
  e.stopPropagation();
});
