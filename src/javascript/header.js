const backBtn = document.getElementById("backBtn");
const heading = document.getElementById("heading");
backBtn.addEventListener("click", event => {
  history.back();
  console.log(event);
});
