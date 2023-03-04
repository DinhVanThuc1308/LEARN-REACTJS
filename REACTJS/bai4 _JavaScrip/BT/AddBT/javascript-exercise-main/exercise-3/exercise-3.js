function removeFromArray(array, deleteItem) {
  return array.splice(array, deleteItem);
}

array = removeFromArray([1, 2, 3, 4], 3);

console.log(array);
