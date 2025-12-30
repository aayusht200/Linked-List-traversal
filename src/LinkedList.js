export class LinkedList {
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
    contains(value) {
        let currNode = this.head;
        while (currNode !== null) {
            if (currNode.value === value) return true;
            currNode = currNode.nextNode;
        }
        return false;
    }
    findIndex(value) {
        let currNode = this.head;
        let index = 0;
        while (currNode !== null) {
            if (currNode.value === value) return index;
            index++;
            currNode = currNode.nextNode;
        }
        return -1;
    }
    toString() {
        let currNode = this.head;
        let stringData = '';
        while (currNode !== null) {
            stringData += `(${currNode.value})->`;
            if (currNode.nextNode === null) break;
            currNode = currNode.nextNode;
        }
        return stringData + `null`;
    }
}
class Node {
    constructor(value = null, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode;
    }
}
