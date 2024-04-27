let main = document.querySelector(".main");
let category = document.querySelector("#category");
let sorting = document.querySelector("#sorting");
let search = document.querySelector("#search");


function getData(url) {
    fetch(url).then((res) => res.json()).then((data) => {
        console.log(data)
        showData(data)
    })

}



function showData(data) {

    main.innerHTML = ""
    data.forEach(element => {


        let container = document.createElement("div");

        let img = document.createElement("img");
        img.src = element.image;

        let title = document.createElement("p");
        title.innerHTML = element.title;

        let price = document.createElement("p");
        price.innerHTML = "<strong>Price : </strong>" + "$" + element.price;

        let rating = document.createElement("p");
        rating.innerHTML = "<strong>Ratings :  </strong>" + element.rating.rate  + " " + element.rating.count;

        let desc = document.createElement("p");
        desc.className = "description"
        desc.innerHTML = "<strong>Description :  </strong>" + element.description;

        container.append(img, title, price, rating, desc)
        main.append(container)
    });
}


getData("https://fakestoreapi.com/products");

function categoryChange(value) {
    if (value === "allcategory") {
        getData(`https://fakestoreapi.com/products`)

    } else {
        getData(`https://fakestoreapi.com/products/category/${value}`)
    }
}



function searchFunction(value) {
    getData(`https://fakestoreapi.com/products/category/${value}`)
}
function SortedFunction(value) {

    let selected = category.value;

    if (selected === "allcategory") {
        fetch("https://fakestoreapi.com/products").then((res) => res.json()).then((data) => {
            if (value === "priceltoh") {
                data.sort((a, b) => {
                    return a.price - b.price
                })
            } else if (value === "pricehtol") {
                data.sort((a, b) => {
                    return b.price - a.price
                })
            } else if (value === "atoz") {
                data.sort((a, b) => {
                    return a.title.localeCompare(b.title)
                })
            } else if (value === "ztoa") {
                data.sort((a, b) => {
                    return b.title.localeCompare(a.title)
                })
            }
            showData(data)
        })

    }else{
        fetch(`https://fakestoreapi.com/products/category/${selected}`).then((res) => res.json()).then((data) => {
        if(value === "priceltoh" ){
            data.sort((a,b)=>{
                return a.price - b.price
            })
        }else if(value === "pricehtol"){
            data.sort((a,b)=>{
                return b.price - a.price
            })
        }else if(value === "atoz"){
            data.sort((a,b)=>{
                return a.title.localeCompare(b.title)
            })
        }else if(value === "ztoa"){
             data.sort((a,b)=>{
                return b.title.localeCompare(a.title)
            })
        }
        showData(data)
    })
    }



}
sorting.addEventListener("change", function () {
    SortedFunction(sorting.value)
})
search.addEventListener("input", function () {
    searchFunction(search.value)
})
category.addEventListener("change", function () {
    categoryChange(category.value)
})