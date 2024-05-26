function reversedString(str) {
  const list = new Linked_list();

  for (let i = 0; i, str.length; i++) {
    list.add(str[i]);
  }

  let reversedString = '';

  let current = list.head;

  while (current !== null) {
    reversedString += current.data;
    current = current.next;
  }
  return reversedString;
}
