function missingNum(arr) {
    const expectedSum = 55; 
    const actualSum = arr.reduce((acc, num) => acc + num, 0);
    const missingNumber = expectedSum - actualSum;
  
    return missingNumber;
  }
  //Test Case3
  console.log(missingNum([10, 5, 1, 2, 4, 6, 8, 3, 9]));