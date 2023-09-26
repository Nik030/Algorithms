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
  
    find(value) {
      let current = this;
      while (current != null) {
        if (value == current.value) return true;
        else if (value < current.value) current = current.left;
        else current = current.right;
      }
      return false;
    }
    remove(value) {
      let current = this;
      if (!this.find())
        throw new Error("We don't have the element you're looking for");
      if (value == current.value)
        throw new Error("You can't remove the root element");
      while (true) {
        if (value < current.value) {
          if (current.left != null && value == current.left.value) {
            current.left = null;
            return;
          } else current = current.left;
        } else {
          if (current.right != null && value == current.right.value) {
            current.right = null;
            return;
          } else current = current.right;
        }
      }
    }
  
    max() {
      let current = this;
      while (current.right != null) {
        current = current.right;
      }
      return current.value;
    }
    min() {
      let current = this;
      while (current.left != null) {
        current = current.left;
      }
      return current.value;
    }
    height(tree) {
      if (tree == null) return 0;
      return 1 + Math.max(this.height(tree.left), this.height(tree.right));
    }
    size(tree) {
      if (tree == null) return 0;
      return 1 + this.size(tree.left) + this.size(tree.right);
    }
    dp(tree) {
      if (tree == null) return;
      console.log(tree.value);
      this.dp(tree.left);
      this.dp(tree.right);
    }
    bp() {
      const result = [];
      const queue = [this];
  
      while (queue.length > 0) {
        const node = queue.shift();
        result.push(node.value);
        if (node.left) {
          queue.push(node.left);
        }
        if (node.right) {
          queue.push(node.right);
        }
      }
      return result;
    }
  }
  
  let tree = new Tree(10);
  tree.add(5);
  tree.add(2);
  tree.add(11);
  tree.add(12);
  tree.add(8);
  tree.add(7);
  tree.add(3);
  tree.add(9);
  tree.add(4);
  
  console.log(tree.bp());