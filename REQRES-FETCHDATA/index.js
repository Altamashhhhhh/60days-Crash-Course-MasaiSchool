let showBtn = document.querySelector("#show");
let main = document.querySelector("#main");

function fetchData(url) {
  //fetch data will fetch the data from user
  let data = fetch(url)
    .then((res) => res.json())
    .then((res) => {
      res = res.data;
      console.log(res);
      showData(res); //show data is being called here which is taking res which is the return we are getting from server
    });
}

function showData(arr) {
  //showdata will show the fetched data
  main.innerHTML = ""
  arr.forEach((element) => {
    let container = document.createElement("div");

    let avatar = document.createElement("img");
    avatar.src = element.avatar;
    let email = document.createElement("p");
    email.innerText = element.email;
    let fullName = document.createElement("h3");
    fullName.innerText = element.first_name + " ";
    let lastName = document.createElement("span");
    lastName.innerText = element.last_name;
    fullName.append(lastName);
    container.append(avatar, fullName, email);
    main.append(container);
  });
}
function appendData() {
  fetchData("https://reqres.in/api/users");
}

showBtn.addEventListener("click", appendData);
