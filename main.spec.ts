import { add } from "./main";
import { it, expect } from "@jest/globals";

it("adds", () => {
  expect(add(2, 2)).toEqual(4);
});
