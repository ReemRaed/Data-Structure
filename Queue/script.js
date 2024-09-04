class Queue {
  constructor() {
    this.items = {};
    this.rear = 0;
    this.front = 0;
  }

  enqueue(element) {
    this.items[this.rear] = element;
    this.rear++;
  }
  dequeue() {
    const element = this.items[this.front];
    delete this.items[this.front];
    this.front++;
    return element;
  }
  peek() {
    return this.items[this.front];
  }
  size()
  {
    return Object.getOwnPropertyNames(this.items).length;
  }
  isEmpty()
  {
    return this.rear-this.front===0;
  }
}

const queue=new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.dequeue())

console.log(queue.size())
