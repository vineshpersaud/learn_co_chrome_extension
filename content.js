
let btn = document.createElement("BUTTON");
btn.innerHTML = "Hide SideBar";
btn.setAttribute("id", "hide_button");
btn.onclick = function functionName() {
  hideSidebar()
}

let darkbtn = document.createElement("BUTTON");
darkbtn.innerHTML = "Dark Mode";
darkbtn.setAttribute("id", "dark_button");
darkbtn.onclick = function functionName() {
  darkmode()
}


const header = document.getElementsByClassName("flex-grid flex-grid--center-y")[0]

header.appendChild(btn);
header.appendChild(darkbtn);


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
    document.getElementsByClassName("site-main")[0].style.width = "";
    document.getElementsByClassName("site-sidebar")[0].style.width = ""
    shift_widget_back()
  }
}



function shift_widget() {
  let widget = document.getElementsByClassName("site-widget")
  for (var i = 0; i < widget.length; i++) {
    widget[i].style.right = '0px';
  }
}

function shift_widget_back() {
  let widget = document.getElementsByClassName("site-widget")
  for (var i = 0; i < widget.length; i++) {
    widget[i].style.right = '0';
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




function darkmodeOn(){
  document.body.style.color = "#cbd2d9"
  document.body.style.backgroundColor = "#1f2933"
  document.getElementById('js--site-subheader').style.backgroundColor = '#1f2933'
  document.getElementById('js--site-subheader').style.color = "#cbd2d9"
  document.getElementsByClassName('site-header')[0].style.backgroundColor = '#1f2933'
  document.getElementsByClassName('site-header')[0].style.color = "#cbd2d9"
  document.getElementsByClassName('site-sidebar')[0].style.backgroundColor = '#1f2933'
  document.getElementsByClassName('site-sidebar')[0].style.color = "#cbd2d9"
  document.getElementsByTagName('footer')[0].style.backgroundColor = '#1f2933'

  document.getElementsByClassName('site-header')[0].style.borderColor  = "#616e7c";
  document.getElementById("js--site-subheader").style.borderColor  = "#616e7c";
  document.getElementsByClassName('site-sidebar')[0].style.borderColor  = "#616e7c";

  let blockquotes = document.getElementsByTagName('blockquote')
  for (var i = 0; i < blockquotes.length; i++) {
    blockquotes[i].style.backgroundColor = '#1f2933'
    blockquotes[i].style.color = "#cbd2d9"
  }
  let code = document.getElementsByTagName('code')
  for (var i = 0; i < code.length; i++) {
    code[i].style.backgroundColor = '#616e7c'
    code[i].style.color = "#57d9a3"
  }
  let pre = document.getElementsByTagName('pre')
  for (var i = 0; i < code.length; i++) {
    pre[i].style.backgroundColor = '#616e7c'
    pre[i].style.color = "#57d9a3"
  }
}

function darkmodeOff(){
  document.body.style.color = ""
  document.body.style.backgroundColor = ""
  document.getElementById('js--site-subheader').style.backgroundColor = ""
  document.getElementById('js--site-subheader').style.color = ""
  document.getElementsByClassName('site-header')[0].style.backgroundColor = ""
  document.getElementsByClassName('site-header')[0].style.color = ""
  document.getElementsByClassName('site-sidebar')[0].style.backgroundColor = ""
  document.getElementsByClassName('site-sidebar')[0].style.color = ""
  document.getElementsByTagName('footer')[0].style.backgroundColor = ""

  document.getElementsByClassName('site-header')[0].style.borderColor  = "";
  document.getElementById("js--site-subheader").style.borderColor  = "";
  document.getElementsByClassName('site-sidebar')[0].style.borderColor  = "";
  let blockquotes = document.getElementsByTagName('blockquote')
  for (var i = 0; i < blockquotes.length; i++) {
    blockquotes[i].style.backgroundColor = ""
    blockquotes[i].style.color = ""
  }
  let code = document.getElementsByTagName('code')
  for (var i = 0; i < code.length; i++) {
    code[i].style.backgroundColor = ""
    code[i].style.color = ""
  }
  let pre = document.getElementsByTagName('pre')
  for (var i = 0; i < code.length; i++) {
    pre[i].style.backgroundColor = ""
    pre[i].style.color = ""
  }
}

function darkmode(){
  let button = document.getElementById("dark_button")
  if (button.innerHTML === "Dark Mode" ){
    button.innerHTML = "Light Mode"
    button.style.background = "#fff"
    button.style.color = "#57d9a3"
    darkmodeOn()
  }else{
    button.innerHTML = "Dark Mode"
    button.style.background = "#1f2933"
    button.style.color = ""
    darkmodeOff()
  }
}

document.addEventListener('click', function(event) {
  if(document.getElementById("dark_button").innerHTML === "Light Mode" ){
    setTimeout(function(){
      darkmodeOn()}, 3000)
  }
})

chrome.runtime.sendMessage({todo: "showPageAction"});
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
    if (request.todo == "hideSidebar"){
      hideSidebar()
    } else if (request.todo == "darkmode"){
      darkmode()
    }
});
