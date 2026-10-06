class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures: number[]): number[] {
        const days: number[] = [];
        const result = new Array(temperatures.length).fill(0);
        for (let i = 0; i < temperatures.length; i++) {
            while (days.length > 0 && temperatures[i] > temperatures[days[days.length - 1]]) {
                const waitingDays = days.pop()!;
                result[waitingDays] = i - waitingDays;
            }
            days.push(i);
        }
        return result;
    }
}
