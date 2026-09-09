class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr: number[]): number[] {
        let runningMax = -1;

        for (let i = arr.length - 1; i >= 0; i--) {
            const temp = arr[i];
            arr[i] = runningMax;
            runningMax = Math.max(runningMax, temp)
        }
        return arr;
    }
}
