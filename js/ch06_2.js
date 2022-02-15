const str = `
010-1234-5678
thesecon@gmail.com
http://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
`

// 1.앞쪽 일치
// ?=\@ : @기호를 기준으로 앞에 있는 문자들
// . : 임의의 문자
// {1.} : 한 개 이상의 연속
console.log(
  str.match(/.{1,}(?=\@)/g)
)
// ['thesecon']

// 2. 뒤쪽 일치
// ?=\@ : @기호를 기준으로 뒤에 있는 문자들
// . : 임의의 문자
// {1.} : 한 개 이상의 연속
console.log(
  str.match(/(?<=\@).{1,}/g)
)
// ['gmail.com']