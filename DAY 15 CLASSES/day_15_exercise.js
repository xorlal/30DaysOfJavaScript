//EXERCISES

//EXERCISE 1
//Q1
class Animal {
    constructor(age, color, legs){
        this.age = age
        this.color = color
        this.legs = legs
    }

    dogSound(){
        console.log('Woof Woof')
    }

    catsound(){
        console.log('Meow Meow')
    }
}


const fluffy = new Animal(7, 'Orange', 4)
console.log(fluffy)




//Q2
class Dog extends Animal {
    firstDog(){
        console.log('I am a child of the parent class animal')
    }
}

const dog1 = new Dog(4, 'orange', 'four')

dog1.dogSound()
console.log(dog1)

class Cat extends Animal{
    firstCat(){
        const theCat = `I am a child of the parent class animal and a cat`
        return theCat
    }
}

const cat1 = new Cat(5, 'Black', 4)
console.log(cat1)
console.log(cat1.firstCat())
cat1.catsound()

//EXERCISE 2   
//Q1 
class Squirrel extends Animal{
    constructor(age, color, legs, name){
        super(age, color, legs)
        this.name = name
    }
    dogSound(){
        const dogTalk = `barks`
        return dogTalk
    }

    catSound(){
        const catTalk = `pursss`
        return catTalk
    }

    squirrelSound(){
        const squirrelTalk = `squeaking` 
        return squirrelTalk
    }
}

const mySquirrel = new Squirrel(4, 'brown', 2, 'Alvin')
console.log(mySquirrel)
console.log(mySquirrel.squirrelSound())


//EXERCISE 3
//Q1
class Statistics{
    constructor(ages){
        this.ages = ages
    }
    count(){
        const fullLength = this.ages.length
        return fullLength
    }
     sum(){
        let sum = 0
     for(let i = 0; i < this.ages.length; i++){
        sum += this.ages[i]
     }
     return sum
     }

     min(){
       const theMin = Math.min(...this.ages)
       return theMin
     }

     max(){
       const theMax = Math.max(...this.ages)
       return theMax
     }

     range(){
        const ranger = Math.max(...this.ages) - Math.min(...this.ages)
        return ranger
     }

     mean(){
        let total = 0
        for(let i = 0; i < this.ages.length; i++){
            total += this.ages[i]
         }

         const avg = Math.ceil(total / this.ages.length)
         return avg
     }

     median(){
        const sorted = this.ages.sort((a, b) => a - b);
        const middle = Math.floor(sorted.length / 2)
        if(sorted.length % 2 === 0){
            return (sorted[middle - 1] + sorted[middle]) / 2
        }
        return sorted[middle]
     }

     mode(){
        const frequency = {}
        let maxFrequency = 0
        let modes = []

        for(let num of this.ages){
            frequency[num] = (frequency[num] || 0) + 1

            if (frequency[num] > maxFrequency){
                maxFrequency = frequency[num]
            }
        }

        for(let key in frequency){
            if(frequency[key] === maxFrequency){
                modes.push(Number(key))
            }
        }
        return modes

     }

     var(){
        const mean = this.ages.reduce((sum, value) => sum + value, 0) / this.ages.length
        
        const squaredDifferences = this.ages.map(value => {
            const difference = value - mean
            return difference ** 2
        })

        const variance = squaredDifferences.reduce((sum, value) => sum + value , 0)

        return variance
     }


}

const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

const stats = new Statistics(ages)
console.log('Count:', stats.count())
console.log('Sum:', stats.sum())
console.log('Min:', stats.min())
console.log('Max:', stats.max())
console.log('Range:', stats.range())
console.log('Mean:', stats.mean())
console.log('Median:', stats.median())
console.log('Mode:', stats.mode()) 
console.log('Variance:', stats.var()) 