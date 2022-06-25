import { faker } from "@faker-js/faker";

export const appColor = ["app-orange", "app-green", "app-blue", "app-pink"];

export const topProductData = [
  {
    id: 1,
    name: faker.vehicle.vehicle(),
    value: faker.random.numeric(2),
  },
  {
    id: 2,
    name: faker.vehicle.vehicle(),
    value: faker.random.numeric(2),
  },
  {
    id: 3,
    name: faker.vehicle.vehicle(),
    value: faker.random.numeric(2),
  },
  {
    id: 4,
    name: faker.vehicle.vehicle(),
    value: faker.random.numeric(2),
  },
];

export const cardTitle = [
  "Total Sales",
  "Total Order",
  "Product Sold",
  "New Customer",
];

export const cardData = [
  {
    id: 1,
    prefix: "$",
    value: faker.random.numeric(4),
    summary: faker.random.numeric(1),
  },
  {
    id: 2,
    prefix: "",
    value: faker.random.numeric(3),
    summary: faker.random.numeric(1),
  },
  {
    id: 3,
    prefix: "",
    value: faker.random.numeric(3),
    summary: faker.random.numeric(1),
  },
  {
    id: 4,
    prefix: "",
    value: faker.random.numeric(3),
    summary: faker.random.numeric(1),
  },
];

export const BarChartDataLabels = ["1", "2", "3", "4", "5", "6"];
export const BarChartDataX = BarChartDataLabels.map(() =>
  faker.random.numeric(1)
);
export const BarChartDataY = BarChartDataLabels.map(() =>
  faker.random.numeric(1)
);

export const LineChartDataLabels = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
];
export const LineChartDataX = LineChartDataLabels.map(() =>
  faker.random.numeric(3)
);
export const LineChartDataY = LineChartDataLabels.map(() =>
  faker.random.numeric(3)
);
