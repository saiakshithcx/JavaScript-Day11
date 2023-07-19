function missingNum(arr) {
    const expectedSum = 55; 
    const actualSum = arr.reduce((acc, num) => acc + num, 0);
    const missingNumber = expectedSum - actualSum;
  
    return missingNumber;
  }
  
  // Test case1
  console.log(missingNum([1, 2, 3, 4, 6, 7, 8, 9, 10])); 
  
  