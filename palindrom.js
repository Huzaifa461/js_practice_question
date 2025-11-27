function Palindrom(str) {
    let rev = ''
    for (let i = str.length - 1; i >= 0; i--) {
        rev += str[i]

    }
    if (rev == str) {
        return true
    } else {
        return false
    }
    return rev
}

console.log(Palindrom('sam'))
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function Palindrome(str) {
    let left = 0;
    let right = str.length - 1;

    while (left < right) {
        if (str[left] !== str[right]) return false;
        left++;
        right--;
    }
    return true;
}

console.log(Palindrome(1231)); // false

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 3. One-Line Optimized Version

// (For small or simple strings)

const Palindrome = str =>
    str.toLowerCase() === [...str.toLowerCase()].reverse().join('');

console.log(Palindrome("Madam"))

// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

function Palindrome(str) {
    // Remove non-alphanumeric chars & convert to lowercase
    str = str.toLowerCase().replace(/[^a-z0-9]/g, '');

    let left = 0;
    let right = str.length - 1;

    while (left < right) {
        if (str[left] !== str[right]) return false;
        left++;
        right--;
    }
    return true;
}

console.log(Palindrome("A man, a plan, a canal: Panama")); // true

// -----------------------------------------------------------------------------------------------------------------------------------------------------------

// The Full Recursion Version
function isPalindrome(value) {
    let str = String(value).toLowerCase().replace(/[^a-z0-9]/g, '');

    function check(left, right) {
        if (left >= right) return true;
        if (str[left] !== str[right]) return false;
        return check(left + 1, right - 1);
    }

    return check(0, str.length-1)
}

// ------------------------------------------------------------------------------

const isPalindrome = (v) =>
  (s = String(v).toLowerCase().replace(/[^a-z0-9]/g, '')) ===
  [...s].reverse().join('');
  console.log(isPalindrome("_Level_"));