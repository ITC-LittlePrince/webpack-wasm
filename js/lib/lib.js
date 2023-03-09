export class WASM {
  constructor() {
    console.log('Init JS');
    return this.load();
  }

  load() {
    console.log('Load module');
    let wasm = import('../../dist/wasm/index.js');
    return wasm;
  }
}