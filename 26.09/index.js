class Tree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  
    add(value) {
      let current = this;
      while (true) {
        if (value < current.value) {
          if (current.left == null) {
            current.left = new Tree(value);
            return;
          } else current = current.left;
        } else {
          if (current.right == null) {
            current.right = new Tree(value);
            return;
          } else current = current.right;
        }
      }
    }
  }
  
  let tree = new Tree(10);
  tree.add(12);
  tree.add(11);
  tree.add(9);
  tree.add(1);
  tree.add(5);
  tree.add(4);
  console.log(tree.left.left.right.left.value)
  