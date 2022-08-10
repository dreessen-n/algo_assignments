class sLLNode {
    constructor(data) {
        this.data = data;
        this.next = null;              
    }
}
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
    contains(data) {
        let runner=this.head;
        while (runner != null) {
            if (runner.data == data) {
                return true;
            }
            runner=runner.next;
        }
        return false
    }
}

// Create an empty singlyLinkedList
var mySLL = new singlyLinkedList();

// Add some values to the ssl
mySLL.addFront(1);
mySLL.addFront(2);
mySLL.addFront(3);
mySLL.addFront(4);
mySLL.addFront(5);

// Should return true
console.log(mySLL.contains(2));

// Should return true
console.log(mySLL.contains(4));

// Should return false
console.log(mySLL.contains(8));

// Should return false
console.log(mySLL.contains(-2));

// Should return false
console.log(mySLL.contains(13));


