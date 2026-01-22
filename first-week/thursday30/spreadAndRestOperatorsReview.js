// 4 - Spread and Rest Operators
// Spread (...) allows us to copy or combine arrays/objects easily.

const nums1 = [1, 2, 3];
const nums2 = [4, 5, 6];
const combined = [...nums1, ...nums2]; // Merges both arrays

console.log(combined); // [1, 2, 3, 4, 5, 6]

// Rest (...) is the opposite — it collects multiple elements into one.
const showNumbers = (...args) => {
  console.log(args);
};

showNumbers(1, 2, 3, 4); // [1, 2, 3, 4]
