class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        const parts = [];
        for(const str of strs) parts.push(str.length,"#",str)
        
        return parts.join("")
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        const result = []
        
        let i = 0;
        while(i < str.length){
            let j = i;
            while(str[j] !== "#") j++
            const len = parseInt(str.slice(i,j),10);
            result.push(str.slice(j+1,j+1+len));
            i=j+1+len
        }
        return result
    }
}
