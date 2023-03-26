// Mostmár müködik //

function mutasd() {
  if (document.getElementById("id1").style.visibility === "hidden") {
    document.getElementById("id1").style.visibility = "visible";
    document.getElementById("suprise").style.visibility = "visible";
    document.getElementById("btn2").value = "Tüntesd el a szöveget";
  } else {
    document.getElementById("id1").style.visibility = "hidden";
    document.getElementById("suprise").style.visibility = "hidden";
    document.getElementById("btn2").value = "Mutasd a szöveget";
  }
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
  document.getElementById("kisx").style.visibility = "visible";
  document.getElementById("id1").style.color = "red";
  document.getElementById("btn1").style.visibility = "hidden";
  document.getElementById("suprise").style.visibility = "visible";
  document.getElementById("kilepes").style.visibility = "visible";
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
function kilepes() {
  document.getElementById("kisx").style.visibility = "hidden";
  document.body.style.backgroundImage = "none";
  document.getElementById("id1").style.color = "black";
  document.getElementById("btn1").style.visibility = "visible";
  document.getElementById("suprise").style.visibility = "hidden";
}
