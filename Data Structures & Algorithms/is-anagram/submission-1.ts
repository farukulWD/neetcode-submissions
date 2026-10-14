class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        const cleanStr = (str:string)=>str.replace(/[^\w]/g, '').toLowerCase();

        const stringA = cleanStr(s);
        const stringB = cleanStr(t);

        if(stringA.length !== stringB.length) return false

        const count = new Map()

        for(const ch of stringA) count.set(ch, (count.get(ch)||0)+1)

        for (const ch of stringB){
            const n = count.get(ch)

            if(!n) return false
            count.set(ch,n-1)
        }

        return true
    }
}
