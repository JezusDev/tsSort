import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";
import { NumbersCollection } from "./NumbersCollection";
import { Sorter } from "./Sorted";

const sorter = new NumbersCollection([4, -3, 110, 2]);
sorter.sort();

console.log(sorter.data);

const stringSort = new CharactersCollection("AcB");
stringSort.sort();

const list = new LinkedList();
list.add(100);
list.add(-11);
list.add(-3);
list.add(7);
