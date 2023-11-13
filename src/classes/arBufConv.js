export default class ArrayBufferConverter {
  constructor() {
    this.buffer = undefined;
  }

  load(arrayBuffer) {
    this.buffer = new Uint16Array(arrayBuffer);
  }

  toString() {
    return this.buffer.reduce((acc, item) => acc + String.fromCharCode(item), '');
    // const result = [];
    // for (let i = 0; i <= this.buffer.length; i++) {
    //   result.push(String.fromCharCode(this.buffer[i]));
    // }

    // return result.join('');
  }
}
