export function makeListFromArr(arr) {
  if (arr.length === 0) return;

  const list = {};
  list.prev = null;
  let sublist = list;

  for (let i = 0; i < arr.length; i++) {
    let value = arr[i];

    sublist.value = value;

    sublist.next = {};
    sublist.next.prev = sublist;

    sublist = sublist.next;
  }

  sublist.prev.next = null;

  return list;
}
