window.onload = function() {
  var quickAdd = document.getElementsByTagName('collection-variant-button ');
  quickAdd.forEach((idx, elem) => {
    elem.onclick = function() {
      console.log("clicked");
    }
  })
}