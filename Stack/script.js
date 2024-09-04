class Stack {
  constructor() {
    this.items = {};
    this.top = -1;
  }

  push(element) {
    this.items[++this.top] = element;
  }
  pop() {
    const element = this.items[this.top];
    delete this.items[this.top];
    this.top--;
    return element;
  }
  peek() {
    return this.items[0];
  }
  size()
  {
    return Object.getOwnPropertyNames(this.items).length;
  }
  isEmpty()
  {
    return this.top===-1;
  }
  print()
  {
   return this.items;
  }
}

const stack=new Stack();
stack.push(1);
stack.push(2);
stack.push(3);

console.log(stack.print())

console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())

console.log(stack.size())
