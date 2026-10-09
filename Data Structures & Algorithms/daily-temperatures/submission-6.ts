class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures: number[]): number[] {
        const stack: number[] = [];
        const result: number[] = new Array(temperatures.length).fill(0);
        for (let i = 0; i < temperatures.length; i++) {
            while (stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {
                const waitingDay = stack.pop();
                result[waitingDay] = i - waitingDay;
            }
            stack.push(i);
        }
        return result;
    }
}
