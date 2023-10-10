// selection sort
// let arr = [3, 4, 1, 9, 5, 7];

// const swap = (arr, i, j) => {
//   let temp = arr[i];
//   arr[i] = arr[j];
//   arr[j] = temp;
// };

// for (let i = 0; i < arr.length; i++) {
//   let min = i;

//   for (let j = i + 1; j < arr.length; j++) {
//     if (arr[j] < arr[min]) {
//       min = j;
//     }
//   }

//   swap(arr, i, min);
// }

// console.log(arr);

// let arr = [2, 3, 3, 5, 6, 7, 8, 9];
// let target = 13;

// for (let i = 0; i < arr.length; i++) {
//   for (let j = i + 1; j < arr.length; j++) {
//     if (arr[i] + arr[j] == target) {
//       console.log(
//         `index of first number ${i} and second is ${j} value ${arr[i]} ${arr[j]}`
//       );
//     }
//   }
// }

// let i = 0;
// let j = arr.length - 1;

// while (i < j) {
//   let sum = arr[i] + arr[j];
//   if (sum == target) {
//     console.log(target, arr[i], arr[j]);
//     i++;
//     j--;
//   } else if (sum < target) {
//     i++;
//   } else {
//     j--;
//   }
// }

// let arr=[9,4,2,6,7,1,8,15]

// let target =10

// let str="level"

// const findMaxSum = (i, j) => {
//   let sum = 0;
//   for (let k = i; k <= j; k++) {
//     sum += arr[k];
//   }
//   return sum;
// };

// let max = 0;
// for (let i = 0; i < arr.length; i++) {
//   for (let j = i; j < arr.length; j++) {
//     let cr_sum = findMaxSum(i, j);
//     if (cr_sum > max) {
//       max = cr_sum;
//     }
//   }
// }
// console.log(max);
let arr = [2, -3, -4, 1, -2, 5];

let max = arr[0];
let cr_max = 0;

for (let i = 0; i < arr.length; i++) {
  cr_max += arr[i];
  max = Math.max(cr_max, max);
  if (cr_max < 0) {
    cr_max = 0;
  }
}

console.log("max", max);
