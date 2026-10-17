class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        if(s.length%2 !==0) return false;

        const pairs: Record<string, string> = {
    ")": "(",
    "]": "[",
    "}": "{",
  };



        const stack:string[]=[];

        for(const ch of s){
            if(ch in pairs){
                if(stack.pop()!==pairs[ch])return false
            }else{
                stack.push(ch)
            }
        }
        return stack.length === 0;
    }
    
}
