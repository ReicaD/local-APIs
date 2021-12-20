// function fetchData() {
//   fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response) => console.log(response.data))
//     .catch((error) => console.error(error));
// }

// fetchData()
let url = "https://jsonplaceholder.typicode.com/users";

// function data() {
  fetch(url)
    .then((response) => {
     return response.json();
    })
    .then(data=>{
       let res = data;
       console.log(res)
    })
    .catch((err) => {
      console.log(err.message);
    });
// };
// console.log(data());
