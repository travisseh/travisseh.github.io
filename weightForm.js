weightInput = document.getElementById("inputWeight")
weightForm = document.querySelector("#weightForm")
stableCals = document.querySelector("#stableCals")
let weight;

weightForm.addEventListener("submit", function(){
  weight = weightInput.value
  stableCals.textContent = weight*15
  deficitCals.textContent = weight*12
})

console.log(weight)

weightForm.addEventListener("submit", function(){
  console.log(Number(weight)+10)
})
//want to be able to use weight elsewhere outside of the function above