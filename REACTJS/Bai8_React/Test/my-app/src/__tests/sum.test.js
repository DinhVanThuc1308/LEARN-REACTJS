// // import sum from "../sum.js";
// // test("2 + 3 = 5", () => {
// //   expect(sum(2, 3)).toBe(5);
// // });

// // test("There is no I in team", () => {
// //   expect("team").not.toMatch(/te/);
// // });

// // const shoppingList = [
// //   "diapers",
// //   "kleenex",
// //   "trash bags",
// //   "paper towels",
// //   "milk",
// // ];

// // test("the shopping list has milk on it", () => {
// //   expect(shoppingList).toContain("milk");
// //   expect(new Set(shoppingList)).toContain("milk");
// // });

// function compileAndroidCode() {
//   throw new Error("You are using the wrong DJK!");
// }
// test("compiling android goes as expected", () => {
//   expect(() => compileAndroidCode()).toThrow();
//   expect(() => compileAndroidCode()).toThrow(Error);
//   // You can also use a string that must be contained in the error message or a regexp
//   expect(() => compileAndroidCode()).toThrow("you are using the wrong JDK");
//   expect(() => compileAndroidCode()).toThrow(/JDK/);
//   // Or you can match an exact error mesage using a regexp like below
//   expect(() => compileAndroidCode()).toThrow(/^you are using the wrong JDK$/); // Test fails
//   expect(() => compileAndroidCode()).toThrow(/^you are using the wrong JDK!$/); // Test pass
// });
