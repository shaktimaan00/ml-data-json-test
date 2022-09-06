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

let data1 = [
  {
    month: "Jan",
    price: 899,
  },
  {
    month: "feb",
    price: 899,
  },
  {
    month: "mar",
    price: 899,
  },
  {
    month: "Apr",
    price: 899,
  },
  {
    month: "May",
    price: 899,
  },
  {
    month: "Jun",
    price: 899,
  },
  {
    month: "Jul",
    price: 899,
  },
  {
    month: "Aug",
    price: 899,
  },
  {
    month: "Sep",
    price: 899,
  },
  {
    month: "Oct",
    price: 899,
  },
  {
    month: "Nov",
    price: 899,
  },
  {
    month: "Dec",
    price: 899,
  },
];

let data2 = [
  {
    month: "Jan",
    price: 799,
  },
  {
    month: "feb",
    price: 799,
  },
  {
    month: "mar",
    price: 799,
  },
  {
    month: "Apr",
    price: 799,
  },
  {
    month: "May",
    price: 799,
  },
  {
    month: "Jun",
    price: 799,
  },
  {
    month: "Jul",
    price: 799,
  },
  {
    month: "Aug",
    price: 799,
  },
  {
    month: "Sep",
    price: 799,
  },
  {
    month: "Oct",
    price: 799,
  },
  {
    month: "Nov",
    price: 799,
  },
  {
    month: "Dec",
    price: 799,
  },
];

let data3 = [
  {
    month: "Jan",
    price: 699,
  },
  {
    month: "feb",
    price: 699,
  },
  {
    month: "mar",
    price: 699,
  },
  {
    month: "Apr",
    price: 699,
  },
  {
    month: "May",
    price: 699,
  },
  {
    month: "Jun",
    price: 699,
  },
  {
    month: "Jul",
    price: 699,
  },
  {
    month: "Aug",
    price: 699,
  },
  {
    month: "Sep",
    price: 699,
  },
  {
    month: "Oct",
    price: 699,
  },
  {
    month: "Nov",
    price: 699,
  },
  {
    month: "Dec",
    price: 699,
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
