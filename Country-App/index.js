let container = document.querySelector("#container");
let showBtn = document.querySelector("#show");
let rankBtn = document.querySelector("#rank")

let descending = true;

function fetchData() {
    let countryData = fetch("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries");
    countryData.then((data) => data.json()).then((data) => {
        showData(data.data)
    });
}


function showData(arr) {     // where this function will be called then this will show data to the user (DOM)
    container.innerHTML = "";
    arr.forEach(element => {
        let div = document.createElement("div");
        let name = document.createElement("p");
        name.innerText = "Country : " + element.country;
        let rank = document.createElement("p");
        rank.innerText = "Rank : " + element.Rank;
        let population = document.createElement("p");
        population.innerText = "Population : " + element.population;

        div.append(name, rank, population)
        container.append(div)
    });
}

function sortPopulation() {                               //this application is made to sort the population in ascending and descending order 
    let countryData = fetch("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries");
    countryData.then((data) => data.json()).then((data) => {
        if (descending) {
            data.data.sort(function (a, b) {
                return b.population - a.population
            })
        } else {
            data.data.sort(function (a, b) {
                return a.population - b.population
            })
        }
        showData(data.data)
        descending = !descending
    })
}
rankBtn.addEventListener("click", sortPopulation)
showBtn.addEventListener("click", fetchData)
