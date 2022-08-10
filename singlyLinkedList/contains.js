class Node {
    constructor(data) {
        this.data = data;
        this.next = null;              
    }
}
class singlyLinkedList {
    constructor() {
        this.head = null;
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

contains(4);


