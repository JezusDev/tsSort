export class NumbersCollection {
  data: number[];

  constructor(data: number[]) {
    this.data = data;
  }

  compare(currentIndex: number, nextIndex: number): boolean {
    return this.data[currentIndex] > this.data[nextIndex];
  }

  swap(currentIndex: number, nextIndex: number): void {
    if (this.compare(currentIndex, nextIndex)) {
      const temp = this.data[currentIndex];
      this.data[currentIndex] = this.data[nextIndex];
      this.data[nextIndex] = temp;
    }
  }
  get length(): number {
    return this.data.length;
  }
}
