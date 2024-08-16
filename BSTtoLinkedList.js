class TreeNode {
    constructor(val = 0, left = null, right = null) {
      this.val = val;
      this.left = left;
      this.right = right;
    }
  }
  
  class ListNode {
    constructor(val = 0, next = null) {
      this.val = val;
      this.next = next;
    }
  }
  
  function convertToLinkedList(bst) {
    let listHead = null;
    let listTail = null;
  
    function inorderTraversal(node) {
      if (node === null) {
        return;
      }
  
      inorderTraversal(node.left);
  
      const newNode = new ListNode(node.val);
      if (listHead === null) {
        listHead = newNode;
        listTail = newNode;
      } else {
        listTail.next = newNode;
        listTail = newNode;
      }
  
      inorderTraversal(node.right);
    }
  
    inorderTraversal(bst);
  
    return listHead;
  }

  const root = new TreeNode(4);
  root.left = new TreeNode(2);
  root.right = new TreeNode(5);
  root.left.left = new TreeNode(1);
  root.left.right = new TreeNode(3);
  
  const linkedListHead = convertToLinkedList(root);
  
  let current = linkedListHead;
  while (current) {
    console.log(current.val + " -> ");
    current = current.next;
  }
  