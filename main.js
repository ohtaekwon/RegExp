let str = `
010-1234-5678
thesecon@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
hxyp
http://localhost:1234
동해물과 백두산이 마르고 닳도록
`
console.log(
  str.match(/[0-9]{1,}/g)
)

console.log(
  str.match(/[가-힣]{1,}/g)
)

console.log(
  str.match(/[]/g)
)