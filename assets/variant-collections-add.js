window.onload = function() {
  var quickAdd = document.getElementsByClassName('collection-variant-button ');
  console.log(quickAdd)
  for (var i = 0; i < quickAdd.length; i++) {
    quickAdd[i].onclick = function(e) { 
      let buttonDiv = e.target.parentElement;
      let hiddenItemDiv = buttonDiv.nextElementSibling;
      console.log(hiddenItemDiv);
      let formDiv = hiddenItemDiv.nextElementSibling;
      console.log(formDiv.children)
      for (var j = 0; j < formDiv.children.length; j++) {
        if (formDiv.children[j].getAttribute("class") === "variant-id") {
          console.log(e.target)
        }
      }
    }
  }
}