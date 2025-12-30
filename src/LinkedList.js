class LinkedList {
    constructor() {
        this.head = null;
    }
    append(value) {
        const node = new Node(value);
        if (this.head === null) this.head = node;
        else {
            let currNode = this.head;
            while (currNode.nextNode != null) currNode = currNode.nextNode;
            currNode.nextNode = node;
        }
    }
    prepend(value) {
        const node = new Node(value);
        node.nextNode = this.head;
        this.head = node;
    }
    size() {
        let size = 0;
        let currNode = this.head;
        if (currNode === null) return size;
        while (currNode !== null) {
            size++;
            currNode = currNode.nextNode;
        }
        return size;
    }
    tail() {
        let currNode = this.head;
        if (currNode === null) return null;
        while (currNode.nextNode !== null) {
            currNode = currNode.nextNode;
        }
        return currNode.value;
    }
    at(index) {
        let currNode = this.head;
        while (index > 0 && currNode !== null) {
            currNode = currNode.nextNode;
            index--;
        }
        return currNode ? currNode.value : undefined;
    }
    pop() {
        if (this.head === null) return undefined;
        const popedNode = this.head;
        this.head = this.head.nextNode;
        return popedNode.value;
    }
}
class Node {
    constructor(value = null, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode;
    }
}

//  let size = this.size() - 1;
//  while (size > 0 && currNode !== null) {
//      currNode = currNode.nextNode;
//      index--;
//  }
//  currNode.nextNode = null;
