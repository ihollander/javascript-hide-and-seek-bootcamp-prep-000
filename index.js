function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector("#nested .target");
}

function increaseRankBy(n) {
  var rankedList = document.querySelectorAll("ul.ranked-list li");
  for (let i = 0; i < rankedList.length; i++) {
    rankedList[i].innerHTML = parseInt(rankedList[i].innerHTML) + n
  }
}

function deepestChild() {
  var current = document.getElementById("grand-node").querySelectorAll("div");
  var next = [];
  
  while (current) {
    if (current[0].querySelectorAll("div").length === 0) {
      return current[0]
    }
    
    for (let i = 0; i < current.length; i++) {
      next.push(current[i].querySelectorAll("div"));
    }
    
    current = next.shift();
  }
  
  return null;
}