window.onload = function() {
  var quickAdd = document.getElementsByClassName('collection-variant-button ');
  console.log(quickAdd)
  quickAdd.map((elem, idx) => {
    elem.onclick = function() {
      console.log("clicked");
    }
  })
}