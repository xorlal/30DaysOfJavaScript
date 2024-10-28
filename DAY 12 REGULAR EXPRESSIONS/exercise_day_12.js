//Exercises: Level 1
//Q1
const text = 'He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.'
const monthySalaryPattern = /(\d+) euro from salary per month/
const annualBonusPattern = /(\d+) euro annual bonus/
const onlineCoursePattern = /(\d+) euro online courses per month/

const monthlySalary = parseInt(text.match(monthySalaryPattern))
const annualBonus = parseInt(text.match(annualBonusPattern))
const onlineCourse = parseInt(text.match(onlineCoursePattern))

const annualSalary = monthlySalary * 2
const annualCourseOnline = onlineCourse * 2
 const totalIncome = annualSalary + annualBonus + annualCourseOnline
 console.log(`Total annual Income : ${totalIncome} euros`)

 //Q2
//Learnt the answer from another scource
points = ['-1', '2', '-4', '-3', '-1', '0', '4', '8']

const numericPoints = points.map(point => parseInt(point))
const sortedPoints = points.sort((a, b) => a - b)
const distance  = sortedPoints[sortedPoints.length - 1] - sortedPoints[0]
console.log(`Sorted Points: ${sortedPoints}`)
console.log(`The disance between the furthest points is: ${distance}`)
 

//Q3
function is_valid_variable(variable){
    const pattern = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/
    return pattern.test(variable)
}
console.log(is_valid_variable('first_name'))
console.log(is_valid_variable('first-name'))
console.log(is_valid_variable('1first_name'))
console.log(is_valid_variable('firstname'))

//Q4
function tenMostFrequentWords(parapgraph){
    const cleanParagraph = parapgraph.toLowerCase().replace(/[.,]/g, '')
    const wordsArray = cleanParagraph.split(/\s+/)
    const wordsCount = {}

    wordsArray.forEach(word => {
        wordsCount[word] = (wordsCount[word] || 0) + 1; 
    });

    const wordsCountArray = Object.entries(wordsCount)
    wordsCountArray.sort((a,b) => b[1] - a[1])
    
    return wordsCountArray.slice(0, 10)
}
const parapgraph = 'I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.'

console.log(tenMostFrequentWords(parapgraph))

//Q3
function cleanTheText(theText){
const cleaner = theText.replace(/[^a-zA-Z\s]/g, '').toLowerCase()

  const fixedText = cleaner.split(/\s+/)
  const textCount = {}

  fixedText.forEach(word => {
    textCount[word] = (textCount[word] || 0) + 1
  });

  const fixedTextArray = Object.entries(textCount)
  fixedTextArray.sort((a,b) => b[1] - a[1])
  return fixedTextArray.slice(0, 3)

}
const theText = '%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?'
console.log(cleanTheText(theText))
