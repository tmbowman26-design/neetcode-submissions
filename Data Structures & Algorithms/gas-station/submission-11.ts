class Solution {
    /**
     * @param {number[]} gas
     * @param {number[]} cost
     * @return {number}
     */
    canCompleteCircuit(gas: number[], cost: number[]): number {
        let tank = 0; 
        let total = 0;
        let startPosition = 0;
        for (let i = 0; i < gas.length; i++) {
             tank += gas[i] - cost[i];
             total += gas[i] - cost[i];
             if (tank < 0) {
                startPosition = i + 1;
                tank = 0;
             }
        }
        return total < 0 ? -1 : startPosition;
    }
}
