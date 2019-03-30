import LL from '../../utils/linkList';
import cLL from '../../utils/circularLinkedList';

function hasCycle(head) {
  //
  return -1;
}

let newLL = new LL();
newLL.append(2);
newLL.append(2);
newLL.append(2);
// console.log(JSON.stringify(newLL)); //?

let circle = new cLL();
circle.append(1);
circle.append(2);
circle.append(3);
circle.append(4);
circle.addCycle(2);
// circle.head.val; //?
// circle.head.next.val; //?
// circle.head.next.next.val; //?
// circle.head.next.next.next.val; //?
// circle.head.next.next.next.next.val; //?
// circle.head.next.next.next.next.next.val; //?
// console.log(JSON.stringify(circle)); //?

// hasCycle(newLL); //?
