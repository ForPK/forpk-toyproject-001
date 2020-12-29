let menus = [
  {
    id: 1,
    name: "menu01",
    price: 12000,
    nutrition: [
      {
        servingPer: 120,
        calories: 320,
        나트륨: [7, "g"],
        지방: [12, "mg"],
      },
    ],
  },
  {
    id: 2,
    name: "menu02",
    price: 30000,
    nutrition: {
      servingPer: 600,
      calories: 20,
      나트륨: [10, "g"],
      지방: [7, "mg"],
    },
  },
];

console.log(menus[1]);
