// Amúgy ez nem müködik,  html-en belül van script //

function mutasd() {
  document.getElementById("id1").style.visibility = "visible";
  document.getElementById("suprise").style.visibility = "visible";
}

function eltunes() {
  document.getElementById("id1").style.visibility = "hidden";
  document.getElementById("suprise").style.visibility = "hidden";
}
function animatemouseover(azam) {
  azam.innerHTML = "Köszi";
  azam.style.backgroundColor = "green";
}
function animatemouseout(azam2) {
  azam2.innerHTML = "Vidd rám </br> az egeret";
  azam2.style.backgroundColor = "red";
}

function hatter() {
  document.body.style.backgroundImage = "url('ocean2.jpg')";
  document.getElementById("id1").style.color = "red";
  document.getElementById("btn1").style.visibility = "hidden";
  document.getElementById("suprise").style.visibility = "visible";
}
function mozgas() {
  let id = null;
  const elem = document.getElementById("animate");
  let pos = 0;
  clearInterval(id);
  id = setInterval(frame, 5);
  function frame() {
    if (pos == 350) {
      clearInterval(id);
    } else {
      pos++;
      elem.style.top = pos + "px";
      elem.style.left = pos + "px";
    }
  }
}
function mozgas2() {
  let id = null;
  const elem = document.getElementById("animate2");
  let pos = 0;
  clearInterval(id);
  id = setInterval(frame, 5);
  function frame() {
    if (pos == 350) {
      clearInterval(id);
    } else {
      pos++;
      elem.style.top = pos + "px";
      elem.style.right = pos + "px";
    }
  }
}
