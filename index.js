function getName(node) {
    return node.name
  }
  
  function headNode(firstNode, collection) {
    return collection[firstNode]
  }
  
  function next(node, collection) {
    let nextNode = node.next
    console.log('next: ', nextNode)
    return collection[nextNode]
  }
  
  function nodeAt(idx, head, collection) {
    let daNode= headNode(head, collection)
  
    for (let i = 0; i < idx; i++) {
      daNode = next(daNode, collection)
    }
  
    return daNode;
  }
  
  function addressAt (idx, head, collection) {
    if (idx === 0) {
      return head
    } else {
      let node = nodeAt(idx - 1, head, collection)
      return node.next
    }
  }
  
  function indexAt (node, collection, head) {
    let currentNode = headNode(head, collection)
    let currentIdx = 0
    console.log(currentNode)
    while (currentNode !== node) {
      currentIdx++
      currentNode = next(currentNode, collection)
    }
    return currentIdx
  }
  
  function insertNodeAt(index, newNodeAddress, linkedList, collection){
    let previousNode = nodeAt(index - 1, linkedList, collection)
    let subsequentNode = nodeAt(index, linkedList, collection)
  
    let previousNodeIdx = indexAt(previousNode, collection, linkedList)
    let subsequentNodeIdx = indexAt(subsequentNode, collection, linkedList)
    let previousNodeAddress = addressAt(previousNode, linkedList, collection)
    let subsequentNodeAddress = addressAt(subsequentNode, linkedList, collection)
    previousNode.next = newNodeAddress
    let newNode = collection[newNodeAddress]
    newNode.next = subsequentNodeAddress
  }
  
  
  function deleteNodeAt(index, linkedList, collection){
    let previousNode;
    let currentNode = headNode(linkedList, collection);
    for(let i = 0; i < index; i++){
       previousNode = currentNode
       currentNode = next(currentNode, collection);
    }
    previousNode.next = currentNode.next
  }