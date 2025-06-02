// Handle collapsibles behavior
var iframe = window.parent.document.getElementById("widget");
//var innerDoc = iframe.contentDocument || iframe.contentWindow.document;
var innerDoc = document;
var coll = innerDoc.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    var symbol = this.lastChild;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
    if (symbol.innerHTML === "-") {
      symbol.innerHTML = "+";
    } else {
      symbol.innerHTML = "-";
    }
  });
}