process.stdin.resume()
process.stdin.setEncoding('utf8')
var age;

console.log('What\'s your age ? ')
process.stdin.on('data', (age) => {
  if (age > 99 || isNaN(age)) {
    console.log('error');
  } else {
    console.log('You were born in ' + new Date(new Date().getTime() - age*360*24*3600*1000))
    process.exit()
  }  
})


