"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumbersCollection = void 0;
class NumbersCollection {
    constructor(data) {
        this.data = data;
    }
    compare(currentIndex, nextIndex) {
        return this.data[currentIndex] > this.data[nextIndex];
    }
    swap(currentIndex, nextIndex) {
        if (this.compare(currentIndex, nextIndex)) {
            const temp = this.data[currentIndex];
            this.data[currentIndex] = this.data[nextIndex];
            this.data[nextIndex] = temp;
        }
    }
    get length() {
        return this.data.length;
    }
}
exports.NumbersCollection = NumbersCollection;
