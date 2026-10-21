class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights: number[]): number {
        const stack: number[]=[];
        let maxArea: number = 0;
        for(let i=0; i <= heights.length; i++){
            const currentHeight = i === heights.length ? 0 : heights[i];

            while(stack.length > 0 && currentHeight < heights[stack[stack.length - 1]]){
                const height = heights[stack.pop()];
                const width =  stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
                const area = height * width;
                maxArea = Math.max(area, maxArea)
            } 
            stack.push(i)
        }
        return maxArea;
    }
}
