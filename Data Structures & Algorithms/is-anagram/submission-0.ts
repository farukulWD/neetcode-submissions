class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        const cleanStr = (str:string)=>str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('')

    return cleanStr(s)===cleanStr(t)




    }
}
