export const Orders = [
  {
    id: new Date(),
    order_number: 2345,
    short_description: "جوال ايفون",
    date: new Date().toLocaleString("en-US", {
      dateStyle: "short",
      timeStyle: "short",
    }),
    isPind: true,
    isAway: false,
    isComplate: false,
  },
  {
    id: new Date(),
    order_number: 2321,
    short_description: "جهاز لابتوب",
    date: new Date().toLocaleString("en-US", {
      dateStyle: "short",
      timeStyle: "short",
    }),
    isPind: false,
    isAway: true,
    isComplate: false,
  },
  {
    id: new Date(),
    order_number: 2305,
    short_description: "شاشة سمارت ",
    date: new Date().toLocaleString("en-US", {
      dateStyle: "short",
      timeStyle: "short",
    }),
    isPind: false,
    isAway: false,
    isComplate: true,
  },
];
