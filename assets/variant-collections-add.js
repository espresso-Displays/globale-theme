window.onload = function() {
  var quickAdd = document.getElementsByClassName('collection-variant-button ');
  console.log(quickAdd)
  quickAdd.forEach((elem) => {
    elem.onclick = function() {
      console.log("clicked");
    }
  })
}