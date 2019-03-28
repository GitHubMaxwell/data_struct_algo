class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkList {
  constructor() {
    this.head = null;
    this.length = 0;
  }
  append(val) {
    if (!this.head) {
      this.head = new Node(val[0]);
      this.length = this.length + 1;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      for (let i = 1; i < val.length; i++) {
        val[i]; //?
        current.next = new Node(val[i]);
        this.length = this.length + 1;
        current = current.next;
      }
      // current.next = new Node(val);
      // this.length = this.length + 1;
    }
  }
}

let array1 = [
  1,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  1
];
// let array2 = [5,6,4];
// let newLL = new LinkList();
// newLL.append([1]);
// newLL.append(array1);
// console.log(JSON.stringify(newLL));

export default LinkList;
