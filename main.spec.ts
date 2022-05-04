import { add } from "./main";
import { it, expect, beforeEach } from "@jest/globals";
import { resetState } from "teststate";

it("adds", () => {
  expect(add(2, 2)).toEqual(4);
});

const state = {
  a: 1,
  b: 2,
  c: 3,
};

beforeEach(() => {
  resetState(state);
});

it("clears state", () => {
  expect(state.a).toEqual(1);
  state.a = 2;
});

it("clears state", () => {
  expect(state.a).toEqual(1);
  state.a = 3;
});
