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
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head: ListNode | null, n: number): ListNode {
        const dummy = new ListNode(0, head);

        let left: ListNode = dummy;
        let right: ListNode | null = dummy;

        for (let i = 0; i < n + 1; i++) {
            right = right!.next;
        }

        while ( right !== null) {
            left = left.next as ListNode;
            right = right.next;
        }

        left.next = left.next!.next;
        return dummy.next;
    }
}
