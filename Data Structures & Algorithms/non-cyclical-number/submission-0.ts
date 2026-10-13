class Solution {
    /**
     * @param {number} n
     * @return {boolean}
     */
    isHappy(n: number): boolean {
        const cycles = new Set<number>();
        let current = n;
        while (current !== 1) {
            if (cycles.has(current)) {
                return false;
            }
            cycles.add(current);
            let digits = Array.from(String(current), Number);
            let currentSum = 0;
            for (const num of digits) {
                let square = num * num;
                currentSum += square;
            }
            current = currentSum;
        }
        return true;
    }
}
