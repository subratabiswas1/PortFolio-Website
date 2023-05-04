let btn = document.getElementsByClassName("btn");
console.log(btn);
function dothat(){
    console.log("clicked");
    let elem = document.getElementsByClassName('alert')[0];
    elem.style.background = "green";
    elem.style.display = "visible";
    elem.innerHTML = `<strong>You have submitted successsfully!!</strong>
    <button
      type="button"
      class="btn-close"
      data-bs-dismiss="alert"
      aria-label="Close"
    ></button>
    `
};
// btn[1].addEventListener("click", dothat);
