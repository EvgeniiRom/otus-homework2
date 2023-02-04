const sum = (a: number, b: number): number => {
  return a + b;
};

it("check '+'", () => {
  expect(sum(4, 6)).toBe(10);
});
