/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

// class ListNode {
//     val: number;
//     next: ListNode | null;
//     constructor(val = 0, next = null) {
//         this.val = val;
//         this.next = next;
//     }
// }

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head: ListNode | null): ListNode {
        let previous: ListNode | null = null;
        let current: ListNode | null = head;

        while (current !== null) {
            const next = current.next;
            current.next = previous;

            previous = current;
            current = next;
        }

        return previous;
    }
}
