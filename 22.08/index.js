//1
// function dictionary(text) {
//     let array = text.toLowerCase().match(/[a-z]/g);
//     let dictionary = {};
//     for (let letter of array) {
//         if (dictionary[letter]) {
//             dictionary[letter] += 1;
//         } else dictionary[letter] = 1;
//     }
//         return dictionary;
//     }
    


// let text = "The quick fox jumps over the lazy dog";
// console.log(dictionary(text));



//2
// function rotation(nums) {
//     let left = 0;
//     let right = nums.length - 1;
  
//     while (left <= right) {
//       if (nums[left] <= nums[right]) {
//         return left;
//       }
  
//       let mid = Math.floor((left + right) / 2);
//       let next = (mid + 1) % nums.length;
//       let prev = (mid - 1 + nums.length) % nums.length;
  
//       if (nums[mid] <= nums[next] && nums[mid] <= nums[prev]) {
//         return mid;
//       } else if (nums[mid] <= nums[right]) {
//         right = mid - 1;
//       } else if (nums[mid] >= nums[left]) {
//         left = mid + 1;
//       }
//     }
//     return -1;
//   }
  
//   const nums = [8, 9, 10, 1, 2, 3, 4, 5, 6, 7];
  
//   console.log(`Array is rotated ${rotation(nums)} times`);



  //3
  class Stack {
    constructor() {
      this.items = [];
    }
    push(item) {
      this.items[this.items.length] = item;
    }
    isEmpty() {
      return this.items.length == 0;
    }
    pop() {
      if (!this.isEmpty()) {
        const poppedItem = this.items[this.items.length - 1];
        this.items.length = this.items.length - 1;
        return poppedItem;
      } else {
        throw new Error("pop from an empty stack");
      }
    }
  }
  
  const stack = new Stack();
  stack.push(5);
  stack.push(10);
  stack.push(15);
  
  