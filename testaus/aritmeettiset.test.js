const {lisays, kerto, jako, vahennys} = require("./aritmeettiset");

test.each([[2,4,6], [8,1,9], [12,13,25]])("%i + %i = %i", (a, b, expected) => {
  expect(lisays(a,b)).toBe(expected)
})

test.each([[10,2,20], [3,6,18], [6,6,36], [1,1,1]])("%i * %i = %i", (a, b , expected) => {
  expect(kerto(a,b)).toBe(expected)
})

test.each([[6,3,3], [10,3,7], [9,3,6], [100,20,80]])("%i - %i = %i", (a, b, expected) => {
  expect(vahennys(a,b)).toBe(expected)
})

test("6 / 2 = 3", () => {
  expect(jako(6,2)).toBe(3)
})

test.each([[6,2,3], [8,4,2], [9,3,3]])("%i / %i = %i", (a, b, expected) => {
  expect(jako(a,b)).toBe(expected)
})
