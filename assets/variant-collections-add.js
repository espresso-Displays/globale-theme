window.onload = function() {
  var quickAdd = document.getElementsByClassName('collection-variant-button ');
  console.log(quickAdd)
  for (var i = 0; i < quickAdd.length; i++) {
    quickAdd[i].onclick = function(e) { 
      let variantId = e.target.getAttribute("data-variant-id");
      let buttonDiv = e.target.parentElement;
      let hiddenItemDiv = buttonDiv.nextElementSibling;
      hiddenItemDiv.setAttribute("value", variantId)
      console.log(hiddenItemDiv);
      let formDiv = hiddenItemDiv.nextElementSibling;
      console.log(formDiv.children)
      for (var j = 0; j < formDiv.children.length; j++) {
        if (formDiv.children[j].getAttribute("class") === "variant-id") {
          formDiv.children[j].setAttribute("value", variantId)
          console.log(formDiv.children[j])
        }
      }
    }
  }
}