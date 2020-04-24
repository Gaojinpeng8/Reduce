const reduceHelper = (f, acc, arr) => {
    if (arr.length === 0) return acc
    const [head, ...tail] = arr
    return reduceHelper(f, f(acc, head), tail)
  }
  
  Array.prototype.iReduce = function (fn, initial) {
    const array = this
    let result = initial ? initial : 0
    return reduceHelper(fn, result, array)
  }
  
//   const a = [1, 2, 3];

//   console.log(a.iReduce((a, b) => a+b));
