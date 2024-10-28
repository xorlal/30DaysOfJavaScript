//EXERCISE LEVEL 1
//Q1
const countriesAPI = 'https://restcountries.com/v2/all'
fetch(countriesAPI)
.then(reponse => reponse.json())
.then(data => {
    console.log(data)
})
.catch(error => console.error(error))


//Exercises: Level 2
const catsAPI = 'https://api.thecatapi.com/v1/breeds'
const catNames = []
fetch(catsAPI)
.then(response => response.json())
.then(data => {
    data.forEach(cat => {
        catNames.push(cat.name)
    })
    console.log(catNames)
})
.catch(error => console.error(error))

//Exercises: Level 3
//Q1
fetch(catsAPI)
.then(response => response.json())
.then(data => {
    let totalWeight = 0
    let breedCount = 0

    data.forEach(cat => {
        const weigthtRange = cat.weight.metric.split(' - ')
        const minWeight = parseFloat(weigthtRange[0])
        const maxWeight = parseFloat(weigthtRange[1])
        const averageWeight = (minWeight + maxWeight) / 2

        totalWeight += averageWeight
        breedCount++
    })

    const overallAverageWeight = totalWeight / breedCount
    console.log(`The average weight of a cat is : ${overallAverageWeight.toFixed(2)} kg`)
})
.catch(error => console.error(error))

//Q2
fetch(countriesAPI)
.then(response => response.json())
.then(data => {
    const sortedCountries = data.sort((a, b) => b.area - a.area)
    const largestCountries = sortedCountries.slice(0, 10)

    largestCountries.forEach(country => {
        console.log(`${country.name}: ${country.area} km²`)
    })
})
.catch(error => console.error(error))
 
