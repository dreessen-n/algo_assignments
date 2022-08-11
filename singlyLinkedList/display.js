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
            if (runner.data === data) {
                return true;
            }
            runner=runner.next;
        }
        return false
    }
    length() {
        let runner=this.head;
        let count=0;
        while(runner != null) {
            count += 1;
            runner=runner.next;
        }
        return count;
    }
    display() {
        let runner=this.head;
        let str='';
        while(runner != null) {
            str += runner.data + ', ';
            runner=runner.next;
        }
        console.log(str)
        return str
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

// CONTAINS ASSIGNMENT
//
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

// Should produce length 5
console.log('length: ' + mySLL.length());

// LENGTH ASSIGNMENT
//
// add 2 more values to the mySLL and then console.log; then expect output 7
mySLL.addFront(100);
mySLL.addFront(50);
console.log('length: ' + mySLL.length());

// DISPLAY ASSIGNMENT
//
var mySLL1 = new singlyLinkedList();

// Add 76 to the new sLL
mySLL1.addFront(76);
console.log(mySLL1);

// Add 2
mySLL1.addFront(2);
console.log(mySLL1);

// Display sLL1
mySLL1.display();

// Add 11.31 to sLL1
mySLL1.addFront(11.41);
console.log(mySLL1);

// Display sLL1
mySLL1.display();
