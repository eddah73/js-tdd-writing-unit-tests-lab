
export function isPalindrome(str) {
    // Check if input is a string
    if (typeof str !== 'string') {
      throw new Error('Input must be a string');
    }
  
    // Check if input contains only alphabetic characters
    if (!/^([A-Za-z])+$/.test(str)) {
      throw new Error('Input must contain only alphabetic characters');
    }
  
    const cleanedStr = str.toLowerCase().replace(/\s/g, '');
     // Return false for empty strings
      if (cleanedStr.length === 0) {
          return false;
       }
    const reversedStr = cleanedStr.split('').reverse().join('');
    return cleanedStr === reversedStr;
  }