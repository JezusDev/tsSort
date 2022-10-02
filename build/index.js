"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CharactersCollection_1 = require("./CharactersCollection");
const NumbersCollection_1 = require("./NumbersCollection");
const Sorted_1 = require("./Sorted");
const sorter = new Sorted_1.Sorter(new NumbersCollection_1.NumbersCollection([4, -3, 110, 2]));
sorter.sort();
console.log(sorter.collection.data);
const stringSort = new Sorted_1.Sorter(new CharactersCollection_1.CharactersCollection("AcB"));
stringSort.sort();
console.log(stringSort.collection.data);
