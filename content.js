
let btn = document.createElement("BUTTON");
btn.innerHTML = "Hide SideBar";
btn.setAttribute("id", "hide_button");
btn.onclick = function functionName() {
  hideSidebar()
}


const header = document.getElementsByClassName("flex-grid flex-grid--center-y")[0]

header.appendChild(btn);


function hideSidebar() {
  let button = document.getElementById("hide_button")
  if (button.innerHTML === "Hide SideBar" ){
  document.getElementsByClassName("site-sidebar")[0].style.width = "0px";
  document.getElementsByClassName("site-main")[0].style.width = "100%";

  button.innerHTML = "Show SideBar"
  }
  else {
    button.innerHTML = "Hide SideBar"
    document.getElementsByClassName("site-main")[0].style.width = "93%";
    if (window.innerWidth < 800) {
       document.getElementsByClassName("site-sidebar")[0].style.width = "50px"
    }else{
      document.getElementsByClassName("site-sidebar")[0].style.width = "263px";
    }
  }
}
