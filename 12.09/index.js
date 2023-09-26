function minCoins(arr, num) {
    let count = 0;
    for (coin of arr) {
      while (coin <= num) {
        num = num - coin;
        count++;
      }
    }
    if (num == 0) return count;
    else return "We couldn't get the given sum";
  }
  
  let array = [25, 10, 5, 1];
  let number = 63;
  console.log(minCoins(array, number));




  function minCoins(arr, num) {
    let dp = Array(num + 1).fill(Infinity);
    console.log(dp);
    dp[0] = 0;
    for (let coin of arr) {
      for (let i = coin; i <= num; i++) {
        dp[i] = Math.min(dp[i], dp[i - coin] + 1);
      }
    }
    return dp;
  }
  
  let array1 = [25, 10, 5, 4];
  let number1 = 63;
  console.log(minCoins(array, number));



// let x = -5;

// console.log(Math.abs(x));



// function elevator(arr, num) {
//     let min = Infinity;
//     let index = -1;
//     for (let i = 0; i < arr.length; i++) {
//       if (Math.abs(arr[i] - num) < min) {
//         min = Math.abs(arr[i] - num);
//         index = i;
//       }
//     }
//     return index;
//   }
  
//   let array2 = [10, 15, 20, 25];
//   let number2 = 12;
  
//   console.log(elevator(array, number));



  function activities(arr) {
    arr.sort((a, b) => a[1] - b[1]);
    let result = [];
    let finish = arr[0][1];
    result.push(arr[0]);
    for (let i = 1; i < arr.length; i++) {
      if (arr[i][0] >= finish) {
        result.push(arr[i]);
        finish = arr[i][1];
      }
    }
    return result;
  }
  project
  let array2 = [
    [1, 3],
    [0, 4],
    [1, 4],
    [3, 4],
    [3, 5],
    [4, 5],
    [1, 6],
    [2, 7],
    [7, 9],
    [10, 12],
  ];
  console.log(activities(array));