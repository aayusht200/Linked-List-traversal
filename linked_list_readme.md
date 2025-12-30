# Linked List Project

## Overview

This project implements a **singly linked list** in JavaScript using ES6 classes. It demonstrates core linked list operations such as appending, prepending, accessing by index, searching, and converting the list to a string for display.

The project includes:

- `LinkedList` class
- `Node` class
- Core methods for list manipulation
- A test script (`index.js`) with console logs for validation

---

## Features

The `LinkedList` class supports:

- `append(value)` – Adds a node to the end of the list.
- `prepend(value)` – Adds a node to the start of the list.
- `size()` – Returns the number of nodes in the list.
- `head` – Returns the first node (direct access).
- `tail()` – Returns the value of the last node.
- `at(index)` – Returns the value of the node at a given index.
- `pop()` – Removes the head node and returns its value.
- `contains(value)` – Checks if a value exists in the list.
- `findIndex(value)` – Returns the index of the node containing a value or `-1` if not found.
- `toString()` – Returns a string representation of the list: `(value)->(value)->...->null`.

---

## Example Usage

```js
import { LinkedList } from './LinkedList.js';

const list = new LinkedList();

list.append('dog');
list.append('cat');
list.append('parrot');
list.prepend('lion');

console.log(list.toString());
// (lion)->(dog)->(cat)->(parrot)->null

console.log('Size:', list.size()); // 4
console.log('Head value:', list.head.value); // lion
console.log('Tail value:', list.tail()); // parrot

console.log('Contains cat:', list.contains('cat')); // true
console.log('Index of dog:', list.findIndex('dog')); // 1

list.pop();
console.log(list.toString());
// (dog)->(cat)->(parrot)->null
```

---

## Testing

- `index.js` contains simple console tests for all implemented methods.
- Edge cases, such as empty list operations, are covered:
  - `size()` → 0  
  - `pop()` → undefined  
  - `toString()` → null

---

## Project Structure

```
/project-root
  ├─ LinkedList.js        # LinkedList and Node class definitions
  ├─ index.js             # Test script with console logs
  └─ style.css            # Optional styling (if applicable)
```

---

## Notes

- Null is **not part of the list**; it marks the end of the list.
- Traversal logic consistently uses `while (currNode !== null)`.
- The project demonstrates a solid understanding of linked list fundamentals and basic JavaScript class usage.

