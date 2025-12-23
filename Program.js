// string Extract
// function extractStr(str) {
//     let res = '';
//     let i = 0;
//     while (i < str.length) {
//         let char = str[i];
//         i++;

//         let strNum = '';
//         while (i < str.length && !isNaN(str[i])) {
//             strNum += str[i];
//             i++
//         }
//         // let count = parseInt(strNum)
//         let count = strNum ? parseInt(strNum, 10) : 1;
//         res += char.repeat(count);
//     }
//     return res;
// }
// console.log(extractStr('az12b5'));


// // Day - 1
// // Array Programs
// // twoSum:

// function twoSum(arr, target) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] + arr[j] === target) {
//                 return [i, j];
//             }
//         }
//     }


//     let map = new Map();

//     for (let i = 0; i < arr.length; i++) {
//         let complement = target - arr[i];

//         if (map.has(complement)) {
//             return [map.get(complement), i];
//         }

//         map.set(arr[i], i);
//     }

// }
// let arr = [2, 7, 11, 15];
// console.log(twoSum(arr, 9));

// // plusOne
// function plusOne(arr) {
//     for (let i = arr.length - 1; i >= 0; i--) {
//         // console.log(arr[i]);
//         if (arr[i] < 9) {
//             arr[i]++;
//             return arr;
//         }
//         arr[i] = 0;
//     }
//     arr.unshift(1);
//     return arr;
// }
// let arr = [2,1,9,9];
// console.log(plusOne(arr));


// // moveZerosToEnd
// function moveZerosToEnd(arr) {
//     let index = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] !== 0) {
//             arr[index] = arr[i];
//             index++;
//         }
//     }
//     while (index < arr.length) {
//         arr[index] = 0;
//         index++;
//     }
//     return arr;
// }
// let arr = [0, 1, 0, 3, 12]
// console.log(moveZerosToEnd(arr))


// // romanToInteger
// function romanToInt(s) {
//     let map = {
//         I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000
//     };
//     let tot=0;
//     for(let i=0;i<s.length;i++){
//         let cur=map[s[i]];
//         let next=map[s[i+1]]
//         if(cur<next){
//             tot+=next-cur;
//             i++;
//         }
//         else{
//             tot+=cur;
//         }
//     }
//     return tot;
// }
// console.log(romanToInt('IX'))



// // integerToRoman:
// function intToRoman(num) {
//     let map = [
//         { val: 1000, sym: 'M' },
//         { val: 900, sym: 'CM' },
//         { val: 500, sym: 'D' },
//         { val: 400, sym: 'CD' },
//         { val: 100, sym: 'C' },
//         { val: 90, sym: 'XC' },
//         { val: 50, sym: 'L' },
//         { val: 40, sym: 'XL' },
//         { val: 10, sym: 'X' },
//         { val: 9, sym: 'IX' },
//         { val: 5, sym: 'V' },
//         { val: 4, sym: 'IV' },
//         { val: 1, sym: 'I' }
//     ];
//     let roman = '';
//     for (let i = 0; i < map.length; i++) {
//         while (num >= map[i].val) {
//             roman += map[i].sym;
//             num -= map[i].val;
//         }
//     }
//     return roman;
// }

// console.log(intToRoman(19));


// // Day - 2
// // MissingNumber:
// function missingNumber(arr) {
//     let n = arr.length;
//     let tot = Math.floor(n * (n + 1) / 2);
//     let sum = arr.reduce((a, b) => a + b);
//     return tot - sum;
// }
// let arr = [0, 1, 3, 4];
// console.log(missingNumber(arr));


// // binarySearch:
// function binarySearch(arr, target) {
//     let low = 0;
//     let high = arr.length - 1;
//     while (low <= high) {
//         let mid = Math.floor((low + high) / 2);

//         if (arr[mid] === target) {
//             return mid;
//         }
//         if (arr[mid] > target) {
//             high = mid - 1;
//         }
//         else {
//             low = mid + 1;
//         }
//     }
//     return -1;
// }
// let arr=[1,2,3,4,5];
// console.log(binarySearch(arr,2));


// // spiral Matrix
// function spiralMatrix(arr) {
//     let res = [];
//     let top = 0;
//     let bottom = arr.length - 1;
//     let left = 0;
//     let right = arr[0].length - 1;
//     while (top <= bottom && left <= right) {
//         for (let i = left; i <= right; i++) {
//             res.push(arr[top][i]);
//         }
//         top++;
//         for (let i = top; i <= bottom; i++) {
//             res.push(arr[i][right]);
//         }
//         right--;
//         if (top <= bottom) {
//             for (let i = right; i >= left; i--) {
//                 res.push(arr[bottom][i])
//             }
//             bottom--;
//         }
//         if (left <= right) {
//             for (let i = bottom; i >= top; i--) {
//                 res.push(arr[i][left]);
//             }
//             left++;
//         }

