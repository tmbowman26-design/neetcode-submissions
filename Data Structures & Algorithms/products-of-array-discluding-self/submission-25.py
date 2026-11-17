class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        prefix = 1
        suffix = 1
        products = [1] * len(nums)
        for i in range(len(nums)):
            products[i] = prefix
            prefix *= nums[i]
        for i in range(len(nums) - 1, -1, -1):
            products[i] *= suffix
            suffix *= nums[i]
        return products