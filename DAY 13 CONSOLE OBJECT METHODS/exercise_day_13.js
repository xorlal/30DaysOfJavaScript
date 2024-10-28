//Exercises:Level 1

//Q1
const countries = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo']
  ]
  console.table(countries)

 //Q2
  const flag = {
    country: 'Finland',
    capital: 'Helsinki' 
  }
  console.table(flag)

  //Q3
  const logs = ['Console.log()', 'Console.clear()', 'Console.time()', 'Console.table()']
  console.group('Logs')
  console.log(logs)
  console.groupEnd()

  //Exercises:Level 2
  //Q1
  console.assert(10 > 2 * 10, '10 is not greater than 20')

  //Q2
  console.warn('Learning FrontEnd takes time don\'t be too hrad on yourself ')

  //Q3
  console.error('This is a mistake but you\'re getting there')