class LinkedList {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
    push(value) {
      let current = this;
      while (current.next != null) {
        current = current.next;
      }
      current.next = new LinkedList(value);
    }
  }
  
  let train = new LinkedList(10);
  train.push(20);
  train.push(30);
  console.log(train.next.next.value);


  removeByIndex(index) {
    if (index < 0 || index > this.length()) {
      console.log("Wrong index");
      let current = this;
    }
    if (index == 0) {
      this.value = this.next.value;
      this.next = this.next.next;
      return;
    }
    let current = this;
    for (let i = 1; i < index; i++) {
      current = current.next;
    }
    current.next = current.next.next;
  }