let str = `
010-1234-5678.
thesecon@gmail.com
http://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
`
const regexp = /the/gi
console.log(str.match(/\.$/gim)) 
