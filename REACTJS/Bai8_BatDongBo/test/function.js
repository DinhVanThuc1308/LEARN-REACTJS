// let happyHanding = (mess) => {
//   let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (mess == "yes") {
//         resolve("EM đồng ý");
//       } else {
//         reject(new Error("EM không đồng ý"));
//       }
//     }, 2000);
//   });
//   return promise;
// };
// happyHanding("yes").then((result) => {
//   console.log(result);
// });
// happyHanding("no").catch((e) => {
//   console.log(e);
// });

// Async await

// async function hello() {
//   log("hello");
// }

// hello().then((res) => console.log(res));

// async function f() {
//   let promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("done!"), 1000);
//   });
//   let result = await promise;
//   console.log(1);
//   console.log(result);
// }
// f();
// let promise = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("done!"), 1000);
// });
// promise
//   .finally(() => {
//     console.log("finally");
//   })
//   .then((e) => console.log(e));
// try {
//     try {
//         throw new Error('oops');
//     } catch (ex) {
//         console.error('inner', ex.message);
//     } finally {
//         console.log('finally');
//     }
// } catch (ex) {
//     console.error('outer', ex.message);
// }

// async function demo(isCondition){
//     if (isCondition) return 2;
//     return new Error("Error")
// }
try {
    try {
        throw new Error('oops');
    } catch (ex) {
        console.error('inner', ex.message);
    } finally {
        console.log('finally');
    }
} catch (ex) {
    console.error('outer', ex.message);
}