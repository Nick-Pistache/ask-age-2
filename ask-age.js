process.stdin.resume()
process.stdin.setEncoding('utf8')
var age;

console.log('What\'s your age ? ')
process.stdin.on('data', (age) => {
  console.log('You were born in ' + new Date(new Date().getTime() - age*360*24*3600*1000))
  process.exit()
})