//     }
//     return res;
// };
// let arr=[[1,2,3],[4,5,6],[7,8,9]]
// console.log(spiralMatrix(arr));



// // longestCommon Prefix:

// function longestCommonPrefix(arr) {
//     if (arr.length === 0) return "";
//     arr.sort();
//     let first=arr[0];
//     let last=arr[arr.length-1];
//     let i=0;
//     while(i<first.length && first[i]===last[i]){
//         i++;
//     }
//     return first.substring(0,i);
// }
// let arr=['flower','flex','flight'];
// console.log(longestCommonPrefix(arr))


// // pascal triangle
// function pascalTriangle(n) {
//     let res = [];
//     for (let i = 0; i < n; i++) {
//         res[i] = [];
//         res[i][0] = 1;
//         for (let j = 1; j < i; j++) {
//             res[i][j]=res[i-1][j-1] + res[i-1][j];
//         }
//         res[i][i]=1;
//     }
//     return res;
// }
// console.log(pascalTriangle(5))



// // day - 3
// // valid parantheses:
// function validParantheses(s) {
//     let res = [];
//     let map = {
//         ')': '(',
//         '}': '{',
//         ']': '[',
//     };
//     for (let char of s) {
//         if (char === '(' || char === '{' || char === '{') {
//             res.push(char);
//         }
//         else {
//             if (res.length === 0) return false;
//             if (res.pop() !== map[char]) return false;
//         }
//     }
//     return res.length === 0;
// }
// console.log(validParantheses('{}{}{]'))


// // search insert Position:

// function searchInsertPos(arr, target) {
//     let low = 0;
//     let high = arr.length - 1;
//     while (low <= high) {
//         let mid = Math.floor((low + high) / 2);
//         if (arr[mid] === target) {
//             return mid;
//         }
//         if (arr[mid] > target) {
//             high = mid - 1;
//         }
//         else {
//             low = mid + 1;
//         }
//     }
//     return low;
// }
// let arr = [1, 2, 4, 5, 7];
// console.log(searchInsertPos(arr, 3));


// // palindrome number

// function palindromeNumber(num) {
//     let number = num;
//     console.log(number);

//     let rev = num.toString().split('').reverse().join('');
//     console.log(rev);
//     console.log(number);


//     if (number === rev) return true;
//     else return false;
// }
// console.log(palindromeNumber(121));



// // length of last word
// function lengthOfLastWord(s) {
//     let trimS = s.trim();
//     sArr = trimS.split(' ');
//     return sArr[sArr.length - 1].length;
// }
// let s=' i from sivakasi '
// console.log(lengthOfLastWord(s))


// // Square Root:

// function sqrt(x) {
//     return Math.floor(Math.sqrt(x));
// }
// console.log(sqrt(4));


// // day - 4
// // pascal triangle-II
// function pascaltriangle(n) {
//     let res = [];
//     for (let i = 0; i <= n; i++) {
//         res[i] = [];
//         res[i][0] = 1;
//         for (let j = 1; j < i; j++) {
//             res[i][j] = res[i - 1][j - 1] + res[i - 1][j];
//         }
//         res[i][i] = 1;
//     }
//     return res[n];
// }
// console.log(pascaltriangle(1));


// // validPalindrome
// function validPalindrome(s) {
//     s = s.replace(/[^a-z0-9]/gi, '').toLowerCase();
//     return s === s.split('').reverse().join('');
// }
// console.log(validPalindrome('A man, a plan, a canal: Panama'))



// // frequency
// function frq(arr) {
//     let frq = {};
//     for (let num of arr) {
//         frq[num] = (frq[num] || 0) + 1;
//     }
//     for (let ele in frq) {
//         if (frq[ele] === 1) {
//             return ele;
//         }
//     }
// }
// let arr = [1, 2, 1];
// console.log(frq(arr));



// // frequency
// function frequency(arr) {
//     let res = 0;
//     for (let num of arr) {
//         res ^= num;
//     }
//     return res;
// }
// let arr=[1,2,3,4,1,2,3];
// console.log(frequency(arr));

// // Majority Element

// function majorityEle(arr) {
//     let frq = {};
//     for (let num of arr) {
//         frq[num] = (frq[num] || 0) + 1;
//     }
//     for (let ele in frq) {
//         if (frq[ele] > arr.length / 2)
//             return Number(ele);
//     }
// }
// let arr = [2,2,1,1,1,2,2];
// console.log(majorityEle(arr));


