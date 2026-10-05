class Solution {
    /**
     * @param {number[]} gas
     * @param {number[]} cost
     * @return {number}
     */
    canCompleteCircuit(gas: number[], cost: number[]): number {
        let tank = 0;
        let start = 0;
        let totalGas = 0;
        let totalCost = 0;

        for (const gallon of gas) {
            totalGas += gallon;
        }
        for (const dollar of cost) {
            totalCost += dollar;
        }
        if (totalGas < totalCost) return - 1;

        for (let i = 0; i < gas.length; i++) {
            tank += gas[i] - cost[i];
            if (tank < 0) {
                start = i + 1;
                tank = 0;
            }
        }
        return start;
    }
}
