

var counter = 0;

function onLoad() {
  doThings();
}

function doThings() {

    
 


//   startDelay();
}

function startDelay() {
  var myVar = setTimeout(onTimer, 1000);
}

function onTimer() {
  console.log("ping");




  document.getElementById('body').appendChild(getDiv());

  startDelay();
}


function getDiv(){
    var div = document.createElement('div');
    var img = document.createElement('img');
    img.src = "img/wizard.jpg";
    var txt = document.createElement('h1');
    txt.innerHTML = "thing";

    div.appendChild(img);
    div.appendChild(txt);

    return div;

}