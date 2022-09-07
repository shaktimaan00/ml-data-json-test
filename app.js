const ctx = document.getElementById("myChart");
const myChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: [
      "jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: false,
        data: [50, 100, 250, 175, 200, 230, 150, 130, 80, 40, 50, 30],
        pointBorderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 3,
        borderColor: "white",
        // barPercentage: .5,
        lineWidth: 80,
        // categoryPercentage: .14,
      },
    ],
  },

  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: false,
    },
    scales: {
      x: {
        ticks: {
          color: "white",
        },
      },
      y: {
        ticks: {
          color: "white",
        },
      },
    },
  },
});

const newctx = document.getElementById("mynewChart");
const mynewChart = new Chart(newctx, {
  type: "bar",
  data: {
    labels: [
      "jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: false,
        data: [50, 100, 250, 175, 200, 230, 150, 130, 80, 40, 50, 30],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 8,
        borderRadius: 50,
        // borderColor: "white",
        // fill: "red",
        barPercentage: 0.9,
        // lineWidth: 80,
        categoryPercentage: 0.3,
      },
    ],
  },

  options: {
    responsive: true,
    maintainAspectRatio: false,
    // indexAxis: "y",
    plugins: {
      legend: false,
    },
    scales: {
      x: {
        ticks: {
          color: "white",
        },
      },
      y: {
        ticks: {
          color: "white",
        },
      },
    },
  },
});

for (let i = 0; i < 12; i++) {
  let base_price =
    document.querySelector(".styled-table").children[1].children[0].children[1]
      .children[0].innerHTML;
  let current_price =
    document.querySelector(".styled-table").children[1].children[i].children[1]
      .children[0].innerHTML;
  let percent_change =
    document.querySelector(".styled-table").children[1].children[i].children[2]
      .children[0];

  let n =
    (parseInt(current_price) - parseInt(base_price)) / parseInt(base_price);
  percent_change.innerHTML = (n * 100).toPrecision(3);
}

let charts = document.querySelectorAll(".charts");
let btn = document.getElementById("btn");

// Array.from(charts).forEach(
//   addEventListener("click", () => {
//     // console.log("hello");
//     btn.disabled = false;
//   })
// );

let data3 = [
  {
    month: "Jan",
    price: 58990,
  },
  {
    month: "feb",
    price: 59590,
  },
  {
    month: "mar",
    price: 57310,
  },
  {
    month: "Apr",
    price: 57599,
  },
  {
    month: "May",
    price: 58750,
  },
  {
    month: "Jun",
    price: 58699,
  },
  {
    month: "Jul",
    price: 58999,
  },
  {
    month: "Aug",
    price: 57659,
  },
  {
    month: "Sep",
    price: 57899,
  },
  {
    month: "Oct",
    price: 55999,
  },
  {
    month: "Nov",
    price: 56499,
  },
  {
    month: "Dec",
    price: 56299,
  },
];

let data2 = [
  {
    month: "Jan",
    price: 61990,
  },
  {
    month: "feb",
    price: 62359,
  },
  {
    month: "mar",
    price: 60799,
  },
  {
    month: "Apr",
    price: 61459,
  },
  {
    month: "May",
    price: 62349,
  },
  {
    month: "Jun",
    price: 62450,
  },
  {
    month: "Jul",
    price: 62634,
  },
  {
    month: "Aug",
    price: 61939,
  },
  {
    month: "Sep",
    price: 61455,
  },
  {
    month: "Oct",
    price: 59200,
  },
  {
    month: "Nov",
    price: 59000,
  },
  {
    month: "Dec",
    price: 58990,
  },
];

let data1 = [
  {
    month: "Jan",
    price: 64599,
  },
  {
    month: "feb",
    price: 63549,
  },
  {
    month: "mar",
    price: 61499,
  },
  {
    month: "Apr",
    price: 63799,
  },
  {
    month: "May",
    price: 64959,
  },
  {
    month: "Jun",
    price: 65999,
  },
  {
    month: "Jul",
    price: 64499,
  },
  {
    month: "Aug",
    price: 64199,
  },
  {
    month: "Sep",
    price: 63789,
  },
  {
    month: "Oct",
    price: 61399,
  },
  {
    month: "Nov",
    price: 61499,
  },
  {
    month: "Dec",
    price: 61990,
  },
];

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

let data = document.querySelectorAll(".price");

for (let i = 0; i < data1.length; i++) {
  data[i].innerHTML = data1[i].price;
}

let date = new Date();
let month = date.getMonth();

let n1 = ((data1[(month + 1) % 12].price - data2[(month + 1) % 12].price) + (data2[(month + 1) % 12].price - data3[(month + 1) % 12].price))/2;
let n2 = ((data1[(month + 2) % 12].price - data2[(month + 2) % 12].price) + (data2[(month + 2) % 12].price - data3[(month + 2) % 12].price))/2;
let n3 = ((data1[(month + 3) % 12].price - data2[(month + 3) % 12].price) + (data2[(month + 3) % 12].price - data3[(month + 3) % 12].price))/2;

let month1 = n1;
// console.log(month1);
let month2 = n2;
// console.log(month2);
let month3 = n3;
// console.log(month3);

let first = document.getElementById("first");
let second = document.getElementById("second");
let third = document.getElementById("third");

let base_value = data1[month].price;

// console.log(first.innerHTML)
if (n1 > 0) {
  first.innerHTML = base_value - n1;
} else {
  first.innerHTML = base_value + n1;
}
// console.log(first.innerHTML);

if (n2 > 0) {
  second.innerHTML = base_value - n2;
} else {
  second.innerHTML = base_value + n2;
}

if (n3 > 0) {
  third.innerHTML = base_value - n3;
} else {
  third.innerHTML = base_value + n3;
}

// console.log(months[month]);
