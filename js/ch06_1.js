let str = `
010-1234-5678
thesecon@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
hxyp
http://localhost:1234
동해물과_백두산이 마르고 닳도록
`
// f 또는 o 또는 x를 찾아서 배열로 출력
console.log(
  str.match(/[fox]/g)
)

// 0부터 9사이의 문자 구간에서 한 개 이상의 연속된 문자 
console.log(
  str.match(/[0-9]{1,}/g)
)

// 모든 한글들중 한 개 이상의 연속된 한글들을 출력
console.log(
  str.match(/[가-힣]{1,}/g)
)

// \w : 대문자, 소문자, 숫자, _ 등 모두 출력
console.log(
  str.match(/\w/g)
)

// \bf : 63개의 문자가 아닌 경계에서 시작해서 f라는 알파벳 단어로 시작하고,
// \w{1,} : 뒤쪽에 그외의 63개의 문자가 한 개 이상오는 연속일치를 시킨 후,
// \b : 마지막으로 63개의 문자가 아닌 경계에서 끝나는 문자를 찾는 패턴
console.log(
  str.match(/\bf\w{1,}\b/g)
)

// 숫자만 일치하는 것중 한 개 이상 일치하는 문자 출력
console.log(
  str.match(/\d{1,}/g)
)

// 공백문자 찾기(줄바꿈, 띄어쓰기)
console.log(
  str.match(/\s/g)
)

const h = `  the hello  world     !

`
console.log(
  h.match(/\s/g)
)

// 공백 삭제
console.log(
  h.replace(/\s/g, '')
)
// thehelloworld!