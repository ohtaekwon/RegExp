let str = `
010-1234-5678
thesecon@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
hxyp
http://localhost:1234
`
// console.log(
//   str.match(/d$/gm)
// ) 

// console.log(
//   str.match(/h..p/g)
// ) 

// console.log(
//   str.match(/fox|dog/g)
// ) 

// console.log(
//   str.match(/http?/g) // (2) ['http', 'http']
// ) 


console.log(
  str.match(/\b\w{2,3}\b/g)
) 
