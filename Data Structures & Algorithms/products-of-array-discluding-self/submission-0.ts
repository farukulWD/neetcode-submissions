class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        const n = nums.length;
        const output = new Array(n).fill(1);

        let left = 1;
        for(let i = 0;i<n;i++){
            output[i]=left;
            left *= nums[i]
        }

        let right = 1;
        for(let j = n-1;j>=0;j--){
            output[j]*=right;
            right *= nums[j]
        }

        return output;
    }
}