// // Pov of two
// function povofTwo(n) {
//     if (n <= 0) return false;
//     while (n % 2 === 0) {
//         n = n / 2;
//     }
//     return n === 1;
// }
// console.log(povofTwo(16))



// // day - 5
// // rotate image 90degree
// function rotateImage(matrix) {
//     let n = matrix.length;
//     for (let i = 0; i < n; i++) {
//         for (let j = i; j < n; j++) {
//             [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
//         }
//     }
//     for (let i = 0; i < n; i++) {
//         matrix[i].reverse();
//     }
//     return matrix;
// }
// let matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// console.log(rotateImage(matrix))

// // reverse integer
// function reverseInteger(x) {
//     let minusSign = x < 0 ? -1 : 1;
//     let rev = parseInt(x.toString().split('').reverse().join('')) * minusSign;
//     if (rev < -(2 ** 31) || (2 ** 31 - 1) < rev) {
//         return 0;
//     }
//     return rev

// }
// console.log(reverseInteger(1534236469));


// // ExcellSheet Column Number
// function excellSheetColumnCode(num) {
//     let res = '';
//     while (num > 0) {
//         num--;
//         let char = String.fromCharCode(65 + (num % 26));
//         res = char + res;
//         num = Math.floor(num / 26);
//     }
//     return res;
// }
// console.log(excellSheetColumnCode(28));

// // ExcellSheet Column Title
// function excellSheetTitle(columnNumber) {
//     let res = 0;
//     for (let i = 0; i < columnNumber.length; i++) {
//         let val = columnNumber.charCodeAt(i) - 64;
//         res = res * 26 + val;
//     }
//     return res;
// }
// console.log(excellSheetTitle("A"))

// // rotate Array
// function rotateAttay(arr, k) {
//     k = k % arr.length;
//     reverse(arr, 0, arr.length - 1);
//     reverse(arr, 0, k - 1);
//     reverse(arr, k, arr.length - 1);
//     function reverse(array, left, right) {
//         while (left < right) {
//             [array[left], arr[right]] = [array[right], array[left]];
//             left++;
//             right--;
//         }
//     }
//     return arr;
// }
// let arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(rotateAttay(arr, 3))


// // day - 6
// // Add digits
// function addDigits(n) {
//     if (n === 0) return 0;
//     return 1 + (n - 1) % 9;
// }
// console.log(addDigits(38));

// // power of three
// function povOfThree(n) {
//     if (n <= 0) return false;
//     while (n % 3 === 0) {
//         n /= 3;
//     }
//     return n === 1;
// }
// console.log(povOfThree(9));


// // intersection of two Array
// function intersectionOfTwoArr(arr1, arr2) {
//     let res = [];
//     for (let i = 0; i < arr1.length; i++) {
//         if (arr2.includes(arr1[i]) && !res.includes(arr1[i])) {
//             res.push(arr1[i])
//         }
//     }
//     return res;
// }
// let arr1 = [1, 2, 2, 1];
// let arr2 = [2];
// console.log(intersectionOfTwoArr(arr1, arr2));


// // fizzBuzz Problem
// function fizzBuzz(n) {
//     let res = [];
//     for (let i = 1; i <= n; i++) {
//         if (i % 3 === 0 && i % 5 === 0) {
//             res.push('fizzBuzz');
//         }
//         else if (i % 3 === 0) {
//             res.push('fizz')
//         }
//         else if (i % 5 === 0) {
//             res.push('buzz');
//         }
//         else {
//             res.push(i.toString());
//         }
//     }
//     return res;
// }
// console.log(fizzBuzz(15));

// // maximumSub Array
// function maximumSubArr(arr) {
//     let curSum = arr[0];
//     let maxSum = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//         curSum = Math.max(arr[i], curSum + arr[i]);
//         maxSum = Math.max(curSum, maxSum);
//     }
//     return maxSum;
// }
// let arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
// console.log(maximumSubArr(arr));

// // day-7
// // remove Element
// function removeEle(arr, val) {
//     let k = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] !== val) {
//             arr[k] = arr[i];
//             k++;
//         }
//     }
//     return k;
// }
// let arr = [0, 1, 2, 2, 3, 0, 4, 2];
// console.log(removeEle(arr, 2))


