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



