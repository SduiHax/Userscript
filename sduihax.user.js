// ==UserScript==
// @name        Sdui Hax
// @description Dark theme, auto message and some misc features for app.sdui.de
// @version     6
// @updateURL   https://github.com/SduiHax/Userscript/raw/main/sduihax.user.js
// @homepageURL https://github.com/SduiHax/Userscript/
// @author      sduihax@pm.me
// @grant       none
// @match       *://*.app.sdui.de/*
// @run-at      document-start
// @icon        https://oh-dear-media.s3.eu-central-1.amazonaws.com/bf36ef2113b2408d6a2f5f798893139e/conversions/Sdui-Favicon-favicon-192.png
// ==/UserScript==

console.log(`%c                ▄▄              ▄▄                                      
 ▄█▀▀▀█▄█     ▀███              ██     ▀████▀  ▀████▀▀                  
▄██    ▀█       ██                       ██      ██                     
▀███▄      ▄█▀▀███ ▀███  ▀███ ▀███       ██      ██   ▄█▀██▄ ▀██▀   ▀██▀
  ▀█████▄▄██    ██   ██    ██   ██       ██████████  ██   ██   ▀██ ▄█▀  
▄     ▀█████    ██   ██    ██   ██       ██      ██   ▄█████     ███    
██     ██▀██    ██   ██    ██   ██       ██      ██  ██   ██   ▄█▀ ██▄  
█▀█████▀  ▀████▀███▄ ▀████▀███▄████▄   ▄████▄  ▄████▄▄████▀██▄██▄   ▄██▄
%c     - Imagine not having dark theme™ | prototype 6: "timetable api still brokey lol"`, "color:red;", "color:green;font-family:Comic Sans MS");

const namesToReplace = {
  "Hofmann": "Hoffmann",
  // Add other names here:
  // "old name": "new name",
}

let darkThemeApplied = false;

// Dark Theme
const darkTheme = `
body {
	background: #000;
	color: #eee;
}
.bg-white {
  /* background-color: #fff !important; */
  background-color: #000 !important;
}
:root {
  /* --white: #fff; */
  /* --gray: #6c757d; */
  /* --gray-dark: #343a40; */
  /* --light: #e8e9ea; */
  /* --dark: #5b5c5d; */
  --white: #000;
  --gray: #dfdfdf;
  --gray-dark: #eee;
  --light: #222;
  --dark: #fff;
}
.card, .slot {
  /* background-color: #fff; */
  /* border: 0 solid rgba(0,0,0,0); */
  background-color: #444;
  border: white;
}
.card:hover, .slot:hover {
	background-color: #3a3a3a;
}

.white-bg[data-v-08298d02] {
  /* background-color: #fff; */
  background-color: #000;
}
.labels-wrapper {
  /* background: #fff; */
  background: #222 !important;
}
.sdui-group-item {
  /* background-color: #fff; */
  background-color: #333;
}
.sdui-group-item .left-wrapper {
  /* color: #282829; */
  color: #fff;
}
.modal-content {
	background-color: #555;
}
.sdui-group-item.hoverable:hover {
	background-color: #222;
}
.fixed-bottom {
  /* background: #fff !important; */
  background: #000 !important;
}
.fixed-bottom::after {
  /* background: #fff; */
  background: #000;
}
.fixed-top::after {
  /* background: #fff !important; */
  /* background: rgba\) !important; */
  background: rgba(0,0,0,0) !important;
}
.btn {
  /* color: #212529; */
  color: #fff;
}
.buttons-wrapper button {
  /* background-color: #f8f8f9; */
  background-color: #333 !important;
}
.buttons-wrapper button:hover {
  /* background-color: #e8e9ea; */
  background-color: #555 !important;
}
.btn-secondary:hover {
  /* border-color: #fff; */
	border-color: rgba(0,0,0,0);
}
.btn:hover {
  /* color: #ccc; */
  color: #fff !important;
}
.btn-secondary {
	/* border-color: #e8e9ea; */
	border-color: rgba(0,0,0,0);
}
.news-wrapper {
	color: #fff;
}
p{
	color: #fff;
}
.dark-grey {
  /* color: #54575d; */
  color: #aaa;
}
.channel-title {
  /* color: #282829; */
  color: #fff !important;
}
.with-lines small {
	background: rgba(0,0,0,0);
}
.scroll-btn {
	background: #222;
}
.dropdown-item:active, .dropdown-item:hover {
  /* background-color: #fff !important; */
  background-color: #222 !important;
}
.dropdown-menu {
  /* background-color: #fff; */
  background-color: #000;
}
.popover {
  /* background-color: #fff; */
  background-color: #444;
}
.popover-body {
  /* color: #979faa; */
  color: #fff;
}
.popover {
  /* box-shadow: 0 5px 50px 0 #d9dbde; */
  box-shadow: 0 5px 50px 0 #777;
}
.chat-wrapper .message-wrapper.got .message {
  /* border-color: #e8e9ea; */
  border-color: #444 !important;
}
.got .original-message[data-v-7c9bfac2] {
  /* background: #e8e9ea; */
  background: #222;
}
.list-content-wrapper[data-v-019434ec] {
  /* border: 1px solid #e8e9ea; */
  border: 1px solid #777;
}
.sdui-group-item .bottom-gradient, .sdui-group-item .channel-bottom-gradient {
  /* box-shadow: inset 0 -1px 0 #e8e9ea; */
  box-shadow: inset 0 -1px 0 #777;
}
.card, .slot {
  /* border: white; */
  border: #777;
}
.news-preview {
  /* border: 1px solid #e8e9ea; */
  border: 1px solid #777;
}
.btn-round-padding, .btn-round.with-icon {
  /* background-color: #fff !important; */
  /* color: #282829 !important; */
  background-color: #2226 !important;
  color: #fff !important;
}
#navbar-main .nav-link {
  /* background: #fff; */
  background: #000 !important;
}
#navbar-main.without-notch.navbar-expand-lg {
  /* background: #fff !important; */
  background: #000 !important;
}
.btn.current_day {
	background: #0000 !important;
	color: #fff !important;
}

.day-wrapper::after {
  /* background: #e8e9ea; */
  background: #0000 !important;
}

.date-item:not(.break)::after {
  /* background: #e8e9ea; */
  background: #0000 !important;
}

.date-item.break.long::after {
  /* background: #e8e9ea; */
  background: #0000 !important;
}

.new-message-wrapper .send-message-form[data-v-57d9162d] {
  /* background: #fff; */
  /* border-top: 1px solid #e8e9ea; */
  background: #333;
  border-top: 0px solid #e8e9ea;
}

`;


