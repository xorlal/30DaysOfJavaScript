//REGULAR EXPRESSIONS :
/*A regular expression or RegExp is a small programming language that helps to find pattern in data. A RegExp can be used to check if some pattern exists in a different data types. To use RegExp in JavaScript either we use RegExp constructor or we can declare a RegExp pattern using two forward slashes followed by a flag. We can create a pattern in two ways.

To declare a string we use a single quote, double quote a backtick to declare a regular expression we use two forward slashes and an optional flag. The flag could be g, i, m, s, u or y.

RegExp parameters
A regular expression takes two parameters. One required search pattern and an optional flag.

Pattern
A pattern could be a text or any form of pattern which some sort of similarity. For instance the word spam in an email could be a pattern we are interested to look for in an email or a phone number format number might be our interest to look for.

Flags
Flags are optional parameters in a regular expression which determine the type of searching. Let us see some of the flags:

g: a global flag which means looking for a pattern in whole text
i: case insensitive flag(it searches for both lowercase and uppercase)
m: multiline*/

//Creating a pattern with RegExp Constructor:

//Declaring regular expression without global flag and case insensitive flag.
let pattern = 'love'// Without flag
let regEx = new RegExp(pattern)

//Declaring regular expression with global flag and case insensitive flag.
let pattern1 = 'love'
let flag = 'gi'
let regEx1 = new RegExp(pattern1, flag)

//Declaring a regex pattern using RegExp object. Writing the pattern and the flag inside the RegExp constructor.
let reg = new RegExp('love', 'gi')


//Creating a pattern without RegExp Constructor.
//Declaring regular expression with global flag and case insensitive flag.
let regei = /love/gi // this is the same as the one which we created with the RegEx constructor (let regEx = new RegEx('love', 'gi'))




//REGEXPP OBJECT METHODS
//Let us see some of RegExp methods:
//Testing for a match using :-test():Tests for a match in a string. It returns true or false.
const str = 'I love JavaScript'
const patternn = /love/
const result = patternn.test(str)
console.log(result)


//ARRAY CONTAINING ALL OF THE MATCH
//match():Returns an array containing all of the matches, including capturing groups, or null if no match is found. If we do not use a global flag, match() returns an array containing the pattern, index, input and group.
const str1 = 'I love JavaScript'
const patter = /love/ // without a global flag match() returns an array containing the patternn the index the input and the group
const result1 = str1.match(patter)
console.log(result1)

//another example
const word = 'I love javaScript'
const patterner = /love/g  //with the global flag it returns an array containing of all the matches
const ans = word.match(patterner)
console.log(ans)


//Using search(): Tests for a match in a string. It returns the index of the match, or -1 if the search fails.
const sea = 'I love javaScript'
const formula = /love/g
const answer = sea.search(formula)
console.log(answer)

//Using replace():Executes a search for a match in a string, and replaces the matched substring with a replacement substring.
const txt = 'Python is the most beautiful language that a human begin has ever created.\
I recommend python for a first programming language'
matchedReplaced = txt.replace(/Python|python/, 'JavaScript')
console.log(matchedReplaced) //without the global flag

matchedReplaced1 = txt.replace(/Python|python/g, 'JavaScript')
console.log(matchedReplaced1) //with the global flag 

matchedReplaced = txt.replace(/Python/gi, 'JavaScript')
console.log(matchedReplaced) //with global flag and case insensitive 

const txt1 = '%I a%m te%%a%%che%r% a%n%d %% I l%o%ve te%ach%ing.\
T%he%re i%s n%o%th%ing as m%ore r%ewarding a%s e%duc%at%i%ng a%n%d e%m%p%ow%er%ing \
p%e%o%ple.\
I fo%und te%a%ching m%ore i%n%t%er%%es%ting t%h%an any other %jobs.\
D%o%es thi%s m%ot%iv%a%te %y%o%u to b%e a t%e%a%cher.'
console.log(txt1)

matches = txt1.replace(/%/g, '')
console.log(matches)

/*
[]: A set of characters
[a-c] means, a or b or c
[a-z] means, any letter a to z
[A-Z] means, any character A to Z
[0-3] means, 0 or 1 or 2 or 3
[0-9] means any number 0 to 9
[A-Za-z0-9] any character which is a to z, A to Z, 0 to 9

\: USES to escape special characters
\d mean: match where the string contains digits (numbers from 0-9)
\D mean: match where the string does not contain digits

. : any character except new line character(\n)
^: starts with
r'^substring' eg r'^love', a sentence which starts with a word love
r'[^abc] mean not a, not b, not c.
$: ends with
r'substring$' eg r'love$', sentence ends with a word love
*: zero or more times
r'[a]*' means a optional or it can occur many times.
+: one or more times
r'[a]+' means at least once or more times
?: zero or one times
r'[a]?' means zero times or once
\b: word bounder, matches with the beginning or ending of a word
{3}: Exactly 3 characters
{3,}: At least 3 characters
{3,8}: 3 to 8 characters
|: Either or
r'apple|banana' mean either of an apple or a banana
(): Capture and group
*/

