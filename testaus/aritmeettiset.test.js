const {lisays, kerto, jako, vahennys} = require("./aritmeettiset");

test("2 + 3 = 5", () => {
  expect(lisays(2,3)).toBe(5)
})

test("2 * 3 = 6", () => {
  expect(kerto(2,3)).toBe(6)
})

test("5 - 2 = 3", () => {
  expect(vahennys(5,2)).toBe(3)
})

test("6 / 2 = 3", () => {
  expect(jako(6,2)).toBe(3)
})
