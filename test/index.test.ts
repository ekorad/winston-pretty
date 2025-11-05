import { add } from "../lib/index.js";
import { describe, expect, test } from "vitest";

describe("winston-pretty", () => {
  test("add", () => {
    expect(add(5, 6)).toBe(11);
  });
});