//Square Bracket: Let's use square bracket to include lower and upper case
 const patt = '[Aa]pple' // this square bracket means either A or a.
 const texter = 'Apple and banana are fruits. An old cliche says an apple a day keeps the  doctor way has been replaced by a banana a day keeps the doctor far far away.'
const matcher = texter.match(patt)
console.log(matcher)

const anotherPatt = /[Aa]pple/g
const anotherTxt = 'Apple and banana are fruits. An old cliche says an apple a day keeps the  doctor way has been replaced by a banana a day keeps the doctor far far away.'
const anotherMatch = anotherTxt.match(anotherPatt)
console.log(anotherMatch)


//If we want to look for the banana, we write the pattern as follows:
const bana = /[Aa]pple|[Bb]anana/g
const sentence = 'Apple and banana are fruits. An old cliche says an apple a day keeps the  doctor way has been replaced by a banana a day keeps the doctor far far away.'
const resultant = sentence.match(bana)
console.log(resultant) //Using the square bracket "[]" and or " | " operator , we manage to extract Apple, apple, Banana and banana.

//Escape character(\) in RegExp
const excape = /\d/g // d is a special character which means digits
const sen = 'This regular expression example was made in January 12,  2020.'
const matching = sen.match(excape)
console.log(matching)

//another example
//One or more times(+)
const excape1 = /\d+/g
const sen1 = 'This regular expression example was made in January 12,  2020.'
const output = sen1.match(excape1)
console.log(output) //// ["12", "2020"]

//Period(.)
const period = /[a]./g // this square bracket means a and . means any character except new line
const theText = 'Apple and banana are fruits'
const joinery = theText.match(period)
console.log(joinery) 

 const anotherPeriod = /[a].+/g 
 const wording = 'Apple and banana are fruits'
 const together = wording.match(anotherPeriod)
 console.log(together)


 //Zero or more times(*) :Zero or one times. The pattern may not occur or it may occur once.
const formula1 = /[a].*/g //. any character, + any character one or more times 
const funct = 'Apple and banana are fruits'
const display = funct.match(formula1)
console.log(display)


//Zero or one times(?)
const txtt = 'I am not sure if there is a convention how to write the word e-mail.\
Some people write it email others may write it as Email or E-mail.'
const pattern2 = /[Ee]-?mail/g

const tog = txtt.match(pattern2)
console.log(tog)


//Quantifier in RegExp:
//We can specify the length of the substring we look for in a text, using a curly bracket. Let us see, how ot use RegExp quantifiers. Imagine, we are interested in substring that their length are 4 characters.
const regulars = 'This regular expression example was made in December 6,  2019.'
const code = /\b\w{4}\b/g //  exactly four character words
const use = regulars.match(code)
console.log(use)

const nums = 'This regular expression example was made in August 6, 2024.'
const enter = /\b[a-zA-Z]{4}\b/g //  exactly four character words without numbers
const summation = nums.match(enter)
console.log(summation)

const run = 'This regular expression example was made in August 6, 2024.'
const getNumber = /\d{4}/g // a number and exactly four digits
const showUs = run.match(getNumber)
console.log(showUs)

const anotherRun = 'This regular expression example was made in August 6, 2024.'
const onlyNum = /\d{1,4}/g  // 1 to 4 numbers in the text
const savour = anotherRun.match(onlyNum)
console.log(savour)


//Cart ^

//Starts with
const startsWith = 'This regular expression example was made in August 6, 2024.'
const look = /^This/ // ^ means starts with, so we are matching to see if the text starts with 'This'. Also the 'Starts with ^' character doesn't need the global flag cos it only searches at the beginning of the text.
const mat = startsWith.match(look)
console.log(mat)

//Negation
const neg = 'This regular expression example was made in August 6, 2024.'
const negative = /[^A-Za-z,. ]+/g // ^ in set character means negation, not A to Z, not a to z, no space, no comma no period
const overAll = neg.match(negative)
console.log(overAll)

//Exact match: It should have ^ starting and $ which is an end
let print = /^[A-Z][a-z]{3,12}$/
let name = 'Asabeneh'
let star = print.test(name)
console.log(star)