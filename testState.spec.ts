import { add } from "./main";
import { it, expect, beforeEach, describe } from "@jest/globals";
import { testState } from "teststate";

it("adds", () => {
  expect(add(2, 2)).toEqual(4);
});

const state = testState(
  () => ({
    a: 1,
    b: 2,
    c: 3,
  }),
  beforeEach
);

it("clears state", () => {
  expect(state.a).toEqual(1);
  state.a = 2;
});

it("clears state", () => {
  expect(state.a).toEqual(1);
  state.a = 3;
});

describe("a test", () => {
  const nestedState = testState(
    () => ({
      d: 1,
      e: 2,
      f: 3,
    }),
    beforeEach
  );

  it("clears nested state", () => {
    expect(nestedState.d).toEqual(1);
    nestedState.d = 3;
  });

  it("clears nested state", () => {
    expect(nestedState.d).toEqual(1);
    nestedState.d = 3;
  });

  describe("nested test", () => {
    const nestedNestedState = testState(
      () => ({
        g: 7,
        h: 8,
        i: 9,
      }),
      beforeEach
    );

    it("clears 2x nested state", () => {
      expect(nestedNestedState.g).toEqual(7);
      nestedNestedState.g = 1;
    });

    it("clears 2x nested state", () => {
      expect(nestedNestedState.g).toEqual(7);
      nestedNestedState.g = 2;
    });
  });
});
