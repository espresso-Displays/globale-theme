window.onload = function() {
  var quickAdd = document.getElementsByClassName('collection-variant-button ');
  for (var i = 0; i < quickAdd.length; i++) {
    quickAdd[i].onclick = function(e) { 
      let variantId = e.target.getAttribute("data-variant-id");
      let buttonDiv = e.target.parentElement;
      let hiddenItemDiv = buttonDiv.nextElementSibling;
      hiddenItemDiv.setAttribute("value", variantId)
      let formDiv = hiddenItemDiv.nextElementSibling;
      for (var j = 0; j < formDiv.children.length; j++) {
        if (formDiv.children[j].getAttribute("class") === "variant-id") {
          formDiv.children[j].setAttribute("value", variantId)
        }
      }
    }
  }
}
