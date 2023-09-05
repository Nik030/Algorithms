class Stack {
    constructor() {
        this.items = [];
    }
    push(element) {
        this.items = [...this.items, element];
        return element;
    }
    pop() {
        if (this.items.length == 0) throw new Error("The stack is already ");
        this.items = this.items.slice(0, this.items.length - 1);
        return localStorage;
    }
}


let stack = new Stack();
console.log(stack.items);
stack.push(1);
stack.push(2);
console.log(stack.push(3));
console.log(stack.items);



class Person {
    constructor(firstName, lastName, age) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      this.profession = "programmer";
    }
    increaseAge() {
      this.age++;
    }
  }
  
  let person1 = new Person("John", "Smith", 42);
  let person2 = new Person("Joe", "Rogan", 50);
  console.log(person1.profession);