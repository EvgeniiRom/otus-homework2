import { equalMatrix, generateField, generateFieldData, getEnvironment, generateNextGeneration } from "./Tools";

describe("field generator", () => {
  it("5x2", () => {
    const field = generateFieldData(5, 2);
    const equal = equalMatrix(field, [
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
    ]);
    expect(equal).toBe(true);
  });
  it("3x4", () => {
    const field = generateFieldData(3, 4);
    const equal = equalMatrix(field, [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ]);
    expect(equal).toBe(true);
  });
});

describe("environment", () => {
  it("single", () => {
    const field =
      [[0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0]];
    const env = getEnvironment({ data: field, generation: 0, width: 5, height: 5 });
    const equal = equalMatrix(env,
      [[0, 0, 0, 0, 0],
      [0, 1, 1, 1, 0],
      [0, 1, 0, 1, 0],
      [0, 1, 1, 1, 0],
      [0, 0, 0, 0, 0]]);
    expect(equal).toBe(true);
  });

  it("double", () => {
    const field =
      [[0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 1, 0, 0, 0],
      [0, 0, 0, 1, 0, 0],
      [0, 0, 0, 0, 0, 0]];
    const env = getEnvironment({ data: field, generation: 0, width: 6, height: 5 });
    const equal = equalMatrix(env,
      [[0, 0, 0, 0, 0, 0],
      [0, 1, 1, 1, 0, 0],
      [0, 1, 1, 2, 1, 0],
      [0, 1, 2, 1, 1, 0],
      [0, 0, 1, 1, 1, 0]]);
    expect(equal).toBe(true);
  });
});

describe("engine", () => {
  it("empty", () => {
    const result = generateNextGeneration(generateField(6, 5));
    const equal = equalMatrix(result.data,
      [[0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0]]);
    expect(equal).toBe(true);
  });

  it("circle", () => {
    const result = generateNextGeneration({
      data: [[0, 0, 0, 0, 0, 0],
      [0, 0, 1, 0, 0, 0],
      [0, 0, 1, 0, 0, 0],
      [0, 0, 1, 0, 0, 0],
      [0, 0, 0, 0, 0, 0]]
      , width: 6, height: 5, generation: 0
    });
    const equal = equalMatrix(result.data,
      [[0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 1, 2, 1, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0]]);
    expect(equal).toBe(true);
  });
});