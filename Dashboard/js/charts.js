const ctx = document.getElementById("myChart");
const earning = document.getElementById("earning");
const members = document.getElementById("members");
const expense = document.getElementById("expense");
new Chart(ctx, {
  type: "polarArea",
  data: {
    labels: [
      "Agriculture",
      "Finance and Credit",
      "Housing and Real Estate",
      "Education and Skill Development",
      "Renewable Energy",
      "Women's Empowerment and Self-Help",
    ],
    datasets: [
      {
        label: "Area of Operation wise Societies",
        data: [256, 183, 97, 205, 64, 123],

        backgroundColor: [
          "rgba(5,28,97,1)",
          "rgba(7,62,146,1)",
          "rgba(14,110,206,1)",
          "rgba(14,110,206,1)",
          "rgb(104,206,238,1)",
          "rgba(150,242,238,1)",
        ],
      },
    ],
  },
  options: {
    reponsive: true,
  },
});

new Chart(earning, {
  type: "bar",
  data: {
    labels: [
      "Agriculture",
      "Finance and Credit",
      "Housing and Real Estate",
      "Education and Skill Development",
      "Renewable Energy",
      "Women's Empowerment and Self-Help",
    ],
    datasets: [
      {
        label: "Revenue by Area of Operation(in thousands)",
        data: [350, 500, 280, 320, 200, 180],
        borderWidth: 1,
        backgroundColor: [
          "rgba(5,28,97,1)",
          "rgba(7,62,146,1)",
          "rgba(14,110,206,1)",
          "rgba(45,156,237,1)",
          "rgba(104,206,238,1)",
          "rgba(150,242,238,1)",
        ],
      },
    ],
  },
  options: {
    reponsive: true,
  },
});

new Chart(members, {
  type: "line",
  data: {
    labels: ["2018", "2019", "2020", "2021", "2022", "2023"],
    datasets: [
      {
        label: "Membership growth over time",
        data: [500, 750, 950, 1200, 1450, 1650],

        backgroundColor: [
          "rgba(5,28,97,1)",
          "rgba(7,62,146,1)",
          "rgba(14,110,206,1)",
          "rgba(14,110,206,1)",
          "rgb(104,206,238,1)",
          "rgba(150,242,238,1)",
        ],
      },
    ],
  },
  options: {
    reponsive: true,
  },
});

new Chart(expense, {
  type: "doughnut",
  data: {
    labels: [
      "Salaries",
      "Administrative Costs",
      "Marketing",
      "Investments",
      "Supplies",
      "Other Expenses",
    ],
    datasets: [
      {
        label: "Expense breakdown(in %)",
        data: [35, 20, 15, 10, 10, 5],

        backgroundColor: [
          "rgba(5,28,97,1)",
          "rgba(7,62,146,1)",
          "rgba(14,110,206,1)",
          "rgba(14,110,206,1)",
          "rgb(104,206,238,1)",
          "rgba(150,242,238,1)",
        ],
      },
    ],
  },
  options: {
    reponsive: true,
  },
});
