window.onload = function() {
  var quickAdd = document.getElementsByClassName('collection-variant-button ');
  console.log(quickAdd)
  for (var i = 0; i < quickAdd.length; i++) {
    quickAdd[i].onclick = function() { 
      let buttonDiv = quickAdd[i].parentElement;
      let hiddenItemDiv = quickAdd[i].nextElementSibling;
      let formDiv = hiddenItemDiv.nextElementSibling;
      console.log(formDiv.nodeName)
      

  }
}