class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const seen = new Map();
        for (const str of strs){
            const key = str.split('').sort().join();
            if(!seen.has(key)){
                seen.set(key,[])
            }
            seen.get(key).push(str)
        }
        return [...seen.values()]
    }
}
