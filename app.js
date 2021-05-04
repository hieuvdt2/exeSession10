// document.getElementById()
// document.getElementByClassName() -> HTML seclection
// document.getElementByTagName()  -> HTML seclection
// querySelector()
// querySelectoAll()
// const demos = document.getElementsByClassName("demo");
// console.log(demos[1]);

// properties
// .innerHTML, .innerText, .innerContent
// .stlyle

// .id

// .classList -> add() , remove(), onToggle(), .contians();
//

// method

// .appenChild()

// .remove

// setAttribute()

// getAttribute()

// event
// click event, submit event, keyboard event
// const btn = document.getElementById("btn");

// btn.onclick = function (event) {
//   event.target.parentElement.parentElement.children[0].innerText = "hhhhh";
// };

// btn.addEventListener("click", function () {
//   alert("hello");
// });

// huy su kien .removeEventListener

// event bubbling

// Asynchrouns(bất đồng bộ)
// const data = fetch("https://jsonplaceholder.typicode.com/todos/1");
// data
//   .then(function (res) {
//     // console.log(res.json());
//     return res.json();
//   })
//   .then(function (data) {
//     console.log(data);
//     // logic
//     document.createElement("div");
//     alert.innerHTML = data.title;
//     app
//   });

// console.log("123");
// console.log("456");
// //   .then((response) => response.json())
// //   .then((json) => console.log(json));

// const btn = document.getElementById("btn");
// const ul = document.getElementById("myUL");

// const data = fetch("https://jsonplaceholder.typicode.com/todos");
// data
//   .then(function (res) {
//     return res.json();
//   })

//   .then(function (data) {
//     //     console.log(data);

//     for (let datas of data) {
//       const crLi = document.createElement("li");
//       crLi.innerText = datas.title;
//       ul.appendChild(crLi);
//     }
//   });

// btn.onclick = function (event) {
//   fetch("https://jsonplaceholder.typicode.com/todos", {
//     method: "POST",
//     body: JSON.stringify({
//       title: "foo",
//       completed: "bar",
//       userId: 1,
//     }),
//     headers: {
//       "Content-type": "application/json; charset=UTF-8",
//     },
//   })
//     .then((response) => response.json())
//     .then((json) => console.log(json));
//   event.target.classList(check);
// };
// fetch("https://jsonplaceholder.typicode.com/todos",{
//     method: 'POST',
//     body: JSON.stringify({
//         title: 'foo',
//         completed: 'bar',
//         userId: 0
//     }),
//     headers: {
//         "Content-type":"application/json; charset=UTF-8"
//     }
// })
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
const ul = document.getElementById("myUL");
const btn = document.querySelector(".addBtn");
const input = document.querySelector("#myInput");
let size;

let uri = "https://jsonplaceholder.typicode.com/todos";

loadData();
function loadData() {
  let data = fetch(uri);
  data
    .then(function (response, err) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      size = data.length;
      for (let i = 0; i < 50; i++) {
        console.log(data[i].title);
        const li = document.createElement("li");
        li.style.id = data[i].id;
        li.innerHTML = data[i].title;
        ul.appendChild(li);
      }
    });
}

ul.onclick = function (event) {
  console.log(uri + "/" + event.target.style.id);
  if (!event.target.classList.contains("checked")) {
    event.target.classList.add("checked");
    check(uri, event, true);
  } else {
    event.target.classList.remove("checked");
    check(uri, event, false);
  }
};

function check(uri, event, boolean) {
  fetch(uri + "/" + event.target.style.id, {
    method: "PATCH",
    body: JSON.stringify({
      completed: boolean,
    }),
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
  })
    .then(function (res, err) {
      return res.json();
    })
    .then(function (data) {
      console.log(data);
    });
}

btn.onclick = function () {
  console.log(input.value);
  fetch("https://jsonplaceholder.typicode.com/todos", {
    method: "POST",
    body: JSON.stringify({
      userId: 1,
      title: input.value,
      completed: false,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const li = document.createElement("li");
      li.style.id = data;
      li.innerHTML = data.title;
      ul.appendChild(li);
    });
};
