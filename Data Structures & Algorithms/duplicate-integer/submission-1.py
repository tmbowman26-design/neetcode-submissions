class Solution:
    def hasDuplicate(self, nums: List[int]) -> bool:
        nums.sort()
        
        for prev_val, current_val in zip(nums, nums[1:]):
            if prev_val == current_val:
                return True
        return False
        