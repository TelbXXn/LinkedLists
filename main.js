class Node {
  constructor(value) {
    this.value = value;
    this.nextNode = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;

  }

  append(value) {
    if (this.head === null) {
      
      this.head = new Node(value);
    } else {
      let current = this.head;
      while (current.nextNode !== null) {
        current = current.nextNode;
      }
      current.nextNode = new Node(value);

    }
  }

  prepend(value) {
    if (this.head === null) {
      
      this.head = new Node(value);
    } else {
      let current = new Node(value);
      current.nextNode = this.head;
      this.head = current;

      
    }
  }

  size() {
    let count = 0;
    let current = this.head;

    while (current !== null) {
      count++;
      current = current.nextNode;
      }

      return count;
  }

  tail() {
    if (this.head === null) {
      return null;
    }

    let current = this.head;
    while (current.nextNode !== null) {
      current = current.nextNode;
    }
    return current;
  }

  at(index) {
    if (index < 0) {
      return null;
    }

    let current = this.head;
    
    for (let i = 0; i < index; i++) {
      current = current.nextNode;
    }
    return current;


  }

  pop() {
    if (this.head === null) return;

    if (this.head.nextNode === null) {
      this.head = null;
      return;
    }

    let current = this.head;
    let prev = null;

    while (current.nextNode !== null) {
      prev = current;
      current = current.nextNode;
    }

    prev.nextNode = null;


  }

  contains(num) {
    if (this.head === null) return false;

    let current = this.head;
    while (current !== null) {
      if (current.value === num) return true;
      else current = current.nextNode;
    } return false;
  }

  find(value) {
    let count = 0;
    let current = this.head;
    while (current !== null) {
      if(current.value === value) return count;
      current = current.nextNode;
      count +=1

    }
    return null;
  }

  toString() {
    let str = "";
    let current = this.head;
    while(current !== null) {
      if (current.nextNode === null) str += `( ${current.value} ) -> null`;
      else {
        str += `( ${current.value} ) -> `}
      current = current.nextNode;
    }
    return str;
  }



}

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.toString());
