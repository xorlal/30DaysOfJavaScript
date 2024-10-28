//EXERCISE 2
const body = document.querySelector('body')
const h1 = document.querySelector('h1')
const h2 = document.querySelector('h2')
const p1 = document.createElement('p')
const p2 = document.createElement('p')
const containCountries = document.querySelector('div')
let country



//Styling the body
body.style.display = 'flex'
body.style.justifyContent = 'center'
body.style.fontFamily = 'Arial'


//Styling h1
h1.className = 'title'
h1.style.fontSize = '40px'
h1.textContent = 'WORLD COUNTRIES LIST'
h1.style.bottom = '25px'
h1.style.position = 'relative'
h1.style.letterSpacing = '12px'


//Styling the h2
h2.className = 'secondTitle'
h2.style.fontSize = '25px'
h2.textContent = 'Total Number of countries: 193 '
h2.style.position = 'absolute'
h2.style.top = '35px'

//Styling the P1
p1.className = 'firstPara'
p1.style.fontSize = '18px'
p1.textContent = '30DaysOfJavaScript:DOM Day 2'
p1.style.position = 'absolute'
p1.style.top = '70px'
document.body.appendChild(p1)

//Styling the p2
p2.className = 'thirdTitle'
p2.style.fontSize = '15px'
p2.textContent = 'Author:Xorlali Agorsor'
p2.style.position = 'absolute'
p2.style.top = '100px'
document.body.appendChild(p2)

//Styling the div
containCountries.className = 'container'
containCountries.style.display = 'flex'
containCountries.style.flexDirection = 'row'
containCountries.style.flexWrap = 'wrap'
containCountries.style.position = 'absolute'
containCountries.style.top = '150px'
containCountries.style.gap = '10px' 
containCountries.style.width = '80%'
containCountries.style.textAlign = 'center'
containCountries.style.justifyContent = 'center'


const countries = [
    "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", 
    "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", 
    "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", 
    "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", 
    "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", 
    "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad", 
    "Chile", "China", "Colombia", "Comoros", "Congo (Congo-Brazzaville)",
    "Congo (Democratic Republic)", "Costa Rica", "Croatia", "Cuba", "Cyprus", 
    "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", 
    "East Timor (Timor-Leste)", "Ecuador", "Egypt", "El Salvador", 
    "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", 
    "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", 
    "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", 
    "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", 
    "Iraq", "Ireland", "Israel", "Italy", "Ivory Coast (Côte d'Ivoire)", 
    "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", 
    "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", 
    "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", 
    "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", 
    "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", 
    "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar (Burma)", 
    "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", 
    "Niger", "Nigeria", "North Korea", "North Macedonia", "Norway", "Oman", 
    "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", "Peru", 
    "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", 
    "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", 
    "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", 
    "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", 
    "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea", 
    "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", 
    "Switzerland", "Syria", "Tajikistan", "Tanzania", "Thailand", "Togo", 
    "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", 
    "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", 
    "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", 
    "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
  ];




   for(let i = 0; i < countries.length; i++){
      country = document.createElement('p')
      country.className = 'Country'
      country.style.fontSize = '13px'
      country.style.fontWeight = 'bold'
     country.style.boxShadow = ' -1px -2px 20px -10px rgba(0,0,0,0.69)'
      country.style.borderRadius = '5px'
      country.style.padding = '25px 0'
       country.style.margin = '3px auto'
       country.style.width = '15%'
       country.style.height = '80px'
      country.style.alignContent = 'center'
      country.textContent = countries[i]



      containCountries.appendChild(country)
   }
























