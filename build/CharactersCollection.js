"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharactersCollection = void 0;
class CharactersCollection {
    constructor(data) {
        this.data = data.split("");
    }
    swap(currentIndex, nextIndex) {
        const temp = this.data[currentIndex];
        this.data[currentIndex] = this.data[nextIndex];
        this.data[nextIndex] = temp;
    }
    compare(currentIndex, nextIndex) {
        return (this.data[currentIndex].toLowerCase() > this.data[nextIndex].toLowerCase());
    }
    get length() {
        return this.data.length;
    }
}
exports.CharactersCollection = CharactersCollection;