// // remove duplicate from sorted Array
// function rmdupFmSrtArr(arr) {
//     let k = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] !== arr[i + 1]) {
//             arr[k] = arr[i];
//             k++;
//         }
//     }
//     return k;
// }
// let arr = [0,0,1,1,1,2,2,3,3,4];
// console.log(rmdupFmSrtArr(arr));


// // contains duplicate
// function containsDuplicate(arr) {
// for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//         if (arr[i] === arr[j]) {
//             return true
//         }
//     }
// }
// return false;

//     return new Set(arr).size !== arr.length;
// }
// let arr = [1, 2, 3, 4]
// console.log(containsDuplicate(arr))

// // best time to buy and sell stock
// function buyAndSellStock(arr) {
//     let maxProfit = 0;
//     let minPrice = Infinity;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < minPrice) {
//             minPrice = arr[i];
//         }
//         else {
//             let profit = arr[i] - minPrice;
//             if (maxProfit < profit) {
//                 maxProfit = profit;
//             }
//         }
//     }
//     return maxProfit;
// }
// let arr = [7, 1, 5, 3, 6, 4];
// console.log(buyAndSellStock(arr));


// //third biggest number
// function thirdMax(arr) {
//     let first = -Infinity;
//     let sec = -Infinity;
//     let third = -Infinity;
//     for (let num of arr) {
//         if (num === first || num === sec || num === third) continue;

//         if (num > first) {
//             third = sec;
//             sec = first;
//             first = num;
//         }
//         else if (num > sec) {
//             third = sec;
//             sec = num;
//         }
//         else if (num > first) {
//             third = num;
//         }
//     }
//     return third === -Infinity ? first : third;
// }
// let arr=[1,4];
// console.log(thirdMax(arr));

// //alternative method third maximum number:
// function thirdMax(arr) {
//     let nums = [...new Set(arr)];
//     nums.sort((a, b) => b - a);
//     return nums.length >= 3 ? nums[2] : nums[0];
// }
// let arr = [1, 3];
// console.log(thirdMax(arr));

// day-8


// //max consective ones
// function maxConsecOnes(arr) {
//     let count = 0;
//     let max = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === 1) {
//             count++;
//             if (max < count) {
//                 max = count;
//             }
//         }
//         else {
//             count = 0;
//         }
//     }
//     return max;
// }
// let arr = [1, 1, 1, 0, 1, 1, 1, 1];
// console.log(maxConsecOnes(arr));


// //Longest SubString Without Repeating Character
// function LongestSubStringWithoutRepeatingChar(s) {
//     let maxLen = 0;
//     for (let i = 0; i < s.length; i++) {
//         let cur = '';
//         for (let j = i; j < s.length; j++) {
//             if (cur.includes(s[j])) {
//                 break
//             }
//             cur += s[j];
//             maxLen = Math.max(maxLen, cur.length);
//         }
//     }
//     return maxLen
// }
// console.log(LongestSubStringWithoutRepeatingChar('ababc'));

// // nqueens problem:
// function nQueens(n) {
//     let res = [];
//     let board = Array.from({ length: n }, () => '.'.repeat(n));

//     let cols = new Set();
//     let digL = new Set();
//     let digR = new Set();

//     function backtracks(row) {
//         if (row === n) {
//             res.push([...board]);
//             return;
//         }

//         for (let i = 0; i < n; i++) {
//             if (cols.has(i) || digL.has(row - i) || digR.has(row + i))
//                 continue;

//             cols.add(i);
//             digL.add(row - i);
//             digR.add(row + i);
//             board[row] = board[row].substring(i, 0) + 'Q' + board[row].substring(i + 1);

//             backtracks(row + 1);

//             cols.delete(i);
//             digL.delete(row - i);
//             digR.delete(row + i);
//             board[row] = '.'.repeat(n);

//         }
//     }
//     backtracks(0);
//     return res;
// }
// console.log(nQueens(4));


// // text Justification:
// function textJustification(words, maxWidth) {
//     let res = [];
//     let i = 0;
//     while (i < words.length) {
//         let lineLen = words[i].length;
//         let j = i + 1;
//         while (j < words.length && lineLen + 1 + words[j].length <= maxWidth) {
//             lineLen += 1 + words[j].length;
//             j++;
//         }
//         let line = '';
//         let wordCount = j - i;
//         let totalChars = 0;

//         for (let k = i; k < j; k++) {
//             totalChars += words[k].length;
//         }
//         let spaces = maxWidth - totalChars;
//         if (j === words.length || wordCount === 1) {
//             for (let k = i; k < j; k++) {
//                 line += words[k] + ' ';
//             }
//             line = line.trimEnd();
//             line += ' '.repeat(maxWidth - line.length);
//         }
//         else {
//             let spaceBtw = Math.floor(spaces / (wordCount - 1));
//             let extraSapce = spaces % (wordCount - 1);
//             for (let k = i; k < j; k++) {
//                 line += words[k];

