import { CharactersCollection } from "./CharactersCollection";
import { NumbersCollection } from "./NumbersCollection";
import { Sorter } from "./Sorted";

const sorter = new Sorter(new NumbersCollection([4, -3, 110, 2]));
sorter.sort();

console.log(sorter.collection.data);

const stringSort = new Sorter(new CharactersCollection("AcB"));
stringSort.sort();
console.log(stringSort.collection.data);
