import { NumbersCollection } from "./NumbersCollection";

export interface SorterCollection {
  data: string[] | number[] | string;
  length: number;
  swap(currentIndex: number, nextIndex: number): void;
  compare(currentIndex: number, nextIndex: number): boolean;
}

export class Sorter {
  collection: SorterCollection;

  constructor(arr: SorterCollection) {
    this.collection = arr;
  }

  sort(): void {
    const length = this.collection.length;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.collection.compare(j, j + 1)) {
          this.collection.swap(j, j + 1);
        }
      }
    }
  }
}
