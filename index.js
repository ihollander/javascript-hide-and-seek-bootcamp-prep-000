const getFirstSelector = function(selector) {
  return document.querySelector(selector)
}

const nestedTarget = function() {
  return document.querySelector('#nested .target')
}

const increaseRankBy = function(n) {
  const arr = Array.from(document.querySelectorAll('.ranked-list li'))
  arr.forEach((elem) => elem.innerHTML = parseInt(elem.innerHTML) + n)
}

const getDeepestChild = function(elem) {
  const firstChild = elem.children[0]
  if (firstChild.children.length) {
    return getDeepestChild(firstChild)
  } else {
    return firstChild
  }
}

const deepestChild = function() {
  const start = document.querySelector('#grand-node')
  return getDeepestChild(start)
}