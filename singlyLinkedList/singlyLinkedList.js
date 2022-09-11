class Node {
    constructor(data) {
        this.data=data;
        this.next=null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }
    addFront(val) {
        // Creating a new node object with the value provided let new_node =
        // new Node(val);
        // Checking to see if the current list does not have a head node (if
        // the list is empty.
        // If the list is empty, place the new node as the head
        if (!this.head) = new_node;
        return this;
    }
    // If the list is not empty, assign the head to the next node to the new
    // new node.
    new_node.next = this.head;
    // Then finally assing the new_node to be the new head of the list.
    this.head = new_node;
    return this;
}

// Add Front


