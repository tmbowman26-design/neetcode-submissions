class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals: number[][]): number[][] {
        const sorted = [...intervals].sort((a, b) => a[0] - b[0]);
        const result: number[][] = [];
        for (let i = 0; i < sorted.length; i++) {
            const [start, end] = sorted[i];
            const last = result[result.length - 1];
            if (result.length === 0 || start > last[1]) {
                result.push([start, end]);
            } else {
                last[1] = Math.max(last[1], end);
            }
        }
        return result;
    }
}
