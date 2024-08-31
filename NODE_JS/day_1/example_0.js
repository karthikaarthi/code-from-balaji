// process.argv
console.log(process.argv)
console.log(process.argv[0])
console.log(process.argv[1])
console.log(process.argv[2])


const name=process.argv[2] || 'world'

console.log('hello ',name)