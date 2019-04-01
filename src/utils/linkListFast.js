class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class FastLinkList {
  constructor() {
    this.head = null;
    this.length = 0;
  }
  append(val) {
    let i;
    if (!this.head) {
      this.head = new Node(val[0]);
      this.length = this.length + 1;
      i = 1;
    }
    let current = this.head;
    if (i === undefined) {
      i = 0;
    }
    while (current.next) {
      current = current.next;
    }
    for (i; i < val.length; i++) {
      current.next = new Node(val[i]);
      this.length = this.length + 1;
      current = current.next;
    }
  }
}

export default FastLinkList;
