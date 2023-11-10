class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertAtHead(value) {
    let node = new Node(value);
    let temp = this.head;

    if (temp == null) {
      this.head = node;
    } else {
      node.next = temp;
      this.head = node;
    }
  }

  print() {
    let temp = this.head;

    while (temp) {
      console.log(temp.data);
      temp = temp.next;
    }
  }

  insertAtTail(data) {
    let node = new Node(data);
    let temp = this.head;

    if (temp == null) {
      this.head = node;
    } else {
      while (temp.next != null) {
        temp = temp.next;
      }
      temp.next = node;
    }
  }

  marge(list) {
    let temp = this.head;

    while (temp.next != null) {
      temp = temp.next;
    }
    temp.next = list.head;
  }
}

let list = new LinkedList();
list.insertAtHead(10);
list.insertAtHead(5);
list.insertAtHead(1);
list.insertAtTail(20);
list.insertAtTail(30);

let list2 = new LinkedList();
list2.insertAtHead(4);
list2.insertAtTail(100);
list.marge(list2);

list.print();
// console.log(list);
