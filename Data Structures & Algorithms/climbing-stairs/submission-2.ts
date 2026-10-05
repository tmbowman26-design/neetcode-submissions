class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n: number): number {
        let currentStep = 1;
        let previousStep = 1;
        for (let i = 2; i <= n; i++) {
            let nextStep = currentStep + previousStep;
            previousStep = currentStep;
            currentStep = nextStep;
        }

        return currentStep;
    }
}
