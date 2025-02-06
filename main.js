import { Node } from "/repos/LinkedList/node.js";
import { LinkedList } from "/repos/LinkedList/list.js";

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.toString());