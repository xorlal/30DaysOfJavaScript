// LEVEL 1
// Q1 
let challenge = '30 Days of JavaScript'

//Q2
console.log(challenge)

//Q3
console.log(challenge.length)

//Q4
console.log(challenge.toUpperCase())

//Q5
console.log(challenge.toLowerCase())

//Q6
console.log(challenge.substring(3,7))

//Q7
console.log(challenge.substring(3))

//Q8
console.log(challenge.includes('Script'))

//Q9
console.log(challenge.split())

//Q10
console.log(challenge.split(' '))

//Q11
let companies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
console.log(companies.split(', '))

//Q12
console.log(challenge.replace('JavaScript', 'Python'))

//Q13
console.log(challenge.charAt(15))

//Q14
console.log(challenge.charCodeAt('J'))

//Q15
console.log(challenge.indexOf('a'))

//Q16
console.log(challenge.lastIndexOf('a'))

//Q17
let findWord = 'You cannot end a sentence with because because because is a conjunction'
console.log(findWord.indexOf('because'))

//Q18
console.log(findWord.lastIndexOf('because'))

//Q19
console.log(findWord.search('because'))

//Q20
let myTrimmed = ' 30 Days Of JavaScript '
let finalTrim = myTrimmed.trim()
console.log(finalTrim)

//Q21
console.log(challenge.startsWith('30'))

//Q22
console.log(challenge.endsWith('JavaScript'))

//Q23
console.log(challenge.match(/a/g))

//Q24
let half = '30 Days of'
console.log(half.concat(' JavaScript'))

//Q25
console.log(challenge.repeat(5))


//LEVEL 2
//Q1
console.log(`The quote \'There is no exercise better for the heart than the reaching down and lifting people up.\'by John Holmes teaches us to help one another`)

//Q2
console.log(`\" Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.\"`)

//Q3
let a = '10'
let b = 10
console.log(typeof(a))
console.log(typeof(b))
//changing '10' to a number I'll use parseInt()
console.log(parseInt(a))


//Q4
let changedFloat = parseFloat('9.8')
console.log(Math.ceil(changedFloat))

//Q5
let py = 'python'
let ja = 'jargon'
console.log(py.match(/on/))
console.log(ja.match(/on/))

//Q6
let look = 'I hope this course is not full of jargon'
console.log(look.search('jargon'))

//Q7
const no = Math.floor(Math.random() * 101)
console.log(no)

//Q8
const newNum = Math.floor(Math.random()  * (100-50 + 1)) + 50 //Got a little help from the web to solve this one

//Q9
const anotherNum = Math.floor(Math.random() * 226)

//Q10
const access = 'JavaScript'
const randomIndex = Math.floor(Math.random() * access.length) 
const randomChar = access.charAt(randomIndex) // Had aome help here too

//Q11
console.log('1\t1\t1\t1\t1\n2\t1\t2\t4\t8\n3\t1\t3\t9\t27\n4\t1\t4\t16\t64\n5\t1\t5\t25\t125')


//Q12
let sliced = 'You cannot end a sentence with because because because is a conjunction'
 console.log(sliced.substr(31, 23))
// console.log(sliced.indexOf('because'))

//LEVEL 3

//Q1
let love1 = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
console.log(love1.match(/love/g))

//Q2
let bee = 'You cannot end a sentence with because because because is a conjunction'
console.log(bee.match(/because/g))

//Q3
const sentence1 = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'

// const matchSentence = sentence.match(/%$@&#/g)
// console.log(matchSentence.replace())

console.log(sentence1.replace(/[%@$#&]/g, ''))

//Q4
let perMonth = 5000
let annualBonus = 10000
let onlineCourse = 15000
console.log(`He earns ${perMonth} euro from salary per month, ${annualBonus} euro annual bonus, ${onlineCourse} euro online courses per month. His total annual income is ${perMonth + annualBonus + onlineCourse} `)