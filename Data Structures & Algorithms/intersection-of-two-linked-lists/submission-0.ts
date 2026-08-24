/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */
class Solution {
    /**
     * @param {ListNode} headA
     * @param {ListNode} headB
     * @return {ListNode}
     */
    getIntersectionNode(
        headA: ListNode | null,
        headB: ListNode | null,
    ): ListNode {
        let pointerA = headA;
        let pointerB = headB;

        while (pointerA !== pointerB) {
            pointerA = pointerA === null ? headB : pointerA.next;
            pointerB = pointerB === null ? headA : pointerB.next;
        }

        return pointerA;
    }
}
