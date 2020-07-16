
function calories() {
    let height = document.getElementById("height").value
    console.log(height)
    let age = document.getElementById("age").value
    console.log(age)
    let weight = document.getElementById("weight").value
    console.log(weight)
    let gender = document.getElementById("weiblich").value
    console.group(gender)
    let activity = document.getElementById("activity").value
    console.log(activity)
    let grundumsatz
    let gesamtumsatz
    let pal = document.getElementById("activity").value
    console.log(pal)

    if (weiblich.checked) {
        grundumsatz = 655.1 + (9.6 * weight) + (1.8 * height) - (4.7 * age)
    } else {
        grundumsatz = 664.7 + (13.7 * weight) + (5*height)-(6.8*age)
    }
    document.getElementById("grundKcal").innerHTML = grundumsatz.toFixed(1)
    gesamtumsatz = grundumsatz * pal
    document.getElementById("gesamtKcal").innerHTML = gesamtumsatz.toFixed(1)

    document.getElementById("grundkJ").innerHTML = (grundumsatz * 4.184).toFixed(1)
    document.getElementById("gesamtkJ").innerHTML = (gesamtumsatz *4.184).toFixed(1)
}
