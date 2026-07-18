import test from "node:test";
import { Range } from "../npm/dist/index.js";
import { CjsSchema } from "@carbonenginejs/core-types/schema";


function assertEquals(actual, expected)
{
  if (!Object.is(actual, expected))
  {
    throw new Error(`expected ${expected}, got ${actual}`);
  }
}

test("Range follows Carbon setup, center, and uniform behavior", () =>
{
  const range = new Range();
  assertEquals(range.GetIsUniform(), true);
  range.Setup(10, 4, 0, 20);
  assertEquals(range.GetCenterPoint(), 10);
  assertEquals(range.GetMinRangePoint(), 0);
  assertEquals(range.GetMaxRangePoint(), 14);
  range.SetCenterPoint(12);
  assertEquals(range.minRangePoint, 0);
  assertEquals(range.maxRangePoint, 16);
  range.SetMinRangePoint(9);
  assertEquals(range.minRangePoint, 0);
  assertEquals(range.maxRangePoint, 15);
  range.SetMaxRangePoint(18);
  assertEquals(range.minRangePoint, 0);
  assertEquals(range.maxRangePoint, 18);
  assertEquals(CjsSchema.GetConstructor("Range"), Range);
});

test("Range preserves Carbon slider and uniformity edge behavior", () =>
{
  const range = new Range();
  range.Setup(10, 6, 5, 14);
  range.SetIsUniform(false);
  range.SetMinRangePoint(7);
  range.SetMaxRangePoint(15);
  range.SetIsUniform(true);
  assertEquals(range.minRangePoint, 5);
  assertEquals(range.maxRangePoint, 13);
  assertEquals(range.GetMinRangePoint(), 5);
  assertEquals(range.GetMaxRangePoint(), 13);
  range.SetSliderMin(8);
  range.SetSliderMax(12);
  assertEquals(range.GetSliderMin(), 8);
  assertEquals(range.GetSliderMax(), 12);
  assertEquals(range.GetMinRangePoint(), 7);
  assertEquals(range.GetMaxRangePoint(), 12);
  range.ToggleIsUniform();
  assertEquals(range.GetIsUniform(), false);
});
