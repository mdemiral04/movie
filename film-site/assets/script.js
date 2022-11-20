//declare arrow as constant
const arrows = document.querySelectorAll(".arrow");
//.movie-list div containes all the movie images
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) => {
  //an array is being created. Array called itemNumber have 4 items in it
  const itemNumber = movieLists[i].querySelectorAll("img").length;
  let clickCounter = 0;
  arrow.addEventListener("click", () => {
    const ratio = Math.floor(window.innerWidth / 320); // ratio = 4
    clickCounter++;
    if (itemNumber - (5 + clickCounter) + (5 - ratio) >= 0) {
      //i don't get this part onwards
      movieLists[i].style.transform = `translateX(${
        movieLists[i].computedStyleMap().get("transform")[0].x.value - 300
      }px)`;
    } else {
      movieLists[i].style.transform = "translateX(0)";
      clickCounter = 0;
    }
  });

  console.log(Math.floor(window.innerWidth / 270)); // output=4
});

/*! dark mode */

const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(
  ".navbar,.sidebar,.container,.sidebar i,.toggle-ball,.toggle,.list-filter,.movie-list-container h1,.featured-buttons button"
);
ball.addEventListener("click", function() {
  items.forEach((item) => item.classList.toggle("active"));
});
