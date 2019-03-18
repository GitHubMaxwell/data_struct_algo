class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }
  append(val) {
    if (!this.head) {
      this.head = new Node(val);
      this.length = this.length + 1;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = new Node(val);
      this.length = this.length + 1;
    }
  }
}

export default LinkedList;
