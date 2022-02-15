const str = `
010-1234-5678
thesecon@gmail.com
http://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
`

// 1.
const regexp = /fox/gi
const regexp1 = /cat/gi
console.log(regexp.test(str)) // str에 fox가 있기때문에 true를 반환
console.log(regexp1.test(str)) // str에 cat이 없기때문에 false를 반환

// 2.
const regexp = /FOX/gi
console.log(str.replace(regexp, 'AAA'))
console.log(str)

// 3.

let str = `
010-1234-5678
thesecon@gmail.com
http://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
`

const regexp = /FOX/gi
str=str.replace(regexp, 'AAA')
console.log(str)