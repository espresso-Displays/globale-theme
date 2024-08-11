window.onload = function() {
  var quickAdd = document.getElementsByClassName('collection-variant-button ');
  console.log(quickAdd)
  for (var i = 0; i < quickAdd.length; i++) {
    quickAdd[i].onclick = function() { console.log("clicked")}
  }
}