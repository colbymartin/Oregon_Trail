// 2 objects: traveler and wagon

function makeTraveler(name) {
    return {
        name: name,
        food: Math.round(Math.random() * 100),
        isHealthy: true,
    };
}

function makeWagon(capacity) {
    return {
        passengerList : [],
        capacity: capacity,
    }
}

function hunt(travelername) {
    if (Math.random() * 100 < 50) {
        travelername.food = travelername.food + 100;
        return "Successful Hunt"
    } else {
        return "Unsuccessful Hunt"
    }
}


function eat(travelername) {
    if (travelername.food >= 20) {
        travelername.food = travelername.food - 20
    } else {
        travelername.isHealthy = false;
    }
    return travelername.isHealthy
} 


function join(wagon, travelername) {
    if (wagon.capacity > wagon.passengerList.length) {
        wagon.passengerList.push(travelername);
    } else {
        return "Not Enough Room in Wagon"
    }
}

function quarantine(wagon) {
    if (wagon.passengerList.isHealthy === false) {
        return true
    } else {
        return false
    }
}

function food(wagon) {
    let totalwagonfood = 0;
    for (let count = 0; count < wagon.passengerList.length; count ++) {
        totalwagonfood = totalwagonfood + wagon.passengerList[count].food
    }
    return totalwagonfood
}


// Create a wagon called 'wagon'
let wagon = makeWagon(5);
// Create a traveler with the name 'Henrietta' called 'traveler'
let traveler = makeTraveler('Henrietta');
// Create a traveler with the name 'Juan' called 'traveler2'
let traveler2 = makeTraveler('Juan');

hunt(traveler); // maybe get more food
eat(traveler2);
eat(traveler2); // juan is hungry
join(wagon, traveler);
join(wagon, traveler2);

console.log(quarantine(wagon)); // print true if someone is sick, false otherwise
console.log(food(wagon)); // print juan's food + henrietta's food






