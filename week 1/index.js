// find element  3

// let arr = [1, 2, 3, 5, 6];

// best
// avg
// worst
// O(n) 1

// let find=6;

// for(let i=0;i<arr.length;i++){
//    for(let j=0;j<arr.length;j++){

// console.log(arr[i],arr[j]);
//    }
// }
//

let matrix = [
  [1, 4, 7],
  [2, 15, 8],
  [13, 6, 9],
];

// max row wise

// let n=2

// for(let i=0;i<3;i++){
// console.log(matrix[i][n--]);
// }

// for(let i=0;i<3;i++){
//     console.log(matrix[i][i]);
// }

// let index [
// 00, 01, 02,
// 10,11,12,
// 20,21,22

// ]

// print 2d array
// console.log(matrix[1][1]);

// matrix[1][1]=10
// console.log(matrix[1][1]);
// let maxsum = 0;

// for (let i = 0; i < 3; i++) {
//   let sum = 0;
//   for (let j = 0; j < 3; j++) {
//     // console.log(matrix[i][j]);
//     sum += matrix[i][j];
//   }

//   if (sum > maxsum) {
//     maxsum = sum;
//   }
// }

// console.log(maxsum);

// bubble sort
let arr = [7, 2, 4, 9, 3];
    //    [2,4,7,3,9]
    //    [2,4,3,7,9]
    //    [2,3,4,7,9]



const swap = (arr, i, j) => {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

console.log(arr);
// for (let i = 0; i < arr.length-1; i++) {
//   for (let j = 0; j < arr.length - 1-i; j++) {
//     if (arr[j] > arr[j + 1]) {
//        swap(arr,j,j+1) 
//     }
//   }
// }
// const arr = [7, 2, 4, 7, 9, 3]

// let i =0
// while ( i < arr.length) {
//     if(arr[i] > arr[i+1]){
//         let tmp = arr[i]
//         arr[i] = arr[i+1]
//         arr[i+1] = tmp
//         i = i === 0 ? i : i-1
//     }else{
//         i++
//     }
// }


// console.log(arr);
