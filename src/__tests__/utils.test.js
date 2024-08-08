import { isPalindrome } from "../utils";
describe('isPalindrome', () => {
    it('should return true for palindromes', () => {
      expect(isPalindrome("racecar")).toBe(true);
    });
  
    it('should return false for non-palindromes', () => {
      expect(isPalindrome("car")).toBe(false);
    });
  
    // it('should return false for empty strings', () => {
    //   expect(isPalindrome("")).toBe(false);
    // });
  
    it('should throw an error if input contains non-alphabetic characters', () => {
      expect(() => isPalindrome("racecar!")).toThrow('Input must contain only alphabetic characters');
    });
  
    it('should throw an error if input is not a string', () => {
      expect(() => isPalindrome(123)).toThrow('Input must be a string');
    });
  });