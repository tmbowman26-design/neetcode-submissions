class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height: number[]): number {

       const stack: number[] = [];
       let totalWater = 0;

        // process each bar
        for (let i = 0; i < height.length; i++) {
            // while the stack is not empty and the current bar is taller than the bar at the stack's top
            // stack[stack.length - 1] gets the index stored at the top of the stack
            // height[...] use that index to look up the actual bar height
            while (stack.length > 0 && height[i] > height[stack[stack.length - 1]]) {
                const top = stack.pop();

                if (stack.length === 0) {
                    break;
                }

                // After you pop the shorter bar (top) off the stack, whatever index is now on top of the stack is 
                // the next bar to the left that's still in the stack.
                const leftBoundary = stack[stack.length - 1];
                // number of bars between the left wall and current bar
                const width = i - leftBoundary - 1;
                // water depth = shorter wall minus the popped bar's height
                const boundedHeight = Math.min(height[leftBoundary], height[i]) - height[top];
                // add water for that whole gap (width × depth)
                totalWater += width * boundedHeight;
            }
            stack.push(i);
       }


       return totalWater;

    }
}