// Window title animation variables
let animationFrame = 0;
const animatedTitle = "𝚜𝚍𝚞𝚒 𝚊𝚙𝚙 𝚍𝚊𝚛𝚔 𝚝𝚑𝚎𝚖𝚎";
const animatedTitle2 = "𝚂𝙳𝚄𝙸 𝙰𝙿𝙿 𝙳𝙰𝚁𝙺 𝚃𝙷𝙴𝙼𝙴";
let currentTitle = animatedTitle;
let animationDirection = false;


// Executes 10 times a second, a good tradeoff for performance and being invisible
setInterval(()=>{
  // Dark theme adder
  addGlobalStyle(darkTheme);
  const title = document.querySelector("h1");
  if(title && !title.innerText.endsWith("Dark Theme)")) {
    title.style.color = "#fff"
  	title.innerText += " (Dark Theme)"
  }
  
  
  // Window title animation
  animationFrame++;
  if(animatedTitle.length == animationFrame) {
    currentTitle = animationDirection ? animatedTitle : animatedTitle2;
    animationFrame = 0;
    animationDirection = !animationDirection;
  }
  currentTitle = setCharAt(currentTitle,animationFrame,animationDirection ? animatedTitle[animationFrame] : animatedTitle2[animationFrame]);
  if(animatedTitle[animationFrame+1] == " ") animationFrame++;
  setWindowTitle(currentTitle + " v6");
  
  // Update Link adder
  const links = document.getElementById("draggable")
  if(links && !links.children[0].innerHTML.includes("Sdui Hax")) {
    let a = document.createElement("a");
    a.target = "_blank"
    a.setAttribute("data-v-e43e6fa2","")
    a.rel = "noopener"
    a.className = "min-height card card-body text-left mb-4 school-link gradient-bg links gradient-purple"
    a.href = "https://www.youtube.com/watch?v=d1YBv2mWll0"
    a.innerHTML = `<article data-v-e43e6fa2=""><!----><div data-v-e43e6fa2="" class="row align-items-center"><div data-v-e43e6fa2="" class="col-10"><h2 data-v-e43e6fa2="" class="mb-1 text-break">
                  Sdui Hax
                </h2><div data-v-e43e6fa2="" class="small link-description">
                  Mehr Informationen
                </div></div><div data-v-e43e6fa2="" class="text-right handle col-2"><a data-v-e43e6fa2="" role="button" href="#" target="_self" class="btn"><span data-v-e43e6fa2="" aria-hidden="true" role="button" class="small white icon-arrow-corner-right icon"><!----></span></a></div></div></article>`
    document.getElementById("draggable").children[0].appendChild(a)
  }
  
  // Read confirmation sender
  const button = document.querySelector(".btn.btn-primary.btn-block");
  if(button && button.innerText.startsWith("Lesebestätigung senden")) {
    button.click();
    console.log("Lesebestätigung gesendet.");
  }
  
  // Auto expand news on dedicated news pages
  if(window.location.pathname.startsWith("/news/")) {
    let expandBtn = document.querySelector(".btn.custom-btn.text-decoration-none.btn-link.btn-block")
		if(expandBtn.innerText == "Mehr") expandBtn.click();
	}
  
  // Remove white circle background on timetable numbers
  document.querySelectorAll(".btn.btn-timetable.btn-circle.font-weight-normal.p-0.btn-sm.shady-grey.white-bg.btn-light").forEach(btn=>btn.className = btn.className.replaceAll("btn-light","").replaceAll("white-bg",""))
  
  // Remove white background for news expand buttons
  for(let node of document.querySelectorAll(".custom-btn")) {if(!node.className.includes("extended")) node.className += " extended"}
  
  // Funny teacher names lol
  for(let msg of document.querySelectorAll(".type-teacher, .author, span.el-title, p.info.nano")) for(let name in namesToReplace)
		msg.innerText = msg.innerText.replaceAll(name,namesToReplace[name])
	
  // No more shitty flickering
  for(let node of document.getElementsByClassName("flicker-indicator-long")) 
	node.className = node.className.replaceAll("flicker-indicator-long","");
}, 100);

// Adds a style globally, as used above
function addGlobalStyle(css) {
  	if(darkThemeApplied) return;
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) return;
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
  	darkThemeApplied = true;
}

// Sets the title of the browser window
function setWindowTitle(title) {
  document.getElementsByTagName("title")[0].innerText = title;
}

// Sets the char in a string at the specified index
function setCharAt(str,index,chr) {
    if(index > str.length-1) return str;
    return str.substring(0,index) + chr + str.substring(index+1);
}
