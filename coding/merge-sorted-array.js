// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

// Merge nums1 and nums2 into a single array sorted in non-decreasing order.

// The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

// Example 1:

// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]
// Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
// The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
// Example 2:

// Input: nums1 = [1], m = 1, nums2 = [], n = 0
// Output: [1]
// Explanation: The arrays we are merging are [1] and [].
// The result of the merge is [1].
// Example 3:

// Input: nums1 = [0], m = 0, nums2 = [1], n = 1
// Output: [1]
// Explanation: The arrays we are merging are [] and [1].
// The result of the merge is [1].
// Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.

let nums1 = [1, 2, 3, 0, 0, 0],
  m = 3,
  nums2 = [2, 5, 6],
  n = 3;

// Brute force approach 1 => not optimal
// Time Complexity O(nlogn);
const merge1 = function (nums1, m, nums2, n) {
  let nums1Copy = nums1.slice(0, m);
  nums1 = nums1Copy.concat(nums2).sort();
  return nums1;
};

console.log("output 1 is::", merge1(nums1, m, nums2, n));

// Approach 2 => using two pointer p1 and p2/ But time complexity of this solution is O(m + n) and space complexity also O(m + n)
function merge2(nums1, m, nums2, n) {
  let nums1Copy = nums1.slice(0, m); // Create a nums1 copy so that, we can update nums1 = nums1Copy + nums2
  let p1 = 0;
  p2 = 0;
  for (let i = 0; i < m + n; i++) {
    if (p2 >= n || (p1 < m && nums1Copy[p1] < nums2[p2])) {
      // make sure p1 < m & condition or if p2 goes beyond the boundary then also consider p1 elements else p2 elements
      nums1[i] = nums1Copy[p1];
      p1 = p1 + 1;
    } else {
      nums1[i] = nums2[p2];
      p2 = p2 + 1;
    }
  }
  return nums1;
}

console.log("output 2 is::", merge2([...nums1], m, [...nums2], n));

// Approach 3 => using p1 and p2 pointer &
// time complexity => O( n + m), Space Complexity
// Go reverse way to identify which is greater and add value to the array from right.
function getMergeSortArrays(arr1, m, arr2, n) {
    let p1 = m - 1, p2 = n - 1;
    for(let i = m + n - 1; i >= 0; i--) {
        if(p2 < 0) {
            break;
        }
        if(p1 >= 0 && arr1[p1] > arr2[p2]) {
            arr1[i]  = arr1[p1];
            p1--;
           
        } else {
            arr1[i] = arr2[p2];
            p2--;
        }
    }
    return arr1;
}
console.log('output 3 is::', getMergeSortArrays([...nums1], m, [...nums2], n));
