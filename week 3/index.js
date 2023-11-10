// let arr = [3, - 4, 9, -2, 1, -4, 2];
// let k = 3;

// let max_sum = 0;
// let curr_sum = 0;

// for (let i = 0; i < k; i++) {
//   curr_sum += arr[i];
// }
// if (max_sum < curr_sum) {
//   max_sum = curr_sum;
// }
// for (let i = k; i < arr.length; i++) {
//   curr_sum -= arr[i - k];
//   curr_sum += arr[i];

//   if (curr_sum > max_sum) {
//     max_sum = curr_sum;
//   }
// }

// console.log(max_sum);

//binary

// let arr = [1, 2, 3, 5, 7, 9, 10];
// let target = 17;

// let s = 0;
// let e = arr.length - 1;

// while (s <= e) {
//   let mid = (s + e) / 2;

//   if (arr[mid] == target) {
//     console.log("element found at", mid);
//     break;
//   } else if (arr[mid] > target) {
//     e = mid - 1;
//   } else {
//     s = mid + 1;
//   }
// }

// linked List

class node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  add(data) {
    let newNode = new node(data);
  }
}

let list = new LinkedList();
console.log(list);
