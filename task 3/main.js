function isPrime(number) {
  if (number % 2 === 0) return false
  if (number === 1 || number === 0) return false
  else return true
}

function factorial(number) {
  return number !== 1 ? number * factorial(number - 1) : 1
}

function fib(number) {
  return number <= 1 ? number : fib(number - 1) + fib(number - 2)
}

function isSorted(array) {
  let arr = JSON.stringify(array)
  let paramSort = function (a, b) {
    if (a > b) return 1
    if (a == b) return 0
    if (a < b) return -1
  }
  let newArr = JSON.stringify(array.sort(paramSort))
  if (arr === newArr) { return true }
  else { return false }
}

function reverse(str) {
  let arr = str.split('')
  let newString = []
  for (let i = arr.length - 1; i >= 0; i--) {
    newString += arr[i]
  }
  return newString
}

function indexOf(array, item) {
  for (let index = 0; index < array.length; index++) {
    if (item === array[index]) {
      return index
    }
  }
  return -1
}

function isPalindrome(str) {
  let reverseStr = str.split('').reverse().join('')
  if (reverseStr === str) {
    return true
  }
  return false
}

function missing(arr) {
  let newArr = []
  let paramSort = function (a, b) {
    if (a > b) return 1
    if (a == b) return 0
    if (a < b) return -1
  }
  let array = arr.sort(paramSort)
  for (let index = 0; index < array.length; index++) {

    if (array[index] - array[index - 1] !== 1) {
      let diff = array[index] - array[index - 1]
      let count = 1

      while (diff > count) {
        newArr.push(array[index - 1] + 1)
        count++
      }
    }
  }
  return newArr
}

function isBalanced(str) {
  let array = str.split('')
  let left = 0
  let right = 0
  array.forEach(function (element) {
    if (element === '{') {
      left++
    }
    else if (element === '}') {
      right++
    }
  })
  if (right === left) {
    return true
  }
  else if (right !== left) {
    return false
  }
}
