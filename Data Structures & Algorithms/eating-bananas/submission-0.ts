class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles: number[], h: number): number {
        let left = 1;
        let right = Math.max(...piles);
        let result = right;

        while(left <= right){
            const k = Math.floor((left + right) / 2);

            let hours = 0;

            for(let pile of piles){
                hours += Math.ceil(pile / k)
            }

            if(hours > h){
                left = k + 1;
            }else{
                result = k;
                right = k - 1
            }
        }

        return result;
    }
}
