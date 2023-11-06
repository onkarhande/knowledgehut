let nums = [2, 0, 1];

let Arr0 = [];
let Arr1 = [];
let Arr2 = [];

for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 0) {
        Arr0.push(0);
    }
    else if (nums[i] == 1) {
        Arr1.push(1);
    }
    else if (nums[i] == 2) {
        Arr2.push(2);
    }
}

// let result = [...Arr0, ...Arr1, ...Arr2];
let result = Arr0.concat(Arr1);
result = result.concat(Arr2);
console.log(result);

// let cntObj = {};
// for (let i = 0; i < nums.length; i++) {
//     if (!cntObj[nums[i]]) {
//         cntObj[nums[i]] = 1;
//     }
//     else {
//         cntObj[nums[i]] += 1;
//     }
// }

// console.log(cntObj);

// let sortedArr = [];
// for (let key in cntObj) {

// }