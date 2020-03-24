interface MiddleTier {
  name: string;
  childRoutes: string[];
}

const middleTiers: MiddleTier[] = [
  {
    name: "classA",
    childRoutes: [
      "bikes",
      "food",
      "toys"
    ]
  },
  {
    name: "classB",
    childRoutes: [
      "books",
      "dvds",
      "laptops"
    ]
  }
];

export const getRouteMap: () => Map<string, string> = () => {
  const m = new Map();
  middleTiers.forEach(mt => mt.childRoutes.forEach(route => m.set(route, mt.name)));
  return m;
}
