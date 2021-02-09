// Use recursion to countdown from argument value to zero. t
// 10
// 9
// 8
// ....
// 1
let countDownFrom = num => {
  if (num === 0) return // This line is recursion -  it will call itself until it doesn't.
  console.log(num)
  countDownFrom(num - 1)
}
countDownFrom(10)



// Use recusion to make a tree from the categories array below
let categories = [
  { id: 'animals', 'parent': null },
  { id: 'mammals', 'parent': 'animals' },
  { id: 'cats', 'parent': 'mammals' },
  { id: 'dogs', 'parent': 'mammals' },
  { id: 'chihuahua', 'parent': 'dogs' },
  { id: 'labrador', 'parent': 'dogs' },
  { id: 'persian', 'parent': 'cats' },
  { id: 'siamese', 'parent': 'cats' }
]

let makeTree = (categories, parent) => {
  let node = {}
  categories
    .filter(c => c.parent === parent)
    .forEach(c => (node[c.id] = makeTree(categories, c.id)))
  return node
}

console.log(JSON.stringify(makeTree(categories, null), null, 2))
