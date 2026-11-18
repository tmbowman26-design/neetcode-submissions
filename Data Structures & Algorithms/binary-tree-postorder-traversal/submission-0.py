# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def postorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
        result: List[int] = []

        def visitNode(node):
            if not node:
                return
            visitNode(node.left)
            visitNode(node.right)
            result.append(node.val)
        
        visitNode(root)
        return result

        