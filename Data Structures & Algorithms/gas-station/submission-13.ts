class Solution {
    /**
     * @param {number[]} gas
     * @param {number[]} cost
     * @return {number}
     */
    canCompleteCircuit(gas: number[], cost: number[]): number {
        let totalCost = 0;
        let currentCost = 0;
        let startPosition = 0;
        for (let i = 0; i < gas.length; i++) {
            totalCost += gas[i] - cost[i];
            currentCost += gas[i] - cost[i];
            if (currentCost < 0) {
                startPosition = i + 1;
                currentCost = 0;
            }
        }
        return totalCost < 0 ? -1 : startPosition;
    }
}
