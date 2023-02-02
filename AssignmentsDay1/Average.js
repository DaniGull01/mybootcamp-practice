let average = ((arr) => { 
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = arr[i] + sum;
       
    }
    let average = sum / arr.length;
    return average;
});
console.log(average([1,2,3,4,5,6]));
