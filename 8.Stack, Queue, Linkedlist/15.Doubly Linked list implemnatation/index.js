function Node(data) {
  this.data = data;
  this.next = null;
  this.prev = null;
}

function doublyLinkedList() {
  this.head = null;
  this.tail = null;
  this.length = 0;
}

//append
doublyLinkedList.prototype.append = function (data) {
  const newNode = new Node(data);

  if (!this.head) {
    this.head = newNode;
    this.tail = newNode;
  } else {
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
  }
  this.length++;
};

//prepend
doublyLinkedList.prototype.prepend = function (data) {
  const newNode = new Node(data);

  if (!this.head) {
    this.head = newNode;
    this.tail = newNode;
  } else {
    newNode.next = this.head;
    this.head.previous = newNode;
    this.head = newNode;
  }
  this.length++;
};

doublyLinkedList.prototype.insertAt = function (index, data) {
  if (index < 0 || index > this.length) {
    return null;
  }
  if (index === 0) {
    return this.prepend(data);
  }
  if (index === this.length) {
    return this.append(data);
  }

  const newNode = new Node(data);
  let currentNode = this.head;
  for (let i = 0; i < index - 1; i++) {
    currentNode = currentNode.next;
  }
  newNode.next = currentNode.next;
  newNode.prev = currentNode;
  currentNode.next.prev = newNode;
  currentNode.next = newNode;
  this.length++;
};

doublyLinkedList.prototype.printAll = function () {
  let current = this.head;
  while (current) {
    console.log(current.data);
    current = current.next;
  }
};
