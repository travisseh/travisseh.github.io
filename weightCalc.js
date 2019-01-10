//LOGIC

//Declare weight variables: 
// let nineties = weightsOutPut[0]
// let seventies 
// let fifties
// let twenties
// let tens 
// let fives 

//Enter weight
let totalWeight = prompt("What weight are you lifting today?")
let barWeight = prompt("What weight is the bar?")
let weightMinusBar = totalWeight - barWeight
const weights = [90, 70, 50, 20, 10, 5]
let weightsOutPut = []

if (weightMinusBar <= 0) {
    alert("You don't need the bar on this one. Try refreshing and entering a bigger weight")
} else {
    for (let i = 0; i < weights.length; i++){
        //set weightsoutput to the dividend of input and specific weight
        weightsOutPut[i] = Math.floor(weightMinusBar / weights[i])
        //find remainder and set it to the evaluated value
        weightMinusBar = weightMinusBar % weights[i] 
    }
    
    alert(`The weights you should use per side are 
    ${weightsOutPut[0]} -- 45
    ${weightsOutPut[1]} -- 35
    ${weightsOutPut[2]} -- 25
    ${weightsOutPut[3]} -- 10
    ${weightsOutPut[4]} -- 5
    ${weightsOutPut[5]} -- 2.5`)
}




//check if weight is greater than 90
    //If yes: 
        //find how many times weight can be divided by 90 and save value to fortyFivesDouble
        //find remainder and calculate if greater than
//Else if: check weight is greater than 70 and repeat exact process below replacing 



//Convert double 
// 45 = 90
// 35 = 70
// 25 = 50
// 10 = 20
// 5 = 10
// 2.5 = 5


//thoughts: need to probably create several functions that progressively get called within a loop. I think that's the only right way to do this. 