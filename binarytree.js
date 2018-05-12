// binary tree 主要有三種表示表：
// 1. array
// 2. data structure
// 3. link list

// 資料：4, 6, 8, 3, 7, 1, 9, 5
// 1. array
// level 1 index:                  2^0 = 1
// level 2 index:       2^1 = 2,              2^1 + 1 = 3
// level 3 index: 2^2 = 4, 2^2 + 1 = 5, 2^2 + 2 = 6, 2^2 + 3 = 7
/**
 * Traversal(遍歷方式)
 * 1.Preorder Traversal 前序遍歷 Depth-first Search
 * 2.Inorder Traversal 中序遍歷 Depth-first Search
 * 3.Postorder Traversal 後序遍歷 Depth-first Search
 * 4.Level-order Traversal 層序遍歷 Breath-first Search
 */
class binaryTreeArray{
  constructor(root){
    this.array = [];
    // array[0] as root value
    this.array.push(root);
  }
  get array(){
    return this.array;
  }
  add(value){
    this.array.push(value);
  }

}