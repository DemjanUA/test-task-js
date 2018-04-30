(function() {
  'use strict'

  fetch('https://api.myjson.com/bins/14gsfr')
    .then(res => res.json())
    .then(main)
    .catch(err => {
      throw err
    })
  ;

  function main(data) {
    data.wigdets.forEach(element => {
      handleObject(element)
    })
    console.log(JSON.stringify(data, null, ' '))
    console.log('Quantity of null in arrays:', NULL_COUNT)
  }

  let NULL_COUNT = 0;
  function handleObject(obj) {
    for (let key in obj) {
      if (obj[key] === null) {
        obj[key] = 'null'
      } else if (obj[key] instanceof Array) {
        NULL_COUNT += countNulls(obj[key])
      } else if (obj[key] instanceof Object) {
        handleObject(obj[key])
      }
    }
  }

  function countNulls(arr) {
    return arr.reduce((count, element) => (element === null ? ++count : count), 0)
  }
}())