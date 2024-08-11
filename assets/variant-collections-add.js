window.onload = function() {
  var quickAdd = document.getElementsByClassName('collection-variant-button ');
  console.log(quickAdd)
  for (var i = 0; i < quickAdd.length; i++) {
    quickAdd[i].onclick = function(e) { 
      let buttonDiv = e.target.parentElement;
      let hiddenItemDiv = buttonDiv.nextElementSibling;
      let formDiv = hiddenItemDiv.nextElementSibling;
      console.log(formDiv.nodeName)
    }
  }
}