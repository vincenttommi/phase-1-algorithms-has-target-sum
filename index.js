
hasTargetSum([3, 8, 12, 4, 11, 7], 10);
// returns true, since 3 and 7 add up to 10

hasTargetSum([22, 19, 4, 6, 30], 25);
// returns true, since 19 and 6 add up to 25

hasTargetSum([1, 2, 5], 4);
// returns false, since no pair of numbers adds up to 4



function hasTargetSum(array, target) {
  // Write your algorithm here
  
  //iterate over each number  in an array

   for(let i = 0; i < array.length; i++){

   for(let j = i + 1; j< arr.length; j++){

   //if the current  pair of  numbers add up  to the target, return true

   if(arr[i] + arr[j] === target){
 


    return true;


  
   }
   return false 

   //if the currenr pair of  numbers add up to target 
   }
   }
}



// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
