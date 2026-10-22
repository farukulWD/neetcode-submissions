class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let left = 0;
        let right = heights.length - 1;
        let maxArea = 0;

        while(left < right){
             const leftHeight = heights[left];
             const rightHeight = heights[right];
             const area = Math.min(leftHeight,rightHeight) * (right - left);
             
             maxArea = Math.max(maxArea, area)
             
             if(leftHeight < rightHeight){
                left++;
            }else{
                right--;
            }
        }

        return maxArea
    }
}
