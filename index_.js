function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector("#nested .target")
}

function increaseRankBy(n) {
  let ranks = document.querySelectorAll(".ranked-list li")
  for (let i=0; i < ranks.length; i++) {
    ranks[i].innerHTML = (parseInt(ranks[i].innerHTML)+n).toString()
  }
}

function deepestChild() {
  let children = document.querySelector("div#grand-node > *")
  while (grandNode.hasChildNodes() && grandNode.nodeType == Node.ELEMENT_NODE) {
    grandNode = grandNode.firstChild
  }
  return grandNode.parentNode
}
