// 1

const x = 'Hello';
const y = 'World!';
console.log(`${x} ${y}`)

//2

const multiply = (x = 1, y = 1) => console.log(`${x * y}`)

multiply(2, 5)
multiply(6, 6)
multiply(5)
multiply()

//3

const average = (...args) => console.log(args.reduce((q, v) => q + v) / args.length)

average(1)
average(1, 3)
average(1, 3, 6, 6)

//4

const gradesAvg = grades => grades.reduce((a,b) => a + b, 0) / grades.length
gradesAvg([1, 5, 5, 5, 4, 3, 3, 2, 1])

//5

const arrayone = [1, 4, 'Iwona', false, 'Nowak']
const [, , firstname, , lastname] = arrayone

console.log(`${firstname} ${lastname}`)
