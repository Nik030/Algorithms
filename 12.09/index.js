function minCoins(arr, num) {
    for (coin of arr){
        if (coin <= num) {
            num = num - coin;
            count++;
        }
    }
}