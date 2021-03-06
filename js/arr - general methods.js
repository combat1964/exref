Array.isArray()

Array.isArray({})       // false
Array.isArray([])       // true
//--------------------------------------------------------------------------------------------------
var arr = [1,2,3]
arr.push('newItem')     // arr: [1, 2, 3, 'newItem']
//--------------------------------------------------------------------------------------------------
var arr = [1,2,3,4]
arr.pop()               // arr: [1, 2, 3]
//--------------------------------------------------------------------------------------------------
[1,2,3].join(',')       // "1,2,3"
[1,2,3].join()          // "1,2,3"
[1,2,3].join('')        // "123"
//--------------------------------------------------------------------------------------------------
arr.includes(searchElement, ?fromIndex)
[1,2,3].includes(1)     // true
[1,2,3].includes(1,1)   // false
['a','B'].includes('b') // false
//--------------------------------------------------------------------------------------------------
arr.indexOf(searchElement, ?fromIndex)
[1,2,3].indexOf(3)      // 2
[1,2,3].indexOf(4)      // -1
[1,2,3].indexOf(1, 1)   // -1
//--------------------------------------------------------------------------------------------------
