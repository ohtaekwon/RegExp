const str = `
010-1234-5678
thesecon@gmail.com
http://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
`

// gi : 대문자/소문자 구분하지 않고 출력
const regexp = new RegExp('the','gi')

const regexp = /the/gi
console.log(str.match(regexp)) // 베열 데이터로 확인된다.

console.log(str.search(regexp))
console.log(str.replace(regexp,'hello'))
