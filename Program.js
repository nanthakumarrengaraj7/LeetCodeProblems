
// Day - 1
// Array Programs
// twoSum:

function twoSum(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                return [i, j];
            }
        }
    }
}

let arr=[2,7,11,15];
console.log(twoSum(arr,9));

// plusOne
function plusOne(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
        // console.log(arr[i]);
        if (arr[i] < 9) {
            arr[i]++;
            return arr;
        }
        arr[i] = 0;
    }
    arr.unshift(1);
    return arr;
}
let arr = [2,1,9,9];
console.log(plusOne(arr));


// moveZerosToEnd
function moveZerosToEnd(arr) {
    let index = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            arr[index] = arr[i];
            index++;
        }
    }
    while (index < arr.length) {
        arr[index] = 0;
        index++;
    }
    return arr;
}
let arr = [0, 1, 0, 3, 12]
console.log(moveZerosToEnd(arr))


// romanToInteger
function romanToInt(s) {
    let map = {
        I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000
    };
    let tot=0;
    for(let i=0;i<s.length;i++){
        let cur=map[s[i]];
        let next=map[s[i+1]]
        if(cur<next){
            tot+=next-cur;
            i++;
        }
        else{
            tot+=cur;
        }
    }
    return tot;
}
console.log(romanToInt('IX'))



// integerToRoman:
function intToRoman(num) {
    let map = [
        { val: 1000, sym: 'M' },
        { val: 900, sym: 'CM' },
        { val: 500, sym: 'D' },
        { val: 400, sym: 'CD' },
        { val: 100, sym: 'C' },
        { val: 90, sym: 'XC' },
        { val: 50, sym: 'L' },
        { val: 40, sym: 'XL' },
        { val: 10, sym: 'X' },
        { val: 9, sym: 'IX' },
        { val: 5, sym: 'V' },
        { val: 4, sym: 'IV' },
        { val: 1, sym: 'I' }
    ];
    let roman = '';
    for (let i = 0; i < map.length; i++) {
        while (num >= map[i].val) {
            roman += map[i].sym;
            num -= map[i].val;
        }
    }
    return roman;
}

console.log(intToRoman(19));
