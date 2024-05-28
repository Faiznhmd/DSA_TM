//Last in First Out

//Push= Push the elment in the stack

//Pop= Pop means Kick the element form the stack

//Peek= Which element in the Stack are present in the Top

//Size= How Many Elements are Present in the Stack

//isEmpty= isEmpty tell the Stack is empty or Not

class Stack {
  constructor() {
    this.stack = [];
  }
  push(element) {
    this.stack.push(element);
  }

  pop() {
    if (this.isEmpty()) {
      return 'The Stack is Empty.';
    }
    return this.stack.pop();
  }

  peek() {
    if (this.isEmpty()) {
      return 'Stack is Empty';
    }
    return this.stack[this.size() - 1];
  }

  isEmpty() {
    this.size() === 0;
  }
  size() {
    this.stack.length;
  }
}
