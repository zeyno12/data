// document.getElementById("getYearsBtn").addEventListener("click", function () {
//   var enteredDate = document.getElementById("sampleDate").value;
//   var years = new Date(new Date() - new Date(enteredDate)).getFullYear() - 1970;
//   alert(years);
// });

// var a = 5;
// var b = 8;
// a = b + a;
// b = a - b;
// a = a - b;
// console.log(a, b);

// function reverseNum(number) {
//   var sum = 0,
//     total = 0;
//   for (i = number; i >= 1; i = i / 10 - (i % 10) * 0.1) {
//     total = i % 10;
//     sum = sum * 10 + total;
//   }
//   return sum;
// }

// console.log(reverseNum(9876543));
// var a = prompt("Enter a value");
// var b,
//   sum = 0;
// var z = a;
// while (a > 0) {
//   b = a % 10;
//   sum = sum * 10 + b;
//   a = parseInt(a / 10);
// }
// alert(sum);

fetch("https://jsonplaceholder.typicode.com/comments")
  .then((res) => res.json())
  .then((data) => {
    let output = "";
    data.slice(0, 10).forEach((data) => {
      output += `
    <li>${data.id} </li>
    <li>${data.name} </li>
    <li>${data.email} </li>
    <li>${data.body} </li>
    `;
    });

    document.getElementById("output").innerHTML = output;
  })
  .catch((err) => console.log(err));

document.getElementById("search").addEventListener("input", filterList);
function filterList() {
  const searchInput = document.getElementById("search");
  const filter = searchInput.value.toLowerCase();
  const listItems = document.getElementById("output");
  listItems.forEach((item) => {
    let text = item.textContent;
    if (text.toLowerCase().includes(filter.toLowerCase())) {
      item.style.display = "";
    } else {
      item.style.display = "none";
    }
  });
}
