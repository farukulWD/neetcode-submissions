class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        const solidString = s.replace(/[^A-Za-z0-9]/g,"").toLowerCase();
        let left = 0;
        let right = solidString.length -1;
        while(left < right){
            if(solidString[left] !== solidString[right]) return false;
            left++;
            right--
        }
        return true;
    }
}
