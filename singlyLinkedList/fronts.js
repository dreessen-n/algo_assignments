// This is the class to create a node and add it's pointer
class sLLNode {
    constructor(data) {
        this.data=data;
        this.next=null;
    }
}

// This is the class to create the singlyLinkedList and methods to alter it.
class singlyLinkedList {
    constructor() {
        this.head = null;
    }
    addFront(data) {
        var new_node = new sLLNode(data); // create new instance of the sLLNode
        // Assign the current head to the next reference of the new_node
        new_node.next = this.head; 
        // Now set the new_node as the head
        this.head = new_node;
        // Could also return just 'this' rather than 'this.head'
        return this.head;
    }
    removeFront() {
        // Need to check if list is empty
        if (this.head != null) {
            // Have to save the node to remove to a temp so we can later remove
            var temp = this.head;
            // Set the head to the next node in the list before removing
            this.head = temp.next;
            // By setting temp to null removes it from the list
            temp = null;
        }
        return this.head;
    }
    frontVal() {
        if (this.head != null) {
            // Return value at the head node
            return this.head.data;
        }
        return this.head
    }
}

// Create the empty singlyLinkedList
var mySLL = new singlyLinkedList();

// Add nodes to the front
mySLL.addFront(18);
mySLL.addFront(5);
mySLL.addFront(73);
// Expect to see values: 73, 5, then 18
console.log(mySLL);

// Remove node from the front
mySLL.removeFront();
// Expect to see head value is 5
console.log(mySLL);

//console.log(mySLL.frontVal());
// Expect to see 5
console.log(mySLL.frontVal());
// Add nodes to the front
mySLL.addFront(18);
// Expect to see 18
console.log(mySLL.frontVal());
