class Solution:
    def minEatingSpeed(self, piles: List[int], h: int) -> int:
        left = 1
        right = max(piles)
        minSpeed = 0
        
        while left <= right:
            middle = (left + right) // 2
            currentHours = 0
            for pile in piles:
                hours = -(-pile // middle)
                currentHours += hours
            if currentHours <= h:
                minSpeed = middle
                right = middle - 1
            else:
                left = middle + 1

        return minSpeed

        