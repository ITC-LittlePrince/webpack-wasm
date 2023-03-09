import { WASM } from '../lib/lib.js';



let wasm = new WASM().then(wasm => {
  wasm.run();
  wasm.greet("Test alert");
})
.catch(error => {
  console.error(error);
});;



if (module.hot) {
  module.hot.accept('../lib/lib.js', () => {
    console.log('WASM module updated');
  });
}




