document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems, {});
  });

function showUpdateMessage(message){
    let elem = document.querySelector("#updatedMessageModal");
    let instance = M.Modal.getInstance(elem);
    document.querySelector("#strUpdateMessage").innerHTML = message;
    instance.open();
}

function deleteMessageModal(message){
  let elem = document.querySelector("#deleteCMessageModal");
  let instance = M.Modal.getInstance(elem);
  document.querySelector("#strDeleteCMessage").innerHTML = message;
  instance.open();
}

function saveMessageModal(message){
  let elem = document.querySelector("#saveCMessageModal");
  let instance = M.Modal.getInstance(elem);
  document.querySelector("#strSaveCMessage").innerHTML = message;
  instance.open();
}
function deleteMessageModalP(message){
  let elem = document.querySelector("#deletePMessageModal");
  let instance = M.Modal.getInstance(elem);
  document.querySelector("#strDeletePMessage").innerHTML = message;
  instance.open();
}