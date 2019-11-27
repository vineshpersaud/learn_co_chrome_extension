
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
    style_show_button()
    shift_widget()
  }
  else {
    style_hide_button()
    document.getElementsByClassName("site-main")[0].style.width = "93%";
    shift_widget_back()
    if (window.innerWidth < 800) {
       document.getElementsByClassName("site-sidebar")[0].style.width = "50px"
       shift_widget_back_small()
    }else{
      document.getElementsByClassName("site-sidebar")[0].style.width = "263px";
      shift_widget_back()
    }
  }
}

window.addEventListener("resize", function(){
  if (window.innerWidth > 800 & document.getElementById("hide_button").innerHTML == "Hide SideBar" ) {
     document.getElementsByClassName("site-sidebar")[0].style.width = "263px"
     shift_widget_back()
  }
  if (window.innerWidth < 800 & document.getElementById("hide_button").innerHTML == "Hide SideBar" ) {
     document.getElementsByClassName("site-sidebar")[0].style.width = "50px"
     shift_widget_back_small()
  }
});

function shift_widget() {
  let widget = document.getElementsByClassName("site-widget")
  for (var i = 0; i < widget.length; i++) {
    widget[i].style.right = '0px';
  }
}

function shift_widget_back() {
  let widget = document.getElementsByClassName("site-widget")
  for (var i = 0; i < widget.length; i++) {
    widget[i].style.right = '263px';
  }
}

function shift_widget_back_small() {
  let widget = document.getElementsByClassName("site-widget")
  for (var i = 0; i < widget.length; i++) {
    widget[i].style.right = '47.8181818182px';
  }
}

function style_show_button() {
  let button = document.getElementById("hide_button")
  button.style.background = "#7A7DB7"
  button.innerHTML = "Show SideBar"
}

function style_hide_button() {
  let button = document.getElementById("hide_button")
  button.style.background = "#00BCE1"
  button.innerHTML = "Hide SideBar"
}
