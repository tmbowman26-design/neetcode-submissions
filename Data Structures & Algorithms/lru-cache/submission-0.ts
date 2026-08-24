class LRUCacheNode {
    key: number;
    value: number;
    prev: LRUCacheNode | null;
    next: LRUCacheNode | null;

    constructor(key: number, value: number) {
        this.key = key;
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}


class LRUCache {
    /**
     * @param {number} capacity
     */
    private capacity: number;
    private map: Map<number, LRUCacheNode>;
    private head: LRUCacheNode;
    private tail: LRUCacheNode;
    constructor(capacity: number) {
        this.capacity = capacity;
        this.map = new Map();
        this.head = new LRUCacheNode(0, 0);
        this.tail = new LRUCacheNode(0, 0);
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    // helper to remove node
    private removeNode(node: LRUCacheNode): void {
        // set the previous node to the the node's previous
        const previousNode = node.prev as LRUCacheNode;
        // set the next node to the node's next reference
        const nextNode = node.next as LRUCacheNode;
        // connect the previous and next node ommitting the node
        previousNode.next = nextNode;
        nextNode.prev = previousNode;
    }

    private insertAtTail(node: LRUCacheNode): void {
        // set the lastNode to the tail's previous node (official last node / tail is dummy)
        const lastNode = this.tail.prev as LRUCacheNode;
        // add the node to the lastNode's next (before dummy tail)
        lastNode.next = node;
        // connect node.prev to lastNode
        node.prev = lastNode;
        // connect node.next to tail
        node.next = this.tail;
        // since doubly linked list need to set tail.prev to node
        this.tail.prev = node;
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key: number): number {
        const node = this.map.get(key);
        if (!node) {
            return -1;
        }
        this.removeNode(node);
        this.insertAtTail(node);

        return node.value;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key: number, value: number): void {
        const existingNode = this.map.get(key);

        if (existingNode) {
            this.removeNode(existingNode);
            this.map.delete(key);
        } else if (this.map.size === this.capacity) {
            const lruCache = this.head.next as LRUCacheNode;
            this.removeNode(lruCache);
            this.map.delete(lruCache.key);
        }

        const newNode = new LRUCacheNode(key, value);
        this.insertAtTail(newNode);
        this.map.set(key, newNode);
    }
}
