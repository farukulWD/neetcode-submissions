class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height: number[]): number {
        let left = 0;
        let right = height.length - 1;

        let leftMax = 0;
        let rightMax = 0;

        let result = 0;

        while(left < right){
            const leftHeight = height[left];
            const rightHeight = height[right];

            if(leftHeight < rightHeight){
                if(leftHeight >= leftMax){
                    leftMax = leftHeight;
                }else{
                    result += leftMax - leftHeight;
                }
                left++
            }else{
                if(rightHeight >= rightMax){
                    rightMax = rightHeight;
                }else{
                    result += rightMax - rightHeight
                }
                right--;
            }
        }

        return result;
    }
}
