document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.modal');
  var instances = M.Modal.init(elems, {});
});

function showInfoSol (message){
  let elem = document.querySelector("#modalInfo");
  var instance = M.Modal.getInstance(elem);
  document.querySelector("#strInfoMessage").innerHTML = message;
  instance.open()
}

function SendSol (message){
  let up = document.querySelector("#modalSolicitud");
  var instance = M.Modal.getInstance(up);
  document.querySelector("#SendSolicitud").innerHTML = message;
  instance.open()
}

function updateMessageSol (message){
  let upp = document.querySelector("#modalUp");
  var instance = M.Modal.getInstance(upp);
  document.querySelector("#strUpMessage").innerHTML = message;
  instance.open()
}




