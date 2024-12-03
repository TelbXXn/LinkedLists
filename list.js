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
  }

