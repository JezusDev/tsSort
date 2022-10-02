import { Sorter, SorterCollection } from "./Sorted";

export class CharactersCollection extends Sorter {
  data: string[];

  constructor(data: string) {
    super();
    this.data = data.split("");
  }

  swap(currentIndex: number, nextIndex: number): void {
    const temp = this.data[currentIndex];
    this.data[currentIndex] = this.data[nextIndex];
    this.data[nextIndex] = temp;
  }

  compare(currentIndex: number, nextIndex: number): boolean {
    return (
      this.data[currentIndex].toLowerCase() > this.data[nextIndex].toLowerCase()
    );
  }

  get length() {
    return this.data.length;
  }
}
