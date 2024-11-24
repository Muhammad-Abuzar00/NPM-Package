function reverseString(str) {
    return str.split('').reverse().join('');
}

function capitalizeWords(str) {
    return str
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    return Array.from(str).filter(char => vowels.includes(char)).length;
}

function isPalindrome(str) {
    const cleaned = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    return cleaned === cleaned.split('').reverse().join('');
}

function mostFrequentChar(str) {
    const charMap = {};
    for (const char of str) {
        charMap[char] = (charMap[char] || 0) + 1;
    }
    let maxChar = '';
    let maxCount = 0;
    for (const char in charMap) {
        if (charMap[char] > maxCount) {
            maxChar = char;
            maxCount = charMap[char];
        }
    }
    return maxChar;
}

module.exports = {
    reverseString,
    capitalizeWords,
    countVowels,
    isPalindrome,
    mostFrequentChar,
};
