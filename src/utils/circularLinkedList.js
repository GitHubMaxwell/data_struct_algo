class CircNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
class CircularLinkedList {
  constructor() {
    // constructor(cycle = null) {
    // you determine the cycle at initialization or its set to 'null' (its per node value)
    // maybe handle it in another method
    // this.cycle = cycle;
    this.hasCycle = false;
    this.length = 0;
    this.cycleNode = null;
    this.head = null;
  }

  append(val) {
    if (!this.head) {
      this.head = new CircNode(val);
      this.length = this.length + 1;
      if (!this.head.end) {
        this.head.end = true;
        // PROBLEM ????
        // may be better to have it in the form of a property thats only found on the end
      }
    } else {
      let current = this.head;
      while (!current.end) {
        // since its cyclic we need another way of identifying what is the end of the LL
        // while the current node doesnt have an "end" key -> iterate
        current = current.next;
      }
      // current.next is the cyclic node so we want to add a node in between it and the
      // swap the cyclic links
      // store cyclic entry point from current in "temp" in order to assign it to the new end node
      let temp = current.next;
      // delete end property from current node
      delete current.end;
      // create new last node
      current.next = new CircNode(val);
      // add 'end' property to new last node
      current.next.end = true;
      // if there's a cyclic entry point on the current node assign it to current.next.next
      if (temp) {
        //   if (this.cycle) {
        // point new node's 'next' to cyclic entry point node
        current.next.next = temp; // pointing at another node not null; //?
      }
      // add length to LL
      this.length = this.length + 1;
      return true;
    }
  }
  addCycle(val) {
    // creates cycle between first node from head that has the search val and the end node
    if (!this.head) return 'No Link List';
    let current = this.head;
    let cyclePoint = null;
    while (!current.end) {
      if (current.val === val) {
        cyclePoint = current;
      }
      current = current.next;
    }

    if (!cyclePoint) {
      return 'Cycle point not found';
    }
    current.next = cyclePoint;
    this.hasCycle = true;
  }
  removeCycle() {
    if (!this.head) return 'No Link List';
    let current = this.head;
    while (!current.end) {
      current = current.next;
    }
    current.next = null;
    this.hasCycle = false;
  }
}
export default CircularLinkedList;
