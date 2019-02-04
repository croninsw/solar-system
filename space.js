const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]
const planetEl = document.getElementById("planets")
// make planet names uppercase
const planetsInUppercase = planets.map(planet => {
    return planet[0].toUpperCase() + planet.slice(1)
})
// append each planet name to DOM
const planetList = planetsInUppercase.forEach(planet => {
    planetEl.innerHTML += `<h3>${planet}</h3>`
})

/*
    Use the filter method to create a new array that
    contains planets with the letter 'e'. Use the `includes()`
    method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
*/

const planetsContainingE = planets.filter(planet => {
    let isThere = false
    if (planet.includes("e")) isThere = true
    return isThere
})

console.log(planetsContainingE)