//                 if (k < j - 1) {
//                     line += ' '.repeat(spaceBtw + (extraSapce > 0 ? 1 : 0));

//                     if (extraSapce > 0) extraSapce--;
//                 }
//             }
//         }
//         res.push(line);
//         i = j;
//     }
//     return res;
// }
// let arr = ["This", "is", "an", "example", "of", "text", "justification."]
// console.log(textJustification(arr, 16));


// // setMatrixZero
// function setZero(arr) {
//     let row = arr.length;
//     let col = arr[0].length;

//     let frow = false;
//     let fcol = false;

//     for (let j = 0; j < col; j++) {
//         if (arr[0][j] === 0) frow = true;
//     }
//     for (let i = 0; i < row; i++) {
//         if (arr[i][0] === 0) fcol = true;
//     }

//     for (let i = 1; i < row; i++) {
//         for (let j = 1; j < col; j++) {
//             if (arr[i][j] === 0) {
//                 arr[i][0] = 0;
//                 arr[0][j] = 0;
//             }
//         }
//     }


//     for (let i = 1; i < row; i++) {
//         for (let j = 1; j < col; j++) {
//             if (arr[i][0] === 0 || arr[0][j] === 0) {
//                 arr[i][j] = 0;
//             }
//         }
//     }

//     if (frow) {
//         for (let j = 0; j < col; j++) arr[0][j] = 0;
//     }
//     if (fcol) {
//         for (let i = 0; i < row; i++) arr[i][0] = 0;
//     }

//     return arr;
// }
// let arr = [[1,1,1],[1,0,1],[1,1,1]]
// console.log(setZero(arr));


// // power(x,n)
// function powerOFxn(x, n) {
//     let res = 1;
//     let power = Math.abs(n);
//     for (let i = 0; i < power; i++) {
//         res *= x;
//     }
//     return n < 0 ? 1 / res : res;


//     if (n === 0) return 1;
//     if (n < 0) {
//         x = 1 / x;
//         n = -n;
//     }

//     let res = 1;
//     while (n > 0) {
//         res *= x;
//         n = Math.floor(n / 2)
//     }
//     return res;
// }
// console.log(powerOFxn(2, 2))


// // spiral Matrix II
// function spiralMatrix(n) {
//     let arr = Array.from({ length: n }, () => Array(n).fill(0));
//     let top = 0;
//     let bottom = n - 1;
//     let left = 0;
//     let right = n - 1;

//     let num = 1;

//     while (num <= n * n) {
//         for (let i = left; i <= right; i++) {
//             arr[top][i] = num++;
//         }
//         top++;
//         for (let i = top; i <= bottom; i++) {
//             arr[i][right] = num++;
//         }
//         right--;
//         for (let i = right; i >= left; i--) {
//             arr[bottom][i] = num++;
//         }
//         bottom--;
//         for (let i = bottom; i >= top; i--) {
//             arr[i][left] = num++;
//         }
//         left++;
//     }
//     return arr;
// }
// console.log(spiralMatrix(1));

// // function threeSum(arr) {
//     let res = [];
//     arr.sort((a, b) => a - b);

//     for (let i = 0; i < arr.length - 2; i++) {

//         if (i > 0 && arr[i] === arr[i - 1]) continue;

//         let left = i + 1;
//         let right = arr.length - 1;

//         while (left < right) {
//             let sum = arr[i] + arr[left] + arr[right];

//             if (sum === 0) {
//                 res.push([arr[i], arr[left], arr[right]]);

//                 while (left < right && arr[left] === arr[left + 1]) left++;
//                 while (left < right && arr[right] === arr[right - 1]) right--;

//                 left++;
//                 right--;
//             }

//             else if (sum < 0) {
//                 left++;
//             }
//             else {
//                 right--;
//             }
//         }
//     }
//     return res;
// }
// let arr = [-1, 0, 1, 2, -1, -4]
// console.log(threeSum(arr));

// //search in rotated sorted array:
// function searchInRotatedSortArr(arr, target) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === target) {
//             return i;
//         }
//     }
//     return -1;
// }
// let arr=[4,5,6,7,0,1,2];
// console.log(searchInRotatedSortArr(arr,0))


// //sortColors:
// function sortColors(arr) {
//     return arr.sort();
// }
// let arr = [2, 0, 2, 1, 1, 0];
// console.log(sortColors(arr));